import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ObpcaData1CreditInterestTierBandSetCalculationMethodEnum {
    Compound = "Compound",
    SimpleInterest = "SimpleInterest"
}
export declare enum ObpcaData1CreditInterestTierBandSetDestinationEnum {
    PayAway = "PayAway",
    SelfCredit = "SelfCredit"
}
export declare enum ObpcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum {
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
export declare enum ObpcaData1CreditInterestTierBandSetTierBandBankInterestRateTypeEnum {
    LinkedBaseRate = "LinkedBaseRate",
    Gross = "Gross",
    Net = "Net",
    Other = "Other"
}
export declare enum ObpcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum {
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
export declare enum ObpcaData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum {
    Tiered = "Tiered",
    Whole = "Whole"
}
export declare enum ObpcaData1CreditInterestTierBandSetTierBandFixedVariableInterestRateTypeEnum {
    Fixed = "Fixed",
    Variable = "Variable"
}
/**
 * Other application frequencies that are not available in the standard code list
**/
export declare class ObpcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Other interest rate types which are not available in the standard code list
**/
export declare class ObpcaData1CreditInterestTierBandSetTierBandOtherBankInterestType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Other calculation frequency which is not available in the standard code set.
**/
export declare class ObpcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Tier Band Details
**/
export declare class ObpcaData1CreditInterestTierBandSetTierBand extends SpeakeasyBase {
    aer: string;
    applicationFrequency: ObpcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum;
    bankInterestRate?: string;
    bankInterestRateType?: ObpcaData1CreditInterestTierBandSetTierBandBankInterestRateTypeEnum;
    calculationFrequency?: ObpcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum;
    depositInterestAppliedCoverage?: ObpcaData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum;
    fixedVariableInterestRateType: ObpcaData1CreditInterestTierBandSetTierBandFixedVariableInterestRateTypeEnum;
    identification?: string;
    notes?: string[];
    otherApplicationFrequency?: ObpcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency;
    otherBankInterestType?: ObpcaData1CreditInterestTierBandSetTierBandOtherBankInterestType;
    otherCalculationFrequency?: ObpcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency;
    tierValueMaximum?: string;
    tierValueMinimum: string;
}
export declare enum ObpcaData1CreditInterestTierBandSetTierBandMethodEnum {
    Tiered = "Tiered",
    Whole = "Whole"
}
/**
 * The group of tiers or bands for which credit interest can be applied.
**/
export declare class ObpcaData1CreditInterestTierBandSet extends SpeakeasyBase {
    calculationMethod?: ObpcaData1CreditInterestTierBandSetCalculationMethodEnum;
    destination?: ObpcaData1CreditInterestTierBandSetDestinationEnum;
    notes?: string[];
    tierBand: ObpcaData1CreditInterestTierBandSetTierBand[];
    tierBandMethod: ObpcaData1CreditInterestTierBandSetTierBandMethodEnum;
}
/**
 * Details about the interest that may be payable to the PCA account holders
**/
export declare class ObpcaData1CreditInterest extends SpeakeasyBase {
    tierBandSet: ObpcaData1CreditInterestTierBandSet[];
}
export declare enum ObpcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum {
    AcademicTerm = "AcademicTerm",
    Day = "Day",
    HalfYear = "Half Year",
    Month = "Month",
    Quarter = "Quarter",
    Week = "Week",
    Year = "Year"
}
export declare enum ObpcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum {
    ServiceCAccountFee = "ServiceCAccountFee",
    ServiceCAccountFeeMonthly = "ServiceCAccountFeeMonthly",
    ServiceCOther = "ServiceCOther",
    Other = "Other"
}
export declare enum ObpcaData1OtherFeesChargesFeeChargeCapMinMaxTypeEnum {
    Minimum = "Minimum",
    Maximum = "Maximum"
}
/**
 * Other fee type code which is not available in the standard code set
**/
export declare class ObpcaData1OtherFeesChargesFeeChargeCapOtherFeeType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Details about any caps (maximum charges) that apply to a particular fee/charge
**/
export declare class ObpcaData1OtherFeesChargesFeeChargeCap extends SpeakeasyBase {
    cappingPeriod?: ObpcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum;
    feeCapAmount?: string;
    feeCapOccurrence?: number;
    feeType: ObpcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum[];
    minMaxType: ObpcaData1OtherFeesChargesFeeChargeCapMinMaxTypeEnum;
    notes?: string[];
    otherFeeType?: ObpcaData1OtherFeesChargesFeeChargeCapOtherFeeType[];
}
export declare enum ObpcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum {
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
export declare enum ObpcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum {
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
/**
 * Range or amounts or rates for which the fee/charge applies
**/
export declare class ObpcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange extends SpeakeasyBase {
    maximumAmount?: string;
    maximumRate?: string;
    minimumAmount?: string;
    minimumRate?: string;
}
export declare enum ObpcaData1OtherFeesChargesFeeChargeDetailFeeCategoryEnum {
    Other = "Other",
    Servicing = "Servicing"
}
export declare enum ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum {
    AcademicTerm = "AcademicTerm",
    Day = "Day",
    HalfYear = "Half Year",
    Month = "Month",
    Quarter = "Quarter",
    Week = "Week",
    Year = "Year"
}
export declare enum ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum {
    ServiceCAccountFee = "ServiceCAccountFee",
    ServiceCAccountFeeMonthly = "ServiceCAccountFeeMonthly",
    ServiceCOther = "ServiceCOther",
    Other = "Other"
}
export declare enum ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapMinMaxTypeEnum {
    Minimum = "Minimum",
    Maximum = "Maximum"
}
/**
 * Other fee type code which is not available in the standard code set
**/
export declare class ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Details about any caps (maximum charges) that apply to a particular fee/charge
**/
export declare class ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap extends SpeakeasyBase {
    cappingPeriod?: ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum;
    feeCapAmount?: string;
    feeCapOccurrence?: number;
    feeType: ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum[];
    minMaxType: ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapMinMaxTypeEnum;
    notes?: string[];
    otherFeeType?: ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType[];
}
export declare enum ObpcaData1OtherFeesChargesFeeChargeDetailFeeRateTypeEnum {
    LinkedBaseRate = "LinkedBaseRate",
    Gross = "Gross",
    Net = "Net",
    Other = "Other"
}
export declare enum ObpcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum {
    ServiceCAccountFee = "ServiceCAccountFee",
    ServiceCAccountFeeMonthly = "ServiceCAccountFeeMonthly",
    ServiceCOther = "ServiceCOther",
    Other = "Other"
}
/**
 * Other application frequencies not covered in the standard code list
**/
export declare class ObpcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Other calculation frequency which is not available in standard code set.
**/
export declare class ObpcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
export declare class ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Other fee rate type which is not available in the standard code set
**/
export declare class ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
export declare enum ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFeeCategoryEnum {
    Other = "Other",
    Servicing = "Servicing"
}
/**
 * Other Fee/charge type which is not available in the standard code set
**/
export declare class ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeType extends SpeakeasyBase {
    code?: string;
    description: string;
    feeCategory: ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFeeCategoryEnum;
    name: string;
}
/**
 * Other fees/charges details
**/
export declare class ObpcaData1OtherFeesChargesFeeChargeDetail extends SpeakeasyBase {
    applicationFrequency: ObpcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum;
    calculationFrequency?: ObpcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum;
    feeAmount?: string;
    feeApplicableRange?: ObpcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange;
    feeCategory: ObpcaData1OtherFeesChargesFeeChargeDetailFeeCategoryEnum;
    feeChargeCap?: ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap[];
    feeRate?: string;
    feeRateType?: ObpcaData1OtherFeesChargesFeeChargeDetailFeeRateTypeEnum;
    feeType: ObpcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum;
    notes?: string[];
    otherApplicationFrequency?: ObpcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency;
    otherCalculationFrequency?: ObpcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency;
    otherFeeCategoryType?: ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType;
    otherFeeRateType?: ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType;
    otherFeeType?: ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeType;
}
/**
 * Contains details of fees and charges which are not associated with either borrowing or features/benefits
**/
export declare class ObpcaData1OtherFeesCharges extends SpeakeasyBase {
    feeChargeCap?: ObpcaData1OtherFeesChargesFeeChargeCap[];
    feeChargeDetail: ObpcaData1OtherFeesChargesFeeChargeDetail[];
}
export declare enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum {
    AcademicTerm = "AcademicTerm",
    Day = "Day",
    HalfYear = "Half Year",
    Month = "Month",
    Quarter = "Quarter",
    Week = "Week",
    Year = "Year"
}
export declare enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum {
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
export declare enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum {
    Minimum = "Minimum",
    Maximum = "Maximum"
}
/**
 * Other fee type code which is not available in the standard code set
**/
export declare class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Details about any caps (maximum charges) that apply to a particular fee/charge
**/
export declare class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap extends SpeakeasyBase {
    cappingPeriod?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum;
    feeCapAmount?: string;
    feeCapOccurrence?: number;
    feeType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum[];
    minMaxType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum;
    notes?: string[];
    otherFeeType?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType[];
    overdraftControlIndicator?: boolean;
}
export declare enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum {
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
export declare enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum {
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
export declare enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum {
    LinkedBaseRate = "LinkedBaseRate",
    Gross = "Gross",
    Net = "Net",
    Other = "Other"
}
export declare enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum {
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
/**
 * Other application frequencies that are not available in the standard code list
**/
export declare class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Other calculation frequency which is not available in the standard code set.
**/
export declare class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Other fee rate type code which is not available in the standard code set
**/
export declare class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Other Fee type which is not available in the standard code set
**/
export declare class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
export declare enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum {
    AcademicTerm = "AcademicTerm",
    Day = "Day",
    HalfYear = "Half Year",
    Month = "Month",
    Quarter = "Quarter",
    Week = "Week",
    Year = "Year"
}
export declare enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum {
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
export declare enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum {
    Minimum = "Minimum",
    Maximum = "Maximum"
}
/**
 * Other fee type code which is not available in the standard code set
**/
export declare class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Details about any caps (maximum charges) that apply to a particular fee/charge
**/
export declare class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap extends SpeakeasyBase {
    cappingPeriod?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum;
    feeCapAmount?: string;
    feeCapOccurrence?: number;
    feeType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum[];
    minMaxType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum;
    notes?: string[];
    otherFeeType?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType[];
    overdraftControlIndicator?: boolean;
}
/**
 * Details about the fees/charges
**/
export declare class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail extends SpeakeasyBase {
    applicationFrequency: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum;
    calculationFrequency?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum;
    feeAmount?: string;
    feeRate?: string;
    feeRateType?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum;
    feeType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum;
    incrementalBorrowingAmount?: string;
    notes?: string[];
    otherApplicationFrequency?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency;
    otherCalculationFrequency?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency;
    otherFeeRateType?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType;
    otherFeeType?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType;
    overdraftControlIndicator?: boolean;
    overdraftFeeChargeCap?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap;
}
/**
 * Overdraft fees and charges details
**/
export declare class ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges extends SpeakeasyBase {
    overdraftFeeChargeCap?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap[];
    overdraftFeeChargeDetail: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail[];
}
export declare enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum {
    AcademicTerm = "AcademicTerm",
    Day = "Day",
    HalfYear = "Half Year",
    Month = "Month",
    Quarter = "Quarter",
    Week = "Week",
    Year = "Year"
}
export declare enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum {
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
export declare enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum {
    Minimum = "Minimum",
    Maximum = "Maximum"
}
/**
 * Other fee type code which is not available in the standard code set
**/
export declare class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Details about any caps (maximum charges) that apply to a particular fee/charge
**/
export declare class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap extends SpeakeasyBase {
    cappingPeriod?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum;
    feeCapAmount?: string;
    feeCapOccurrence?: number;
    feeType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum[];
    minMaxType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum;
    notes?: string[];
    otherFeeType?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType[];
    overdraftControlIndicator?: boolean;
}
export declare enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum {
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
export declare enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum {
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
export declare enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum {
    LinkedBaseRate = "LinkedBaseRate",
    Gross = "Gross",
    Net = "Net",
    Other = "Other"
}
export declare enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum {
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
/**
 * Other application frequencies that are not available in the standard code list
**/
export declare class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Other calculation frequency which is not available in the standard code set.
**/
export declare class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Other fee rate type code which is not available in the standard code set
**/
export declare class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Other Fee type which is not available in the standard code set
**/
export declare class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
export declare enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum {
    AcademicTerm = "AcademicTerm",
    Day = "Day",
    HalfYear = "Half Year",
    Month = "Month",
    Quarter = "Quarter",
    Week = "Week",
    Year = "Year"
}
export declare enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum {
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
export declare enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum {
    Minimum = "Minimum",
    Maximum = "Maximum"
}
/**
 * Other fee type code which is not available in the standard code set
**/
export declare class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Details about any caps (maximum charges) that apply to a particular fee/charge
**/
export declare class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap extends SpeakeasyBase {
    cappingPeriod?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum;
    feeCapAmount?: string;
    feeCapOccurrence?: number;
    feeType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum[];
    minMaxType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum;
    notes?: string[];
    otherFeeType?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType[];
    overdraftControlIndicator?: boolean;
}
/**
 * Details about the fees/charges
**/
export declare class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail extends SpeakeasyBase {
    applicationFrequency: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum;
    calculationFrequency?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum;
    feeAmount?: string;
    feeRate?: string;
    feeRateType?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum;
    feeType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum;
    incrementalBorrowingAmount?: string;
    notes?: string[];
    otherApplicationFrequency?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency;
    otherCalculationFrequency?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency;
    otherFeeRateType?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType;
    otherFeeType?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType;
    overdraftControlIndicator?: boolean;
    overdraftFeeChargeCap?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap;
}
/**
 * Overdraft fees and charges
**/
export declare class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges extends SpeakeasyBase {
    overdraftFeeChargeCap?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap[];
    overdraftFeeChargeDetail: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail[];
}
export declare enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum {
    Tiered = "Tiered",
    Whole = "Whole"
}
/**
 * Provides overdraft details for a specific tier or band
**/
export declare class ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBand extends SpeakeasyBase {
    bankGuaranteedIndicator?: boolean;
    ear?: string;
    identification?: string;
    notes?: string[];
    overdraftFeesCharges?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges[];
    overdraftInterestChargingCoverage?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum;
    representativeApr?: string;
    tierValueMax?: string;
    tierValueMin: string;
}
export declare enum ObpcaData1OverdraftOverdraftTierBandSetOverdraftTypeEnum {
    Committed = "Committed",
    OnDemand = "OnDemand",
    Other = "Other"
}
export declare enum ObpcaData1OverdraftOverdraftTierBandSetTierBandMethodEnum {
    Tiered = "Tiered",
    Whole = "Whole",
    Banded = "Banded"
}
/**
 * Tier band set details
**/
export declare class ObpcaData1OverdraftOverdraftTierBandSet extends SpeakeasyBase {
    authorisedIndicator?: boolean;
    bufferAmount?: string;
    identification?: string;
    notes?: string[];
    overdraftFeesCharges?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges[];
    overdraftTierBand: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBand[];
    overdraftType?: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTypeEnum;
    tierBandMethod: ObpcaData1OverdraftOverdraftTierBandSetTierBandMethodEnum;
}
/**
 * Details about Overdraft rates, fees & charges
**/
export declare class ObpcaData1Overdraft extends SpeakeasyBase {
    notes?: string[];
    overdraftTierBandSet: ObpcaData1OverdraftOverdraftTierBandSet[];
}
export declare enum ObpcaData1ProductDetailsSegmentEnum {
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
export declare class ObpcaData1ProductDetails extends SpeakeasyBase {
    monthlyMaximumCharge?: string;
    notes?: string[];
    segment?: ObpcaData1ProductDetailsSegmentEnum[];
}
export declare class ObpcaData1 extends SpeakeasyBase {
    creditInterest?: ObpcaData1CreditInterest;
    otherFeesCharges?: ObpcaData1OtherFeesCharges;
    overdraft?: ObpcaData1Overdraft;
    productDetails?: ObpcaData1ProductDetails;
}
