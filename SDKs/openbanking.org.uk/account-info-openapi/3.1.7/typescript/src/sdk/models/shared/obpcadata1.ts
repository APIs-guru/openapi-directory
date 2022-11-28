import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ObpcaData1CreditInterestTierBandSetCalculationMethodEnum {
    Compound = "Compound",
    SimpleInterest = "SimpleInterest"
}

export enum ObpcaData1CreditInterestTierBandSetDestinationEnum {
    PayAway = "PayAway",
    SelfCredit = "SelfCredit"
}

export enum ObpcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum {
    PerAcademicTerm = "PerAcademicTerm",
    Daily = "Daily",
    HalfYearly = "HalfYearly",
    Monthly = "Monthly",
    Other = "Other",
    Quarterly = "Quarterly",
    PerStatementDate = "PerStatementDate",
    Weekly = "Weekly",
    Yearly = "Yearly"
}

export enum ObpcaData1CreditInterestTierBandSetTierBandBankInterestRateTypeEnum {
    LinkedBaseRate = "LinkedBaseRate",
    Gross = "Gross",
    Net = "Net",
    Other = "Other"
}

export enum ObpcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum {
    PerAcademicTerm = "PerAcademicTerm",
    Daily = "Daily",
    HalfYearly = "HalfYearly",
    Monthly = "Monthly",
    Other = "Other",
    Quarterly = "Quarterly",
    PerStatementDate = "PerStatementDate",
    Weekly = "Weekly",
    Yearly = "Yearly"
}

export enum ObpcaData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum {
    Tiered = "Tiered",
    Whole = "Whole"
}

export enum ObpcaData1CreditInterestTierBandSetTierBandFixedVariableInterestRateTypeEnum {
    Fixed = "Fixed",
    Variable = "Variable"
}


// ObpcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency
/** 
 * Other application frequencies that are not available in the standard code list
**/
export class ObpcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObpcaData1CreditInterestTierBandSetTierBandOtherBankInterestType
/** 
 * Other interest rate types which are not available in the standard code list
**/
export class ObpcaData1CreditInterestTierBandSetTierBandOtherBankInterestType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObpcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency
/** 
 * Other calculation frequency which is not available in the standard code set.
**/
export class ObpcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObpcaData1CreditInterestTierBandSetTierBand
/** 
 * Tier Band Details
**/
export class ObpcaData1CreditInterestTierBandSetTierBand extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AER" })
  aer: string;

  @SpeakeasyMetadata({ data: "json, name=ApplicationFrequency" })
  applicationFrequency: ObpcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=BankInterestRate" })
  bankInterestRate?: string;

  @SpeakeasyMetadata({ data: "json, name=BankInterestRateType" })
  bankInterestRateType?: ObpcaData1CreditInterestTierBandSetTierBandBankInterestRateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=CalculationFrequency" })
  calculationFrequency?: ObpcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=DepositInterestAppliedCoverage" })
  depositInterestAppliedCoverage?: ObpcaData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum;

  @SpeakeasyMetadata({ data: "json, name=FixedVariableInterestRateType" })
  fixedVariableInterestRateType: ObpcaData1CreditInterestTierBandSetTierBandFixedVariableInterestRateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification?: string;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherApplicationFrequency" })
  otherApplicationFrequency?: ObpcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency;

  @SpeakeasyMetadata({ data: "json, name=OtherBankInterestType" })
  otherBankInterestType?: ObpcaData1CreditInterestTierBandSetTierBandOtherBankInterestType;

  @SpeakeasyMetadata({ data: "json, name=OtherCalculationFrequency" })
  otherCalculationFrequency?: ObpcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency;

  @SpeakeasyMetadata({ data: "json, name=TierValueMaximum" })
  tierValueMaximum?: string;

  @SpeakeasyMetadata({ data: "json, name=TierValueMinimum" })
  tierValueMinimum: string;
}

export enum ObpcaData1CreditInterestTierBandSetTierBandMethodEnum {
    Tiered = "Tiered",
    Whole = "Whole"
}


// ObpcaData1CreditInterestTierBandSet
/** 
 * The group of tiers or bands for which credit interest can be applied.
**/
export class ObpcaData1CreditInterestTierBandSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CalculationMethod" })
  calculationMethod?: ObpcaData1CreditInterestTierBandSetCalculationMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=Destination" })
  destination?: ObpcaData1CreditInterestTierBandSetDestinationEnum;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=TierBand", elemType: ObpcaData1CreditInterestTierBandSetTierBand })
  tierBand: ObpcaData1CreditInterestTierBandSetTierBand[];

  @SpeakeasyMetadata({ data: "json, name=TierBandMethod" })
  tierBandMethod: ObpcaData1CreditInterestTierBandSetTierBandMethodEnum;
}


// ObpcaData1CreditInterest
/** 
 * Details about the interest that may be payable to the PCA account holders
**/
export class ObpcaData1CreditInterest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TierBandSet", elemType: ObpcaData1CreditInterestTierBandSet })
  tierBandSet: ObpcaData1CreditInterestTierBandSet[];
}

export enum ObpcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum {
    AcademicTerm = "AcademicTerm",
    Day = "Day",
    HalfYear = "Half Year",
    Month = "Month",
    Quarter = "Quarter",
    Week = "Week",
    Year = "Year"
}

export enum ObpcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum {
    ServiceCAccountFee = "ServiceCAccountFee",
    ServiceCAccountFeeMonthly = "ServiceCAccountFeeMonthly",
    ServiceCOther = "ServiceCOther",
    Other = "Other"
}

export enum ObpcaData1OtherFeesChargesFeeChargeCapMinMaxTypeEnum {
    Minimum = "Minimum",
    Maximum = "Maximum"
}


// ObpcaData1OtherFeesChargesFeeChargeCapOtherFeeType
/** 
 * Other fee type code which is not available in the standard code set
**/
export class ObpcaData1OtherFeesChargesFeeChargeCapOtherFeeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObpcaData1OtherFeesChargesFeeChargeCap
/** 
 * Details about any caps (maximum charges) that apply to a particular fee/charge
**/
export class ObpcaData1OtherFeesChargesFeeChargeCap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CappingPeriod" })
  cappingPeriod?: ObpcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeCapAmount" })
  feeCapAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" })
  feeCapOccurrence?: number;

  @SpeakeasyMetadata({ data: "json, name=FeeType" })
  feeType: ObpcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=MinMaxType" })
  minMaxType: ObpcaData1OtherFeesChargesFeeChargeCapMinMaxTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObpcaData1OtherFeesChargesFeeChargeCapOtherFeeType })
  otherFeeType?: ObpcaData1OtherFeesChargesFeeChargeCapOtherFeeType[];
}

export enum ObpcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum {
    AccountClosing = "AccountClosing",
    AccountOpening = "AccountOpening",
    AcademicTerm = "AcademicTerm",
    ChargingPeriod = "ChargingPeriod",
    Daily = "Daily",
    PerItem = "PerItem",
    Monthly = "Monthly",
    OnAccountAnniversary = "OnAccountAnniversary",
    Other = "Other",
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

export enum ObpcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum {
    AccountClosing = "AccountClosing",
    AccountOpening = "AccountOpening",
    AcademicTerm = "AcademicTerm",
    ChargingPeriod = "ChargingPeriod",
    Daily = "Daily",
    PerItem = "PerItem",
    Monthly = "Monthly",
    OnAccountAnniversary = "OnAccountAnniversary",
    Other = "Other",
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


// ObpcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange
/** 
 * Range or amounts or rates for which the fee/charge applies
**/
export class ObpcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaximumAmount" })
  maximumAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=MaximumRate" })
  maximumRate?: string;

  @SpeakeasyMetadata({ data: "json, name=MinimumAmount" })
  minimumAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=MinimumRate" })
  minimumRate?: string;
}

export enum ObpcaData1OtherFeesChargesFeeChargeDetailFeeCategoryEnum {
    Other = "Other",
    Servicing = "Servicing"
}

export enum ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum {
    AcademicTerm = "AcademicTerm",
    Day = "Day",
    HalfYear = "Half Year",
    Month = "Month",
    Quarter = "Quarter",
    Week = "Week",
    Year = "Year"
}

export enum ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum {
    ServiceCAccountFee = "ServiceCAccountFee",
    ServiceCAccountFeeMonthly = "ServiceCAccountFeeMonthly",
    ServiceCOther = "ServiceCOther",
    Other = "Other"
}

export enum ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapMinMaxTypeEnum {
    Minimum = "Minimum",
    Maximum = "Maximum"
}


// ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType
/** 
 * Other fee type code which is not available in the standard code set
**/
export class ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap
/** 
 * Details about any caps (maximum charges) that apply to a particular fee/charge
**/
export class ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CappingPeriod" })
  cappingPeriod?: ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeCapAmount" })
  feeCapAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" })
  feeCapOccurrence?: number;

  @SpeakeasyMetadata({ data: "json, name=FeeType" })
  feeType: ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=MinMaxType" })
  minMaxType: ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapMinMaxTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType })
  otherFeeType?: ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType[];
}

export enum ObpcaData1OtherFeesChargesFeeChargeDetailFeeRateTypeEnum {
    LinkedBaseRate = "LinkedBaseRate",
    Gross = "Gross",
    Net = "Net",
    Other = "Other"
}

export enum ObpcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum {
    ServiceCAccountFee = "ServiceCAccountFee",
    ServiceCAccountFeeMonthly = "ServiceCAccountFeeMonthly",
    ServiceCOther = "ServiceCOther",
    Other = "Other"
}


// ObpcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency
/** 
 * Other application frequencies not covered in the standard code list
**/
export class ObpcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObpcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency
/** 
 * Other calculation frequency which is not available in standard code set.
**/
export class ObpcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


export class ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType
/** 
 * Other fee rate type which is not available in the standard code set
**/
export class ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}

export enum ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFeeCategoryEnum {
    Other = "Other",
    Servicing = "Servicing"
}


// ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeType
/** 
 * Other Fee/charge type which is not available in the standard code set
**/
export class ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=FeeCategory" })
  feeCategory: ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFeeCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObpcaData1OtherFeesChargesFeeChargeDetail
/** 
 * Other fees/charges details
**/
export class ObpcaData1OtherFeesChargesFeeChargeDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationFrequency" })
  applicationFrequency: ObpcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=CalculationFrequency" })
  calculationFrequency?: ObpcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeAmount" })
  feeAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeApplicableRange" })
  feeApplicableRange?: ObpcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange;

  @SpeakeasyMetadata({ data: "json, name=FeeCategory" })
  feeCategory: ObpcaData1OtherFeesChargesFeeChargeDetailFeeCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeCap", elemType: ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap })
  feeChargeCap?: ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap[];

  @SpeakeasyMetadata({ data: "json, name=FeeRate" })
  feeRate?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeRateType" })
  feeRateType?: ObpcaData1OtherFeesChargesFeeChargeDetailFeeRateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeType" })
  feeType: ObpcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherApplicationFrequency" })
  otherApplicationFrequency?: ObpcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency;

  @SpeakeasyMetadata({ data: "json, name=OtherCalculationFrequency" })
  otherCalculationFrequency?: ObpcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency;

  @SpeakeasyMetadata({ data: "json, name=OtherFeeCategoryType" })
  otherFeeCategoryType?: ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType;

  @SpeakeasyMetadata({ data: "json, name=OtherFeeRateType" })
  otherFeeRateType?: ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType;

  @SpeakeasyMetadata({ data: "json, name=OtherFeeType" })
  otherFeeType?: ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeType;
}


// ObpcaData1OtherFeesCharges
/** 
 * Contains details of fees and charges which are not associated with either borrowing or features/benefits
**/
export class ObpcaData1OtherFeesCharges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FeeChargeCap", elemType: ObpcaData1OtherFeesChargesFeeChargeCap })
  feeChargeCap?: ObpcaData1OtherFeesChargesFeeChargeCap[];

  @SpeakeasyMetadata({ data: "json, name=FeeChargeDetail", elemType: ObpcaData1OtherFeesChargesFeeChargeDetail })
  feeChargeDetail: ObpcaData1OtherFeesChargesFeeChargeDetail[];
}

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum {
    AcademicTerm = "AcademicTerm",
    Day = "Day",
    HalfYear = "Half Year",
    Month = "Month",
    Quarter = "Quarter",
    Week = "Week",
    Year = "Year"
}

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum {
    ArrangedOverdraft = "ArrangedOverdraft",
    EmergencyBorrowing = "EmergencyBorrowing",
    BorrowingItem = "BorrowingItem",
    OverdraftRenewal = "OverdraftRenewal",
    AnnualReview = "AnnualReview",
    OverdraftSetup = "OverdraftSetup",
    Surcharge = "Surcharge",
    TempOverdraft = "TempOverdraft",
    UnauthorisedBorrowing = "UnauthorisedBorrowing",
    UnauthorisedPaidTrans = "UnauthorisedPaidTrans",
    Other = "Other",
    UnauthorisedUnpaidTrans = "UnauthorisedUnpaidTrans"
}

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum {
    Minimum = "Minimum",
    Maximum = "Maximum"
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType
/** 
 * Other fee type code which is not available in the standard code set
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap
/** 
 * Details about any caps (maximum charges) that apply to a particular fee/charge
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CappingPeriod" })
  cappingPeriod?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeCapAmount" })
  feeCapAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" })
  feeCapOccurrence?: number;

  @SpeakeasyMetadata({ data: "json, name=FeeType" })
  feeType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=MinMaxType" })
  minMaxType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType })
  otherFeeType?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType[];

  @SpeakeasyMetadata({ data: "json, name=OverdraftControlIndicator" })
  overdraftControlIndicator?: boolean;
}

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum {
    AccountClosing = "AccountClosing",
    AccountOpening = "AccountOpening",
    AcademicTerm = "AcademicTerm",
    ChargingPeriod = "ChargingPeriod",
    Daily = "Daily",
    PerItem = "PerItem",
    Monthly = "Monthly",
    OnAccountAnniversary = "OnAccountAnniversary",
    Other = "Other",
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

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum {
    AccountClosing = "AccountClosing",
    AccountOpening = "AccountOpening",
    AcademicTerm = "AcademicTerm",
    ChargingPeriod = "ChargingPeriod",
    Daily = "Daily",
    PerItem = "PerItem",
    Monthly = "Monthly",
    OnAccountAnniversary = "OnAccountAnniversary",
    Other = "Other",
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

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum {
    LinkedBaseRate = "LinkedBaseRate",
    Gross = "Gross",
    Net = "Net",
    Other = "Other"
}

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum {
    ArrangedOverdraft = "ArrangedOverdraft",
    EmergencyBorrowing = "EmergencyBorrowing",
    BorrowingItem = "BorrowingItem",
    OverdraftRenewal = "OverdraftRenewal",
    AnnualReview = "AnnualReview",
    OverdraftSetup = "OverdraftSetup",
    Surcharge = "Surcharge",
    TempOverdraft = "TempOverdraft",
    UnauthorisedBorrowing = "UnauthorisedBorrowing",
    UnauthorisedPaidTrans = "UnauthorisedPaidTrans",
    Other = "Other",
    UnauthorisedUnpaidTrans = "UnauthorisedUnpaidTrans"
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency
/** 
 * Other application frequencies that are not available in the standard code list
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency
/** 
 * Other calculation frequency which is not available in the standard code set.
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType
/** 
 * Other fee rate type code which is not available in the standard code set
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType
/** 
 * Other Fee type which is not available in the standard code set
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum {
    AcademicTerm = "AcademicTerm",
    Day = "Day",
    HalfYear = "Half Year",
    Month = "Month",
    Quarter = "Quarter",
    Week = "Week",
    Year = "Year"
}

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum {
    ArrangedOverdraft = "ArrangedOverdraft",
    EmergencyBorrowing = "EmergencyBorrowing",
    BorrowingItem = "BorrowingItem",
    OverdraftRenewal = "OverdraftRenewal",
    AnnualReview = "AnnualReview",
    OverdraftSetup = "OverdraftSetup",
    Surcharge = "Surcharge",
    TempOverdraft = "TempOverdraft",
    UnauthorisedBorrowing = "UnauthorisedBorrowing",
    UnauthorisedPaidTrans = "UnauthorisedPaidTrans",
    Other = "Other",
    UnauthorisedUnpaidTrans = "UnauthorisedUnpaidTrans"
}

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum {
    Minimum = "Minimum",
    Maximum = "Maximum"
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType
/** 
 * Other fee type code which is not available in the standard code set
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap
/** 
 * Details about any caps (maximum charges) that apply to a particular fee/charge
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CappingPeriod" })
  cappingPeriod?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeCapAmount" })
  feeCapAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" })
  feeCapOccurrence?: number;

  @SpeakeasyMetadata({ data: "json, name=FeeType" })
  feeType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=MinMaxType" })
  minMaxType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType })
  otherFeeType?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType[];

  @SpeakeasyMetadata({ data: "json, name=OverdraftControlIndicator" })
  overdraftControlIndicator?: boolean;
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail
/** 
 * Details about the fees/charges
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationFrequency" })
  applicationFrequency: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=CalculationFrequency" })
  calculationFrequency?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeAmount" })
  feeAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeRate" })
  feeRate?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeRateType" })
  feeRateType?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeType" })
  feeType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=IncrementalBorrowingAmount" })
  incrementalBorrowingAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherApplicationFrequency" })
  otherApplicationFrequency?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency;

  @SpeakeasyMetadata({ data: "json, name=OtherCalculationFrequency" })
  otherCalculationFrequency?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency;

  @SpeakeasyMetadata({ data: "json, name=OtherFeeRateType" })
  otherFeeRateType?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType;

  @SpeakeasyMetadata({ data: "json, name=OtherFeeType" })
  otherFeeType?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType;

  @SpeakeasyMetadata({ data: "json, name=OverdraftControlIndicator" })
  overdraftControlIndicator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=OverdraftFeeChargeCap" })
  overdraftFeeChargeCap?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap;
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges
/** 
 * Overdraft fees and charges details
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OverdraftFeeChargeCap", elemType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap })
  overdraftFeeChargeCap?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap[];

  @SpeakeasyMetadata({ data: "json, name=OverdraftFeeChargeDetail", elemType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail })
  overdraftFeeChargeDetail: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail[];
}

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum {
    AcademicTerm = "AcademicTerm",
    Day = "Day",
    HalfYear = "Half Year",
    Month = "Month",
    Quarter = "Quarter",
    Week = "Week",
    Year = "Year"
}

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum {
    ArrangedOverdraft = "ArrangedOverdraft",
    EmergencyBorrowing = "EmergencyBorrowing",
    BorrowingItem = "BorrowingItem",
    OverdraftRenewal = "OverdraftRenewal",
    AnnualReview = "AnnualReview",
    OverdraftSetup = "OverdraftSetup",
    Surcharge = "Surcharge",
    TempOverdraft = "TempOverdraft",
    UnauthorisedBorrowing = "UnauthorisedBorrowing",
    UnauthorisedPaidTrans = "UnauthorisedPaidTrans",
    Other = "Other",
    UnauthorisedUnpaidTrans = "UnauthorisedUnpaidTrans"
}

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum {
    Minimum = "Minimum",
    Maximum = "Maximum"
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType
/** 
 * Other fee type code which is not available in the standard code set
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap
/** 
 * Details about any caps (maximum charges) that apply to a particular fee/charge
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CappingPeriod" })
  cappingPeriod?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeCapAmount" })
  feeCapAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" })
  feeCapOccurrence?: number;

  @SpeakeasyMetadata({ data: "json, name=FeeType" })
  feeType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=MinMaxType" })
  minMaxType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType })
  otherFeeType?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType[];

  @SpeakeasyMetadata({ data: "json, name=OverdraftControlIndicator" })
  overdraftControlIndicator?: boolean;
}

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum {
    AccountClosing = "AccountClosing",
    AccountOpening = "AccountOpening",
    AcademicTerm = "AcademicTerm",
    ChargingPeriod = "ChargingPeriod",
    Daily = "Daily",
    PerItem = "PerItem",
    Monthly = "Monthly",
    OnAccountAnniversary = "OnAccountAnniversary",
    Other = "Other",
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

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum {
    AccountClosing = "AccountClosing",
    AccountOpening = "AccountOpening",
    AcademicTerm = "AcademicTerm",
    ChargingPeriod = "ChargingPeriod",
    Daily = "Daily",
    PerItem = "PerItem",
    Monthly = "Monthly",
    OnAccountAnniversary = "OnAccountAnniversary",
    Other = "Other",
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

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum {
    LinkedBaseRate = "LinkedBaseRate",
    Gross = "Gross",
    Net = "Net",
    Other = "Other"
}

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum {
    ArrangedOverdraft = "ArrangedOverdraft",
    EmergencyBorrowing = "EmergencyBorrowing",
    BorrowingItem = "BorrowingItem",
    OverdraftRenewal = "OverdraftRenewal",
    AnnualReview = "AnnualReview",
    OverdraftSetup = "OverdraftSetup",
    Surcharge = "Surcharge",
    TempOverdraft = "TempOverdraft",
    UnauthorisedBorrowing = "UnauthorisedBorrowing",
    UnauthorisedPaidTrans = "UnauthorisedPaidTrans",
    Other = "Other",
    UnauthorisedUnpaidTrans = "UnauthorisedUnpaidTrans"
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency
/** 
 * Other application frequencies that are not available in the standard code list
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency
/** 
 * Other calculation frequency which is not available in the standard code set.
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType
/** 
 * Other fee rate type code which is not available in the standard code set
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType
/** 
 * Other Fee type which is not available in the standard code set
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum {
    AcademicTerm = "AcademicTerm",
    Day = "Day",
    HalfYear = "Half Year",
    Month = "Month",
    Quarter = "Quarter",
    Week = "Week",
    Year = "Year"
}

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum {
    ArrangedOverdraft = "ArrangedOverdraft",
    EmergencyBorrowing = "EmergencyBorrowing",
    BorrowingItem = "BorrowingItem",
    OverdraftRenewal = "OverdraftRenewal",
    AnnualReview = "AnnualReview",
    OverdraftSetup = "OverdraftSetup",
    Surcharge = "Surcharge",
    TempOverdraft = "TempOverdraft",
    UnauthorisedBorrowing = "UnauthorisedBorrowing",
    UnauthorisedPaidTrans = "UnauthorisedPaidTrans",
    Other = "Other",
    UnauthorisedUnpaidTrans = "UnauthorisedUnpaidTrans"
}

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum {
    Minimum = "Minimum",
    Maximum = "Maximum"
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType
/** 
 * Other fee type code which is not available in the standard code set
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap
/** 
 * Details about any caps (maximum charges) that apply to a particular fee/charge
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CappingPeriod" })
  cappingPeriod?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeCapAmount" })
  feeCapAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" })
  feeCapOccurrence?: number;

  @SpeakeasyMetadata({ data: "json, name=FeeType" })
  feeType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=MinMaxType" })
  minMaxType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType })
  otherFeeType?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType[];

  @SpeakeasyMetadata({ data: "json, name=OverdraftControlIndicator" })
  overdraftControlIndicator?: boolean;
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail
/** 
 * Details about the fees/charges
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationFrequency" })
  applicationFrequency: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=CalculationFrequency" })
  calculationFrequency?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeAmount" })
  feeAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeRate" })
  feeRate?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeRateType" })
  feeRateType?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeType" })
  feeType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=IncrementalBorrowingAmount" })
  incrementalBorrowingAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherApplicationFrequency" })
  otherApplicationFrequency?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency;

  @SpeakeasyMetadata({ data: "json, name=OtherCalculationFrequency" })
  otherCalculationFrequency?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency;

  @SpeakeasyMetadata({ data: "json, name=OtherFeeRateType" })
  otherFeeRateType?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType;

  @SpeakeasyMetadata({ data: "json, name=OtherFeeType" })
  otherFeeType?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType;

  @SpeakeasyMetadata({ data: "json, name=OverdraftControlIndicator" })
  overdraftControlIndicator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=OverdraftFeeChargeCap" })
  overdraftFeeChargeCap?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap;
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges
/** 
 * Overdraft fees and charges
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OverdraftFeeChargeCap", elemType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap })
  overdraftFeeChargeCap?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap[];

  @SpeakeasyMetadata({ data: "json, name=OverdraftFeeChargeDetail", elemType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail })
  overdraftFeeChargeDetail: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail[];
}

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum {
    Tiered = "Tiered",
    Whole = "Whole"
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBand
/** 
 * Provides overdraft details for a specific tier or band
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBand extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BankGuaranteedIndicator" })
  bankGuaranteedIndicator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EAR" })
  ear?: string;

  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification?: string;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OverdraftFeesCharges", elemType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges })
  overdraftFeesCharges?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges[];

  @SpeakeasyMetadata({ data: "json, name=OverdraftInterestChargingCoverage" })
  overdraftInterestChargingCoverage?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum;

  @SpeakeasyMetadata({ data: "json, name=RepresentativeAPR" })
  representativeApr?: string;

  @SpeakeasyMetadata({ data: "json, name=TierValueMax" })
  tierValueMax?: string;

  @SpeakeasyMetadata({ data: "json, name=TierValueMin" })
  tierValueMin: string;
}

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftTypeEnum {
    Committed = "Committed",
    OnDemand = "OnDemand",
    Other = "Other"
}

export enum ObpcaData1OverdraftOverdraftTierBandSetTierBandMethodEnum {
    Tiered = "Tiered",
    Whole = "Whole",
    Banded = "Banded"
}


// ObpcaData1OverdraftOverdraftTierBandSet
/** 
 * Tier band set details
**/
export class ObpcaData1OverdraftOverdraftTierBandSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthorisedIndicator" })
  authorisedIndicator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=BufferAmount" })
  bufferAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification?: string;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OverdraftFeesCharges", elemType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges })
  overdraftFeesCharges?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges[];

  @SpeakeasyMetadata({ data: "json, name=OverdraftTierBand", elemType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBand })
  overdraftTierBand: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBand[];

  @SpeakeasyMetadata({ data: "json, name=OverdraftType" })
  overdraftType?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=TierBandMethod" })
  tierBandMethod: ObpcaData1OverdraftOverdraftTierBandSetTierBandMethodEnum;
}


// ObpcaData1Overdraft
/** 
 * Details about Overdraft rates, fees & charges
**/
export class ObpcaData1Overdraft extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OverdraftTierBandSet", elemType: ObpcaData1OverdraftOverdraftTierBandSet })
  overdraftTierBandSet: ObpcaData1OverdraftOverdraftTierBandSet[];
}

export enum ObpcaData1ProductDetailsSegmentEnum {
    Basic = "Basic",
    BenefitAndReward = "BenefitAndReward",
    CreditInterest = "CreditInterest",
    Cashback = "Cashback",
    General = "General",
    Graduate = "Graduate",
    Other = "Other",
    Overdraft = "Overdraft",
    Packaged = "Packaged",
    Premium = "Premium",
    Reward = "Reward",
    Student = "Student",
    YoungAdult = "YoungAdult",
    Youth = "Youth"
}


export class ObpcaData1ProductDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MonthlyMaximumCharge" })
  monthlyMaximumCharge?: string;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=Segment" })
  segment?: ObpcaData1ProductDetailsSegmentEnum[];
}


export class ObpcaData1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreditInterest" })
  creditInterest?: ObpcaData1CreditInterest;

  @SpeakeasyMetadata({ data: "json, name=OtherFeesCharges" })
  otherFeesCharges?: ObpcaData1OtherFeesCharges;

  @SpeakeasyMetadata({ data: "json, name=Overdraft" })
  overdraft?: ObpcaData1Overdraft;

  @SpeakeasyMetadata({ data: "json, name=ProductDetails" })
  productDetails?: ObpcaData1ProductDetails;
}
