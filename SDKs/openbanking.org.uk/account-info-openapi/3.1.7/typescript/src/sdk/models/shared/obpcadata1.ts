import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ObpcaData1CreditInterestTierBandSetCalculationMethodEnum {
    Compound = "Compound"
,    SimpleInterest = "SimpleInterest"
}

export enum ObpcaData1CreditInterestTierBandSetDestinationEnum {
    PayAway = "PayAway"
,    SelfCredit = "SelfCredit"
}

export enum ObpcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum {
    PerAcademicTerm = "PerAcademicTerm"
,    Daily = "Daily"
,    HalfYearly = "HalfYearly"
,    Monthly = "Monthly"
,    Other = "Other"
,    Quarterly = "Quarterly"
,    PerStatementDate = "PerStatementDate"
,    Weekly = "Weekly"
,    Yearly = "Yearly"
}

export enum ObpcaData1CreditInterestTierBandSetTierBandBankInterestRateTypeEnum {
    LinkedBaseRate = "LinkedBaseRate"
,    Gross = "Gross"
,    Net = "Net"
,    Other = "Other"
}

export enum ObpcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum {
    PerAcademicTerm = "PerAcademicTerm"
,    Daily = "Daily"
,    HalfYearly = "HalfYearly"
,    Monthly = "Monthly"
,    Other = "Other"
,    Quarterly = "Quarterly"
,    PerStatementDate = "PerStatementDate"
,    Weekly = "Weekly"
,    Yearly = "Yearly"
}

export enum ObpcaData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum {
    Tiered = "Tiered"
,    Whole = "Whole"
}

export enum ObpcaData1CreditInterestTierBandSetTierBandFixedVariableInterestRateTypeEnum {
    Fixed = "Fixed"
,    Variable = "Variable"
}


// ObpcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency
/** 
 * Other application frequencies that are not available in the standard code list
**/
export class ObpcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


// ObpcaData1CreditInterestTierBandSetTierBandOtherBankInterestType
/** 
 * Other interest rate types which are not available in the standard code list
**/
export class ObpcaData1CreditInterestTierBandSetTierBandOtherBankInterestType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


// ObpcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency
/** 
 * Other calculation frequency which is not available in the standard code set.
**/
export class ObpcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


// ObpcaData1CreditInterestTierBandSetTierBand
/** 
 * Tier Band Details
**/
export class ObpcaData1CreditInterestTierBandSetTierBand extends SpeakeasyBase {
  @Metadata({ data: "json, name=AER" })
  aer: string;

  @Metadata({ data: "json, name=ApplicationFrequency" })
  applicationFrequency: ObpcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum;

  @Metadata({ data: "json, name=BankInterestRate" })
  bankInterestRate?: string;

  @Metadata({ data: "json, name=BankInterestRateType" })
  bankInterestRateType?: ObpcaData1CreditInterestTierBandSetTierBandBankInterestRateTypeEnum;

  @Metadata({ data: "json, name=CalculationFrequency" })
  calculationFrequency?: ObpcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum;

  @Metadata({ data: "json, name=DepositInterestAppliedCoverage" })
  depositInterestAppliedCoverage?: ObpcaData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum;

  @Metadata({ data: "json, name=FixedVariableInterestRateType" })
  fixedVariableInterestRateType: ObpcaData1CreditInterestTierBandSetTierBandFixedVariableInterestRateTypeEnum;

  @Metadata({ data: "json, name=Identification" })
  identification?: string;

  @Metadata({ data: "json, name=Notes" })
  notes?: string[];

  @Metadata({ data: "json, name=OtherApplicationFrequency" })
  otherApplicationFrequency?: ObpcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency;

  @Metadata({ data: "json, name=OtherBankInterestType" })
  otherBankInterestType?: ObpcaData1CreditInterestTierBandSetTierBandOtherBankInterestType;

  @Metadata({ data: "json, name=OtherCalculationFrequency" })
  otherCalculationFrequency?: ObpcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency;

  @Metadata({ data: "json, name=TierValueMaximum" })
  tierValueMaximum?: string;

  @Metadata({ data: "json, name=TierValueMinimum" })
  tierValueMinimum: string;
}

export enum ObpcaData1CreditInterestTierBandSetTierBandMethodEnum {
    Tiered = "Tiered"
,    Whole = "Whole"
}


// ObpcaData1CreditInterestTierBandSet
/** 
 * The group of tiers or bands for which credit interest can be applied.
**/
export class ObpcaData1CreditInterestTierBandSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=CalculationMethod" })
  calculationMethod?: ObpcaData1CreditInterestTierBandSetCalculationMethodEnum;

  @Metadata({ data: "json, name=Destination" })
  destination?: ObpcaData1CreditInterestTierBandSetDestinationEnum;

  @Metadata({ data: "json, name=Notes" })
  notes?: string[];

  @Metadata({ data: "json, name=TierBand", elemType: shared.ObpcaData1CreditInterestTierBandSetTierBand })
  tierBand: ObpcaData1CreditInterestTierBandSetTierBand[];

  @Metadata({ data: "json, name=TierBandMethod" })
  tierBandMethod: ObpcaData1CreditInterestTierBandSetTierBandMethodEnum;
}


// ObpcaData1CreditInterest
/** 
 * Details about the interest that may be payable to the PCA account holders
**/
export class ObpcaData1CreditInterest extends SpeakeasyBase {
  @Metadata({ data: "json, name=TierBandSet", elemType: shared.ObpcaData1CreditInterestTierBandSet })
  tierBandSet: ObpcaData1CreditInterestTierBandSet[];
}

export enum ObpcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum {
    AcademicTerm = "AcademicTerm"
,    Day = "Day"
,    HalfYear = "Half Year"
,    Month = "Month"
,    Quarter = "Quarter"
,    Week = "Week"
,    Year = "Year"
}

export enum ObpcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum {
    ServiceCAccountFee = "ServiceCAccountFee"
,    ServiceCAccountFeeMonthly = "ServiceCAccountFeeMonthly"
,    ServiceCOther = "ServiceCOther"
,    Other = "Other"
}

export enum ObpcaData1OtherFeesChargesFeeChargeCapMinMaxTypeEnum {
    Minimum = "Minimum"
,    Maximum = "Maximum"
}


// ObpcaData1OtherFeesChargesFeeChargeCapOtherFeeType
/** 
 * Other fee type code which is not available in the standard code set
**/
export class ObpcaData1OtherFeesChargesFeeChargeCapOtherFeeType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


// ObpcaData1OtherFeesChargesFeeChargeCap
/** 
 * Details about any caps (maximum charges) that apply to a particular fee/charge
**/
export class ObpcaData1OtherFeesChargesFeeChargeCap extends SpeakeasyBase {
  @Metadata({ data: "json, name=CappingPeriod" })
  cappingPeriod?: ObpcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum;

  @Metadata({ data: "json, name=FeeCapAmount" })
  feeCapAmount?: string;

  @Metadata({ data: "json, name=FeeCapOccurrence" })
  feeCapOccurrence?: number;

  @Metadata({ data: "json, name=FeeType" })
  feeType: ObpcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum[];

  @Metadata({ data: "json, name=MinMaxType" })
  minMaxType: ObpcaData1OtherFeesChargesFeeChargeCapMinMaxTypeEnum;

  @Metadata({ data: "json, name=Notes" })
  notes?: string[];

  @Metadata({ data: "json, name=OtherFeeType", elemType: shared.ObpcaData1OtherFeesChargesFeeChargeCapOtherFeeType })
  otherFeeType?: ObpcaData1OtherFeesChargesFeeChargeCapOtherFeeType[];
}

export enum ObpcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum {
    AccountClosing = "AccountClosing"
,    AccountOpening = "AccountOpening"
,    AcademicTerm = "AcademicTerm"
,    ChargingPeriod = "ChargingPeriod"
,    Daily = "Daily"
,    PerItem = "PerItem"
,    Monthly = "Monthly"
,    OnAccountAnniversary = "OnAccountAnniversary"
,    Other = "Other"
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

export enum ObpcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum {
    AccountClosing = "AccountClosing"
,    AccountOpening = "AccountOpening"
,    AcademicTerm = "AcademicTerm"
,    ChargingPeriod = "ChargingPeriod"
,    Daily = "Daily"
,    PerItem = "PerItem"
,    Monthly = "Monthly"
,    OnAccountAnniversary = "OnAccountAnniversary"
,    Other = "Other"
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


// ObpcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange
/** 
 * Range or amounts or rates for which the fee/charge applies
**/
export class ObpcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaximumAmount" })
  maximumAmount?: string;

  @Metadata({ data: "json, name=MaximumRate" })
  maximumRate?: string;

  @Metadata({ data: "json, name=MinimumAmount" })
  minimumAmount?: string;

  @Metadata({ data: "json, name=MinimumRate" })
  minimumRate?: string;
}

export enum ObpcaData1OtherFeesChargesFeeChargeDetailFeeCategoryEnum {
    Other = "Other"
,    Servicing = "Servicing"
}

export enum ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum {
    AcademicTerm = "AcademicTerm"
,    Day = "Day"
,    HalfYear = "Half Year"
,    Month = "Month"
,    Quarter = "Quarter"
,    Week = "Week"
,    Year = "Year"
}

export enum ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum {
    ServiceCAccountFee = "ServiceCAccountFee"
,    ServiceCAccountFeeMonthly = "ServiceCAccountFeeMonthly"
,    ServiceCOther = "ServiceCOther"
,    Other = "Other"
}

export enum ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapMinMaxTypeEnum {
    Minimum = "Minimum"
,    Maximum = "Maximum"
}


// ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType
/** 
 * Other fee type code which is not available in the standard code set
**/
export class ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


// ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap
/** 
 * Details about any caps (maximum charges) that apply to a particular fee/charge
**/
export class ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap extends SpeakeasyBase {
  @Metadata({ data: "json, name=CappingPeriod" })
  cappingPeriod?: ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum;

  @Metadata({ data: "json, name=FeeCapAmount" })
  feeCapAmount?: string;

  @Metadata({ data: "json, name=FeeCapOccurrence" })
  feeCapOccurrence?: number;

  @Metadata({ data: "json, name=FeeType" })
  feeType: ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum[];

  @Metadata({ data: "json, name=MinMaxType" })
  minMaxType: ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapMinMaxTypeEnum;

  @Metadata({ data: "json, name=Notes" })
  notes?: string[];

  @Metadata({ data: "json, name=OtherFeeType", elemType: shared.ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType })
  otherFeeType?: ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType[];
}

export enum ObpcaData1OtherFeesChargesFeeChargeDetailFeeRateTypeEnum {
    LinkedBaseRate = "LinkedBaseRate"
,    Gross = "Gross"
,    Net = "Net"
,    Other = "Other"
}

export enum ObpcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum {
    ServiceCAccountFee = "ServiceCAccountFee"
,    ServiceCAccountFeeMonthly = "ServiceCAccountFeeMonthly"
,    ServiceCOther = "ServiceCOther"
,    Other = "Other"
}


// ObpcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency
/** 
 * Other application frequencies not covered in the standard code list
**/
export class ObpcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


// ObpcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency
/** 
 * Other calculation frequency which is not available in standard code set.
**/
export class ObpcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


export class ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


// ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType
/** 
 * Other fee rate type which is not available in the standard code set
**/
export class ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}

export enum ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFeeCategoryEnum {
    Other = "Other"
,    Servicing = "Servicing"
}


// ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeType
/** 
 * Other Fee/charge type which is not available in the standard code set
**/
export class ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=FeeCategory" })
  feeCategory: ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFeeCategoryEnum;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


// ObpcaData1OtherFeesChargesFeeChargeDetail
/** 
 * Other fees/charges details
**/
export class ObpcaData1OtherFeesChargesFeeChargeDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationFrequency" })
  applicationFrequency: ObpcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum;

  @Metadata({ data: "json, name=CalculationFrequency" })
  calculationFrequency?: ObpcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum;

  @Metadata({ data: "json, name=FeeAmount" })
  feeAmount?: string;

  @Metadata({ data: "json, name=FeeApplicableRange" })
  feeApplicableRange?: ObpcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange;

  @Metadata({ data: "json, name=FeeCategory" })
  feeCategory: ObpcaData1OtherFeesChargesFeeChargeDetailFeeCategoryEnum;

  @Metadata({ data: "json, name=FeeChargeCap", elemType: shared.ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap })
  feeChargeCap?: ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap[];

  @Metadata({ data: "json, name=FeeRate" })
  feeRate?: string;

  @Metadata({ data: "json, name=FeeRateType" })
  feeRateType?: ObpcaData1OtherFeesChargesFeeChargeDetailFeeRateTypeEnum;

  @Metadata({ data: "json, name=FeeType" })
  feeType: ObpcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum;

  @Metadata({ data: "json, name=Notes" })
  notes?: string[];

  @Metadata({ data: "json, name=OtherApplicationFrequency" })
  otherApplicationFrequency?: ObpcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency;

  @Metadata({ data: "json, name=OtherCalculationFrequency" })
  otherCalculationFrequency?: ObpcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency;

  @Metadata({ data: "json, name=OtherFeeCategoryType" })
  otherFeeCategoryType?: ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType;

  @Metadata({ data: "json, name=OtherFeeRateType" })
  otherFeeRateType?: ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType;

  @Metadata({ data: "json, name=OtherFeeType" })
  otherFeeType?: ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeType;
}


// ObpcaData1OtherFeesCharges
/** 
 * Contains details of fees and charges which are not associated with either borrowing or features/benefits
**/
export class ObpcaData1OtherFeesCharges extends SpeakeasyBase {
  @Metadata({ data: "json, name=FeeChargeCap", elemType: shared.ObpcaData1OtherFeesChargesFeeChargeCap })
  feeChargeCap?: ObpcaData1OtherFeesChargesFeeChargeCap[];

  @Metadata({ data: "json, name=FeeChargeDetail", elemType: shared.ObpcaData1OtherFeesChargesFeeChargeDetail })
  feeChargeDetail: ObpcaData1OtherFeesChargesFeeChargeDetail[];
}

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum {
    AcademicTerm = "AcademicTerm"
,    Day = "Day"
,    HalfYear = "Half Year"
,    Month = "Month"
,    Quarter = "Quarter"
,    Week = "Week"
,    Year = "Year"
}

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum {
    ArrangedOverdraft = "ArrangedOverdraft"
,    EmergencyBorrowing = "EmergencyBorrowing"
,    BorrowingItem = "BorrowingItem"
,    OverdraftRenewal = "OverdraftRenewal"
,    AnnualReview = "AnnualReview"
,    OverdraftSetup = "OverdraftSetup"
,    Surcharge = "Surcharge"
,    TempOverdraft = "TempOverdraft"
,    UnauthorisedBorrowing = "UnauthorisedBorrowing"
,    UnauthorisedPaidTrans = "UnauthorisedPaidTrans"
,    Other = "Other"
,    UnauthorisedUnpaidTrans = "UnauthorisedUnpaidTrans"
}

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum {
    Minimum = "Minimum"
,    Maximum = "Maximum"
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType
/** 
 * Other fee type code which is not available in the standard code set
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap
/** 
 * Details about any caps (maximum charges) that apply to a particular fee/charge
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap extends SpeakeasyBase {
  @Metadata({ data: "json, name=CappingPeriod" })
  cappingPeriod?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum;

  @Metadata({ data: "json, name=FeeCapAmount" })
  feeCapAmount?: string;

  @Metadata({ data: "json, name=FeeCapOccurrence" })
  feeCapOccurrence?: number;

  @Metadata({ data: "json, name=FeeType" })
  feeType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum[];

  @Metadata({ data: "json, name=MinMaxType" })
  minMaxType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum;

  @Metadata({ data: "json, name=Notes" })
  notes?: string[];

  @Metadata({ data: "json, name=OtherFeeType", elemType: shared.ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType })
  otherFeeType?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType[];

  @Metadata({ data: "json, name=OverdraftControlIndicator" })
  overdraftControlIndicator?: boolean;
}

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum {
    AccountClosing = "AccountClosing"
,    AccountOpening = "AccountOpening"
,    AcademicTerm = "AcademicTerm"
,    ChargingPeriod = "ChargingPeriod"
,    Daily = "Daily"
,    PerItem = "PerItem"
,    Monthly = "Monthly"
,    OnAccountAnniversary = "OnAccountAnniversary"
,    Other = "Other"
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

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum {
    AccountClosing = "AccountClosing"
,    AccountOpening = "AccountOpening"
,    AcademicTerm = "AcademicTerm"
,    ChargingPeriod = "ChargingPeriod"
,    Daily = "Daily"
,    PerItem = "PerItem"
,    Monthly = "Monthly"
,    OnAccountAnniversary = "OnAccountAnniversary"
,    Other = "Other"
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

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum {
    LinkedBaseRate = "LinkedBaseRate"
,    Gross = "Gross"
,    Net = "Net"
,    Other = "Other"
}

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum {
    ArrangedOverdraft = "ArrangedOverdraft"
,    EmergencyBorrowing = "EmergencyBorrowing"
,    BorrowingItem = "BorrowingItem"
,    OverdraftRenewal = "OverdraftRenewal"
,    AnnualReview = "AnnualReview"
,    OverdraftSetup = "OverdraftSetup"
,    Surcharge = "Surcharge"
,    TempOverdraft = "TempOverdraft"
,    UnauthorisedBorrowing = "UnauthorisedBorrowing"
,    UnauthorisedPaidTrans = "UnauthorisedPaidTrans"
,    Other = "Other"
,    UnauthorisedUnpaidTrans = "UnauthorisedUnpaidTrans"
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency
/** 
 * Other application frequencies that are not available in the standard code list
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency
/** 
 * Other calculation frequency which is not available in the standard code set.
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType
/** 
 * Other fee rate type code which is not available in the standard code set
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType
/** 
 * Other Fee type which is not available in the standard code set
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum {
    AcademicTerm = "AcademicTerm"
,    Day = "Day"
,    HalfYear = "Half Year"
,    Month = "Month"
,    Quarter = "Quarter"
,    Week = "Week"
,    Year = "Year"
}

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum {
    ArrangedOverdraft = "ArrangedOverdraft"
,    EmergencyBorrowing = "EmergencyBorrowing"
,    BorrowingItem = "BorrowingItem"
,    OverdraftRenewal = "OverdraftRenewal"
,    AnnualReview = "AnnualReview"
,    OverdraftSetup = "OverdraftSetup"
,    Surcharge = "Surcharge"
,    TempOverdraft = "TempOverdraft"
,    UnauthorisedBorrowing = "UnauthorisedBorrowing"
,    UnauthorisedPaidTrans = "UnauthorisedPaidTrans"
,    Other = "Other"
,    UnauthorisedUnpaidTrans = "UnauthorisedUnpaidTrans"
}

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum {
    Minimum = "Minimum"
,    Maximum = "Maximum"
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType
/** 
 * Other fee type code which is not available in the standard code set
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap
/** 
 * Details about any caps (maximum charges) that apply to a particular fee/charge
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap extends SpeakeasyBase {
  @Metadata({ data: "json, name=CappingPeriod" })
  cappingPeriod?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum;

  @Metadata({ data: "json, name=FeeCapAmount" })
  feeCapAmount?: string;

  @Metadata({ data: "json, name=FeeCapOccurrence" })
  feeCapOccurrence?: number;

  @Metadata({ data: "json, name=FeeType" })
  feeType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum[];

  @Metadata({ data: "json, name=MinMaxType" })
  minMaxType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum;

  @Metadata({ data: "json, name=Notes" })
  notes?: string[];

  @Metadata({ data: "json, name=OtherFeeType", elemType: shared.ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType })
  otherFeeType?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType[];

  @Metadata({ data: "json, name=OverdraftControlIndicator" })
  overdraftControlIndicator?: boolean;
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail
/** 
 * Details about the fees/charges
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationFrequency" })
  applicationFrequency: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum;

  @Metadata({ data: "json, name=CalculationFrequency" })
  calculationFrequency?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum;

  @Metadata({ data: "json, name=FeeAmount" })
  feeAmount?: string;

  @Metadata({ data: "json, name=FeeRate" })
  feeRate?: string;

  @Metadata({ data: "json, name=FeeRateType" })
  feeRateType?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum;

  @Metadata({ data: "json, name=FeeType" })
  feeType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum;

  @Metadata({ data: "json, name=IncrementalBorrowingAmount" })
  incrementalBorrowingAmount?: string;

  @Metadata({ data: "json, name=Notes" })
  notes?: string[];

  @Metadata({ data: "json, name=OtherApplicationFrequency" })
  otherApplicationFrequency?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency;

  @Metadata({ data: "json, name=OtherCalculationFrequency" })
  otherCalculationFrequency?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency;

  @Metadata({ data: "json, name=OtherFeeRateType" })
  otherFeeRateType?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType;

  @Metadata({ data: "json, name=OtherFeeType" })
  otherFeeType?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType;

  @Metadata({ data: "json, name=OverdraftControlIndicator" })
  overdraftControlIndicator?: boolean;

  @Metadata({ data: "json, name=OverdraftFeeChargeCap" })
  overdraftFeeChargeCap?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap;
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges
/** 
 * Overdraft fees and charges details
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges extends SpeakeasyBase {
  @Metadata({ data: "json, name=OverdraftFeeChargeCap", elemType: shared.ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap })
  overdraftFeeChargeCap?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap[];

  @Metadata({ data: "json, name=OverdraftFeeChargeDetail", elemType: shared.ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail })
  overdraftFeeChargeDetail: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail[];
}

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum {
    AcademicTerm = "AcademicTerm"
,    Day = "Day"
,    HalfYear = "Half Year"
,    Month = "Month"
,    Quarter = "Quarter"
,    Week = "Week"
,    Year = "Year"
}

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum {
    ArrangedOverdraft = "ArrangedOverdraft"
,    EmergencyBorrowing = "EmergencyBorrowing"
,    BorrowingItem = "BorrowingItem"
,    OverdraftRenewal = "OverdraftRenewal"
,    AnnualReview = "AnnualReview"
,    OverdraftSetup = "OverdraftSetup"
,    Surcharge = "Surcharge"
,    TempOverdraft = "TempOverdraft"
,    UnauthorisedBorrowing = "UnauthorisedBorrowing"
,    UnauthorisedPaidTrans = "UnauthorisedPaidTrans"
,    Other = "Other"
,    UnauthorisedUnpaidTrans = "UnauthorisedUnpaidTrans"
}

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum {
    Minimum = "Minimum"
,    Maximum = "Maximum"
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType
/** 
 * Other fee type code which is not available in the standard code set
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap
/** 
 * Details about any caps (maximum charges) that apply to a particular fee/charge
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap extends SpeakeasyBase {
  @Metadata({ data: "json, name=CappingPeriod" })
  cappingPeriod?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum;

  @Metadata({ data: "json, name=FeeCapAmount" })
  feeCapAmount?: string;

  @Metadata({ data: "json, name=FeeCapOccurrence" })
  feeCapOccurrence?: number;

  @Metadata({ data: "json, name=FeeType" })
  feeType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum[];

  @Metadata({ data: "json, name=MinMaxType" })
  minMaxType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum;

  @Metadata({ data: "json, name=Notes" })
  notes?: string[];

  @Metadata({ data: "json, name=OtherFeeType", elemType: shared.ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType })
  otherFeeType?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType[];

  @Metadata({ data: "json, name=OverdraftControlIndicator" })
  overdraftControlIndicator?: boolean;
}

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum {
    AccountClosing = "AccountClosing"
,    AccountOpening = "AccountOpening"
,    AcademicTerm = "AcademicTerm"
,    ChargingPeriod = "ChargingPeriod"
,    Daily = "Daily"
,    PerItem = "PerItem"
,    Monthly = "Monthly"
,    OnAccountAnniversary = "OnAccountAnniversary"
,    Other = "Other"
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

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum {
    AccountClosing = "AccountClosing"
,    AccountOpening = "AccountOpening"
,    AcademicTerm = "AcademicTerm"
,    ChargingPeriod = "ChargingPeriod"
,    Daily = "Daily"
,    PerItem = "PerItem"
,    Monthly = "Monthly"
,    OnAccountAnniversary = "OnAccountAnniversary"
,    Other = "Other"
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

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum {
    LinkedBaseRate = "LinkedBaseRate"
,    Gross = "Gross"
,    Net = "Net"
,    Other = "Other"
}

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum {
    ArrangedOverdraft = "ArrangedOverdraft"
,    EmergencyBorrowing = "EmergencyBorrowing"
,    BorrowingItem = "BorrowingItem"
,    OverdraftRenewal = "OverdraftRenewal"
,    AnnualReview = "AnnualReview"
,    OverdraftSetup = "OverdraftSetup"
,    Surcharge = "Surcharge"
,    TempOverdraft = "TempOverdraft"
,    UnauthorisedBorrowing = "UnauthorisedBorrowing"
,    UnauthorisedPaidTrans = "UnauthorisedPaidTrans"
,    Other = "Other"
,    UnauthorisedUnpaidTrans = "UnauthorisedUnpaidTrans"
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency
/** 
 * Other application frequencies that are not available in the standard code list
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency
/** 
 * Other calculation frequency which is not available in the standard code set.
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType
/** 
 * Other fee rate type code which is not available in the standard code set
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType
/** 
 * Other Fee type which is not available in the standard code set
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum {
    AcademicTerm = "AcademicTerm"
,    Day = "Day"
,    HalfYear = "Half Year"
,    Month = "Month"
,    Quarter = "Quarter"
,    Week = "Week"
,    Year = "Year"
}

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum {
    ArrangedOverdraft = "ArrangedOverdraft"
,    EmergencyBorrowing = "EmergencyBorrowing"
,    BorrowingItem = "BorrowingItem"
,    OverdraftRenewal = "OverdraftRenewal"
,    AnnualReview = "AnnualReview"
,    OverdraftSetup = "OverdraftSetup"
,    Surcharge = "Surcharge"
,    TempOverdraft = "TempOverdraft"
,    UnauthorisedBorrowing = "UnauthorisedBorrowing"
,    UnauthorisedPaidTrans = "UnauthorisedPaidTrans"
,    Other = "Other"
,    UnauthorisedUnpaidTrans = "UnauthorisedUnpaidTrans"
}

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum {
    Minimum = "Minimum"
,    Maximum = "Maximum"
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType
/** 
 * Other fee type code which is not available in the standard code set
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap
/** 
 * Details about any caps (maximum charges) that apply to a particular fee/charge
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap extends SpeakeasyBase {
  @Metadata({ data: "json, name=CappingPeriod" })
  cappingPeriod?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum;

  @Metadata({ data: "json, name=FeeCapAmount" })
  feeCapAmount?: string;

  @Metadata({ data: "json, name=FeeCapOccurrence" })
  feeCapOccurrence?: number;

  @Metadata({ data: "json, name=FeeType" })
  feeType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum[];

  @Metadata({ data: "json, name=MinMaxType" })
  minMaxType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum;

  @Metadata({ data: "json, name=Notes" })
  notes?: string[];

  @Metadata({ data: "json, name=OtherFeeType", elemType: shared.ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType })
  otherFeeType?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType[];

  @Metadata({ data: "json, name=OverdraftControlIndicator" })
  overdraftControlIndicator?: boolean;
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail
/** 
 * Details about the fees/charges
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationFrequency" })
  applicationFrequency: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum;

  @Metadata({ data: "json, name=CalculationFrequency" })
  calculationFrequency?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum;

  @Metadata({ data: "json, name=FeeAmount" })
  feeAmount?: string;

  @Metadata({ data: "json, name=FeeRate" })
  feeRate?: string;

  @Metadata({ data: "json, name=FeeRateType" })
  feeRateType?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum;

  @Metadata({ data: "json, name=FeeType" })
  feeType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum;

  @Metadata({ data: "json, name=IncrementalBorrowingAmount" })
  incrementalBorrowingAmount?: string;

  @Metadata({ data: "json, name=Notes" })
  notes?: string[];

  @Metadata({ data: "json, name=OtherApplicationFrequency" })
  otherApplicationFrequency?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency;

  @Metadata({ data: "json, name=OtherCalculationFrequency" })
  otherCalculationFrequency?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency;

  @Metadata({ data: "json, name=OtherFeeRateType" })
  otherFeeRateType?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType;

  @Metadata({ data: "json, name=OtherFeeType" })
  otherFeeType?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType;

  @Metadata({ data: "json, name=OverdraftControlIndicator" })
  overdraftControlIndicator?: boolean;

  @Metadata({ data: "json, name=OverdraftFeeChargeCap" })
  overdraftFeeChargeCap?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap;
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges
/** 
 * Overdraft fees and charges
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges extends SpeakeasyBase {
  @Metadata({ data: "json, name=OverdraftFeeChargeCap", elemType: shared.ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap })
  overdraftFeeChargeCap?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap[];

  @Metadata({ data: "json, name=OverdraftFeeChargeDetail", elemType: shared.ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail })
  overdraftFeeChargeDetail: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail[];
}

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum {
    Tiered = "Tiered"
,    Whole = "Whole"
}


// ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBand
/** 
 * Provides overdraft details for a specific tier or band
**/
export class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBand extends SpeakeasyBase {
  @Metadata({ data: "json, name=BankGuaranteedIndicator" })
  bankGuaranteedIndicator?: boolean;

  @Metadata({ data: "json, name=EAR" })
  ear?: string;

  @Metadata({ data: "json, name=Identification" })
  identification?: string;

  @Metadata({ data: "json, name=Notes" })
  notes?: string[];

  @Metadata({ data: "json, name=OverdraftFeesCharges", elemType: shared.ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges })
  overdraftFeesCharges?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges[];

  @Metadata({ data: "json, name=OverdraftInterestChargingCoverage" })
  overdraftInterestChargingCoverage?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum;

  @Metadata({ data: "json, name=RepresentativeAPR" })
  representativeApr?: string;

  @Metadata({ data: "json, name=TierValueMax" })
  tierValueMax?: string;

  @Metadata({ data: "json, name=TierValueMin" })
  tierValueMin: string;
}

export enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftTypeEnum {
    Committed = "Committed"
,    OnDemand = "OnDemand"
,    Other = "Other"
}

export enum ObpcaData1OverdraftOverdraftTierBandSetTierBandMethodEnum {
    Tiered = "Tiered"
,    Whole = "Whole"
,    Banded = "Banded"
}


// ObpcaData1OverdraftOverdraftTierBandSet
/** 
 * Tier band set details
**/
export class ObpcaData1OverdraftOverdraftTierBandSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthorisedIndicator" })
  authorisedIndicator?: boolean;

  @Metadata({ data: "json, name=BufferAmount" })
  bufferAmount?: string;

  @Metadata({ data: "json, name=Identification" })
  identification?: string;

  @Metadata({ data: "json, name=Notes" })
  notes?: string[];

  @Metadata({ data: "json, name=OverdraftFeesCharges", elemType: shared.ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges })
  overdraftFeesCharges?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges[];

  @Metadata({ data: "json, name=OverdraftTierBand", elemType: shared.ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBand })
  overdraftTierBand: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBand[];

  @Metadata({ data: "json, name=OverdraftType" })
  overdraftType?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTypeEnum;

  @Metadata({ data: "json, name=TierBandMethod" })
  tierBandMethod: ObpcaData1OverdraftOverdraftTierBandSetTierBandMethodEnum;
}


// ObpcaData1Overdraft
/** 
 * Details about Overdraft rates, fees & charges
**/
export class ObpcaData1Overdraft extends SpeakeasyBase {
  @Metadata({ data: "json, name=Notes" })
  notes?: string[];

  @Metadata({ data: "json, name=OverdraftTierBandSet", elemType: shared.ObpcaData1OverdraftOverdraftTierBandSet })
  overdraftTierBandSet: ObpcaData1OverdraftOverdraftTierBandSet[];
}

export enum ObpcaData1ProductDetailsSegmentEnum {
    Basic = "Basic"
,    BenefitAndReward = "BenefitAndReward"
,    CreditInterest = "CreditInterest"
,    Cashback = "Cashback"
,    General = "General"
,    Graduate = "Graduate"
,    Other = "Other"
,    Overdraft = "Overdraft"
,    Packaged = "Packaged"
,    Premium = "Premium"
,    Reward = "Reward"
,    Student = "Student"
,    YoungAdult = "YoungAdult"
,    Youth = "Youth"
}


export class ObpcaData1ProductDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=MonthlyMaximumCharge" })
  monthlyMaximumCharge?: string;

  @Metadata({ data: "json, name=Notes" })
  notes?: string[];

  @Metadata({ data: "json, name=Segment" })
  segment?: ObpcaData1ProductDetailsSegmentEnum[];
}


export class ObpcaData1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreditInterest" })
  creditInterest?: ObpcaData1CreditInterest;

  @Metadata({ data: "json, name=OtherFeesCharges" })
  otherFeesCharges?: ObpcaData1OtherFeesCharges;

  @Metadata({ data: "json, name=Overdraft" })
  overdraft?: ObpcaData1Overdraft;

  @Metadata({ data: "json, name=ProductDetails" })
  productDetails?: ObpcaData1ProductDetails;
}
