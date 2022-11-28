import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ObbcaData1CreditInterestTierBandSetCalculationMethodEnum {
    Compound = "Compound",
    SimpleInterest = "SimpleInterest"
}

export enum ObbcaData1CreditInterestTierBandSetDestinationEnum {
    PayAway = "PayAway",
    SelfCredit = "SelfCredit"
}

export enum ObbcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum {
    Daily = "Daily",
    HalfYearly = "HalfYearly",
    Monthly = "Monthly",
    Other = "Other",
    Quarterly = "Quarterly",
    PerStatementDate = "PerStatementDate",
    Weekly = "Weekly",
    Yearly = "Yearly"
}

export enum ObbcaData1CreditInterestTierBandSetTierBandBankInterestRateTypeEnum {
    Gross = "Gross",
    Other = "Other"
}

export enum ObbcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum {
    Daily = "Daily",
    HalfYearly = "HalfYearly",
    Monthly = "Monthly",
    Other = "Other",
    Quarterly = "Quarterly",
    PerStatementDate = "PerStatementDate",
    Weekly = "Weekly",
    Yearly = "Yearly"
}

export enum ObbcaData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum {
    Banded = "Banded",
    Tiered = "Tiered",
    Whole = "Whole"
}

export enum ObbcaData1CreditInterestTierBandSetTierBandFixedVariableInterestRateTypeEnum {
    Fixed = "Fixed",
    Variable = "Variable"
}


// ObbcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency
/** 
 * Other application frequencies that are not available in the standard code list
**/
export class ObbcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObbcaData1CreditInterestTierBandSetTierBandOtherBankInterestType
/** 
 * Other interest rate types which are not available in the standard code list
**/
export class ObbcaData1CreditInterestTierBandSetTierBandOtherBankInterestType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObbcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency
/** 
 * Other calculation frequency which is not available in the standard code set.
**/
export class ObbcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObbcaData1CreditInterestTierBandSetTierBand
/** 
 * Tier Band Details
**/
export class ObbcaData1CreditInterestTierBandSetTierBand extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AER" })
  aer: string;

  @SpeakeasyMetadata({ data: "json, name=ApplicationFrequency" })
  applicationFrequency: ObbcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=BankInterestRate" })
  bankInterestRate?: string;

  @SpeakeasyMetadata({ data: "json, name=BankInterestRateType" })
  bankInterestRateType?: ObbcaData1CreditInterestTierBandSetTierBandBankInterestRateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=CalculationFrequency" })
  calculationFrequency?: ObbcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=DepositInterestAppliedCoverage" })
  depositInterestAppliedCoverage?: ObbcaData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum;

  @SpeakeasyMetadata({ data: "json, name=FixedVariableInterestRateType" })
  fixedVariableInterestRateType: ObbcaData1CreditInterestTierBandSetTierBandFixedVariableInterestRateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification?: string;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherApplicationFrequency" })
  otherApplicationFrequency?: ObbcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency;

  @SpeakeasyMetadata({ data: "json, name=OtherBankInterestType" })
  otherBankInterestType?: ObbcaData1CreditInterestTierBandSetTierBandOtherBankInterestType;

  @SpeakeasyMetadata({ data: "json, name=OtherCalculationFrequency" })
  otherCalculationFrequency?: ObbcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency;

  @SpeakeasyMetadata({ data: "json, name=TierValueMaximum" })
  tierValueMaximum?: string;

  @SpeakeasyMetadata({ data: "json, name=TierValueMinimum" })
  tierValueMinimum: string;
}

export enum ObbcaData1CreditInterestTierBandSetTierBandMethodEnum {
    Banded = "Banded",
    Tiered = "Tiered",
    Whole = "Whole"
}


// ObbcaData1CreditInterestTierBandSet
/** 
 * The group of tiers or bands for which credit interest can be applied.
**/
export class ObbcaData1CreditInterestTierBandSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CalculationMethod" })
  calculationMethod?: ObbcaData1CreditInterestTierBandSetCalculationMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=Destination" })
  destination: ObbcaData1CreditInterestTierBandSetDestinationEnum;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=TierBand", elemType: ObbcaData1CreditInterestTierBandSetTierBand })
  tierBand: ObbcaData1CreditInterestTierBandSetTierBand[];

  @SpeakeasyMetadata({ data: "json, name=TierBandMethod" })
  tierBandMethod: ObbcaData1CreditInterestTierBandSetTierBandMethodEnum;
}


// ObbcaData1CreditInterest
/** 
 * Details about the interest that may be payable to the BCA account holders
**/
export class ObbcaData1CreditInterest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TierBandSet", elemType: ObbcaData1CreditInterestTierBandSet })
  tierBandSet: ObbcaData1CreditInterestTierBandSet[];
}

export enum ObbcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum {
    Day = "Day",
    HalfYear = "Half Year",
    Month = "Month",
    Quarter = "Quarter",
    Week = "Week",
    Year = "Year"
}

export enum ObbcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum {
    Other = "Other",
    ServiceCAccountFee = "ServiceCAccountFee",
    ServiceCAccountFeeMonthly = "ServiceCAccountFeeMonthly",
    ServiceCAccountFeeQuarterly = "ServiceCAccountFeeQuarterly",
    ServiceCFixedTariff = "ServiceCFixedTariff",
    ServiceCBusiDepAccBreakage = "ServiceCBusiDepAccBreakage",
    ServiceCMinimumMonthlyFee = "ServiceCMinimumMonthlyFee",
    ServiceCOther = "ServiceCOther"
}

export enum ObbcaData1OtherFeesChargesFeeChargeCapMinMaxTypeEnum {
    Minimum = "Minimum",
    Maximum = "Maximum"
}


// ObbcaData1OtherFeesChargesFeeChargeCapOtherFeeType
/** 
 * Other fee type code which is not available in the standard code set
**/
export class ObbcaData1OtherFeesChargesFeeChargeCapOtherFeeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObbcaData1OtherFeesChargesFeeChargeCap
/** 
 * Details about any caps (maximum charges) that apply to a particular or group of fee/charge
**/
export class ObbcaData1OtherFeesChargesFeeChargeCap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CappingPeriod" })
  cappingPeriod?: ObbcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeCapAmount" })
  feeCapAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" })
  feeCapOccurrence?: number;

  @SpeakeasyMetadata({ data: "json, name=FeeType" })
  feeType: ObbcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=MinMaxType" })
  minMaxType: ObbcaData1OtherFeesChargesFeeChargeCapMinMaxTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObbcaData1OtherFeesChargesFeeChargeCapOtherFeeType })
  otherFeeType?: ObbcaData1OtherFeesChargesFeeChargeCapOtherFeeType[];
}

export enum ObbcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum {
    OnClosing = "OnClosing",
    OnOpening = "OnOpening",
    ChargingPeriod = "ChargingPeriod",
    Daily = "Daily",
    PerItem = "PerItem",
    Monthly = "Monthly",
    OnAnniversary = "OnAnniversary",
    Other = "Other",
    PerHundredPounds = "PerHundredPounds",
    PerHour = "PerHour",
    PerOccurrence = "PerOccurrence",
    PerSheet = "PerSheet",
    PerTransaction = "PerTransaction",
    PerTransactionAmount = "PerTransactionAmount",
    PerTransactionPercentage = "PerTransactionPercentage",
    Quarterly = "Quarterly",
    SixMonthly = "SixMonthly",
    StatementMonthly = "StatementMonthly",
    Weekly = "Weekly",
    Yearly = "Yearly"
}

export enum ObbcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum {
    OnClosing = "OnClosing",
    OnOpening = "OnOpening",
    ChargingPeriod = "ChargingPeriod",
    Daily = "Daily",
    PerItem = "PerItem",
    Monthly = "Monthly",
    OnAnniversary = "OnAnniversary",
    Other = "Other",
    PerHundredPounds = "PerHundredPounds",
    PerHour = "PerHour",
    PerOccurrence = "PerOccurrence",
    PerSheet = "PerSheet",
    PerTransaction = "PerTransaction",
    PerTransactionAmount = "PerTransactionAmount",
    PerTransactionPercentage = "PerTransactionPercentage",
    Quarterly = "Quarterly",
    SixMonthly = "SixMonthly",
    StatementMonthly = "StatementMonthly",
    Weekly = "Weekly",
    Yearly = "Yearly"
}


// ObbcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange
/** 
 * Range or amounts or rates for which the fee/charge applies
**/
export class ObbcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaximumAmount" })
  maximumAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=MaximumRate" })
  maximumRate?: string;

  @SpeakeasyMetadata({ data: "json, name=MinimumAmount" })
  minimumAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=MinimumRate" })
  minimumRate?: string;
}

export enum ObbcaData1OtherFeesChargesFeeChargeDetailFeeCategoryEnum {
    Other = "Other",
    Servicing = "Servicing"
}

export enum ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum {
    Day = "Day",
    HalfYear = "Half Year",
    Month = "Month",
    Quarter = "Quarter",
    Week = "Week",
    Year = "Year"
}

export enum ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum {
    Other = "Other",
    ServiceCAccountFee = "ServiceCAccountFee",
    ServiceCAccountFeeMonthly = "ServiceCAccountFeeMonthly",
    ServiceCAccountFeeQuarterly = "ServiceCAccountFeeQuarterly",
    ServiceCFixedTariff = "ServiceCFixedTariff",
    ServiceCBusiDepAccBreakage = "ServiceCBusiDepAccBreakage",
    ServiceCMinimumMonthlyFee = "ServiceCMinimumMonthlyFee",
    ServiceCOther = "ServiceCOther"
}

export enum ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapMinMaxTypeEnum {
    Minimum = "Minimum",
    Maximum = "Maximum"
}


// ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType
/** 
 * Other fee type code which is not available in the standard code set
**/
export class ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap
/** 
 * Details about any caps (maximum charges) that apply to a particular or group of fee/charge
**/
export class ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CappingPeriod" })
  cappingPeriod?: ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeCapAmount" })
  feeCapAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" })
  feeCapOccurrence?: number;

  @SpeakeasyMetadata({ data: "json, name=FeeType" })
  feeType: ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=MinMaxType" })
  minMaxType: ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapMinMaxTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType })
  otherFeeType?: ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType[];
}

export enum ObbcaData1OtherFeesChargesFeeChargeDetailFeeRateTypeEnum {
    Gross = "Gross",
    Other = "Other"
}

export enum ObbcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum {
    Other = "Other",
    ServiceCAccountFee = "ServiceCAccountFee",
    ServiceCAccountFeeMonthly = "ServiceCAccountFeeMonthly",
    ServiceCAccountFeeQuarterly = "ServiceCAccountFeeQuarterly",
    ServiceCFixedTariff = "ServiceCFixedTariff",
    ServiceCBusiDepAccBreakage = "ServiceCBusiDepAccBreakage",
    ServiceCMinimumMonthlyFee = "ServiceCMinimumMonthlyFee",
    ServiceCOther = "ServiceCOther"
}


// ObbcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency
/** 
 * Other application frequencies not covered in the standard code list
**/
export class ObbcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObbcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency
/** 
 * Other calculation frequency which is not available in standard code set.
**/
export class ObbcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


export class ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType
/** 
 * Other fee rate type which is not available in the standard code set
**/
export class ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}

export enum ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFeeCategoryEnum {
    Other = "Other",
    Servicing = "Servicing"
}


// ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeType
/** 
 * Other Fee/charge type which is not available in the standard code set
**/
export class ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=FeeCategory" })
  feeCategory: ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFeeCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObbcaData1OtherFeesChargesFeeChargeDetail
/** 
 * Other fees/charges details
**/
export class ObbcaData1OtherFeesChargesFeeChargeDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationFrequency" })
  applicationFrequency: ObbcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=CalculationFrequency" })
  calculationFrequency?: ObbcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeAmount" })
  feeAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeApplicableRange" })
  feeApplicableRange?: ObbcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange;

  @SpeakeasyMetadata({ data: "json, name=FeeCategory" })
  feeCategory: ObbcaData1OtherFeesChargesFeeChargeDetailFeeCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeCap", elemType: ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap })
  feeChargeCap?: ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap[];

  @SpeakeasyMetadata({ data: "json, name=FeeRate" })
  feeRate?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeRateType" })
  feeRateType?: ObbcaData1OtherFeesChargesFeeChargeDetailFeeRateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeType" })
  feeType: ObbcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=NegotiableIndicator" })
  negotiableIndicator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherApplicationFrequency" })
  otherApplicationFrequency?: ObbcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency;

  @SpeakeasyMetadata({ data: "json, name=OtherCalculationFrequency" })
  otherCalculationFrequency?: ObbcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency;

  @SpeakeasyMetadata({ data: "json, name=OtherFeeCategoryType" })
  otherFeeCategoryType?: ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType;

  @SpeakeasyMetadata({ data: "json, name=OtherFeeRateType" })
  otherFeeRateType?: ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType;

  @SpeakeasyMetadata({ data: "json, name=OtherFeeType" })
  otherFeeType?: ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeType;
}


// ObbcaData1OtherFeesChargesOtherTariffType
/** 
 * Other tariff type which is not in the standard list.
**/
export class ObbcaData1OtherFeesChargesOtherTariffType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}

export enum ObbcaData1OtherFeesChargesTariffTypeEnum {
    Electronic = "Electronic",
    Mixed = "Mixed",
    Other = "Other"
}


// ObbcaData1OtherFeesCharges
/** 
 * Contains details of fees and charges which are not associated with either Overdraft or features/benefits
**/
export class ObbcaData1OtherFeesCharges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FeeChargeCap", elemType: ObbcaData1OtherFeesChargesFeeChargeCap })
  feeChargeCap?: ObbcaData1OtherFeesChargesFeeChargeCap[];

  @SpeakeasyMetadata({ data: "json, name=FeeChargeDetail", elemType: ObbcaData1OtherFeesChargesFeeChargeDetail })
  feeChargeDetail: ObbcaData1OtherFeesChargesFeeChargeDetail[];

  @SpeakeasyMetadata({ data: "json, name=OtherTariffType" })
  otherTariffType?: ObbcaData1OtherFeesChargesOtherTariffType;

  @SpeakeasyMetadata({ data: "json, name=TariffName" })
  tariffName?: string;

  @SpeakeasyMetadata({ data: "json, name=TariffType" })
  tariffType?: ObbcaData1OtherFeesChargesTariffTypeEnum;
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum {
    Day = "Day",
    HalfYear = "Half Year",
    Month = "Month",
    Quarter = "Quarter",
    Week = "Week",
    Year = "Year"
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum {
    ArrangedOverdraft = "ArrangedOverdraft",
    AnnualReview = "AnnualReview",
    EmergencyBorrowing = "EmergencyBorrowing",
    BorrowingItem = "BorrowingItem",
    OverdraftRenewal = "OverdraftRenewal",
    OverdraftSetup = "OverdraftSetup",
    Surcharge = "Surcharge",
    TempOverdraft = "TempOverdraft",
    UnauthorisedBorrowing = "UnauthorisedBorrowing",
    UnauthorisedPaidTrans = "UnauthorisedPaidTrans",
    Other = "Other",
    UnauthorisedUnpaidTrans = "UnauthorisedUnpaidTrans"
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum {
    Minimum = "Minimum",
    Maximum = "Maximum"
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType
/** 
 * Other fee type code which is not available in the standard code set
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap
/** 
 * Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CappingPeriod" })
  cappingPeriod?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeCapAmount" })
  feeCapAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" })
  feeCapOccurrence?: number;

  @SpeakeasyMetadata({ data: "json, name=FeeType" })
  feeType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=MinMaxType" })
  minMaxType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType })
  otherFeeType?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType[];
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum {
    OnClosing = "OnClosing",
    OnOpening = "OnOpening",
    ChargingPeriod = "ChargingPeriod",
    Daily = "Daily",
    PerItem = "PerItem",
    Monthly = "Monthly",
    OnAnniversary = "OnAnniversary",
    Other = "Other",
    PerHundredPounds = "PerHundredPounds",
    PerHour = "PerHour",
    PerOccurrence = "PerOccurrence",
    PerSheet = "PerSheet",
    PerTransaction = "PerTransaction",
    PerTransactionAmount = "PerTransactionAmount",
    PerTransactionPercentage = "PerTransactionPercentage",
    Quarterly = "Quarterly",
    SixMonthly = "SixMonthly",
    StatementMonthly = "StatementMonthly",
    Weekly = "Weekly",
    Yearly = "Yearly"
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum {
    OnClosing = "OnClosing",
    OnOpening = "OnOpening",
    ChargingPeriod = "ChargingPeriod",
    Daily = "Daily",
    PerItem = "PerItem",
    Monthly = "Monthly",
    OnAnniversary = "OnAnniversary",
    Other = "Other",
    PerHundredPounds = "PerHundredPounds",
    PerHour = "PerHour",
    PerOccurrence = "PerOccurrence",
    PerSheet = "PerSheet",
    PerTransaction = "PerTransaction",
    PerTransactionAmount = "PerTransactionAmount",
    PerTransactionPercentage = "PerTransactionPercentage",
    Quarterly = "Quarterly",
    SixMonthly = "SixMonthly",
    StatementMonthly = "StatementMonthly",
    Weekly = "Weekly",
    Yearly = "Yearly"
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum {
    Gross = "Gross",
    Other = "Other"
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum {
    ArrangedOverdraft = "ArrangedOverdraft",
    AnnualReview = "AnnualReview",
    EmergencyBorrowing = "EmergencyBorrowing",
    BorrowingItem = "BorrowingItem",
    OverdraftRenewal = "OverdraftRenewal",
    OverdraftSetup = "OverdraftSetup",
    Surcharge = "Surcharge",
    TempOverdraft = "TempOverdraft",
    UnauthorisedBorrowing = "UnauthorisedBorrowing",
    UnauthorisedPaidTrans = "UnauthorisedPaidTrans",
    Other = "Other",
    UnauthorisedUnpaidTrans = "UnauthorisedUnpaidTrans"
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency
/** 
 * Other application frequencies that are not available in the standard code list
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency
/** 
 * Other calculation frequency which is not available in the standard code set.
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType
/** 
 * Other fee rate type code which is not available in the standard code set
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType
/** 
 * Other Fee type which is not available in the standard code set
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum {
    Day = "Day",
    HalfYear = "Half Year",
    Month = "Month",
    Quarter = "Quarter",
    Week = "Week",
    Year = "Year"
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum {
    ArrangedOverdraft = "ArrangedOverdraft",
    AnnualReview = "AnnualReview",
    EmergencyBorrowing = "EmergencyBorrowing",
    BorrowingItem = "BorrowingItem",
    OverdraftRenewal = "OverdraftRenewal",
    OverdraftSetup = "OverdraftSetup",
    Surcharge = "Surcharge",
    TempOverdraft = "TempOverdraft",
    UnauthorisedBorrowing = "UnauthorisedBorrowing",
    UnauthorisedPaidTrans = "UnauthorisedPaidTrans",
    Other = "Other",
    UnauthorisedUnpaidTrans = "UnauthorisedUnpaidTrans"
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum {
    Minimum = "Minimum",
    Maximum = "Maximum"
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType
/** 
 * Other fee type code which is not available in the standard code set
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap
/** 
 * Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CappingPeriod" })
  cappingPeriod?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeCapAmount" })
  feeCapAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" })
  feeCapOccurrence?: number;

  @SpeakeasyMetadata({ data: "json, name=FeeType" })
  feeType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=MinMaxType" })
  minMaxType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType })
  otherFeeType?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType[];
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail
/** 
 * Details about the fees/charges
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationFrequency" })
  applicationFrequency: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=CalculationFrequency" })
  calculationFrequency?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeAmount" })
  feeAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeRate" })
  feeRate?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeRateType" })
  feeRateType?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeType" })
  feeType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=IncrementalBorrowingAmount" })
  incrementalBorrowingAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=NegotiableIndicator" })
  negotiableIndicator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherApplicationFrequency" })
  otherApplicationFrequency?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency;

  @SpeakeasyMetadata({ data: "json, name=OtherCalculationFrequency" })
  otherCalculationFrequency?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency;

  @SpeakeasyMetadata({ data: "json, name=OtherFeeRateType" })
  otherFeeRateType?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType;

  @SpeakeasyMetadata({ data: "json, name=OtherFeeType" })
  otherFeeType?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType;

  @SpeakeasyMetadata({ data: "json, name=OverdraftControlIndicator" })
  overdraftControlIndicator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=OverdraftFeeChargeCap", elemType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap })
  overdraftFeeChargeCap?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap[];
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges
/** 
 * Overdraft fees and charges details
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OverdraftFeeChargeCap", elemType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap })
  overdraftFeeChargeCap?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap[];

  @SpeakeasyMetadata({ data: "json, name=OverdraftFeeChargeDetail", elemType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail })
  overdraftFeeChargeDetail: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail[];
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodEnum {
    Day = "Day",
    HalfYear = "Half Year",
    Month = "Month",
    Quarter = "Quarter",
    Week = "Week",
    Year = "Year"
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum {
    Day = "Day",
    HalfYear = "Half Year",
    Month = "Month",
    Quarter = "Quarter",
    Week = "Week",
    Year = "Year"
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum {
    ArrangedOverdraft = "ArrangedOverdraft",
    AnnualReview = "AnnualReview",
    EmergencyBorrowing = "EmergencyBorrowing",
    BorrowingItem = "BorrowingItem",
    OverdraftRenewal = "OverdraftRenewal",
    OverdraftSetup = "OverdraftSetup",
    Surcharge = "Surcharge",
    TempOverdraft = "TempOverdraft",
    UnauthorisedBorrowing = "UnauthorisedBorrowing",
    UnauthorisedPaidTrans = "UnauthorisedPaidTrans",
    Other = "Other",
    UnauthorisedUnpaidTrans = "UnauthorisedUnpaidTrans"
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum {
    Minimum = "Minimum",
    Maximum = "Maximum"
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType
/** 
 * Other fee type code which is not available in the standard code set
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap
/** 
 * Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CappingPeriod" })
  cappingPeriod?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeCapAmount" })
  feeCapAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" })
  feeCapOccurrence?: number;

  @SpeakeasyMetadata({ data: "json, name=FeeType" })
  feeType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=MinMaxType" })
  minMaxType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType })
  otherFeeType?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType[];
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum {
    OnClosing = "OnClosing",
    OnOpening = "OnOpening",
    ChargingPeriod = "ChargingPeriod",
    Daily = "Daily",
    PerItem = "PerItem",
    Monthly = "Monthly",
    OnAnniversary = "OnAnniversary",
    Other = "Other",
    PerHundredPounds = "PerHundredPounds",
    PerHour = "PerHour",
    PerOccurrence = "PerOccurrence",
    PerSheet = "PerSheet",
    PerTransaction = "PerTransaction",
    PerTransactionAmount = "PerTransactionAmount",
    PerTransactionPercentage = "PerTransactionPercentage",
    Quarterly = "Quarterly",
    SixMonthly = "SixMonthly",
    StatementMonthly = "StatementMonthly",
    Weekly = "Weekly",
    Yearly = "Yearly"
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum {
    OnClosing = "OnClosing",
    OnOpening = "OnOpening",
    ChargingPeriod = "ChargingPeriod",
    Daily = "Daily",
    PerItem = "PerItem",
    Monthly = "Monthly",
    OnAnniversary = "OnAnniversary",
    Other = "Other",
    PerHundredPounds = "PerHundredPounds",
    PerHour = "PerHour",
    PerOccurrence = "PerOccurrence",
    PerSheet = "PerSheet",
    PerTransaction = "PerTransaction",
    PerTransactionAmount = "PerTransactionAmount",
    PerTransactionPercentage = "PerTransactionPercentage",
    Quarterly = "Quarterly",
    SixMonthly = "SixMonthly",
    StatementMonthly = "StatementMonthly",
    Weekly = "Weekly",
    Yearly = "Yearly"
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum {
    Gross = "Gross",
    Other = "Other"
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum {
    ArrangedOverdraft = "ArrangedOverdraft",
    AnnualReview = "AnnualReview",
    EmergencyBorrowing = "EmergencyBorrowing",
    BorrowingItem = "BorrowingItem",
    OverdraftRenewal = "OverdraftRenewal",
    OverdraftSetup = "OverdraftSetup",
    Surcharge = "Surcharge",
    TempOverdraft = "TempOverdraft",
    UnauthorisedBorrowing = "UnauthorisedBorrowing",
    UnauthorisedPaidTrans = "UnauthorisedPaidTrans",
    Other = "Other",
    UnauthorisedUnpaidTrans = "UnauthorisedUnpaidTrans"
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency
/** 
 * Other application frequencies that are not available in the standard code list
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency
/** 
 * Other calculation frequency which is not available in the standard code set.
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType
/** 
 * Other fee rate type code which is not available in the standard code set
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType
/** 
 * Other Fee type which is not available in the standard code set
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum {
    Day = "Day",
    HalfYear = "Half Year",
    Month = "Month",
    Quarter = "Quarter",
    Week = "Week",
    Year = "Year"
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum {
    ArrangedOverdraft = "ArrangedOverdraft",
    AnnualReview = "AnnualReview",
    EmergencyBorrowing = "EmergencyBorrowing",
    BorrowingItem = "BorrowingItem",
    OverdraftRenewal = "OverdraftRenewal",
    OverdraftSetup = "OverdraftSetup",
    Surcharge = "Surcharge",
    TempOverdraft = "TempOverdraft",
    UnauthorisedBorrowing = "UnauthorisedBorrowing",
    UnauthorisedPaidTrans = "UnauthorisedPaidTrans",
    Other = "Other",
    UnauthorisedUnpaidTrans = "UnauthorisedUnpaidTrans"
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum {
    Minimum = "Minimum",
    Maximum = "Maximum"
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType
/** 
 * Other fee type code which is not available in the standard code set
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap
/** 
 * Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CappingPeriod" })
  cappingPeriod?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeCapAmount" })
  feeCapAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" })
  feeCapOccurrence?: number;

  @SpeakeasyMetadata({ data: "json, name=FeeType" })
  feeType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=MinMaxType" })
  minMaxType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType })
  otherFeeType?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType[];
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail
/** 
 * Details about the fees/charges
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationFrequency" })
  applicationFrequency: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=CalculationFrequency" })
  calculationFrequency?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeAmount" })
  feeAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeRate" })
  feeRate?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeRateType" })
  feeRateType?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeType" })
  feeType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=IncrementalBorrowingAmount" })
  incrementalBorrowingAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=NegotiableIndicator" })
  negotiableIndicator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherApplicationFrequency" })
  otherApplicationFrequency?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency;

  @SpeakeasyMetadata({ data: "json, name=OtherCalculationFrequency" })
  otherCalculationFrequency?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency;

  @SpeakeasyMetadata({ data: "json, name=OtherFeeRateType" })
  otherFeeRateType?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType;

  @SpeakeasyMetadata({ data: "json, name=OtherFeeType" })
  otherFeeType?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType;

  @SpeakeasyMetadata({ data: "json, name=OverdraftControlIndicator" })
  overdraftControlIndicator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=OverdraftFeeChargeCap", elemType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap })
  overdraftFeeChargeCap?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap[];
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges
/** 
 * Overdraft fees and charges
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OverdraftFeeChargeCap", elemType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap })
  overdraftFeeChargeCap?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap[];

  @SpeakeasyMetadata({ data: "json, name=OverdraftFeeChargeDetail", elemType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail })
  overdraftFeeChargeDetail: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail[];
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum {
    Banded = "Banded",
    Tiered = "Tiered",
    Whole = "Whole"
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBand
/** 
 * Provides overdraft details for a specific tier or band
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBand extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AgreementLengthMax" })
  agreementLengthMax?: number;

  @SpeakeasyMetadata({ data: "json, name=AgreementLengthMin" })
  agreementLengthMin?: number;

  @SpeakeasyMetadata({ data: "json, name=AgreementPeriod" })
  agreementPeriod?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=BankGuaranteedIndicator" })
  bankGuaranteedIndicator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EAR" })
  ear?: string;

  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification?: string;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OverdraftFeesCharges", elemType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges })
  overdraftFeesCharges?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges[];

  @SpeakeasyMetadata({ data: "json, name=OverdraftInterestChargingCoverage" })
  overdraftInterestChargingCoverage?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum;

  @SpeakeasyMetadata({ data: "json, name=RepresentativeAPR" })
  representativeApr?: string;

  @SpeakeasyMetadata({ data: "json, name=TierValueMax" })
  tierValueMax?: string;

  @SpeakeasyMetadata({ data: "json, name=TierValueMin" })
  tierValueMin: string;
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTypeEnum {
    Committed = "Committed",
    OnDemand = "OnDemand"
}

export enum ObbcaData1OverdraftOverdraftTierBandSetTierBandMethodEnum {
    Banded = "Banded",
    Tiered = "Tiered",
    Whole = "Whole"
}


// ObbcaData1OverdraftOverdraftTierBandSet
/** 
 * Tier band set details
**/
export class ObbcaData1OverdraftOverdraftTierBandSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthorisedIndicator" })
  authorisedIndicator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=BufferAmount" })
  bufferAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification?: string;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OverdraftFeesCharges", elemType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges })
  overdraftFeesCharges?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges[];

  @SpeakeasyMetadata({ data: "json, name=OverdraftTierBand", elemType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBand })
  overdraftTierBand: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBand[];

  @SpeakeasyMetadata({ data: "json, name=OverdraftType" })
  overdraftType?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=TierBandMethod" })
  tierBandMethod: ObbcaData1OverdraftOverdraftTierBandSetTierBandMethodEnum;
}


// ObbcaData1Overdraft
/** 
 * Borrowing details
**/
export class ObbcaData1Overdraft extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OverdraftTierBandSet", elemType: ObbcaData1OverdraftOverdraftTierBandSet })
  overdraftTierBandSet: ObbcaData1OverdraftOverdraftTierBandSet[];
}

export enum ObbcaData1ProductDetailsFeeFreeLengthPeriodEnum {
    Day = "Day",
    HalfYear = "Half Year",
    Month = "Month",
    Quarter = "Quarter",
    Week = "Week",
    Year = "Year"
}

export enum ObbcaData1ProductDetailsSegmentEnum {
    ClientAccount = "ClientAccount",
    Standard = "Standard",
    NonCommercialChaitiesClbSoc = "NonCommercialChaitiesClbSoc",
    NonCommercialPublicAuthGovt = "NonCommercialPublicAuthGovt",
    Religious = "Religious",
    SectorSpecific = "SectorSpecific",
    Startup = "Startup",
    Switcher = "Switcher"
}


export class ObbcaData1ProductDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FeeFreeLength" })
  feeFreeLength?: number;

  @SpeakeasyMetadata({ data: "json, name=FeeFreeLengthPeriod" })
  feeFreeLengthPeriod?: ObbcaData1ProductDetailsFeeFreeLengthPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=Segment" })
  segment?: ObbcaData1ProductDetailsSegmentEnum[];
}


export class ObbcaData1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreditInterest" })
  creditInterest?: ObbcaData1CreditInterest;

  @SpeakeasyMetadata({ data: "json, name=OtherFeesCharges", elemType: ObbcaData1OtherFeesCharges })
  otherFeesCharges?: ObbcaData1OtherFeesCharges[];

  @SpeakeasyMetadata({ data: "json, name=Overdraft" })
  overdraft?: ObbcaData1Overdraft;

  @SpeakeasyMetadata({ data: "json, name=ProductDetails" })
  productDetails?: ObbcaData1ProductDetails;
}
