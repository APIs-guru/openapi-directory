import { SpeakeasyBase } from "../../../internal/utils";
import { ObbcaData1 } from "./obbcadata1";
import { ObInterestCalculationMethod1CodeEnum } from "./obinterestcalculationmethod1codeenum";
import { ObOtherCodeType10 } from "./obothercodetype10";
import { ObInterestFixedVariableType1CodeEnum } from "./obinterestfixedvariabletype1codeenum";
import { ObOtherCodeType11 } from "./obothercodetype11";
import { ObOtherCodeType12 } from "./obothercodetype12";
import { ObFeeFrequency1Code4Enum } from "./obfeefrequency1code4enum";
import { ObMinMaxType1CodeEnum } from "./obminmaxtype1codeenum";
import { ObFeeFrequency1Code2Enum } from "./obfeefrequency1code2enum";
import { ObFeeFrequency1Code3Enum } from "./obfeefrequency1code3enum";
import { ObInterestRateType1Code1Enum } from "./obinterestratetype1code1enum";
import { ObFeeType1CodeEnum } from "./obfeetype1codeenum";
import { ObOtherCodeType16 } from "./obothercodetype16";
import { ObOtherCodeType17 } from "./obothercodetype17";
import { ObOtherCodeType15 } from "./obothercodetype15";
import { ObOtherFeeChargeDetailType } from "./obotherfeechargedetailtype";
import { ObPeriod1CodeEnum } from "./obperiod1codeenum";
import { ObFeeCategory1CodeEnum } from "./obfeecategory1codeenum";
import { ObOtherCodeType18 } from "./obothercodetype18";
import { ObFeeFrequency1Code0Enum } from "./obfeefrequency1code0enum";
import { ObFeeFrequency1Code1Enum } from "./obfeefrequency1code1enum";
import { ObInterestRateType1Code0Enum } from "./obinterestratetype1code0enum";
import { ObOverdraftFeeType1CodeEnum } from "./oboverdraftfeetype1codeenum";
import { ObOtherCodeType14 } from "./obothercodetype14";
import { ObOtherCodeType13 } from "./obothercodetype13";
import { ObpcaData1 } from "./obpcadata1";
import { Links } from "./links";
import { Meta } from "./meta";
export declare enum ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetDestinationEnum {
    Inot = "INOT",
    Inpa = "INPA",
    Insc = "INSC"
}
export declare enum ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandApplicationFrequencyEnum {
    Fqat = "FQAT",
    Fqdy = "FQDY",
    Fqhy = "FQHY",
    Fqmy = "FQMY",
    Fqot = "FQOT",
    Fqqy = "FQQY",
    Fqsd = "FQSD",
    Fqwy = "FQWY",
    Fqyy = "FQYY"
}
export declare enum ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateTypeEnum {
    Inbb = "INBB",
    Infr = "INFR",
    Ingr = "INGR",
    Inlr = "INLR",
    Inne = "INNE",
    Inot = "INOT"
}
export declare enum ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandCalculationFrequencyEnum {
    Fqat = "FQAT",
    Fqdy = "FQDY",
    Fqhy = "FQHY",
    Fqmy = "FQMY",
    Fqot = "FQOT",
    Fqqy = "FQQY",
    Fqsd = "FQSD",
    Fqwy = "FQWY",
    Fqyy = "FQYY"
}
export declare enum ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum {
    Inba = "INBA",
    Inti = "INTI",
    Inwh = "INWH"
}
/**
 * Other interest rate types which are not available in the standard code list
**/
export declare class ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandOtherBankInterestType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Tier Band Details
**/
export declare class ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBand extends SpeakeasyBase {
    aer: string;
    applicationFrequency: ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandApplicationFrequencyEnum;
    bankInterestRate?: string;
    bankInterestRateType?: ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateTypeEnum;
    calculationFrequency?: ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandCalculationFrequencyEnum;
    depositInterestAppliedCoverage?: ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum;
    fixedVariableInterestRateType: ObInterestFixedVariableType1CodeEnum;
    identification?: string;
    notes?: string[];
    otherApplicationFrequency?: ObOtherCodeType11;
    otherBankInterestType?: ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandOtherBankInterestType;
    otherCalculationFrequency?: ObOtherCodeType12;
    tierValueMaximum?: string;
    tierValueMinimum: string;
}
export declare enum ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandMethodEnum {
    Inba = "INBA",
    Inti = "INTI",
    Inwh = "INWH"
}
/**
 * The group of tiers or bands for which credit interest can be applied.
**/
export declare class ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSet extends SpeakeasyBase {
    calculationMethod?: ObInterestCalculationMethod1CodeEnum;
    destination: ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetDestinationEnum;
    notes?: string[];
    otherCalculationMethod?: ObOtherCodeType10;
    otherDestination?: ObOtherCodeType10;
    tierBand: ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBand[];
    tierBandMethod: ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandMethodEnum;
}
/**
 * Details about the interest that may be payable to the Account holders
**/
export declare class ObReadProduct2DataProductOtherProductTypeCreditInterest extends SpeakeasyBase {
    tierBandSet: ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSet[];
}
export declare enum ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum {
    Fepf = "FEPF",
    Ftot = "FTOT",
    Fyaf = "FYAF",
    Fyam = "FYAM",
    Fyaq = "FYAQ",
    Fycp = "FYCP",
    Fydb = "FYDB",
    Fymi = "FYMI",
    Fyxx = "FYXX"
}
/**
 * Other fee type code which is not available in the standard code set
**/
export declare class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Details about any caps (minimum/maximum charges) that apply to a particular fee/charge
**/
export declare class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCap extends SpeakeasyBase {
    cappingPeriod?: ObFeeFrequency1Code4Enum;
    feeCapAmount?: string;
    feeCapOccurrence?: number;
    feeType: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum[];
    minMaxType: ObMinMaxType1CodeEnum;
    notes?: string[];
    otherFeeType?: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType[];
}
/**
 * Other fees/charges details
**/
export declare class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetail extends SpeakeasyBase {
    applicationFrequency: ObFeeFrequency1Code2Enum;
    calculationFrequency: ObFeeFrequency1Code3Enum;
    feeAmount?: string;
    feeRate?: string;
    feeRateType?: ObInterestRateType1Code1Enum;
    feeType: ObFeeType1CodeEnum;
    negotiableIndicator?: boolean;
    notes?: string[];
    otherApplicationFrequency?: ObOtherCodeType16;
    otherCalculationFrequency?: ObOtherCodeType17;
    otherFeeRateType?: ObOtherCodeType15;
    otherFeeType?: ObOtherFeeChargeDetailType;
}
/**
 * Contains details of fees and charges which are not associated with either LoanRepayment or features/benefits
**/
export declare class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesCharges extends SpeakeasyBase {
    loanInterestFeeChargeCap?: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCap[];
    loanInterestFeeChargeDetail: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetail[];
}
export declare enum ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum {
    Fepf = "FEPF",
    Ftot = "FTOT",
    Fyaf = "FYAF",
    Fyam = "FYAM",
    Fyaq = "FYAQ",
    Fycp = "FYCP",
    Fydb = "FYDB",
    Fymi = "FYMI",
    Fyxx = "FYXX"
}
/**
 * Other fee type code which is not available in the standard code set
**/
export declare class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Details about any caps (minimum/maximum charges) that apply to a particular fee/charge
**/
export declare class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCap extends SpeakeasyBase {
    cappingPeriod?: ObFeeFrequency1Code4Enum;
    feeCapAmount?: string;
    feeCapOccurrence?: number;
    feeType: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum[];
    minMaxType: ObMinMaxType1CodeEnum;
    notes?: string[];
    otherFeeType?: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType[];
}
/**
 * Other fees/charges details
**/
export declare class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeDetail extends SpeakeasyBase {
    applicationFrequency: ObFeeFrequency1Code2Enum;
    calculationFrequency: ObFeeFrequency1Code3Enum;
    feeAmount?: string;
    feeRate?: string;
    feeRateType?: ObInterestRateType1Code1Enum;
    feeType: ObFeeType1CodeEnum;
    negotiableIndicator?: boolean;
    notes?: string[];
    otherApplicationFrequency?: ObOtherCodeType16;
    otherCalculationFrequency?: ObOtherCodeType17;
    otherFeeRateType?: ObOtherCodeType15;
    otherFeeType?: ObOtherFeeChargeDetailType;
}
/**
 * Contains details of fees and charges which are not associated with either LoanRepayment or features/benefits
**/
export declare class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesCharges extends SpeakeasyBase {
    loanInterestFeeChargeCap?: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCap[];
    loanInterestFeeChargeDetail: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeDetail[];
}
export declare enum ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanProviderInterestRateTypeEnum {
    Inbb = "INBB",
    Infr = "INFR",
    Ingr = "INGR",
    Inlr = "INLR",
    Inne = "INNE",
    Inot = "INOT"
}
export declare enum ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriodEnum {
    Pact = "PACT",
    Pday = "PDAY",
    Phyr = "PHYR",
    Pmth = "PMTH",
    Pqtr = "PQTR",
    Pwek = "PWEK",
    Pyer = "PYER"
}
export declare enum ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMinTermPeriodEnum {
    Pact = "PACT",
    Pday = "PDAY",
    Phyr = "PHYR",
    Pmth = "PMTH",
    Pqtr = "PQTR",
    Pwek = "PWEK",
    Pyer = "PYER"
}
/**
 * Other loan interest rate types which are not available in the standard code list
**/
export declare class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandOtherLoanProviderInterestRateType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Tier Band Details
**/
export declare class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBand extends SpeakeasyBase {
    fixedVariableInterestRateType: ObInterestFixedVariableType1CodeEnum;
    identification?: string;
    loanInterestFeesCharges?: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesCharges[];
    loanProviderInterestRate?: string;
    loanProviderInterestRateType?: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanProviderInterestRateTypeEnum;
    maxTermPeriod?: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriodEnum;
    minTermPeriod: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMinTermPeriodEnum;
    notes?: string[];
    otherLoanProviderInterestRateType?: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandOtherLoanProviderInterestRateType;
    repApr: string;
    tierValueMaxTerm?: number;
    tierValueMaximum?: string;
    tierValueMinTerm: number;
    tierValueMinimum: string;
}
export declare enum ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetTierBandMethodEnum {
    Inba = "INBA",
    Inti = "INTI",
    Inwh = "INWH"
}
/**
 * The group of tiers or bands for which debit interest can be applied.
**/
export declare class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSet extends SpeakeasyBase {
    calculationMethod: ObInterestCalculationMethod1CodeEnum;
    identification?: string;
    loanInterestFeesCharges?: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesCharges[];
    loanInterestTierBand: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBand[];
    notes?: string[];
    otherCalculationMethod?: ObOtherCodeType10;
    tierBandMethod: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetTierBandMethodEnum;
}
/**
 * Details about the interest that may be payable to the SME Loan holders
**/
export declare class ObReadProduct2DataProductOtherProductTypeLoanInterest extends SpeakeasyBase {
    loanInterestTierBandSet: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSet[];
    notes?: string[];
}
export declare enum ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapFeeTypeEnum {
    Fepf = "FEPF",
    Ftot = "FTOT",
    Fyaf = "FYAF",
    Fyam = "FYAM",
    Fyaq = "FYAQ",
    Fycp = "FYCP",
    Fydb = "FYDB",
    Fymi = "FYMI",
    Fyxx = "FYXX"
}
/**
 * Other fee type code which is not available in the standard code set
**/
export declare class ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapOtherFeeType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Details about any caps (maximum charges) that apply to a particular or group of fee/charge
**/
export declare class ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCap extends SpeakeasyBase {
    cappingPeriod?: ObPeriod1CodeEnum;
    feeCapAmount?: string;
    feeCapOccurrence?: number;
    feeType: ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapFeeTypeEnum[];
    minMaxType: ObMinMaxType1CodeEnum;
    notes?: string[];
    otherFeeType?: ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapOtherFeeType[];
}
/**
 * Range or amounts or rates for which the fee/charge applies
**/
export declare class ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeApplicableRange extends SpeakeasyBase {
    maximumAmount?: string;
    maximumRate?: string;
    minimumAmount?: string;
    minimumRate?: string;
}
export declare enum ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum {
    Fepf = "FEPF",
    Ftot = "FTOT",
    Fyaf = "FYAF",
    Fyam = "FYAM",
    Fyaq = "FYAQ",
    Fycp = "FYCP",
    Fydb = "FYDB",
    Fymi = "FYMI",
    Fyxx = "FYXX"
}
/**
 * Other fee type code which is not available in the standard code set
**/
export declare class ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Details about any caps (maximum charges) that apply to a particular or group of fee/charge
**/
export declare class ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCap extends SpeakeasyBase {
    cappingPeriod?: ObPeriod1CodeEnum;
    feeCapAmount?: string;
    feeCapOccurrence?: number;
    feeType: ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum[];
    minMaxType: ObMinMaxType1CodeEnum;
    notes?: string[];
    otherFeeType?: ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType[];
}
/**
 * Other fees/charges details
**/
export declare class ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetail extends SpeakeasyBase {
    applicationFrequency: ObFeeFrequency1Code2Enum;
    calculationFrequency?: ObFeeFrequency1Code3Enum;
    feeAmount?: string;
    feeApplicableRange?: ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeApplicableRange;
    feeCategory: ObFeeCategory1CodeEnum;
    feeChargeCap?: ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCap[];
    feeRate?: string;
    feeRateType?: ObInterestRateType1Code1Enum;
    feeType: ObFeeType1CodeEnum;
    negotiableIndicator?: boolean;
    notes?: string[];
    otherApplicationFrequency?: ObOtherCodeType16;
    otherCalculationFrequency?: ObOtherCodeType17;
    otherFeeCategoryType?: ObOtherCodeType10;
    otherFeeRateType?: ObOtherCodeType18;
    otherFeeType?: ObOtherFeeChargeDetailType;
}
/**
 * Other tariff type which is not in the standard list.
**/
export declare class ObReadProduct2DataProductOtherProductTypeOtherFeesChargesOtherTariffType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
export declare enum ObReadProduct2DataProductOtherProductTypeOtherFeesChargesTariffTypeEnum {
    Ttel = "TTEL",
    Ttmx = "TTMX",
    Ttot = "TTOT"
}
/**
 * Contains details of fees and charges which are not associated with either Overdraft or features/benefits
**/
export declare class ObReadProduct2DataProductOtherProductTypeOtherFeesCharges extends SpeakeasyBase {
    feeChargeCap?: ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCap[];
    feeChargeDetail: ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetail[];
    otherTariffType?: ObReadProduct2DataProductOtherProductTypeOtherFeesChargesOtherTariffType;
    tariffName?: string;
    tariffType?: ObReadProduct2DataProductOtherProductTypeOtherFeesChargesTariffTypeEnum;
}
export declare enum ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum {
    Fbao = "FBAO",
    Fbar = "FBAR",
    Fbeb = "FBEB",
    Fbit = "FBIT",
    Fbor = "FBOR",
    Fbos = "FBOS",
    Fbsc = "FBSC",
    Fbto = "FBTO",
    Fbub = "FBUB",
    Fbut = "FBUT",
    Ftot = "FTOT",
    Ftut = "FTUT"
}
/**
 * Other fee type code which is not available in the standard code set
**/
export declare class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
**/
export declare class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap extends SpeakeasyBase {
    cappingPeriod?: ObPeriod1CodeEnum;
    feeCapAmount?: string;
    feeCapOccurrence?: number;
    feeType: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum[];
    minMaxType: ObMinMaxType1CodeEnum;
    notes?: string[];
    otherFeeType?: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType[];
}
export declare enum ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum {
    Fbao = "FBAO",
    Fbar = "FBAR",
    Fbeb = "FBEB",
    Fbit = "FBIT",
    Fbor = "FBOR",
    Fbos = "FBOS",
    Fbsc = "FBSC",
    Fbto = "FBTO",
    Fbub = "FBUB",
    Fbut = "FBUT",
    Ftot = "FTOT",
    Ftut = "FTUT"
}
/**
 * Other fee type code which is not available in the standard code set
**/
export declare class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
**/
export declare class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap extends SpeakeasyBase {
    cappingPeriod?: ObPeriod1CodeEnum;
    feeCapAmount?: string;
    feeCapOccurrence?: number;
    feeType: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum[];
    minMaxType: ObMinMaxType1CodeEnum;
    notes?: string[];
    otherFeeType?: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType[];
}
/**
 * Details about the fees/charges
**/
export declare class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail extends SpeakeasyBase {
    applicationFrequency: ObFeeFrequency1Code0Enum;
    calculationFrequency?: ObFeeFrequency1Code1Enum;
    feeAmount?: string;
    feeRate?: string;
    feeRateType?: ObInterestRateType1Code0Enum;
    feeType: ObOverdraftFeeType1CodeEnum;
    incrementalBorrowingAmount?: string;
    negotiableIndicator?: boolean;
    notes?: string[];
    otherApplicationFrequency?: ObOtherCodeType11;
    otherCalculationFrequency?: ObOtherCodeType12;
    otherFeeRateType?: ObOtherCodeType14;
    otherFeeType?: ObOtherCodeType13;
    overdraftControlIndicator?: boolean;
    overdraftFeeChargeCap?: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap[];
}
/**
 * Overdraft fees and charges details
**/
export declare class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesCharges extends SpeakeasyBase {
    overdraftFeeChargeCap?: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap[];
    overdraftFeeChargeDetail: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail[];
}
export declare enum ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodEnum {
    Pact = "PACT",
    Pday = "PDAY",
    Phyr = "PHYR",
    Pmth = "PMTH",
    Pqtr = "PQTR",
    Pwek = "PWEK",
    Pyer = "PYER"
}
export declare enum ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum {
    Fbao = "FBAO",
    Fbar = "FBAR",
    Fbeb = "FBEB",
    Fbit = "FBIT",
    Fbor = "FBOR",
    Fbos = "FBOS",
    Fbsc = "FBSC",
    Fbto = "FBTO",
    Fbub = "FBUB",
    Fbut = "FBUT",
    Ftot = "FTOT",
    Ftut = "FTUT"
}
/**
 * Other fee type code which is not available in the standard code set
**/
export declare class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
**/
export declare class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap extends SpeakeasyBase {
    cappingPeriod?: ObPeriod1CodeEnum;
    feeCapAmount?: string;
    feeCapOccurrence?: number;
    feeType: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum[];
    minMaxType: ObMinMaxType1CodeEnum;
    notes?: string[];
    otherFeeType?: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType[];
}
export declare enum ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum {
    Fbao = "FBAO",
    Fbar = "FBAR",
    Fbeb = "FBEB",
    Fbit = "FBIT",
    Fbor = "FBOR",
    Fbos = "FBOS",
    Fbsc = "FBSC",
    Fbto = "FBTO",
    Fbub = "FBUB",
    Fbut = "FBUT",
    Ftot = "FTOT",
    Ftut = "FTUT"
}
/**
 * Other fee type code which is not available in the standard code set
**/
export declare class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
**/
export declare class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap extends SpeakeasyBase {
    cappingPeriod?: ObPeriod1CodeEnum;
    feeCapAmount?: string;
    feeCapOccurrence?: number;
    feeType: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum[];
    minMaxType: ObMinMaxType1CodeEnum;
    notes?: string[];
    otherFeeType?: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType[];
}
/**
 * Details about the fees/charges
**/
export declare class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail extends SpeakeasyBase {
    applicationFrequency: ObFeeFrequency1Code0Enum;
    calculationFrequency?: ObFeeFrequency1Code1Enum;
    feeAmount?: string;
    feeRate?: string;
    feeRateType?: ObInterestRateType1Code0Enum;
    feeType: ObOverdraftFeeType1CodeEnum;
    incrementalBorrowingAmount?: string;
    negotiableIndicator?: boolean;
    notes?: string[];
    otherApplicationFrequency?: ObOtherCodeType11;
    otherCalculationFrequency?: ObOtherCodeType12;
    otherFeeRateType?: ObOtherCodeType14;
    otherFeeType?: ObOtherCodeType13;
    overdraftControlIndicator?: boolean;
    overdraftFeeChargeCap?: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap[];
}
/**
 * Overdraft fees and charges
**/
export declare class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges extends SpeakeasyBase {
    overdraftFeeChargeCap?: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap[];
    overdraftFeeChargeDetail: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail[];
}
export declare enum ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum {
    Inba = "INBA",
    Inti = "INTI",
    Inwh = "INWH"
}
/**
 * Provides overdraft details for a specific tier or band
**/
export declare class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBand extends SpeakeasyBase {
    agreementLengthMax?: number;
    agreementLengthMin?: number;
    agreementPeriod?: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodEnum;
    bankGuaranteedIndicator?: boolean;
    ear?: string;
    identification?: string;
    notes?: string[];
    overdraftFeesCharges?: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges[];
    overdraftInterestChargingCoverage?: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum;
    tierValueMax?: string;
    tierValueMin: string;
}
export declare enum ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTypeEnum {
    Ovco = "OVCO",
    Ovod = "OVOD",
    Ovot = "OVOT"
}
export declare enum ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetTierBandMethodEnum {
    Inba = "INBA",
    Inti = "INTI",
    Inwh = "INWH"
}
/**
 * Tier band set details
**/
export declare class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSet extends SpeakeasyBase {
    authorisedIndicator?: boolean;
    bufferAmount?: string;
    identification?: string;
    notes?: string[];
    overdraftFeesCharges?: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesCharges[];
    overdraftTierBand: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBand[];
    overdraftType?: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTypeEnum;
    tierBandMethod: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetTierBandMethodEnum;
}
/**
 * Borrowing details
**/
export declare class ObReadProduct2DataProductOtherProductTypeOverdraft extends SpeakeasyBase {
    notes?: string[];
    overdraftTierBandSet: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSet[];
}
export declare enum ObReadProduct2DataProductOtherProductTypeProductDetailsFeeFreeLengthPeriodEnum {
    Pact = "PACT",
    Pday = "PDAY",
    Phyr = "PHYR",
    Pmth = "PMTH",
    Pqtr = "PQTR",
    Pwek = "PWEK",
    Pyer = "PYER"
}
export declare enum ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum {
    Geas = "GEAS",
    Geba = "GEBA",
    Gebr = "GEBR",
    Gebu = "GEBU",
    Geci = "GECI",
    Gecs = "GECS",
    Gefb = "GEFB",
    Gefg = "GEFG",
    Geg = "GEG",
    Gegr = "GEGR",
    Gegs = "GEGS",
    Geot = "GEOT",
    Geov = "GEOV",
    Gepa = "GEPA",
    Gepr = "GEPR",
    Gere = "GERE",
    Gest = "GEST",
    Geya = "GEYA",
    Geyo = "GEYO",
    Psca = "PSCA",
    Pses = "PSES",
    Psnc = "PSNC",
    Psnp = "PSNP",
    Psrg = "PSRG",
    Psss = "PSSS",
    Psst = "PSST",
    Pssw = "PSSW"
}
export declare class ObReadProduct2DataProductOtherProductTypeProductDetails extends SpeakeasyBase {
    feeFreeLength?: number;
    feeFreeLengthPeriod?: ObReadProduct2DataProductOtherProductTypeProductDetailsFeeFreeLengthPeriodEnum;
    monthlyMaximumCharge?: string;
    notes?: string[];
    otherSegment?: ObOtherCodeType10;
    segment?: ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum[];
}
export declare enum ObReadProduct2DataProductOtherProductTypeRepaymentAmountTypeEnum {
    Rabd = "RABD",
    Rabl = "RABL",
    Raci = "RACI",
    Rafc = "RAFC",
    Raio = "RAIO",
    Ralt = "RALT",
    Usot = "USOT"
}
/**
 * Other amount type which is not in the standard code list
**/
export declare class ObReadProduct2DataProductOtherProductTypeRepaymentOtherAmountType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Other repayment frequency which is not in the standard code list
**/
export declare class ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentFrequency extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * Other repayment type which is not in the standard code list
**/
export declare class ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
export declare enum ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapFeeTypeEnum {
    Fepf = "FEPF",
    Ftot = "FTOT",
    Fyaf = "FYAF",
    Fyam = "FYAM",
    Fyaq = "FYAQ",
    Fycp = "FYCP",
    Fydb = "FYDB",
    Fymi = "FYMI",
    Fyxx = "FYXX"
}
/**
 * Other fee type code which is not available in the standard code set
**/
export declare class ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapOtherFeeType extends SpeakeasyBase {
    code?: string;
    description: string;
    name: string;
}
/**
 * RepaymentFeeChargeCap sets daily, weekly, monthly, yearly limits on the fees that are charged
**/
export declare class ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCap extends SpeakeasyBase {
    cappingPeriod?: ObPeriod1CodeEnum;
    feeCapAmount?: string;
    feeCapOccurrence?: number;
    feeType: ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapFeeTypeEnum[];
    minMaxType: ObMinMaxType1CodeEnum;
    notes?: string[];
    otherFeeType?: ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapOtherFeeType[];
}
/**
 * Details about specific fees/charges that are applied for repayment
**/
export declare class ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetail extends SpeakeasyBase {
    applicationFrequency: ObFeeFrequency1Code2Enum;
    calculationFrequency: ObFeeFrequency1Code3Enum;
    feeAmount?: string;
    feeRate?: string;
    feeRateType?: ObInterestRateType1Code1Enum;
    feeType: ObFeeType1CodeEnum;
    negotiableIndicator?: boolean;
    notes?: string[];
    otherApplicationFrequency?: ObOtherCodeType16;
    otherCalculationFrequency?: ObOtherCodeType17;
    otherFeeRateType?: ObOtherCodeType18;
    otherFeeType?: ObOtherFeeChargeDetailType;
}
/**
 * Applicable fee/charges for repayment such as prepayment, full early repayment or non repayment.
**/
export declare class ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeCharges extends SpeakeasyBase {
    repaymentFeeChargeCap?: ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCap[];
    repaymentFeeChargeDetail: ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetail[];
}
export declare enum ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFrequencyEnum {
    Smda = "SMDA",
    Smfl = "SMFL",
    Smfo = "SMFO",
    Smhy = "SMHY",
    Smmo = "SMMO",
    Smot = "SMOT",
    Smqu = "SMQU",
    Smwe = "SMWE",
    Smye = "SMYE"
}
export declare enum ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHolidayMaxHolidayPeriodEnum {
    Pact = "PACT",
    Pday = "PDAY",
    Phyr = "PHYR",
    Pmth = "PMTH",
    Pqtr = "PQTR",
    Pwek = "PWEK",
    Pyer = "PYER"
}
/**
 * Details of capital repayment holiday if any
**/
export declare class ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHoliday extends SpeakeasyBase {
    maxHolidayLength?: number;
    maxHolidayPeriod?: ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHolidayMaxHolidayPeriodEnum;
    notes?: string[];
}
export declare enum ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentTypeEnum {
    Usba = "USBA",
    Usbu = "USBU",
    Usci = "USCI",
    Uscs = "USCS",
    User = "USER",
    Usfa = "USFA",
    Usfb = "USFB",
    Usfi = "USFI",
    Usio = "USIO",
    Usot = "USOT",
    Uspf = "USPF",
    Usrw = "USRW",
    Ussl = "USSL"
}
/**
 * Repayment details of the Loan product
**/
export declare class ObReadProduct2DataProductOtherProductTypeRepayment extends SpeakeasyBase {
    amountType?: ObReadProduct2DataProductOtherProductTypeRepaymentAmountTypeEnum;
    notes?: string[];
    otherAmountType?: ObReadProduct2DataProductOtherProductTypeRepaymentOtherAmountType;
    otherRepaymentFrequency?: ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentFrequency;
    otherRepaymentType?: ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentType;
    repaymentFeeCharges?: ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeCharges;
    repaymentFrequency?: ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFrequencyEnum;
    repaymentHoliday?: ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHoliday[];
    repaymentType?: ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentTypeEnum;
}
/**
 * Other product type details associated with the account.
**/
export declare class ObReadProduct2DataProductOtherProductType extends SpeakeasyBase {
    creditInterest?: ObReadProduct2DataProductOtherProductTypeCreditInterest;
    description: string;
    loanInterest?: ObReadProduct2DataProductOtherProductTypeLoanInterest;
    name: string;
    otherFeesCharges?: ObReadProduct2DataProductOtherProductTypeOtherFeesCharges[];
    overdraft?: ObReadProduct2DataProductOtherProductTypeOverdraft;
    productDetails?: ObReadProduct2DataProductOtherProductTypeProductDetails;
    repayment?: ObReadProduct2DataProductOtherProductTypeRepayment;
    supplementaryData?: Map<string, any>;
}
export declare enum ObReadProduct2DataProductProductTypeEnum {
    BusinessCurrentAccount = "BusinessCurrentAccount",
    CommercialCreditCard = "CommercialCreditCard",
    Other = "Other",
    PersonalCurrentAccount = "PersonalCurrentAccount",
    SmeLoan = "SMELoan"
}
/**
 * Product details associated with the Account
**/
export declare class ObReadProduct2DataProduct extends SpeakeasyBase {
    accountId: string;
    bca?: ObbcaData1;
    marketingStateId?: string;
    otherProductType?: ObReadProduct2DataProductOtherProductType;
    pca?: ObpcaData1;
    productId?: string;
    productName?: string;
    productType: ObReadProduct2DataProductProductTypeEnum;
    secondaryProductId?: string;
}
/**
 * Aligning with the read write specs structure.
**/
export declare class ObReadProduct2Data extends SpeakeasyBase {
    product?: ObReadProduct2DataProduct[];
}
/**
 * Product details of Other Product which is not avaiable in the standard list
**/
export declare class ObReadProduct2 extends SpeakeasyBase {
    data: ObReadProduct2Data;
    links?: Links;
    meta?: Meta;
}
