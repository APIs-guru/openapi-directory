import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ObbcaData1CreditInterestTierBandSetCalculationMethodEnum {
    Compound = "Compound",
    SimpleInterest = "SimpleInterest"
}
export declare enum ObbcaData1CreditInterestTierBandSetDestinationEnum {
    PayAway = "PayAway",
    SelfCredit = "SelfCredit"
}
export declare enum ObbcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum {
    Daily = "Daily",
    HalfYearly = "HalfYearly",
    Monthly = "Monthly",
    Other = "Other",
    Quarterly = "Quarterly",
    PerStatementDate = "PerStatementDate",
    Weekly = "Weekly",
    Yearly = "Yearly"
}
export declare enum ObbcaData1CreditInterestTierBandSetTierBandBankInterestRateTypeEnum {
    Gross = "Gross",
    Other = "Other"
}
export declare enum ObbcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum {
    Daily = "Daily",
    HalfYearly = "HalfYearly",
    Monthly = "Monthly",
    Other = "Other",
    Quarterly = "Quarterly",
    PerStatementDate = "PerStatementDate",
    Weekly = "Weekly",
    Yearly = "Yearly"
}
export declare enum ObbcaData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum {
    Banded = "Banded",
    Tiered = "Tiered",
    Whole = "Whole"
}
export declare enum ObbcaData1CreditInterestTierBandSetTierBandFixedVariableInterestRateTypeEnum {
    Fixed = "Fixed",
    Variable = "Variable"
}
/**
 * Other application frequencies that are not available in the standard code list
**/
export declare class ObbcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Other interest rate types which are not available in the standard code list
**/
export declare class ObbcaData1CreditInterestTierBandSetTierBandOtherBankInterestType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Other calculation frequency which is not available in the standard code set.
**/
export declare class ObbcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Tier Band Details
**/
export declare class ObbcaData1CreditInterestTierBandSetTierBand extends SpeakeasyBase {
    aer: string;
    applicationFrequency: ObbcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum;
    bankInterestRate?: string;
    bankInterestRateType?: ObbcaData1CreditInterestTierBandSetTierBandBankInterestRateTypeEnum;
    calculationFrequency?: ObbcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum;
    depositInterestAppliedCoverage?: ObbcaData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum;
    fixedVariableInterestRateType: ObbcaData1CreditInterestTierBandSetTierBandFixedVariableInterestRateTypeEnum;
    identification?: string;
    notes?: string[];
    otherApplicationFrequency?: ObbcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency;
    otherBankInterestType?: ObbcaData1CreditInterestTierBandSetTierBandOtherBankInterestType;
    otherCalculationFrequency?: ObbcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency;
    tierValueMaximum?: string;
    tierValueMinimum: string;
}
export declare enum ObbcaData1CreditInterestTierBandSetTierBandMethodEnum {
    Banded = "Banded",
    Tiered = "Tiered",
    Whole = "Whole"
}
/**
 * The group of tiers or bands for which credit interest can be applied.
**/
export declare class ObbcaData1CreditInterestTierBandSet extends SpeakeasyBase {
    calculationMethod?: ObbcaData1CreditInterestTierBandSetCalculationMethodEnum;
    destination: ObbcaData1CreditInterestTierBandSetDestinationEnum;
    notes?: string[];
    tierBand: ObbcaData1CreditInterestTierBandSetTierBand[];
    tierBandMethod: ObbcaData1CreditInterestTierBandSetTierBandMethodEnum;
}
/**
 * Details about the interest that may be payable to the BCA account holders
**/
export declare class ObbcaData1CreditInterest extends SpeakeasyBase {
    tierBandSet: ObbcaData1CreditInterestTierBandSet[];
}
export declare enum ObbcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum {
    Day = "Day",
    HalfYear = "Half Year",
    Month = "Month",
    Quarter = "Quarter",
    Week = "Week",
    Year = "Year"
}
export declare enum ObbcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum {
    Other = "Other",
    ServiceCAccountFee = "ServiceCAccountFee",
    ServiceCAccountFeeMonthly = "ServiceCAccountFeeMonthly",
    ServiceCAccountFeeQuarterly = "ServiceCAccountFeeQuarterly",
    ServiceCFixedTariff = "ServiceCFixedTariff",
    ServiceCBusiDepAccBreakage = "ServiceCBusiDepAccBreakage",
    ServiceCMinimumMonthlyFee = "ServiceCMinimumMonthlyFee",
    ServiceCOther = "ServiceCOther"
}
export declare enum ObbcaData1OtherFeesChargesFeeChargeCapMinMaxTypeEnum {
    Minimum = "Minimum",
    Maximum = "Maximum"
}
/**
 * Other fee type code which is not available in the standard code set
**/
export declare class ObbcaData1OtherFeesChargesFeeChargeCapOtherFeeType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Details about any caps (maximum charges) that apply to a particular or group of fee/charge
**/
export declare class ObbcaData1OtherFeesChargesFeeChargeCap extends SpeakeasyBase {
    cappingPeriod?: ObbcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum;
    feeCapAmount?: string;
    feeCapOccurrence?: number;
    feeType: ObbcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum[];
    minMaxType: ObbcaData1OtherFeesChargesFeeChargeCapMinMaxTypeEnum;
    notes?: string[];
    otherFeeType?: ObbcaData1OtherFeesChargesFeeChargeCapOtherFeeType[];
}
export declare enum ObbcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum {
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
export declare enum ObbcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum {
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
/**
 * Range or amounts or rates for which the fee/charge applies
**/
export declare class ObbcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange extends SpeakeasyBase {
    maximumAmount?: string;
    maximumRate?: string;
    minimumAmount?: string;
    minimumRate?: string;
}
export declare enum ObbcaData1OtherFeesChargesFeeChargeDetailFeeCategoryEnum {
    Other = "Other",
    Servicing = "Servicing"
}
export declare enum ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum {
    Day = "Day",
    HalfYear = "Half Year",
    Month = "Month",
    Quarter = "Quarter",
    Week = "Week",
    Year = "Year"
}
export declare enum ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum {
    Other = "Other",
    ServiceCAccountFee = "ServiceCAccountFee",
    ServiceCAccountFeeMonthly = "ServiceCAccountFeeMonthly",
    ServiceCAccountFeeQuarterly = "ServiceCAccountFeeQuarterly",
    ServiceCFixedTariff = "ServiceCFixedTariff",
    ServiceCBusiDepAccBreakage = "ServiceCBusiDepAccBreakage",
    ServiceCMinimumMonthlyFee = "ServiceCMinimumMonthlyFee",
    ServiceCOther = "ServiceCOther"
}
export declare enum ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapMinMaxTypeEnum {
    Minimum = "Minimum",
    Maximum = "Maximum"
}
/**
 * Other fee type code which is not available in the standard code set
**/
export declare class ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Details about any caps (maximum charges) that apply to a particular or group of fee/charge
**/
export declare class ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap extends SpeakeasyBase {
    cappingPeriod?: ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum;
    feeCapAmount?: string;
    feeCapOccurrence?: number;
    feeType: ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum[];
    minMaxType: ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapMinMaxTypeEnum;
    notes?: string[];
    otherFeeType?: ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType[];
}
export declare enum ObbcaData1OtherFeesChargesFeeChargeDetailFeeRateTypeEnum {
    Gross = "Gross",
    Other = "Other"
}
export declare enum ObbcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum {
    Other = "Other",
    ServiceCAccountFee = "ServiceCAccountFee",
    ServiceCAccountFeeMonthly = "ServiceCAccountFeeMonthly",
    ServiceCAccountFeeQuarterly = "ServiceCAccountFeeQuarterly",
    ServiceCFixedTariff = "ServiceCFixedTariff",
    ServiceCBusiDepAccBreakage = "ServiceCBusiDepAccBreakage",
    ServiceCMinimumMonthlyFee = "ServiceCMinimumMonthlyFee",
    ServiceCOther = "ServiceCOther"
}
/**
 * Other application frequencies not covered in the standard code list
**/
export declare class ObbcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Other calculation frequency which is not available in standard code set.
**/
export declare class ObbcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
export declare class ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Other fee rate type which is not available in the standard code set
**/
export declare class ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
export declare enum ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFeeCategoryEnum {
    Other = "Other",
    Servicing = "Servicing"
}
/**
 * Other Fee/charge type which is not available in the standard code set
**/
export declare class ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeType extends SpeakeasyBase {
    code?: string;
    description: string;
    feeCategory: ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFeeCategoryEnum;
    name: string;
}
/**
 * Other fees/charges details
**/
export declare class ObbcaData1OtherFeesChargesFeeChargeDetail extends SpeakeasyBase {
    applicationFrequency: ObbcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum;
    calculationFrequency?: ObbcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum;
    feeAmount?: string;
    feeApplicableRange?: ObbcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange;
    feeCategory: ObbcaData1OtherFeesChargesFeeChargeDetailFeeCategoryEnum;
    feeChargeCap?: ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap[];
    feeRate?: string;
    feeRateType?: ObbcaData1OtherFeesChargesFeeChargeDetailFeeRateTypeEnum;
    feeType: ObbcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum;
    negotiableIndicator?: boolean;
    notes?: string[];
    otherApplicationFrequency?: ObbcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency;
    otherCalculationFrequency?: ObbcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency;
    otherFeeCategoryType?: ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType;
    otherFeeRateType?: ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType;
    otherFeeType?: ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeType;
}
/**
 * Other tariff type which is not in the standard list.
**/
export declare class ObbcaData1OtherFeesChargesOtherTariffType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
export declare enum ObbcaData1OtherFeesChargesTariffTypeEnum {
    Electronic = "Electronic",
    Mixed = "Mixed",
    Other = "Other"
}
/**
 * Contains details of fees and charges which are not associated with either Overdraft or features/benefits
**/
export declare class ObbcaData1OtherFeesCharges extends SpeakeasyBase {
    feeChargeCap?: ObbcaData1OtherFeesChargesFeeChargeCap[];
    feeChargeDetail: ObbcaData1OtherFeesChargesFeeChargeDetail[];
    otherTariffType?: ObbcaData1OtherFeesChargesOtherTariffType;
    tariffName?: string;
    tariffType?: ObbcaData1OtherFeesChargesTariffTypeEnum;
}
export declare enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum {
    Day = "Day",
    HalfYear = "Half Year",
    Month = "Month",
    Quarter = "Quarter",
    Week = "Week",
    Year = "Year"
}
export declare enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum {
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
export declare enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum {
    Minimum = "Minimum",
    Maximum = "Maximum"
}
/**
 * Other fee type code which is not available in the standard code set
**/
export declare class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
**/
export declare class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap extends SpeakeasyBase {
    cappingPeriod?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum;
    feeCapAmount?: string;
    feeCapOccurrence?: number;
    feeType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum[];
    minMaxType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum;
    notes?: string[];
    otherFeeType?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType[];
}
export declare enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum {
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
export declare enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum {
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
export declare enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum {
    Gross = "Gross",
    Other = "Other"
}
export declare enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum {
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
/**
 * Other application frequencies that are not available in the standard code list
**/
export declare class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Other calculation frequency which is not available in the standard code set.
**/
export declare class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Other fee rate type code which is not available in the standard code set
**/
export declare class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Other Fee type which is not available in the standard code set
**/
export declare class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
export declare enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum {
    Day = "Day",
    HalfYear = "Half Year",
    Month = "Month",
    Quarter = "Quarter",
    Week = "Week",
    Year = "Year"
}
export declare enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum {
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
export declare enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum {
    Minimum = "Minimum",
    Maximum = "Maximum"
}
/**
 * Other fee type code which is not available in the standard code set
**/
export declare class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
**/
export declare class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap extends SpeakeasyBase {
    cappingPeriod?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum;
    feeCapAmount?: string;
    feeCapOccurrence?: number;
    feeType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum[];
    minMaxType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum;
    notes?: string[];
    otherFeeType?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType[];
}
/**
 * Details about the fees/charges
**/
export declare class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail extends SpeakeasyBase {
    applicationFrequency: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum;
    calculationFrequency?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum;
    feeAmount?: string;
    feeRate?: string;
    feeRateType?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum;
    feeType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum;
    incrementalBorrowingAmount?: string;
    negotiableIndicator?: boolean;
    notes?: string[];
    otherApplicationFrequency?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency;
    otherCalculationFrequency?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency;
    otherFeeRateType?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType;
    otherFeeType?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType;
    overdraftControlIndicator?: boolean;
    overdraftFeeChargeCap?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap[];
}
/**
 * Overdraft fees and charges details
**/
export declare class ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges extends SpeakeasyBase {
    overdraftFeeChargeCap?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap[];
    overdraftFeeChargeDetail: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail[];
}
export declare enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodEnum {
    Day = "Day",
    HalfYear = "Half Year",
    Month = "Month",
    Quarter = "Quarter",
    Week = "Week",
    Year = "Year"
}
export declare enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum {
    Day = "Day",
    HalfYear = "Half Year",
    Month = "Month",
    Quarter = "Quarter",
    Week = "Week",
    Year = "Year"
}
export declare enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum {
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
export declare enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum {
    Minimum = "Minimum",
    Maximum = "Maximum"
}
/**
 * Other fee type code which is not available in the standard code set
**/
export declare class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
**/
export declare class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap extends SpeakeasyBase {
    cappingPeriod?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum;
    feeCapAmount?: string;
    feeCapOccurrence?: number;
    feeType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum[];
    minMaxType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum;
    notes?: string[];
    otherFeeType?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType[];
}
export declare enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum {
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
export declare enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum {
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
export declare enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum {
    Gross = "Gross",
    Other = "Other"
}
export declare enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum {
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
/**
 * Other application frequencies that are not available in the standard code list
**/
export declare class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Other calculation frequency which is not available in the standard code set.
**/
export declare class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Other fee rate type code which is not available in the standard code set
**/
export declare class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Other Fee type which is not available in the standard code set
**/
export declare class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
export declare enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum {
    Day = "Day",
    HalfYear = "Half Year",
    Month = "Month",
    Quarter = "Quarter",
    Week = "Week",
    Year = "Year"
}
export declare enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum {
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
export declare enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum {
    Minimum = "Minimum",
    Maximum = "Maximum"
}
/**
 * Other fee type code which is not available in the standard code set
**/
export declare class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
**/
export declare class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap extends SpeakeasyBase {
    cappingPeriod?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum;
    feeCapAmount?: string;
    feeCapOccurrence?: number;
    feeType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum[];
    minMaxType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum;
    notes?: string[];
    otherFeeType?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType[];
}
/**
 * Details about the fees/charges
**/
export declare class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail extends SpeakeasyBase {
    applicationFrequency: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum;
    calculationFrequency?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum;
    feeAmount?: string;
    feeRate?: string;
    feeRateType?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum;
    feeType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum;
    incrementalBorrowingAmount?: string;
    negotiableIndicator?: boolean;
    notes?: string[];
    otherApplicationFrequency?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency;
    otherCalculationFrequency?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency;
    otherFeeRateType?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType;
    otherFeeType?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType;
    overdraftControlIndicator?: boolean;
    overdraftFeeChargeCap?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap[];
}
/**
 * Overdraft fees and charges
**/
export declare class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges extends SpeakeasyBase {
    overdraftFeeChargeCap?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap[];
    overdraftFeeChargeDetail: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail[];
}
export declare enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum {
    Banded = "Banded",
    Tiered = "Tiered",
    Whole = "Whole"
}
/**
 * Provides overdraft details for a specific tier or band
**/
export declare class ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBand extends SpeakeasyBase {
    agreementLengthMax?: number;
    agreementLengthMin?: number;
    agreementPeriod?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodEnum;
    bankGuaranteedIndicator?: boolean;
    ear?: string;
    identification?: string;
    notes?: string[];
    overdraftFeesCharges?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges[];
    overdraftInterestChargingCoverage?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum;
    representativeApr?: string;
    tierValueMax?: string;
    tierValueMin: string;
}
export declare enum ObbcaData1OverdraftOverdraftTierBandSetOverdraftTypeEnum {
    Committed = "Committed",
    OnDemand = "OnDemand"
}
export declare enum ObbcaData1OverdraftOverdraftTierBandSetTierBandMethodEnum {
    Banded = "Banded",
    Tiered = "Tiered",
    Whole = "Whole"
}
/**
 * Tier band set details
**/
export declare class ObbcaData1OverdraftOverdraftTierBandSet extends SpeakeasyBase {
    authorisedIndicator?: boolean;
    bufferAmount?: string;
    identification?: string;
    notes?: string[];
    overdraftFeesCharges?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges[];
    overdraftTierBand: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBand[];
    overdraftType?: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTypeEnum;
    tierBandMethod: ObbcaData1OverdraftOverdraftTierBandSetTierBandMethodEnum;
}
/**
 * Borrowing details
**/
export declare class ObbcaData1Overdraft extends SpeakeasyBase {
    notes?: string[];
    overdraftTierBandSet: ObbcaData1OverdraftOverdraftTierBandSet[];
}
export declare enum ObbcaData1ProductDetailsFeeFreeLengthPeriodEnum {
    Day = "Day",
    HalfYear = "Half Year",
    Month = "Month",
    Quarter = "Quarter",
    Week = "Week",
    Year = "Year"
}
export declare enum ObbcaData1ProductDetailsSegmentEnum {
    ClientAccount = "ClientAccount",
    Standard = "Standard",
    NonCommercialChaitiesClbSoc = "NonCommercialChaitiesClbSoc",
    NonCommercialPublicAuthGovt = "NonCommercialPublicAuthGovt",
    Religious = "Religious",
    SectorSpecific = "SectorSpecific",
    Startup = "Startup",
    Switcher = "Switcher"
}
export declare class ObbcaData1ProductDetails extends SpeakeasyBase {
    feeFreeLength?: number;
    feeFreeLengthPeriod?: ObbcaData1ProductDetailsFeeFreeLengthPeriodEnum;
    notes?: string[];
    segment?: ObbcaData1ProductDetailsSegmentEnum[];
}
export declare class ObbcaData1 extends SpeakeasyBase {
    creditInterest?: ObbcaData1CreditInterest;
    otherFeesCharges?: ObbcaData1OtherFeesCharges[];
    overdraft?: ObbcaData1Overdraft;
    productDetails?: ObbcaData1ProductDetails;
}
