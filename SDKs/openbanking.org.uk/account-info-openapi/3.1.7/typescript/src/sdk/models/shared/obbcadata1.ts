import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ObbcaData1CreditInterestTierBandSetCalculationMethodEnum {
    Compound = "Compound"
,    SimpleInterest = "SimpleInterest"
}

export enum ObbcaData1CreditInterestTierBandSetDestinationEnum {
    PayAway = "PayAway"
,    SelfCredit = "SelfCredit"
}

export enum ObbcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum {
    Daily = "Daily"
,    HalfYearly = "HalfYearly"
,    Monthly = "Monthly"
,    Other = "Other"
,    Quarterly = "Quarterly"
,    PerStatementDate = "PerStatementDate"
,    Weekly = "Weekly"
,    Yearly = "Yearly"
}

export enum ObbcaData1CreditInterestTierBandSetTierBandBankInterestRateTypeEnum {
    Gross = "Gross"
,    Other = "Other"
}

export enum ObbcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum {
    Daily = "Daily"
,    HalfYearly = "HalfYearly"
,    Monthly = "Monthly"
,    Other = "Other"
,    Quarterly = "Quarterly"
,    PerStatementDate = "PerStatementDate"
,    Weekly = "Weekly"
,    Yearly = "Yearly"
}

export enum ObbcaData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum {
    Banded = "Banded"
,    Tiered = "Tiered"
,    Whole = "Whole"
}

export enum ObbcaData1CreditInterestTierBandSetTierBandFixedVariableInterestRateTypeEnum {
    Fixed = "Fixed"
,    Variable = "Variable"
}


// ObbcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency
/** 
 * Other application frequencies that are not available in the standard code list
**/
export class ObbcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


// ObbcaData1CreditInterestTierBandSetTierBandOtherBankInterestType
/** 
 * Other interest rate types which are not available in the standard code list
**/
export class ObbcaData1CreditInterestTierBandSetTierBandOtherBankInterestType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


// ObbcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency
/** 
 * Other calculation frequency which is not available in the standard code set.
**/
export class ObbcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


// ObbcaData1CreditInterestTierBandSetTierBand
/** 
 * Tier Band Details
**/
export class ObbcaData1CreditInterestTierBandSetTierBand extends SpeakeasyBase {
  @Metadata({ data: "json, name=AER" })
  aer: string;

  @Metadata({ data: "json, name=ApplicationFrequency" })
  applicationFrequency: ObbcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum;

  @Metadata({ data: "json, name=BankInterestRate" })
  bankInterestRate?: string;

  @Metadata({ data: "json, name=BankInterestRateType" })
  bankInterestRateType?: ObbcaData1CreditInterestTierBandSetTierBandBankInterestRateTypeEnum;

  @Metadata({ data: "json, name=CalculationFrequency" })
  calculationFrequency?: ObbcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum;

  @Metadata({ data: "json, name=DepositInterestAppliedCoverage" })
  depositInterestAppliedCoverage?: ObbcaData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum;

  @Metadata({ data: "json, name=FixedVariableInterestRateType" })
  fixedVariableInterestRateType: ObbcaData1CreditInterestTierBandSetTierBandFixedVariableInterestRateTypeEnum;

  @Metadata({ data: "json, name=Identification" })
  identification?: string;

  @Metadata({ data: "json, name=Notes" })
  notes?: string[];

  @Metadata({ data: "json, name=OtherApplicationFrequency" })
  otherApplicationFrequency?: ObbcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency;

  @Metadata({ data: "json, name=OtherBankInterestType" })
  otherBankInterestType?: ObbcaData1CreditInterestTierBandSetTierBandOtherBankInterestType;

  @Metadata({ data: "json, name=OtherCalculationFrequency" })
  otherCalculationFrequency?: ObbcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency;

  @Metadata({ data: "json, name=TierValueMaximum" })
  tierValueMaximum?: string;

  @Metadata({ data: "json, name=TierValueMinimum" })
  tierValueMinimum: string;
}

export enum ObbcaData1CreditInterestTierBandSetTierBandMethodEnum {
    Banded = "Banded"
,    Tiered = "Tiered"
,    Whole = "Whole"
}


// ObbcaData1CreditInterestTierBandSet
/** 
 * The group of tiers or bands for which credit interest can be applied.
**/
export class ObbcaData1CreditInterestTierBandSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=CalculationMethod" })
  calculationMethod?: ObbcaData1CreditInterestTierBandSetCalculationMethodEnum;

  @Metadata({ data: "json, name=Destination" })
  destination: ObbcaData1CreditInterestTierBandSetDestinationEnum;

  @Metadata({ data: "json, name=Notes" })
  notes?: string[];

  @Metadata({ data: "json, name=TierBand", elemType: shared.ObbcaData1CreditInterestTierBandSetTierBand })
  tierBand: ObbcaData1CreditInterestTierBandSetTierBand[];

  @Metadata({ data: "json, name=TierBandMethod" })
  tierBandMethod: ObbcaData1CreditInterestTierBandSetTierBandMethodEnum;
}


// ObbcaData1CreditInterest
/** 
 * Details about the interest that may be payable to the BCA account holders
**/
export class ObbcaData1CreditInterest extends SpeakeasyBase {
  @Metadata({ data: "json, name=TierBandSet", elemType: shared.ObbcaData1CreditInterestTierBandSet })
  tierBandSet: ObbcaData1CreditInterestTierBandSet[];
}

export enum ObbcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum {
    Day = "Day"
,    HalfYear = "Half Year"
,    Month = "Month"
,    Quarter = "Quarter"
,    Week = "Week"
,    Year = "Year"
}

export enum ObbcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum {
    Other = "Other"
,    ServiceCAccountFee = "ServiceCAccountFee"
,    ServiceCAccountFeeMonthly = "ServiceCAccountFeeMonthly"
,    ServiceCAccountFeeQuarterly = "ServiceCAccountFeeQuarterly"
,    ServiceCFixedTariff = "ServiceCFixedTariff"
,    ServiceCBusiDepAccBreakage = "ServiceCBusiDepAccBreakage"
,    ServiceCMinimumMonthlyFee = "ServiceCMinimumMonthlyFee"
,    ServiceCOther = "ServiceCOther"
}

export enum ObbcaData1OtherFeesChargesFeeChargeCapMinMaxTypeEnum {
    Minimum = "Minimum"
,    Maximum = "Maximum"
}


// ObbcaData1OtherFeesChargesFeeChargeCapOtherFeeType
/** 
 * Other fee type code which is not available in the standard code set
**/
export class ObbcaData1OtherFeesChargesFeeChargeCapOtherFeeType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


// ObbcaData1OtherFeesChargesFeeChargeCap
/** 
 * Details about any caps (maximum charges) that apply to a particular or group of fee/charge
**/
export class ObbcaData1OtherFeesChargesFeeChargeCap extends SpeakeasyBase {
  @Metadata({ data: "json, name=CappingPeriod" })
  cappingPeriod?: ObbcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum;

  @Metadata({ data: "json, name=FeeCapAmount" })
  feeCapAmount?: string;

  @Metadata({ data: "json, name=FeeCapOccurrence" })
  feeCapOccurrence?: number;

  @Metadata({ data: "json, name=FeeType" })
  feeType: ObbcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum[];

  @Metadata({ data: "json, name=MinMaxType" })
  minMaxType: ObbcaData1OtherFeesChargesFeeChargeCapMinMaxTypeEnum;

  @Metadata({ data: "json, name=Notes" })
  notes?: string[];

  @Metadata({ data: "json, name=OtherFeeType", elemType: shared.ObbcaData1OtherFeesChargesFeeChargeCapOtherFeeType })
  otherFeeType?: ObbcaData1OtherFeesChargesFeeChargeCapOtherFeeType[];
}

export enum ObbcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum {
    OnClosing = "OnClosing"
,    OnOpening = "OnOpening"
,    ChargingPeriod = "ChargingPeriod"
,    Daily = "Daily"
,    PerItem = "PerItem"
,    Monthly = "Monthly"
,    OnAnniversary = "OnAnniversary"
,    Other = "Other"
,    PerHundredPounds = "PerHundredPounds"
,    PerHour = "PerHour"
,    PerOccurrence = "PerOccurrence"
,    PerSheet = "PerSheet"
,    PerTransaction = "PerTransaction"
,    PerTransactionAmount = "PerTransactionAmount"
,    PerTransactionPercentage = "PerTransactionPercentage"
,    Quarterly = "Quarterly"
,    SixMonthly = "SixMonthly"
,    StatementMonthly = "StatementMonthly"
,    Weekly = "Weekly"
,    Yearly = "Yearly"
}

export enum ObbcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum {
    OnClosing = "OnClosing"
,    OnOpening = "OnOpening"
,    ChargingPeriod = "ChargingPeriod"
,    Daily = "Daily"
,    PerItem = "PerItem"
,    Monthly = "Monthly"
,    OnAnniversary = "OnAnniversary"
,    Other = "Other"
,    PerHundredPounds = "PerHundredPounds"
,    PerHour = "PerHour"
,    PerOccurrence = "PerOccurrence"
,    PerSheet = "PerSheet"
,    PerTransaction = "PerTransaction"
,    PerTransactionAmount = "PerTransactionAmount"
,    PerTransactionPercentage = "PerTransactionPercentage"
,    Quarterly = "Quarterly"
,    SixMonthly = "SixMonthly"
,    StatementMonthly = "StatementMonthly"
,    Weekly = "Weekly"
,    Yearly = "Yearly"
}


// ObbcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange
/** 
 * Range or amounts or rates for which the fee/charge applies
**/
export class ObbcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaximumAmount" })
  maximumAmount?: string;

  @Metadata({ data: "json, name=MaximumRate" })
  maximumRate?: string;

  @Metadata({ data: "json, name=MinimumAmount" })
  minimumAmount?: string;

  @Metadata({ data: "json, name=MinimumRate" })
  minimumRate?: string;
}

export enum ObbcaData1OtherFeesChargesFeeChargeDetailFeeCategoryEnum {
    Other = "Other"
,    Servicing = "Servicing"
}

export enum ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum {
    Day = "Day"
,    HalfYear = "Half Year"
,    Month = "Month"
,    Quarter = "Quarter"
,    Week = "Week"
,    Year = "Year"
}

export enum ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum {
    Other = "Other"
,    ServiceCAccountFee = "ServiceCAccountFee"
,    ServiceCAccountFeeMonthly = "ServiceCAccountFeeMonthly"
,    ServiceCAccountFeeQuarterly = "ServiceCAccountFeeQuarterly"
,    ServiceCFixedTariff = "ServiceCFixedTariff"
,    ServiceCBusiDepAccBreakage = "ServiceCBusiDepAccBreakage"
,    ServiceCMinimumMonthlyFee = "ServiceCMinimumMonthlyFee"
,    ServiceCOther = "ServiceCOther"
}

export enum ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapMinMaxTypeEnum {
    Minimum = "Minimum"
,    Maximum = "Maximum"
}


// ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType
/** 
 * Other fee type code which is not available in the standard code set
**/
export class ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


// ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap
/** 
 * Details about any caps (maximum charges) that apply to a particular or group of fee/charge
**/
export class ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap extends SpeakeasyBase {
  @Metadata({ data: "json, name=CappingPeriod" })
  cappingPeriod?: ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum;

  @Metadata({ data: "json, name=FeeCapAmount" })
  feeCapAmount?: string;

  @Metadata({ data: "json, name=FeeCapOccurrence" })
  feeCapOccurrence?: number;

  @Metadata({ data: "json, name=FeeType" })
  feeType: ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum[];

  @Metadata({ data: "json, name=MinMaxType" })
  minMaxType: ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapMinMaxTypeEnum;

  @Metadata({ data: "json, name=Notes" })
  notes?: string[];

  @Metadata({ data: "json, name=OtherFeeType", elemType: shared.ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType })
  otherFeeType?: ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType[];
}

export enum ObbcaData1OtherFeesChargesFeeChargeDetailFeeRateTypeEnum {
    Gross = "Gross"
,    Other = "Other"
}

export enum ObbcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum {
    Other = "Other"
,    ServiceCAccountFee = "ServiceCAccountFee"
,    ServiceCAccountFeeMonthly = "ServiceCAccountFeeMonthly"
,    ServiceCAccountFeeQuarterly = "ServiceCAccountFeeQuarterly"
,    ServiceCFixedTariff = "ServiceCFixedTariff"
,    ServiceCBusiDepAccBreakage = "ServiceCBusiDepAccBreakage"
,    ServiceCMinimumMonthlyFee = "ServiceCMinimumMonthlyFee"
,    ServiceCOther = "ServiceCOther"
}


// ObbcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency
/** 
 * Other application frequencies not covered in the standard code list
**/
export class ObbcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


// ObbcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency
/** 
 * Other calculation frequency which is not available in standard code set.
**/
export class ObbcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


export class ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


// ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType
/** 
 * Other fee rate type which is not available in the standard code set
**/
export class ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}

export enum ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFeeCategoryEnum {
    Other = "Other"
,    Servicing = "Servicing"
}


// ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeType
/** 
 * Other Fee/charge type which is not available in the standard code set
**/
export class ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=FeeCategory" })
  feeCategory: ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFeeCategoryEnum;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


// ObbcaData1OtherFeesChargesFeeChargeDetail
/** 
 * Other fees/charges details
**/
export class ObbcaData1OtherFeesChargesFeeChargeDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationFrequency" })
  applicationFrequency: ObbcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum;

  @Metadata({ data: "json, name=CalculationFrequency" })
  calculationFrequency?: ObbcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum;

  @Metadata({ data: "json, name=FeeAmount" })
  feeAmount?: string;

  @Metadata({ data: "json, name=FeeApplicableRange" })
  feeApplicableRange?: ObbcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange;

  @Metadata({ data: "json, name=FeeCategory" })
  feeCategory: ObbcaData1OtherFeesChargesFeeChargeDetailFeeCategoryEnum;

  @Metadata({ data: "json, name=FeeChargeCap", elemType: shared.ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap })
  feeChargeCap?: ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap[];

  @Metadata({ data: "json, name=FeeRate" })
  feeRate?: string;

  @Metadata({ data: "json, name=FeeRateType" })
  feeRateType?: ObbcaData1OtherFeesChargesFeeChargeDetailFeeRateTypeEnum;

  @Metadata({ data: "json, name=FeeType" })
  feeType: ObbcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum;

  @Metadata({ data: "json, name=NegotiableIndicator" })
  negotiableIndicator?: boolean;

  @Metadata({ data: "json, name=Notes" })
  notes?: string[];

  @Metadata({ data: "json, name=OtherApplicationFrequency" })
  otherApplicationFrequency?: ObbcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency;

  @Metadata({ data: "json, name=OtherCalculationFrequency" })
  otherCalculationFrequency?: ObbcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency;

  @Metadata({ data: "json, name=OtherFeeCategoryType" })
  otherFeeCategoryType?: ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType;

  @Metadata({ data: "json, name=OtherFeeRateType" })
  otherFeeRateType?: ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType;

  @Metadata({ data: "json, name=OtherFeeType" })
  otherFeeType?: ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeType;
}


// ObbcaData1OtherFeesChargesOtherTariffType
/** 
 * Other tariff type which is not in the standard list.
**/
export class ObbcaData1OtherFeesChargesOtherTariffType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}

export enum ObbcaData1OtherFeesChargesTariffTypeEnum {
    Electronic = "Electronic"
,    Mixed = "Mixed"
,    Other = "Other"
}


// ObbcaData1OtherFeesCharges
/** 
 * Contains details of fees and charges which are not associated with either Overdraft or features/benefits
**/
export class ObbcaData1OtherFeesCharges extends SpeakeasyBase {
  @Metadata({ data: "json, name=FeeChargeCap", elemType: shared.ObbcaData1OtherFeesChargesFeeChargeCap })
  feeChargeCap?: ObbcaData1OtherFeesChargesFeeChargeCap[];

  @Metadata({ data: "json, name=FeeChargeDetail", elemType: shared.ObbcaData1OtherFeesChargesFeeChargeDetail })
  feeChargeDetail: ObbcaData1OtherFeesChargesFeeChargeDetail[];

  @Metadata({ data: "json, name=OtherTariffType" })
  otherTariffType?: ObbcaData1OtherFeesChargesOtherTariffType;

  @Metadata({ data: "json, name=TariffName" })
  tariffName?: string;

  @Metadata({ data: "json, name=TariffType" })
  tariffType?: ObbcaData1OtherFeesChargesTariffTypeEnum;
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum {
    Day = "Day"
,    HalfYear = "Half Year"
,    Month = "Month"
,    Quarter = "Quarter"
,    Week = "Week"
,    Year = "Year"
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum {
    ArrangedOverdraft = "ArrangedOverdraft"
,    AnnualReview = "AnnualReview"
,    EmergencyBorrowing = "EmergencyBorrowing"
,    BorrowingItem = "BorrowingItem"
,    OverdraftRenewal = "OverdraftRenewal"
,    OverdraftSetup = "OverdraftSetup"
,    Surcharge = "Surcharge"
,    TempOverdraft = "TempOverdraft"
,    UnauthorisedBorrowing = "UnauthorisedBorrowing"
,    UnauthorisedPaidTrans = "UnauthorisedPaidTrans"
,    Other = "Other"
,    UnauthorisedUnpaidTrans = "UnauthorisedUnpaidTrans"
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum {
    Minimum = "Minimum"
,    Maximum = "Maximum"
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType
/** 
 * Other fee type code which is not available in the standard code set
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap
/** 
 * Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap extends SpeakeasyBase {
  @Metadata({ data: "json, name=CappingPeriod" })
  cappingPeriod?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum;

  @Metadata({ data: "json, name=FeeCapAmount" })
  feeCapAmount?: string;

  @Metadata({ data: "json, name=FeeCapOccurrence" })
  feeCapOccurrence?: number;

  @Metadata({ data: "json, name=FeeType" })
  feeType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum[];

  @Metadata({ data: "json, name=MinMaxType" })
  minMaxType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum;

  @Metadata({ data: "json, name=Notes" })
  notes?: string[];

  @Metadata({ data: "json, name=OtherFeeType", elemType: shared.ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType })
  otherFeeType?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType[];
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum {
    OnClosing = "OnClosing"
,    OnOpening = "OnOpening"
,    ChargingPeriod = "ChargingPeriod"
,    Daily = "Daily"
,    PerItem = "PerItem"
,    Monthly = "Monthly"
,    OnAnniversary = "OnAnniversary"
,    Other = "Other"
,    PerHundredPounds = "PerHundredPounds"
,    PerHour = "PerHour"
,    PerOccurrence = "PerOccurrence"
,    PerSheet = "PerSheet"
,    PerTransaction = "PerTransaction"
,    PerTransactionAmount = "PerTransactionAmount"
,    PerTransactionPercentage = "PerTransactionPercentage"
,    Quarterly = "Quarterly"
,    SixMonthly = "SixMonthly"
,    StatementMonthly = "StatementMonthly"
,    Weekly = "Weekly"
,    Yearly = "Yearly"
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum {
    OnClosing = "OnClosing"
,    OnOpening = "OnOpening"
,    ChargingPeriod = "ChargingPeriod"
,    Daily = "Daily"
,    PerItem = "PerItem"
,    Monthly = "Monthly"
,    OnAnniversary = "OnAnniversary"
,    Other = "Other"
,    PerHundredPounds = "PerHundredPounds"
,    PerHour = "PerHour"
,    PerOccurrence = "PerOccurrence"
,    PerSheet = "PerSheet"
,    PerTransaction = "PerTransaction"
,    PerTransactionAmount = "PerTransactionAmount"
,    PerTransactionPercentage = "PerTransactionPercentage"
,    Quarterly = "Quarterly"
,    SixMonthly = "SixMonthly"
,    StatementMonthly = "StatementMonthly"
,    Weekly = "Weekly"
,    Yearly = "Yearly"
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum {
    Gross = "Gross"
,    Other = "Other"
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum {
    ArrangedOverdraft = "ArrangedOverdraft"
,    AnnualReview = "AnnualReview"
,    EmergencyBorrowing = "EmergencyBorrowing"
,    BorrowingItem = "BorrowingItem"
,    OverdraftRenewal = "OverdraftRenewal"
,    OverdraftSetup = "OverdraftSetup"
,    Surcharge = "Surcharge"
,    TempOverdraft = "TempOverdraft"
,    UnauthorisedBorrowing = "UnauthorisedBorrowing"
,    UnauthorisedPaidTrans = "UnauthorisedPaidTrans"
,    Other = "Other"
,    UnauthorisedUnpaidTrans = "UnauthorisedUnpaidTrans"
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency
/** 
 * Other application frequencies that are not available in the standard code list
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency
/** 
 * Other calculation frequency which is not available in the standard code set.
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType
/** 
 * Other fee rate type code which is not available in the standard code set
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType
/** 
 * Other Fee type which is not available in the standard code set
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum {
    Day = "Day"
,    HalfYear = "Half Year"
,    Month = "Month"
,    Quarter = "Quarter"
,    Week = "Week"
,    Year = "Year"
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum {
    ArrangedOverdraft = "ArrangedOverdraft"
,    AnnualReview = "AnnualReview"
,    EmergencyBorrowing = "EmergencyBorrowing"
,    BorrowingItem = "BorrowingItem"
,    OverdraftRenewal = "OverdraftRenewal"
,    OverdraftSetup = "OverdraftSetup"
,    Surcharge = "Surcharge"
,    TempOverdraft = "TempOverdraft"
,    UnauthorisedBorrowing = "UnauthorisedBorrowing"
,    UnauthorisedPaidTrans = "UnauthorisedPaidTrans"
,    Other = "Other"
,    UnauthorisedUnpaidTrans = "UnauthorisedUnpaidTrans"
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum {
    Minimum = "Minimum"
,    Maximum = "Maximum"
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType
/** 
 * Other fee type code which is not available in the standard code set
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap
/** 
 * Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap extends SpeakeasyBase {
  @Metadata({ data: "json, name=CappingPeriod" })
  cappingPeriod?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum;

  @Metadata({ data: "json, name=FeeCapAmount" })
  feeCapAmount?: string;

  @Metadata({ data: "json, name=FeeCapOccurrence" })
  feeCapOccurrence?: number;

  @Metadata({ data: "json, name=FeeType" })
  feeType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum[];

  @Metadata({ data: "json, name=MinMaxType" })
  minMaxType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum;

  @Metadata({ data: "json, name=Notes" })
  notes?: string[];

  @Metadata({ data: "json, name=OtherFeeType", elemType: shared.ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType })
  otherFeeType?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType[];
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail
/** 
 * Details about the fees/charges
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationFrequency" })
  applicationFrequency: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum;

  @Metadata({ data: "json, name=CalculationFrequency" })
  calculationFrequency?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum;

  @Metadata({ data: "json, name=FeeAmount" })
  feeAmount?: string;

  @Metadata({ data: "json, name=FeeRate" })
  feeRate?: string;

  @Metadata({ data: "json, name=FeeRateType" })
  feeRateType?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum;

  @Metadata({ data: "json, name=FeeType" })
  feeType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum;

  @Metadata({ data: "json, name=IncrementalBorrowingAmount" })
  incrementalBorrowingAmount?: string;

  @Metadata({ data: "json, name=NegotiableIndicator" })
  negotiableIndicator?: boolean;

  @Metadata({ data: "json, name=Notes" })
  notes?: string[];

  @Metadata({ data: "json, name=OtherApplicationFrequency" })
  otherApplicationFrequency?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency;

  @Metadata({ data: "json, name=OtherCalculationFrequency" })
  otherCalculationFrequency?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency;

  @Metadata({ data: "json, name=OtherFeeRateType" })
  otherFeeRateType?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType;

  @Metadata({ data: "json, name=OtherFeeType" })
  otherFeeType?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType;

  @Metadata({ data: "json, name=OverdraftControlIndicator" })
  overdraftControlIndicator?: boolean;

  @Metadata({ data: "json, name=OverdraftFeeChargeCap", elemType: shared.ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap })
  overdraftFeeChargeCap?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap[];
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges
/** 
 * Overdraft fees and charges details
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges extends SpeakeasyBase {
  @Metadata({ data: "json, name=OverdraftFeeChargeCap", elemType: shared.ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap })
  overdraftFeeChargeCap?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap[];

  @Metadata({ data: "json, name=OverdraftFeeChargeDetail", elemType: shared.ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail })
  overdraftFeeChargeDetail: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail[];
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodEnum {
    Day = "Day"
,    HalfYear = "Half Year"
,    Month = "Month"
,    Quarter = "Quarter"
,    Week = "Week"
,    Year = "Year"
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum {
    Day = "Day"
,    HalfYear = "Half Year"
,    Month = "Month"
,    Quarter = "Quarter"
,    Week = "Week"
,    Year = "Year"
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum {
    ArrangedOverdraft = "ArrangedOverdraft"
,    AnnualReview = "AnnualReview"
,    EmergencyBorrowing = "EmergencyBorrowing"
,    BorrowingItem = "BorrowingItem"
,    OverdraftRenewal = "OverdraftRenewal"
,    OverdraftSetup = "OverdraftSetup"
,    Surcharge = "Surcharge"
,    TempOverdraft = "TempOverdraft"
,    UnauthorisedBorrowing = "UnauthorisedBorrowing"
,    UnauthorisedPaidTrans = "UnauthorisedPaidTrans"
,    Other = "Other"
,    UnauthorisedUnpaidTrans = "UnauthorisedUnpaidTrans"
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum {
    Minimum = "Minimum"
,    Maximum = "Maximum"
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType
/** 
 * Other fee type code which is not available in the standard code set
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap
/** 
 * Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap extends SpeakeasyBase {
  @Metadata({ data: "json, name=CappingPeriod" })
  cappingPeriod?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum;

  @Metadata({ data: "json, name=FeeCapAmount" })
  feeCapAmount?: string;

  @Metadata({ data: "json, name=FeeCapOccurrence" })
  feeCapOccurrence?: number;

  @Metadata({ data: "json, name=FeeType" })
  feeType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum[];

  @Metadata({ data: "json, name=MinMaxType" })
  minMaxType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum;

  @Metadata({ data: "json, name=Notes" })
  notes?: string[];

  @Metadata({ data: "json, name=OtherFeeType", elemType: shared.ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType })
  otherFeeType?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType[];
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum {
    OnClosing = "OnClosing"
,    OnOpening = "OnOpening"
,    ChargingPeriod = "ChargingPeriod"
,    Daily = "Daily"
,    PerItem = "PerItem"
,    Monthly = "Monthly"
,    OnAnniversary = "OnAnniversary"
,    Other = "Other"
,    PerHundredPounds = "PerHundredPounds"
,    PerHour = "PerHour"
,    PerOccurrence = "PerOccurrence"
,    PerSheet = "PerSheet"
,    PerTransaction = "PerTransaction"
,    PerTransactionAmount = "PerTransactionAmount"
,    PerTransactionPercentage = "PerTransactionPercentage"
,    Quarterly = "Quarterly"
,    SixMonthly = "SixMonthly"
,    StatementMonthly = "StatementMonthly"
,    Weekly = "Weekly"
,    Yearly = "Yearly"
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum {
    OnClosing = "OnClosing"
,    OnOpening = "OnOpening"
,    ChargingPeriod = "ChargingPeriod"
,    Daily = "Daily"
,    PerItem = "PerItem"
,    Monthly = "Monthly"
,    OnAnniversary = "OnAnniversary"
,    Other = "Other"
,    PerHundredPounds = "PerHundredPounds"
,    PerHour = "PerHour"
,    PerOccurrence = "PerOccurrence"
,    PerSheet = "PerSheet"
,    PerTransaction = "PerTransaction"
,    PerTransactionAmount = "PerTransactionAmount"
,    PerTransactionPercentage = "PerTransactionPercentage"
,    Quarterly = "Quarterly"
,    SixMonthly = "SixMonthly"
,    StatementMonthly = "StatementMonthly"
,    Weekly = "Weekly"
,    Yearly = "Yearly"
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum {
    Gross = "Gross"
,    Other = "Other"
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum {
    ArrangedOverdraft = "ArrangedOverdraft"
,    AnnualReview = "AnnualReview"
,    EmergencyBorrowing = "EmergencyBorrowing"
,    BorrowingItem = "BorrowingItem"
,    OverdraftRenewal = "OverdraftRenewal"
,    OverdraftSetup = "OverdraftSetup"
,    Surcharge = "Surcharge"
,    TempOverdraft = "TempOverdraft"
,    UnauthorisedBorrowing = "UnauthorisedBorrowing"
,    UnauthorisedPaidTrans = "UnauthorisedPaidTrans"
,    Other = "Other"
,    UnauthorisedUnpaidTrans = "UnauthorisedUnpaidTrans"
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency
/** 
 * Other application frequencies that are not available in the standard code list
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency
/** 
 * Other calculation frequency which is not available in the standard code set.
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType
/** 
 * Other fee rate type code which is not available in the standard code set
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType
/** 
 * Other Fee type which is not available in the standard code set
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum {
    Day = "Day"
,    HalfYear = "Half Year"
,    Month = "Month"
,    Quarter = "Quarter"
,    Week = "Week"
,    Year = "Year"
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum {
    ArrangedOverdraft = "ArrangedOverdraft"
,    AnnualReview = "AnnualReview"
,    EmergencyBorrowing = "EmergencyBorrowing"
,    BorrowingItem = "BorrowingItem"
,    OverdraftRenewal = "OverdraftRenewal"
,    OverdraftSetup = "OverdraftSetup"
,    Surcharge = "Surcharge"
,    TempOverdraft = "TempOverdraft"
,    UnauthorisedBorrowing = "UnauthorisedBorrowing"
,    UnauthorisedPaidTrans = "UnauthorisedPaidTrans"
,    Other = "Other"
,    UnauthorisedUnpaidTrans = "UnauthorisedUnpaidTrans"
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum {
    Minimum = "Minimum"
,    Maximum = "Maximum"
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType
/** 
 * Other fee type code which is not available in the standard code set
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap
/** 
 * Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap extends SpeakeasyBase {
  @Metadata({ data: "json, name=CappingPeriod" })
  cappingPeriod?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum;

  @Metadata({ data: "json, name=FeeCapAmount" })
  feeCapAmount?: string;

  @Metadata({ data: "json, name=FeeCapOccurrence" })
  feeCapOccurrence?: number;

  @Metadata({ data: "json, name=FeeType" })
  feeType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum[];

  @Metadata({ data: "json, name=MinMaxType" })
  minMaxType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum;

  @Metadata({ data: "json, name=Notes" })
  notes?: string[];

  @Metadata({ data: "json, name=OtherFeeType", elemType: shared.ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType })
  otherFeeType?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType[];
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail
/** 
 * Details about the fees/charges
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationFrequency" })
  applicationFrequency: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum;

  @Metadata({ data: "json, name=CalculationFrequency" })
  calculationFrequency?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum;

  @Metadata({ data: "json, name=FeeAmount" })
  feeAmount?: string;

  @Metadata({ data: "json, name=FeeRate" })
  feeRate?: string;

  @Metadata({ data: "json, name=FeeRateType" })
  feeRateType?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum;

  @Metadata({ data: "json, name=FeeType" })
  feeType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum;

  @Metadata({ data: "json, name=IncrementalBorrowingAmount" })
  incrementalBorrowingAmount?: string;

  @Metadata({ data: "json, name=NegotiableIndicator" })
  negotiableIndicator?: boolean;

  @Metadata({ data: "json, name=Notes" })
  notes?: string[];

  @Metadata({ data: "json, name=OtherApplicationFrequency" })
  otherApplicationFrequency?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency;

  @Metadata({ data: "json, name=OtherCalculationFrequency" })
  otherCalculationFrequency?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency;

  @Metadata({ data: "json, name=OtherFeeRateType" })
  otherFeeRateType?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType;

  @Metadata({ data: "json, name=OtherFeeType" })
  otherFeeType?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType;

  @Metadata({ data: "json, name=OverdraftControlIndicator" })
  overdraftControlIndicator?: boolean;

  @Metadata({ data: "json, name=OverdraftFeeChargeCap", elemType: shared.ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap })
  overdraftFeeChargeCap?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap[];
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges
/** 
 * Overdraft fees and charges
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges extends SpeakeasyBase {
  @Metadata({ data: "json, name=OverdraftFeeChargeCap", elemType: shared.ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap })
  overdraftFeeChargeCap?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap[];

  @Metadata({ data: "json, name=OverdraftFeeChargeDetail", elemType: shared.ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail })
  overdraftFeeChargeDetail: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail[];
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum {
    Banded = "Banded"
,    Tiered = "Tiered"
,    Whole = "Whole"
}


// ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBand
/** 
 * Provides overdraft details for a specific tier or band
**/
export class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBand extends SpeakeasyBase {
  @Metadata({ data: "json, name=AgreementLengthMax" })
  agreementLengthMax?: number;

  @Metadata({ data: "json, name=AgreementLengthMin" })
  agreementLengthMin?: number;

  @Metadata({ data: "json, name=AgreementPeriod" })
  agreementPeriod?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodEnum;

  @Metadata({ data: "json, name=BankGuaranteedIndicator" })
  bankGuaranteedIndicator?: boolean;

  @Metadata({ data: "json, name=EAR" })
  ear?: string;

  @Metadata({ data: "json, name=Identification" })
  identification?: string;

  @Metadata({ data: "json, name=Notes" })
  notes?: string[];

  @Metadata({ data: "json, name=OverdraftFeesCharges", elemType: shared.ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges })
  overdraftFeesCharges?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges[];

  @Metadata({ data: "json, name=OverdraftInterestChargingCoverage" })
  overdraftInterestChargingCoverage?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum;

  @Metadata({ data: "json, name=RepresentativeAPR" })
  representativeApr?: string;

  @Metadata({ data: "json, name=TierValueMax" })
  tierValueMax?: string;

  @Metadata({ data: "json, name=TierValueMin" })
  tierValueMin: string;
}

export enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTypeEnum {
    Committed = "Committed"
,    OnDemand = "OnDemand"
}

export enum ObbcaData1OverdraftOverdraftTierBandSetTierBandMethodEnum {
    Banded = "Banded"
,    Tiered = "Tiered"
,    Whole = "Whole"
}


// ObbcaData1OverdraftOverdraftTierBandSet
/** 
 * Tier band set details
**/
export class ObbcaData1OverdraftOverdraftTierBandSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthorisedIndicator" })
  authorisedIndicator?: boolean;

  @Metadata({ data: "json, name=BufferAmount" })
  bufferAmount?: string;

  @Metadata({ data: "json, name=Identification" })
  identification?: string;

  @Metadata({ data: "json, name=Notes" })
  notes?: string[];

  @Metadata({ data: "json, name=OverdraftFeesCharges", elemType: shared.ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges })
  overdraftFeesCharges?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges[];

  @Metadata({ data: "json, name=OverdraftTierBand", elemType: shared.ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBand })
  overdraftTierBand: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBand[];

  @Metadata({ data: "json, name=OverdraftType" })
  overdraftType?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTypeEnum;

  @Metadata({ data: "json, name=TierBandMethod" })
  tierBandMethod: ObbcaData1OverdraftOverdraftTierBandSetTierBandMethodEnum;
}


// ObbcaData1Overdraft
/** 
 * Borrowing details
**/
export class ObbcaData1Overdraft extends SpeakeasyBase {
  @Metadata({ data: "json, name=Notes" })
  notes?: string[];

  @Metadata({ data: "json, name=OverdraftTierBandSet", elemType: shared.ObbcaData1OverdraftOverdraftTierBandSet })
  overdraftTierBandSet: ObbcaData1OverdraftOverdraftTierBandSet[];
}

export enum ObbcaData1ProductDetailsFeeFreeLengthPeriodEnum {
    Day = "Day"
,    HalfYear = "Half Year"
,    Month = "Month"
,    Quarter = "Quarter"
,    Week = "Week"
,    Year = "Year"
}

export enum ObbcaData1ProductDetailsSegmentEnum {
    ClientAccount = "ClientAccount"
,    Standard = "Standard"
,    NonCommercialChaitiesClbSoc = "NonCommercialChaitiesClbSoc"
,    NonCommercialPublicAuthGovt = "NonCommercialPublicAuthGovt"
,    Religious = "Religious"
,    SectorSpecific = "SectorSpecific"
,    Startup = "Startup"
,    Switcher = "Switcher"
}


export class ObbcaData1ProductDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=FeeFreeLength" })
  feeFreeLength?: number;

  @Metadata({ data: "json, name=FeeFreeLengthPeriod" })
  feeFreeLengthPeriod?: ObbcaData1ProductDetailsFeeFreeLengthPeriodEnum;

  @Metadata({ data: "json, name=Notes" })
  notes?: string[];

  @Metadata({ data: "json, name=Segment" })
  segment?: ObbcaData1ProductDetailsSegmentEnum[];
}


export class ObbcaData1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreditInterest" })
  creditInterest?: ObbcaData1CreditInterest;

  @Metadata({ data: "json, name=OtherFeesCharges", elemType: shared.ObbcaData1OtherFeesCharges })
  otherFeesCharges?: ObbcaData1OtherFeesCharges[];

  @Metadata({ data: "json, name=Overdraft" })
  overdraft?: ObbcaData1Overdraft;

  @Metadata({ data: "json, name=ProductDetails" })
  productDetails?: ObbcaData1ProductDetails;
}
