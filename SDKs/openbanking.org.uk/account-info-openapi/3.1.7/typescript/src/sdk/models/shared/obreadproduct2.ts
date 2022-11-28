import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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


export enum ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetDestinationEnum {
    Inot = "INOT",
    Inpa = "INPA",
    Insc = "INSC"
}

export enum ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandApplicationFrequencyEnum {
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

export enum ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateTypeEnum {
    Inbb = "INBB",
    Infr = "INFR",
    Ingr = "INGR",
    Inlr = "INLR",
    Inne = "INNE",
    Inot = "INOT"
}

export enum ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandCalculationFrequencyEnum {
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

export enum ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum {
    Inba = "INBA",
    Inti = "INTI",
    Inwh = "INWH"
}


// ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandOtherBankInterestType
/** 
 * Other interest rate types which are not available in the standard code list
**/
export class ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandOtherBankInterestType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBand
/** 
 * Tier Band Details
**/
export class ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBand extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AER" })
  aer: string;

  @SpeakeasyMetadata({ data: "json, name=ApplicationFrequency" })
  applicationFrequency: ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandApplicationFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=BankInterestRate" })
  bankInterestRate?: string;

  @SpeakeasyMetadata({ data: "json, name=BankInterestRateType" })
  bankInterestRateType?: ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=CalculationFrequency" })
  calculationFrequency?: ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandCalculationFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=DepositInterestAppliedCoverage" })
  depositInterestAppliedCoverage?: ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum;

  @SpeakeasyMetadata({ data: "json, name=FixedVariableInterestRateType" })
  fixedVariableInterestRateType: ObInterestFixedVariableType1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification?: string;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherApplicationFrequency" })
  otherApplicationFrequency?: ObOtherCodeType11;

  @SpeakeasyMetadata({ data: "json, name=OtherBankInterestType" })
  otherBankInterestType?: ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandOtherBankInterestType;

  @SpeakeasyMetadata({ data: "json, name=OtherCalculationFrequency" })
  otherCalculationFrequency?: ObOtherCodeType12;

  @SpeakeasyMetadata({ data: "json, name=TierValueMaximum" })
  tierValueMaximum?: string;

  @SpeakeasyMetadata({ data: "json, name=TierValueMinimum" })
  tierValueMinimum: string;
}

export enum ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandMethodEnum {
    Inba = "INBA",
    Inti = "INTI",
    Inwh = "INWH"
}


// ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSet
/** 
 * The group of tiers or bands for which credit interest can be applied.
**/
export class ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CalculationMethod" })
  calculationMethod?: ObInterestCalculationMethod1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Destination" })
  destination: ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetDestinationEnum;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherCalculationMethod" })
  otherCalculationMethod?: ObOtherCodeType10;

  @SpeakeasyMetadata({ data: "json, name=OtherDestination" })
  otherDestination?: ObOtherCodeType10;

  @SpeakeasyMetadata({ data: "json, name=TierBand", elemType: ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBand })
  tierBand: ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBand[];

  @SpeakeasyMetadata({ data: "json, name=TierBandMethod" })
  tierBandMethod: ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandMethodEnum;
}


// ObReadProduct2DataProductOtherProductTypeCreditInterest
/** 
 * Details about the interest that may be payable to the Account holders
**/
export class ObReadProduct2DataProductOtherProductTypeCreditInterest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TierBandSet", elemType: ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSet })
  tierBandSet: ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSet[];
}

export enum ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum {
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


// ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType
/** 
 * Other fee type code which is not available in the standard code set
**/
export class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCap
/** 
 * Details about any caps (minimum/maximum charges) that apply to a particular fee/charge
**/
export class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CappingPeriod" })
  cappingPeriod?: ObFeeFrequency1Code4Enum;

  @SpeakeasyMetadata({ data: "json, name=FeeCapAmount" })
  feeCapAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" })
  feeCapOccurrence?: number;

  @SpeakeasyMetadata({ data: "json, name=FeeType" })
  feeType: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=MinMaxType" })
  minMaxType: ObMinMaxType1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType })
  otherFeeType?: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType[];
}


// ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetail
/** 
 * Other fees/charges details
**/
export class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationFrequency" })
  applicationFrequency: ObFeeFrequency1Code2Enum;

  @SpeakeasyMetadata({ data: "json, name=CalculationFrequency" })
  calculationFrequency: ObFeeFrequency1Code3Enum;

  @SpeakeasyMetadata({ data: "json, name=FeeAmount" })
  feeAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeRate" })
  feeRate?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeRateType" })
  feeRateType?: ObInterestRateType1Code1Enum;

  @SpeakeasyMetadata({ data: "json, name=FeeType" })
  feeType: ObFeeType1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=NegotiableIndicator" })
  negotiableIndicator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherApplicationFrequency" })
  otherApplicationFrequency?: ObOtherCodeType16;

  @SpeakeasyMetadata({ data: "json, name=OtherCalculationFrequency" })
  otherCalculationFrequency?: ObOtherCodeType17;

  @SpeakeasyMetadata({ data: "json, name=OtherFeeRateType" })
  otherFeeRateType?: ObOtherCodeType15;

  @SpeakeasyMetadata({ data: "json, name=OtherFeeType" })
  otherFeeType?: ObOtherFeeChargeDetailType;
}


// ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesCharges
/** 
 * Contains details of fees and charges which are not associated with either LoanRepayment or features/benefits
**/
export class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesCharges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LoanInterestFeeChargeCap", elemType: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCap })
  loanInterestFeeChargeCap?: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCap[];

  @SpeakeasyMetadata({ data: "json, name=LoanInterestFeeChargeDetail", elemType: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetail })
  loanInterestFeeChargeDetail: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetail[];
}

export enum ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum {
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


// ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType
/** 
 * Other fee type code which is not available in the standard code set
**/
export class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCap
/** 
 * Details about any caps (minimum/maximum charges) that apply to a particular fee/charge
**/
export class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CappingPeriod" })
  cappingPeriod?: ObFeeFrequency1Code4Enum;

  @SpeakeasyMetadata({ data: "json, name=FeeCapAmount" })
  feeCapAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" })
  feeCapOccurrence?: number;

  @SpeakeasyMetadata({ data: "json, name=FeeType" })
  feeType: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=MinMaxType" })
  minMaxType: ObMinMaxType1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType })
  otherFeeType?: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType[];
}


// ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeDetail
/** 
 * Other fees/charges details
**/
export class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationFrequency" })
  applicationFrequency: ObFeeFrequency1Code2Enum;

  @SpeakeasyMetadata({ data: "json, name=CalculationFrequency" })
  calculationFrequency: ObFeeFrequency1Code3Enum;

  @SpeakeasyMetadata({ data: "json, name=FeeAmount" })
  feeAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeRate" })
  feeRate?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeRateType" })
  feeRateType?: ObInterestRateType1Code1Enum;

  @SpeakeasyMetadata({ data: "json, name=FeeType" })
  feeType: ObFeeType1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=NegotiableIndicator" })
  negotiableIndicator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherApplicationFrequency" })
  otherApplicationFrequency?: ObOtherCodeType16;

  @SpeakeasyMetadata({ data: "json, name=OtherCalculationFrequency" })
  otherCalculationFrequency?: ObOtherCodeType17;

  @SpeakeasyMetadata({ data: "json, name=OtherFeeRateType" })
  otherFeeRateType?: ObOtherCodeType15;

  @SpeakeasyMetadata({ data: "json, name=OtherFeeType" })
  otherFeeType?: ObOtherFeeChargeDetailType;
}


// ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesCharges
/** 
 * Contains details of fees and charges which are not associated with either LoanRepayment or features/benefits
**/
export class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesCharges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LoanInterestFeeChargeCap", elemType: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCap })
  loanInterestFeeChargeCap?: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCap[];

  @SpeakeasyMetadata({ data: "json, name=LoanInterestFeeChargeDetail", elemType: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeDetail })
  loanInterestFeeChargeDetail: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeDetail[];
}

export enum ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanProviderInterestRateTypeEnum {
    Inbb = "INBB",
    Infr = "INFR",
    Ingr = "INGR",
    Inlr = "INLR",
    Inne = "INNE",
    Inot = "INOT"
}

export enum ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriodEnum {
    Pact = "PACT",
    Pday = "PDAY",
    Phyr = "PHYR",
    Pmth = "PMTH",
    Pqtr = "PQTR",
    Pwek = "PWEK",
    Pyer = "PYER"
}

export enum ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMinTermPeriodEnum {
    Pact = "PACT",
    Pday = "PDAY",
    Phyr = "PHYR",
    Pmth = "PMTH",
    Pqtr = "PQTR",
    Pwek = "PWEK",
    Pyer = "PYER"
}


// ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandOtherLoanProviderInterestRateType
/** 
 * Other loan interest rate types which are not available in the standard code list
**/
export class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandOtherLoanProviderInterestRateType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBand
/** 
 * Tier Band Details
**/
export class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBand extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FixedVariableInterestRateType" })
  fixedVariableInterestRateType: ObInterestFixedVariableType1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification?: string;

  @SpeakeasyMetadata({ data: "json, name=LoanInterestFeesCharges", elemType: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesCharges })
  loanInterestFeesCharges?: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesCharges[];

  @SpeakeasyMetadata({ data: "json, name=LoanProviderInterestRate" })
  loanProviderInterestRate?: string;

  @SpeakeasyMetadata({ data: "json, name=LoanProviderInterestRateType" })
  loanProviderInterestRateType?: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanProviderInterestRateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=MaxTermPeriod" })
  maxTermPeriod?: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=MinTermPeriod" })
  minTermPeriod: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMinTermPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherLoanProviderInterestRateType" })
  otherLoanProviderInterestRateType?: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandOtherLoanProviderInterestRateType;

  @SpeakeasyMetadata({ data: "json, name=RepAPR" })
  repApr: string;

  @SpeakeasyMetadata({ data: "json, name=TierValueMaxTerm" })
  tierValueMaxTerm?: number;

  @SpeakeasyMetadata({ data: "json, name=TierValueMaximum" })
  tierValueMaximum?: string;

  @SpeakeasyMetadata({ data: "json, name=TierValueMinTerm" })
  tierValueMinTerm: number;

  @SpeakeasyMetadata({ data: "json, name=TierValueMinimum" })
  tierValueMinimum: string;
}

export enum ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetTierBandMethodEnum {
    Inba = "INBA",
    Inti = "INTI",
    Inwh = "INWH"
}


// ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSet
/** 
 * The group of tiers or bands for which debit interest can be applied.
**/
export class ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CalculationMethod" })
  calculationMethod: ObInterestCalculationMethod1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification?: string;

  @SpeakeasyMetadata({ data: "json, name=LoanInterestFeesCharges", elemType: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesCharges })
  loanInterestFeesCharges?: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesCharges[];

  @SpeakeasyMetadata({ data: "json, name=LoanInterestTierBand", elemType: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBand })
  loanInterestTierBand: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBand[];

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherCalculationMethod" })
  otherCalculationMethod?: ObOtherCodeType10;

  @SpeakeasyMetadata({ data: "json, name=TierBandMethod" })
  tierBandMethod: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetTierBandMethodEnum;
}


// ObReadProduct2DataProductOtherProductTypeLoanInterest
/** 
 * Details about the interest that may be payable to the SME Loan holders
**/
export class ObReadProduct2DataProductOtherProductTypeLoanInterest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LoanInterestTierBandSet", elemType: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSet })
  loanInterestTierBandSet: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSet[];

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];
}

export enum ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapFeeTypeEnum {
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


// ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapOtherFeeType
/** 
 * Other fee type code which is not available in the standard code set
**/
export class ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapOtherFeeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCap
/** 
 * Details about any caps (maximum charges) that apply to a particular or group of fee/charge
**/
export class ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CappingPeriod" })
  cappingPeriod?: ObPeriod1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeCapAmount" })
  feeCapAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" })
  feeCapOccurrence?: number;

  @SpeakeasyMetadata({ data: "json, name=FeeType" })
  feeType: ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapFeeTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=MinMaxType" })
  minMaxType: ObMinMaxType1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapOtherFeeType })
  otherFeeType?: ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapOtherFeeType[];
}


// ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeApplicableRange
/** 
 * Range or amounts or rates for which the fee/charge applies
**/
export class ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeApplicableRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaximumAmount" })
  maximumAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=MaximumRate" })
  maximumRate?: string;

  @SpeakeasyMetadata({ data: "json, name=MinimumAmount" })
  minimumAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=MinimumRate" })
  minimumRate?: string;
}

export enum ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum {
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


// ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType
/** 
 * Other fee type code which is not available in the standard code set
**/
export class ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCap
/** 
 * Details about any caps (maximum charges) that apply to a particular or group of fee/charge
**/
export class ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CappingPeriod" })
  cappingPeriod?: ObPeriod1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeCapAmount" })
  feeCapAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" })
  feeCapOccurrence?: number;

  @SpeakeasyMetadata({ data: "json, name=FeeType" })
  feeType: ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=MinMaxType" })
  minMaxType: ObMinMaxType1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType })
  otherFeeType?: ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType[];
}


// ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetail
/** 
 * Other fees/charges details
**/
export class ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationFrequency" })
  applicationFrequency: ObFeeFrequency1Code2Enum;

  @SpeakeasyMetadata({ data: "json, name=CalculationFrequency" })
  calculationFrequency?: ObFeeFrequency1Code3Enum;

  @SpeakeasyMetadata({ data: "json, name=FeeAmount" })
  feeAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeApplicableRange" })
  feeApplicableRange?: ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeApplicableRange;

  @SpeakeasyMetadata({ data: "json, name=FeeCategory" })
  feeCategory: ObFeeCategory1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeChargeCap", elemType: ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCap })
  feeChargeCap?: ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCap[];

  @SpeakeasyMetadata({ data: "json, name=FeeRate" })
  feeRate?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeRateType" })
  feeRateType?: ObInterestRateType1Code1Enum;

  @SpeakeasyMetadata({ data: "json, name=FeeType" })
  feeType: ObFeeType1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=NegotiableIndicator" })
  negotiableIndicator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherApplicationFrequency" })
  otherApplicationFrequency?: ObOtherCodeType16;

  @SpeakeasyMetadata({ data: "json, name=OtherCalculationFrequency" })
  otherCalculationFrequency?: ObOtherCodeType17;

  @SpeakeasyMetadata({ data: "json, name=OtherFeeCategoryType" })
  otherFeeCategoryType?: ObOtherCodeType10;

  @SpeakeasyMetadata({ data: "json, name=OtherFeeRateType" })
  otherFeeRateType?: ObOtherCodeType18;

  @SpeakeasyMetadata({ data: "json, name=OtherFeeType" })
  otherFeeType?: ObOtherFeeChargeDetailType;
}


// ObReadProduct2DataProductOtherProductTypeOtherFeesChargesOtherTariffType
/** 
 * Other tariff type which is not in the standard list.
**/
export class ObReadProduct2DataProductOtherProductTypeOtherFeesChargesOtherTariffType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}

export enum ObReadProduct2DataProductOtherProductTypeOtherFeesChargesTariffTypeEnum {
    Ttel = "TTEL",
    Ttmx = "TTMX",
    Ttot = "TTOT"
}


// ObReadProduct2DataProductOtherProductTypeOtherFeesCharges
/** 
 * Contains details of fees and charges which are not associated with either Overdraft or features/benefits
**/
export class ObReadProduct2DataProductOtherProductTypeOtherFeesCharges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FeeChargeCap", elemType: ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCap })
  feeChargeCap?: ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCap[];

  @SpeakeasyMetadata({ data: "json, name=FeeChargeDetail", elemType: ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetail })
  feeChargeDetail: ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetail[];

  @SpeakeasyMetadata({ data: "json, name=OtherTariffType" })
  otherTariffType?: ObReadProduct2DataProductOtherProductTypeOtherFeesChargesOtherTariffType;

  @SpeakeasyMetadata({ data: "json, name=TariffName" })
  tariffName?: string;

  @SpeakeasyMetadata({ data: "json, name=TariffType" })
  tariffType?: ObReadProduct2DataProductOtherProductTypeOtherFeesChargesTariffTypeEnum;
}

export enum ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum {
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


// ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType
/** 
 * Other fee type code which is not available in the standard code set
**/
export class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap
/** 
 * Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
**/
export class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CappingPeriod" })
  cappingPeriod?: ObPeriod1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeCapAmount" })
  feeCapAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" })
  feeCapOccurrence?: number;

  @SpeakeasyMetadata({ data: "json, name=FeeType" })
  feeType: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=MinMaxType" })
  minMaxType: ObMinMaxType1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType })
  otherFeeType?: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType[];
}

export enum ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum {
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


// ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType
/** 
 * Other fee type code which is not available in the standard code set
**/
export class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap
/** 
 * Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
**/
export class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CappingPeriod" })
  cappingPeriod?: ObPeriod1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeCapAmount" })
  feeCapAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" })
  feeCapOccurrence?: number;

  @SpeakeasyMetadata({ data: "json, name=FeeType" })
  feeType: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=MinMaxType" })
  minMaxType: ObMinMaxType1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType })
  otherFeeType?: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType[];
}


// ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail
/** 
 * Details about the fees/charges
**/
export class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationFrequency" })
  applicationFrequency: ObFeeFrequency1Code0Enum;

  @SpeakeasyMetadata({ data: "json, name=CalculationFrequency" })
  calculationFrequency?: ObFeeFrequency1Code1Enum;

  @SpeakeasyMetadata({ data: "json, name=FeeAmount" })
  feeAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeRate" })
  feeRate?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeRateType" })
  feeRateType?: ObInterestRateType1Code0Enum;

  @SpeakeasyMetadata({ data: "json, name=FeeType" })
  feeType: ObOverdraftFeeType1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=IncrementalBorrowingAmount" })
  incrementalBorrowingAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=NegotiableIndicator" })
  negotiableIndicator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherApplicationFrequency" })
  otherApplicationFrequency?: ObOtherCodeType11;

  @SpeakeasyMetadata({ data: "json, name=OtherCalculationFrequency" })
  otherCalculationFrequency?: ObOtherCodeType12;

  @SpeakeasyMetadata({ data: "json, name=OtherFeeRateType" })
  otherFeeRateType?: ObOtherCodeType14;

  @SpeakeasyMetadata({ data: "json, name=OtherFeeType" })
  otherFeeType?: ObOtherCodeType13;

  @SpeakeasyMetadata({ data: "json, name=OverdraftControlIndicator" })
  overdraftControlIndicator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=OverdraftFeeChargeCap", elemType: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap })
  overdraftFeeChargeCap?: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap[];
}


// ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesCharges
/** 
 * Overdraft fees and charges details
**/
export class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesCharges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OverdraftFeeChargeCap", elemType: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap })
  overdraftFeeChargeCap?: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap[];

  @SpeakeasyMetadata({ data: "json, name=OverdraftFeeChargeDetail", elemType: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail })
  overdraftFeeChargeDetail: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail[];
}

export enum ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodEnum {
    Pact = "PACT",
    Pday = "PDAY",
    Phyr = "PHYR",
    Pmth = "PMTH",
    Pqtr = "PQTR",
    Pwek = "PWEK",
    Pyer = "PYER"
}

export enum ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum {
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


// ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType
/** 
 * Other fee type code which is not available in the standard code set
**/
export class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap
/** 
 * Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
**/
export class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CappingPeriod" })
  cappingPeriod?: ObPeriod1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeCapAmount" })
  feeCapAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" })
  feeCapOccurrence?: number;

  @SpeakeasyMetadata({ data: "json, name=FeeType" })
  feeType: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=MinMaxType" })
  minMaxType: ObMinMaxType1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType })
  otherFeeType?: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType[];
}

export enum ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum {
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


// ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType
/** 
 * Other fee type code which is not available in the standard code set
**/
export class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap
/** 
 * Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
**/
export class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CappingPeriod" })
  cappingPeriod?: ObPeriod1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeCapAmount" })
  feeCapAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" })
  feeCapOccurrence?: number;

  @SpeakeasyMetadata({ data: "json, name=FeeType" })
  feeType: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=MinMaxType" })
  minMaxType: ObMinMaxType1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType })
  otherFeeType?: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType[];
}


// ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail
/** 
 * Details about the fees/charges
**/
export class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationFrequency" })
  applicationFrequency: ObFeeFrequency1Code0Enum;

  @SpeakeasyMetadata({ data: "json, name=CalculationFrequency" })
  calculationFrequency?: ObFeeFrequency1Code1Enum;

  @SpeakeasyMetadata({ data: "json, name=FeeAmount" })
  feeAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeRate" })
  feeRate?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeRateType" })
  feeRateType?: ObInterestRateType1Code0Enum;

  @SpeakeasyMetadata({ data: "json, name=FeeType" })
  feeType: ObOverdraftFeeType1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=IncrementalBorrowingAmount" })
  incrementalBorrowingAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=NegotiableIndicator" })
  negotiableIndicator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherApplicationFrequency" })
  otherApplicationFrequency?: ObOtherCodeType11;

  @SpeakeasyMetadata({ data: "json, name=OtherCalculationFrequency" })
  otherCalculationFrequency?: ObOtherCodeType12;

  @SpeakeasyMetadata({ data: "json, name=OtherFeeRateType" })
  otherFeeRateType?: ObOtherCodeType14;

  @SpeakeasyMetadata({ data: "json, name=OtherFeeType" })
  otherFeeType?: ObOtherCodeType13;

  @SpeakeasyMetadata({ data: "json, name=OverdraftControlIndicator" })
  overdraftControlIndicator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=OverdraftFeeChargeCap", elemType: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap })
  overdraftFeeChargeCap?: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap[];
}


// ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges
/** 
 * Overdraft fees and charges
**/
export class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OverdraftFeeChargeCap", elemType: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap })
  overdraftFeeChargeCap?: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap[];

  @SpeakeasyMetadata({ data: "json, name=OverdraftFeeChargeDetail", elemType: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail })
  overdraftFeeChargeDetail: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail[];
}

export enum ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum {
    Inba = "INBA",
    Inti = "INTI",
    Inwh = "INWH"
}


// ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBand
/** 
 * Provides overdraft details for a specific tier or band
**/
export class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBand extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AgreementLengthMax" })
  agreementLengthMax?: number;

  @SpeakeasyMetadata({ data: "json, name=AgreementLengthMin" })
  agreementLengthMin?: number;

  @SpeakeasyMetadata({ data: "json, name=AgreementPeriod" })
  agreementPeriod?: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=BankGuaranteedIndicator" })
  bankGuaranteedIndicator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EAR" })
  ear?: string;

  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification?: string;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OverdraftFeesCharges", elemType: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges })
  overdraftFeesCharges?: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges[];

  @SpeakeasyMetadata({ data: "json, name=OverdraftInterestChargingCoverage" })
  overdraftInterestChargingCoverage?: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum;

  @SpeakeasyMetadata({ data: "json, name=TierValueMax" })
  tierValueMax?: string;

  @SpeakeasyMetadata({ data: "json, name=TierValueMin" })
  tierValueMin: string;
}

export enum ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTypeEnum {
    Ovco = "OVCO",
    Ovod = "OVOD",
    Ovot = "OVOT"
}

export enum ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetTierBandMethodEnum {
    Inba = "INBA",
    Inti = "INTI",
    Inwh = "INWH"
}


// ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSet
/** 
 * Tier band set details
**/
export class ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthorisedIndicator" })
  authorisedIndicator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=BufferAmount" })
  bufferAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification?: string;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OverdraftFeesCharges", elemType: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesCharges })
  overdraftFeesCharges?: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesCharges[];

  @SpeakeasyMetadata({ data: "json, name=OverdraftTierBand", elemType: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBand })
  overdraftTierBand: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBand[];

  @SpeakeasyMetadata({ data: "json, name=OverdraftType" })
  overdraftType?: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=TierBandMethod" })
  tierBandMethod: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetTierBandMethodEnum;
}


// ObReadProduct2DataProductOtherProductTypeOverdraft
/** 
 * Borrowing details
**/
export class ObReadProduct2DataProductOtherProductTypeOverdraft extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OverdraftTierBandSet", elemType: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSet })
  overdraftTierBandSet: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSet[];
}

export enum ObReadProduct2DataProductOtherProductTypeProductDetailsFeeFreeLengthPeriodEnum {
    Pact = "PACT",
    Pday = "PDAY",
    Phyr = "PHYR",
    Pmth = "PMTH",
    Pqtr = "PQTR",
    Pwek = "PWEK",
    Pyer = "PYER"
}

export enum ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum {
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


export class ObReadProduct2DataProductOtherProductTypeProductDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FeeFreeLength" })
  feeFreeLength?: number;

  @SpeakeasyMetadata({ data: "json, name=FeeFreeLengthPeriod" })
  feeFreeLengthPeriod?: ObReadProduct2DataProductOtherProductTypeProductDetailsFeeFreeLengthPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=MonthlyMaximumCharge" })
  monthlyMaximumCharge?: string;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherSegment" })
  otherSegment?: ObOtherCodeType10;

  @SpeakeasyMetadata({ data: "json, name=Segment" })
  segment?: ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum[];
}

export enum ObReadProduct2DataProductOtherProductTypeRepaymentAmountTypeEnum {
    Rabd = "RABD",
    Rabl = "RABL",
    Raci = "RACI",
    Rafc = "RAFC",
    Raio = "RAIO",
    Ralt = "RALT",
    Usot = "USOT"
}


// ObReadProduct2DataProductOtherProductTypeRepaymentOtherAmountType
/** 
 * Other amount type which is not in the standard code list
**/
export class ObReadProduct2DataProductOtherProductTypeRepaymentOtherAmountType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentFrequency
/** 
 * Other repayment frequency which is not in the standard code list
**/
export class ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentFrequency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentType
/** 
 * Other repayment type which is not in the standard code list
**/
export class ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}

export enum ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapFeeTypeEnum {
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


// ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapOtherFeeType
/** 
 * Other fee type code which is not available in the standard code set
**/
export class ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapOtherFeeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


// ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCap
/** 
 * RepaymentFeeChargeCap sets daily, weekly, monthly, yearly limits on the fees that are charged
**/
export class ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CappingPeriod" })
  cappingPeriod?: ObPeriod1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=FeeCapAmount" })
  feeCapAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" })
  feeCapOccurrence?: number;

  @SpeakeasyMetadata({ data: "json, name=FeeType" })
  feeType: ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapFeeTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=MinMaxType" })
  minMaxType: ObMinMaxType1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapOtherFeeType })
  otherFeeType?: ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapOtherFeeType[];
}


// ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetail
/** 
 * Details about specific fees/charges that are applied for repayment
**/
export class ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationFrequency" })
  applicationFrequency: ObFeeFrequency1Code2Enum;

  @SpeakeasyMetadata({ data: "json, name=CalculationFrequency" })
  calculationFrequency: ObFeeFrequency1Code3Enum;

  @SpeakeasyMetadata({ data: "json, name=FeeAmount" })
  feeAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeRate" })
  feeRate?: string;

  @SpeakeasyMetadata({ data: "json, name=FeeRateType" })
  feeRateType?: ObInterestRateType1Code1Enum;

  @SpeakeasyMetadata({ data: "json, name=FeeType" })
  feeType: ObFeeType1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=NegotiableIndicator" })
  negotiableIndicator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherApplicationFrequency" })
  otherApplicationFrequency?: ObOtherCodeType16;

  @SpeakeasyMetadata({ data: "json, name=OtherCalculationFrequency" })
  otherCalculationFrequency?: ObOtherCodeType17;

  @SpeakeasyMetadata({ data: "json, name=OtherFeeRateType" })
  otherFeeRateType?: ObOtherCodeType18;

  @SpeakeasyMetadata({ data: "json, name=OtherFeeType" })
  otherFeeType?: ObOtherFeeChargeDetailType;
}


// ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeCharges
/** 
 * Applicable fee/charges for repayment such as prepayment, full early repayment or non repayment.
**/
export class ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeCharges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RepaymentFeeChargeCap", elemType: ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCap })
  repaymentFeeChargeCap?: ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCap[];

  @SpeakeasyMetadata({ data: "json, name=RepaymentFeeChargeDetail", elemType: ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetail })
  repaymentFeeChargeDetail: ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetail[];
}

export enum ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFrequencyEnum {
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

export enum ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHolidayMaxHolidayPeriodEnum {
    Pact = "PACT",
    Pday = "PDAY",
    Phyr = "PHYR",
    Pmth = "PMTH",
    Pqtr = "PQTR",
    Pwek = "PWEK",
    Pyer = "PYER"
}


// ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHoliday
/** 
 * Details of capital repayment holiday if any
**/
export class ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHoliday extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxHolidayLength" })
  maxHolidayLength?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxHolidayPeriod" })
  maxHolidayPeriod?: ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHolidayMaxHolidayPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];
}

export enum ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentTypeEnum {
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


// ObReadProduct2DataProductOtherProductTypeRepayment
/** 
 * Repayment details of the Loan product
**/
export class ObReadProduct2DataProductOtherProductTypeRepayment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AmountType" })
  amountType?: ObReadProduct2DataProductOtherProductTypeRepaymentAmountTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string[];

  @SpeakeasyMetadata({ data: "json, name=OtherAmountType" })
  otherAmountType?: ObReadProduct2DataProductOtherProductTypeRepaymentOtherAmountType;

  @SpeakeasyMetadata({ data: "json, name=OtherRepaymentFrequency" })
  otherRepaymentFrequency?: ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentFrequency;

  @SpeakeasyMetadata({ data: "json, name=OtherRepaymentType" })
  otherRepaymentType?: ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentType;

  @SpeakeasyMetadata({ data: "json, name=RepaymentFeeCharges" })
  repaymentFeeCharges?: ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeCharges;

  @SpeakeasyMetadata({ data: "json, name=RepaymentFrequency" })
  repaymentFrequency?: ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=RepaymentHoliday", elemType: ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHoliday })
  repaymentHoliday?: ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHoliday[];

  @SpeakeasyMetadata({ data: "json, name=RepaymentType" })
  repaymentType?: ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentTypeEnum;
}


// ObReadProduct2DataProductOtherProductType
/** 
 * Other product type details associated with the account.
**/
export class ObReadProduct2DataProductOtherProductType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreditInterest" })
  creditInterest?: ObReadProduct2DataProductOtherProductTypeCreditInterest;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=LoanInterest" })
  loanInterest?: ObReadProduct2DataProductOtherProductTypeLoanInterest;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=OtherFeesCharges", elemType: ObReadProduct2DataProductOtherProductTypeOtherFeesCharges })
  otherFeesCharges?: ObReadProduct2DataProductOtherProductTypeOtherFeesCharges[];

  @SpeakeasyMetadata({ data: "json, name=Overdraft" })
  overdraft?: ObReadProduct2DataProductOtherProductTypeOverdraft;

  @SpeakeasyMetadata({ data: "json, name=ProductDetails" })
  productDetails?: ObReadProduct2DataProductOtherProductTypeProductDetails;

  @SpeakeasyMetadata({ data: "json, name=Repayment" })
  repayment?: ObReadProduct2DataProductOtherProductTypeRepayment;

  @SpeakeasyMetadata({ data: "json, name=SupplementaryData" })
  supplementaryData?: Map<string, any>;
}

export enum ObReadProduct2DataProductProductTypeEnum {
    BusinessCurrentAccount = "BusinessCurrentAccount",
    CommercialCreditCard = "CommercialCreditCard",
    Other = "Other",
    PersonalCurrentAccount = "PersonalCurrentAccount",
    SmeLoan = "SMELoan"
}


// ObReadProduct2DataProduct
/** 
 * Product details associated with the Account
**/
export class ObReadProduct2DataProduct extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=BCA" })
  bca?: ObbcaData1;

  @SpeakeasyMetadata({ data: "json, name=MarketingStateId" })
  marketingStateId?: string;

  @SpeakeasyMetadata({ data: "json, name=OtherProductType" })
  otherProductType?: ObReadProduct2DataProductOtherProductType;

  @SpeakeasyMetadata({ data: "json, name=PCA" })
  pca?: ObpcaData1;

  @SpeakeasyMetadata({ data: "json, name=ProductId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductName" })
  productName?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductType" })
  productType: ObReadProduct2DataProductProductTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=SecondaryProductId" })
  secondaryProductId?: string;
}


// ObReadProduct2Data
/** 
 * Aligning with the read write specs structure.
**/
export class ObReadProduct2Data extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Product", elemType: ObReadProduct2DataProduct })
  product?: ObReadProduct2DataProduct[];
}


// ObReadProduct2
/** 
 * Product details of Other Product which is not avaiable in the standard list
**/
export class ObReadProduct2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObReadProduct2Data;

  @SpeakeasyMetadata({ data: "json, name=Links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=Meta" })
  meta?: Meta;
}
