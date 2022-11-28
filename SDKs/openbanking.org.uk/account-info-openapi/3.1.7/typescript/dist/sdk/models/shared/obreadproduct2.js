var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
export var ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetDestinationEnum;
(function (ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetDestinationEnum) {
    ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetDestinationEnum["Inot"] = "INOT";
    ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetDestinationEnum["Inpa"] = "INPA";
    ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetDestinationEnum["Insc"] = "INSC";
})(ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetDestinationEnum || (ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetDestinationEnum = {}));
export var ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandApplicationFrequencyEnum;
(function (ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandApplicationFrequencyEnum) {
    ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandApplicationFrequencyEnum["Fqat"] = "FQAT";
    ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandApplicationFrequencyEnum["Fqdy"] = "FQDY";
    ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandApplicationFrequencyEnum["Fqhy"] = "FQHY";
    ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandApplicationFrequencyEnum["Fqmy"] = "FQMY";
    ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandApplicationFrequencyEnum["Fqot"] = "FQOT";
    ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandApplicationFrequencyEnum["Fqqy"] = "FQQY";
    ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandApplicationFrequencyEnum["Fqsd"] = "FQSD";
    ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandApplicationFrequencyEnum["Fqwy"] = "FQWY";
    ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandApplicationFrequencyEnum["Fqyy"] = "FQYY";
})(ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandApplicationFrequencyEnum || (ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandApplicationFrequencyEnum = {}));
export var ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateTypeEnum;
(function (ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateTypeEnum) {
    ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateTypeEnum["Inbb"] = "INBB";
    ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateTypeEnum["Infr"] = "INFR";
    ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateTypeEnum["Ingr"] = "INGR";
    ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateTypeEnum["Inlr"] = "INLR";
    ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateTypeEnum["Inne"] = "INNE";
    ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateTypeEnum["Inot"] = "INOT";
})(ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateTypeEnum || (ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandBankInterestRateTypeEnum = {}));
export var ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandCalculationFrequencyEnum;
(function (ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandCalculationFrequencyEnum) {
    ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandCalculationFrequencyEnum["Fqat"] = "FQAT";
    ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandCalculationFrequencyEnum["Fqdy"] = "FQDY";
    ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandCalculationFrequencyEnum["Fqhy"] = "FQHY";
    ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandCalculationFrequencyEnum["Fqmy"] = "FQMY";
    ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandCalculationFrequencyEnum["Fqot"] = "FQOT";
    ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandCalculationFrequencyEnum["Fqqy"] = "FQQY";
    ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandCalculationFrequencyEnum["Fqsd"] = "FQSD";
    ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandCalculationFrequencyEnum["Fqwy"] = "FQWY";
    ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandCalculationFrequencyEnum["Fqyy"] = "FQYY";
})(ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandCalculationFrequencyEnum || (ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandCalculationFrequencyEnum = {}));
export var ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum;
(function (ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum) {
    ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum["Inba"] = "INBA";
    ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum["Inti"] = "INTI";
    ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum["Inwh"] = "INWH";
})(ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum || (ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum = {}));
// ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandOtherBankInterestType
/**
 * Other interest rate types which are not available in the standard code list
**/
var ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandOtherBankInterestType = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandOtherBankInterestType, _super);
    function ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandOtherBankInterestType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandOtherBankInterestType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandOtherBankInterestType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandOtherBankInterestType.prototype, "name", void 0);
    return ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandOtherBankInterestType;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandOtherBankInterestType };
// ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBand
/**
 * Tier Band Details
**/
var ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBand = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBand, _super);
    function ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AER" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBand.prototype, "aer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplicationFrequency" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBand.prototype, "applicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BankInterestRate" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBand.prototype, "bankInterestRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BankInterestRateType" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBand.prototype, "bankInterestRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CalculationFrequency" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBand.prototype, "calculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DepositInterestAppliedCoverage" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBand.prototype, "depositInterestAppliedCoverage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FixedVariableInterestRateType" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBand.prototype, "fixedVariableInterestRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBand.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBand.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherApplicationFrequency" }),
        __metadata("design:type", ObOtherCodeType11)
    ], ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBand.prototype, "otherApplicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherBankInterestType" }),
        __metadata("design:type", ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandOtherBankInterestType)
    ], ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBand.prototype, "otherBankInterestType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherCalculationFrequency" }),
        __metadata("design:type", ObOtherCodeType12)
    ], ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBand.prototype, "otherCalculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierValueMaximum" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBand.prototype, "tierValueMaximum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierValueMinimum" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBand.prototype, "tierValueMinimum", void 0);
    return ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBand;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBand };
export var ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandMethodEnum;
(function (ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandMethodEnum) {
    ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandMethodEnum["Inba"] = "INBA";
    ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandMethodEnum["Inti"] = "INTI";
    ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandMethodEnum["Inwh"] = "INWH";
})(ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandMethodEnum || (ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBandMethodEnum = {}));
// ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSet
/**
 * The group of tiers or bands for which credit interest can be applied.
**/
var ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSet = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSet, _super);
    function ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CalculationMethod" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSet.prototype, "calculationMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Destination" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSet.prototype, "destination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSet.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherCalculationMethod" }),
        __metadata("design:type", ObOtherCodeType10)
    ], ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSet.prototype, "otherCalculationMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherDestination" }),
        __metadata("design:type", ObOtherCodeType10)
    ], ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSet.prototype, "otherDestination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierBand", elemType: ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSetTierBand }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSet.prototype, "tierBand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierBandMethod" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSet.prototype, "tierBandMethod", void 0);
    return ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSet;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSet };
// ObReadProduct2DataProductOtherProductTypeCreditInterest
/**
 * Details about the interest that may be payable to the Account holders
**/
var ObReadProduct2DataProductOtherProductTypeCreditInterest = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeCreditInterest, _super);
    function ObReadProduct2DataProductOtherProductTypeCreditInterest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierBandSet", elemType: ObReadProduct2DataProductOtherProductTypeCreditInterestTierBandSet }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeCreditInterest.prototype, "tierBandSet", void 0);
    return ObReadProduct2DataProductOtherProductTypeCreditInterest;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeCreditInterest };
export var ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum;
(function (ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum) {
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum["Fepf"] = "FEPF";
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum["Ftot"] = "FTOT";
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum["Fyaf"] = "FYAF";
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum["Fyam"] = "FYAM";
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum["Fyaq"] = "FYAQ";
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum["Fycp"] = "FYCP";
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum["Fydb"] = "FYDB";
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum["Fymi"] = "FYMI";
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum["Fyxx"] = "FYXX";
})(ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum || (ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum = {}));
// ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType
/**
 * Other fee type code which is not available in the standard code set
**/
var ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType, _super);
    function ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType.prototype, "name", void 0);
    return ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType };
// ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCap
/**
 * Details about any caps (minimum/maximum charges) that apply to a particular fee/charge
**/
var ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCap = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCap, _super);
    function ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CappingPeriod" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCap.prototype, "cappingPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapAmount" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCap.prototype, "feeCapAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" }),
        __metadata("design:type", Number)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCap.prototype, "feeCapOccurrence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeType" }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCap.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinMaxType" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCap.prototype, "minMaxType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCap.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCap.prototype, "otherFeeType", void 0);
    return ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCap;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCap };
// ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetail
/**
 * Other fees/charges details
**/
var ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetail = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetail, _super);
    function ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplicationFrequency" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetail.prototype, "applicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CalculationFrequency" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetail.prototype, "calculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeAmount" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetail.prototype, "feeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeRate" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetail.prototype, "feeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeRateType" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetail.prototype, "feeRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeType" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetail.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NegotiableIndicator" }),
        __metadata("design:type", Boolean)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetail.prototype, "negotiableIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetail.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherApplicationFrequency" }),
        __metadata("design:type", ObOtherCodeType16)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetail.prototype, "otherApplicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherCalculationFrequency" }),
        __metadata("design:type", ObOtherCodeType17)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetail.prototype, "otherCalculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeRateType" }),
        __metadata("design:type", ObOtherCodeType15)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetail.prototype, "otherFeeRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeType" }),
        __metadata("design:type", ObOtherFeeChargeDetailType)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetail.prototype, "otherFeeType", void 0);
    return ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetail;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetail };
// ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesCharges
/**
 * Contains details of fees and charges which are not associated with either LoanRepayment or features/benefits
**/
var ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesCharges = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesCharges, _super);
    function ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LoanInterestFeeChargeCap", elemType: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeCap }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesCharges.prototype, "loanInterestFeeChargeCap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LoanInterestFeeChargeDetail", elemType: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesChargesLoanInterestFeeChargeDetail }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesCharges.prototype, "loanInterestFeeChargeDetail", void 0);
    return ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesCharges;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesCharges };
export var ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum;
(function (ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum) {
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum["Fepf"] = "FEPF";
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum["Ftot"] = "FTOT";
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum["Fyaf"] = "FYAF";
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum["Fyam"] = "FYAM";
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum["Fyaq"] = "FYAQ";
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum["Fycp"] = "FYCP";
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum["Fydb"] = "FYDB";
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum["Fymi"] = "FYMI";
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum["Fyxx"] = "FYXX";
})(ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum || (ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapFeeTypeEnum = {}));
// ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType
/**
 * Other fee type code which is not available in the standard code set
**/
var ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType, _super);
    function ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType.prototype, "name", void 0);
    return ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType };
// ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCap
/**
 * Details about any caps (minimum/maximum charges) that apply to a particular fee/charge
**/
var ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCap = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCap, _super);
    function ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CappingPeriod" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCap.prototype, "cappingPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapAmount" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCap.prototype, "feeCapAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" }),
        __metadata("design:type", Number)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCap.prototype, "feeCapOccurrence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeType" }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCap.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinMaxType" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCap.prototype, "minMaxType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCap.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCapOtherFeeType }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCap.prototype, "otherFeeType", void 0);
    return ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCap;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCap };
// ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeDetail
/**
 * Other fees/charges details
**/
var ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeDetail = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeDetail, _super);
    function ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplicationFrequency" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeDetail.prototype, "applicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CalculationFrequency" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeDetail.prototype, "calculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeAmount" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeDetail.prototype, "feeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeRate" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeDetail.prototype, "feeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeRateType" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeDetail.prototype, "feeRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeType" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeDetail.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NegotiableIndicator" }),
        __metadata("design:type", Boolean)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeDetail.prototype, "negotiableIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeDetail.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherApplicationFrequency" }),
        __metadata("design:type", ObOtherCodeType16)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeDetail.prototype, "otherApplicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherCalculationFrequency" }),
        __metadata("design:type", ObOtherCodeType17)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeDetail.prototype, "otherCalculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeRateType" }),
        __metadata("design:type", ObOtherCodeType15)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeDetail.prototype, "otherFeeRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeType" }),
        __metadata("design:type", ObOtherFeeChargeDetailType)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeDetail.prototype, "otherFeeType", void 0);
    return ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeDetail;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeDetail };
// ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesCharges
/**
 * Contains details of fees and charges which are not associated with either LoanRepayment or features/benefits
**/
var ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesCharges = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesCharges, _super);
    function ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LoanInterestFeeChargeCap", elemType: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeCap }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesCharges.prototype, "loanInterestFeeChargeCap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LoanInterestFeeChargeDetail", elemType: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesChargesLoanInterestFeeChargeDetail }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesCharges.prototype, "loanInterestFeeChargeDetail", void 0);
    return ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesCharges;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesCharges };
export var ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanProviderInterestRateTypeEnum;
(function (ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanProviderInterestRateTypeEnum) {
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanProviderInterestRateTypeEnum["Inbb"] = "INBB";
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanProviderInterestRateTypeEnum["Infr"] = "INFR";
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanProviderInterestRateTypeEnum["Ingr"] = "INGR";
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanProviderInterestRateTypeEnum["Inlr"] = "INLR";
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanProviderInterestRateTypeEnum["Inne"] = "INNE";
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanProviderInterestRateTypeEnum["Inot"] = "INOT";
})(ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanProviderInterestRateTypeEnum || (ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanProviderInterestRateTypeEnum = {}));
export var ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriodEnum;
(function (ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriodEnum) {
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriodEnum["Pact"] = "PACT";
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriodEnum["Pday"] = "PDAY";
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriodEnum["Phyr"] = "PHYR";
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriodEnum["Pmth"] = "PMTH";
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriodEnum["Pqtr"] = "PQTR";
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriodEnum["Pwek"] = "PWEK";
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriodEnum["Pyer"] = "PYER";
})(ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriodEnum || (ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMaxTermPeriodEnum = {}));
export var ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMinTermPeriodEnum;
(function (ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMinTermPeriodEnum) {
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMinTermPeriodEnum["Pact"] = "PACT";
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMinTermPeriodEnum["Pday"] = "PDAY";
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMinTermPeriodEnum["Phyr"] = "PHYR";
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMinTermPeriodEnum["Pmth"] = "PMTH";
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMinTermPeriodEnum["Pqtr"] = "PQTR";
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMinTermPeriodEnum["Pwek"] = "PWEK";
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMinTermPeriodEnum["Pyer"] = "PYER";
})(ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMinTermPeriodEnum || (ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandMinTermPeriodEnum = {}));
// ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandOtherLoanProviderInterestRateType
/**
 * Other loan interest rate types which are not available in the standard code list
**/
var ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandOtherLoanProviderInterestRateType = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandOtherLoanProviderInterestRateType, _super);
    function ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandOtherLoanProviderInterestRateType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandOtherLoanProviderInterestRateType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandOtherLoanProviderInterestRateType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandOtherLoanProviderInterestRateType.prototype, "name", void 0);
    return ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandOtherLoanProviderInterestRateType;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandOtherLoanProviderInterestRateType };
// ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBand
/**
 * Tier Band Details
**/
var ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBand = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBand, _super);
    function ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FixedVariableInterestRateType" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBand.prototype, "fixedVariableInterestRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBand.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LoanInterestFeesCharges", elemType: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandLoanInterestFeesCharges }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBand.prototype, "loanInterestFeesCharges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LoanProviderInterestRate" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBand.prototype, "loanProviderInterestRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LoanProviderInterestRateType" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBand.prototype, "loanProviderInterestRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxTermPeriod" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBand.prototype, "maxTermPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinTermPeriod" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBand.prototype, "minTermPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBand.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherLoanProviderInterestRateType" }),
        __metadata("design:type", ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBandOtherLoanProviderInterestRateType)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBand.prototype, "otherLoanProviderInterestRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RepAPR" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBand.prototype, "repApr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierValueMaxTerm" }),
        __metadata("design:type", Number)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBand.prototype, "tierValueMaxTerm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierValueMaximum" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBand.prototype, "tierValueMaximum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierValueMinTerm" }),
        __metadata("design:type", Number)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBand.prototype, "tierValueMinTerm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierValueMinimum" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBand.prototype, "tierValueMinimum", void 0);
    return ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBand;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBand };
export var ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetTierBandMethodEnum;
(function (ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetTierBandMethodEnum) {
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetTierBandMethodEnum["Inba"] = "INBA";
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetTierBandMethodEnum["Inti"] = "INTI";
    ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetTierBandMethodEnum["Inwh"] = "INWH";
})(ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetTierBandMethodEnum || (ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetTierBandMethodEnum = {}));
// ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSet
/**
 * The group of tiers or bands for which debit interest can be applied.
**/
var ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSet = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSet, _super);
    function ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CalculationMethod" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSet.prototype, "calculationMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSet.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LoanInterestFeesCharges", elemType: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestFeesCharges }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSet.prototype, "loanInterestFeesCharges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LoanInterestTierBand", elemType: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSetLoanInterestTierBand }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSet.prototype, "loanInterestTierBand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSet.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherCalculationMethod" }),
        __metadata("design:type", ObOtherCodeType10)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSet.prototype, "otherCalculationMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierBandMethod" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSet.prototype, "tierBandMethod", void 0);
    return ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSet;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSet };
// ObReadProduct2DataProductOtherProductTypeLoanInterest
/**
 * Details about the interest that may be payable to the SME Loan holders
**/
var ObReadProduct2DataProductOtherProductTypeLoanInterest = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeLoanInterest, _super);
    function ObReadProduct2DataProductOtherProductTypeLoanInterest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LoanInterestTierBandSet", elemType: ObReadProduct2DataProductOtherProductTypeLoanInterestLoanInterestTierBandSet }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterest.prototype, "loanInterestTierBandSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeLoanInterest.prototype, "notes", void 0);
    return ObReadProduct2DataProductOtherProductTypeLoanInterest;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeLoanInterest };
export var ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapFeeTypeEnum;
(function (ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapFeeTypeEnum) {
    ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapFeeTypeEnum["Fepf"] = "FEPF";
    ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapFeeTypeEnum["Ftot"] = "FTOT";
    ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapFeeTypeEnum["Fyaf"] = "FYAF";
    ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapFeeTypeEnum["Fyam"] = "FYAM";
    ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapFeeTypeEnum["Fyaq"] = "FYAQ";
    ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapFeeTypeEnum["Fycp"] = "FYCP";
    ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapFeeTypeEnum["Fydb"] = "FYDB";
    ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapFeeTypeEnum["Fymi"] = "FYMI";
    ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapFeeTypeEnum["Fyxx"] = "FYXX";
})(ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapFeeTypeEnum || (ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapFeeTypeEnum = {}));
// ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapOtherFeeType
/**
 * Other fee type code which is not available in the standard code set
**/
var ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapOtherFeeType = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapOtherFeeType, _super);
    function ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapOtherFeeType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapOtherFeeType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapOtherFeeType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapOtherFeeType.prototype, "name", void 0);
    return ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapOtherFeeType;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapOtherFeeType };
// ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCap
/**
 * Details about any caps (maximum charges) that apply to a particular or group of fee/charge
**/
var ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCap = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCap, _super);
    function ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CappingPeriod" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCap.prototype, "cappingPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapAmount" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCap.prototype, "feeCapAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" }),
        __metadata("design:type", Number)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCap.prototype, "feeCapOccurrence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeType" }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCap.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinMaxType" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCap.prototype, "minMaxType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCap.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCapOtherFeeType }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCap.prototype, "otherFeeType", void 0);
    return ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCap;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCap };
// ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeApplicableRange
/**
 * Range or amounts or rates for which the fee/charge applies
**/
var ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeApplicableRange = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeApplicableRange, _super);
    function ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeApplicableRange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumAmount" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeApplicableRange.prototype, "maximumAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumRate" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeApplicableRange.prototype, "maximumRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumAmount" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeApplicableRange.prototype, "minimumAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumRate" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeApplicableRange.prototype, "minimumRate", void 0);
    return ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeApplicableRange;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeApplicableRange };
export var ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum;
(function (ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum) {
    ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum["Fepf"] = "FEPF";
    ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum["Ftot"] = "FTOT";
    ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum["Fyaf"] = "FYAF";
    ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum["Fyam"] = "FYAM";
    ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum["Fyaq"] = "FYAQ";
    ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum["Fycp"] = "FYCP";
    ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum["Fydb"] = "FYDB";
    ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum["Fymi"] = "FYMI";
    ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum["Fyxx"] = "FYXX";
})(ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum || (ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum = {}));
// ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType
/**
 * Other fee type code which is not available in the standard code set
**/
var ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType, _super);
    function ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType.prototype, "name", void 0);
    return ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType };
// ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCap
/**
 * Details about any caps (maximum charges) that apply to a particular or group of fee/charge
**/
var ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCap = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCap, _super);
    function ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CappingPeriod" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCap.prototype, "cappingPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapAmount" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCap.prototype, "feeCapAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" }),
        __metadata("design:type", Number)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCap.prototype, "feeCapOccurrence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeType" }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCap.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinMaxType" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCap.prototype, "minMaxType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCap.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCap.prototype, "otherFeeType", void 0);
    return ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCap;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCap };
// ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetail
/**
 * Other fees/charges details
**/
var ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetail = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetail, _super);
    function ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplicationFrequency" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetail.prototype, "applicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CalculationFrequency" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetail.prototype, "calculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeAmount" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetail.prototype, "feeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeApplicableRange" }),
        __metadata("design:type", ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeApplicableRange)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetail.prototype, "feeApplicableRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCategory" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetail.prototype, "feeCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeCap", elemType: ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetailFeeChargeCap }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetail.prototype, "feeChargeCap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeRate" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetail.prototype, "feeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeRateType" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetail.prototype, "feeRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeType" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetail.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NegotiableIndicator" }),
        __metadata("design:type", Boolean)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetail.prototype, "negotiableIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetail.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherApplicationFrequency" }),
        __metadata("design:type", ObOtherCodeType16)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetail.prototype, "otherApplicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherCalculationFrequency" }),
        __metadata("design:type", ObOtherCodeType17)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetail.prototype, "otherCalculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeCategoryType" }),
        __metadata("design:type", ObOtherCodeType10)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetail.prototype, "otherFeeCategoryType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeRateType" }),
        __metadata("design:type", ObOtherCodeType18)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetail.prototype, "otherFeeRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeType" }),
        __metadata("design:type", ObOtherFeeChargeDetailType)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetail.prototype, "otherFeeType", void 0);
    return ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetail;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetail };
// ObReadProduct2DataProductOtherProductTypeOtherFeesChargesOtherTariffType
/**
 * Other tariff type which is not in the standard list.
**/
var ObReadProduct2DataProductOtherProductTypeOtherFeesChargesOtherTariffType = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeOtherFeesChargesOtherTariffType, _super);
    function ObReadProduct2DataProductOtherProductTypeOtherFeesChargesOtherTariffType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesOtherTariffType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesOtherTariffType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesChargesOtherTariffType.prototype, "name", void 0);
    return ObReadProduct2DataProductOtherProductTypeOtherFeesChargesOtherTariffType;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeOtherFeesChargesOtherTariffType };
export var ObReadProduct2DataProductOtherProductTypeOtherFeesChargesTariffTypeEnum;
(function (ObReadProduct2DataProductOtherProductTypeOtherFeesChargesTariffTypeEnum) {
    ObReadProduct2DataProductOtherProductTypeOtherFeesChargesTariffTypeEnum["Ttel"] = "TTEL";
    ObReadProduct2DataProductOtherProductTypeOtherFeesChargesTariffTypeEnum["Ttmx"] = "TTMX";
    ObReadProduct2DataProductOtherProductTypeOtherFeesChargesTariffTypeEnum["Ttot"] = "TTOT";
})(ObReadProduct2DataProductOtherProductTypeOtherFeesChargesTariffTypeEnum || (ObReadProduct2DataProductOtherProductTypeOtherFeesChargesTariffTypeEnum = {}));
// ObReadProduct2DataProductOtherProductTypeOtherFeesCharges
/**
 * Contains details of fees and charges which are not associated with either Overdraft or features/benefits
**/
var ObReadProduct2DataProductOtherProductTypeOtherFeesCharges = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeOtherFeesCharges, _super);
    function ObReadProduct2DataProductOtherProductTypeOtherFeesCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeCap", elemType: ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeCap }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesCharges.prototype, "feeChargeCap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeDetail", elemType: ObReadProduct2DataProductOtherProductTypeOtherFeesChargesFeeChargeDetail }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesCharges.prototype, "feeChargeDetail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherTariffType" }),
        __metadata("design:type", ObReadProduct2DataProductOtherProductTypeOtherFeesChargesOtherTariffType)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesCharges.prototype, "otherTariffType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TariffName" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesCharges.prototype, "tariffName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TariffType" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOtherFeesCharges.prototype, "tariffType", void 0);
    return ObReadProduct2DataProductOtherProductTypeOtherFeesCharges;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeOtherFeesCharges };
export var ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum;
(function (ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum) {
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["Fbao"] = "FBAO";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["Fbar"] = "FBAR";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["Fbeb"] = "FBEB";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["Fbit"] = "FBIT";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["Fbor"] = "FBOR";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["Fbos"] = "FBOS";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["Fbsc"] = "FBSC";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["Fbto"] = "FBTO";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["Fbub"] = "FBUB";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["Fbut"] = "FBUT";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["Ftot"] = "FTOT";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["Ftut"] = "FTUT";
})(ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum || (ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum = {}));
// ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType
/**
 * Other fee type code which is not available in the standard code set
**/
var ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType, _super);
    function ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType.prototype, "name", void 0);
    return ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType };
// ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap
/**
 * Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
**/
var ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap, _super);
    function ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CappingPeriod" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "cappingPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapAmount" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "feeCapAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" }),
        __metadata("design:type", Number)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "feeCapOccurrence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeType" }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinMaxType" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "minMaxType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "otherFeeType", void 0);
    return ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap };
export var ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum;
(function (ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum) {
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["Fbao"] = "FBAO";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["Fbar"] = "FBAR";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["Fbeb"] = "FBEB";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["Fbit"] = "FBIT";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["Fbor"] = "FBOR";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["Fbos"] = "FBOS";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["Fbsc"] = "FBSC";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["Fbto"] = "FBTO";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["Fbub"] = "FBUB";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["Fbut"] = "FBUT";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["Ftot"] = "FTOT";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["Ftut"] = "FTUT";
})(ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum || (ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum = {}));
// ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType
/**
 * Other fee type code which is not available in the standard code set
**/
var ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType, _super);
    function ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType.prototype, "name", void 0);
    return ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType };
// ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap
/**
 * Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
**/
var ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap, _super);
    function ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CappingPeriod" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "cappingPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapAmount" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "feeCapAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" }),
        __metadata("design:type", Number)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "feeCapOccurrence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeType" }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinMaxType" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "minMaxType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "otherFeeType", void 0);
    return ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap };
// ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail
/**
 * Details about the fees/charges
**/
var ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail, _super);
    function ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplicationFrequency" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "applicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CalculationFrequency" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "calculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeAmount" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "feeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeRate" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "feeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeRateType" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "feeRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeType" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IncrementalBorrowingAmount" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "incrementalBorrowingAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NegotiableIndicator" }),
        __metadata("design:type", Boolean)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "negotiableIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherApplicationFrequency" }),
        __metadata("design:type", ObOtherCodeType11)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "otherApplicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherCalculationFrequency" }),
        __metadata("design:type", ObOtherCodeType12)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "otherCalculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeRateType" }),
        __metadata("design:type", ObOtherCodeType14)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "otherFeeRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeType" }),
        __metadata("design:type", ObOtherCodeType13)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "otherFeeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftControlIndicator" }),
        __metadata("design:type", Boolean)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "overdraftControlIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftFeeChargeCap", elemType: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "overdraftFeeChargeCap", void 0);
    return ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail };
// ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesCharges
/**
 * Overdraft fees and charges details
**/
var ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesCharges = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesCharges, _super);
    function ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftFeeChargeCap", elemType: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesCharges.prototype, "overdraftFeeChargeCap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftFeeChargeDetail", elemType: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesCharges.prototype, "overdraftFeeChargeDetail", void 0);
    return ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesCharges;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesCharges };
export var ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodEnum;
(function (ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodEnum) {
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodEnum["Pact"] = "PACT";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodEnum["Pday"] = "PDAY";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodEnum["Phyr"] = "PHYR";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodEnum["Pmth"] = "PMTH";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodEnum["Pqtr"] = "PQTR";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodEnum["Pwek"] = "PWEK";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodEnum["Pyer"] = "PYER";
})(ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodEnum || (ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodEnum = {}));
export var ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum;
(function (ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum) {
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["Fbao"] = "FBAO";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["Fbar"] = "FBAR";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["Fbeb"] = "FBEB";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["Fbit"] = "FBIT";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["Fbor"] = "FBOR";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["Fbos"] = "FBOS";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["Fbsc"] = "FBSC";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["Fbto"] = "FBTO";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["Fbub"] = "FBUB";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["Fbut"] = "FBUT";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["Ftot"] = "FTOT";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["Ftut"] = "FTUT";
})(ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum || (ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum = {}));
// ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType
/**
 * Other fee type code which is not available in the standard code set
**/
var ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType, _super);
    function ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType.prototype, "name", void 0);
    return ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType };
// ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap
/**
 * Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
**/
var ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap, _super);
    function ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CappingPeriod" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "cappingPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapAmount" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "feeCapAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" }),
        __metadata("design:type", Number)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "feeCapOccurrence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeType" }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinMaxType" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "minMaxType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "otherFeeType", void 0);
    return ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap };
export var ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum;
(function (ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum) {
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["Fbao"] = "FBAO";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["Fbar"] = "FBAR";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["Fbeb"] = "FBEB";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["Fbit"] = "FBIT";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["Fbor"] = "FBOR";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["Fbos"] = "FBOS";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["Fbsc"] = "FBSC";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["Fbto"] = "FBTO";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["Fbub"] = "FBUB";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["Fbut"] = "FBUT";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["Ftot"] = "FTOT";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["Ftut"] = "FTUT";
})(ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum || (ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum = {}));
// ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType
/**
 * Other fee type code which is not available in the standard code set
**/
var ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType, _super);
    function ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType.prototype, "name", void 0);
    return ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType };
// ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap
/**
 * Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
**/
var ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap, _super);
    function ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CappingPeriod" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "cappingPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapAmount" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "feeCapAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" }),
        __metadata("design:type", Number)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "feeCapOccurrence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeType" }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinMaxType" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "minMaxType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "otherFeeType", void 0);
    return ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap };
// ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail
/**
 * Details about the fees/charges
**/
var ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail, _super);
    function ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplicationFrequency" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "applicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CalculationFrequency" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "calculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeAmount" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "feeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeRate" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "feeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeRateType" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "feeRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeType" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IncrementalBorrowingAmount" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "incrementalBorrowingAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NegotiableIndicator" }),
        __metadata("design:type", Boolean)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "negotiableIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherApplicationFrequency" }),
        __metadata("design:type", ObOtherCodeType11)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "otherApplicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherCalculationFrequency" }),
        __metadata("design:type", ObOtherCodeType12)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "otherCalculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeRateType" }),
        __metadata("design:type", ObOtherCodeType14)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "otherFeeRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeType" }),
        __metadata("design:type", ObOtherCodeType13)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "otherFeeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftControlIndicator" }),
        __metadata("design:type", Boolean)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "overdraftControlIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftFeeChargeCap", elemType: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "overdraftFeeChargeCap", void 0);
    return ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail };
// ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges
/**
 * Overdraft fees and charges
**/
var ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges, _super);
    function ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftFeeChargeCap", elemType: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges.prototype, "overdraftFeeChargeCap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftFeeChargeDetail", elemType: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges.prototype, "overdraftFeeChargeDetail", void 0);
    return ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges };
export var ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum;
(function (ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum) {
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum["Inba"] = "INBA";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum["Inti"] = "INTI";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum["Inwh"] = "INWH";
})(ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum || (ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum = {}));
// ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBand
/**
 * Provides overdraft details for a specific tier or band
**/
var ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBand = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBand, _super);
    function ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AgreementLengthMax" }),
        __metadata("design:type", Number)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "agreementLengthMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AgreementLengthMin" }),
        __metadata("design:type", Number)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "agreementLengthMin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AgreementPeriod" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "agreementPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BankGuaranteedIndicator" }),
        __metadata("design:type", Boolean)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "bankGuaranteedIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EAR" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "ear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftFeesCharges", elemType: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "overdraftFeesCharges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftInterestChargingCoverage" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "overdraftInterestChargingCoverage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierValueMax" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "tierValueMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierValueMin" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "tierValueMin", void 0);
    return ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBand;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBand };
export var ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTypeEnum;
(function (ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTypeEnum) {
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTypeEnum["Ovco"] = "OVCO";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTypeEnum["Ovod"] = "OVOD";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTypeEnum["Ovot"] = "OVOT";
})(ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTypeEnum || (ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTypeEnum = {}));
export var ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetTierBandMethodEnum;
(function (ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetTierBandMethodEnum) {
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetTierBandMethodEnum["Inba"] = "INBA";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetTierBandMethodEnum["Inti"] = "INTI";
    ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetTierBandMethodEnum["Inwh"] = "INWH";
})(ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetTierBandMethodEnum || (ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetTierBandMethodEnum = {}));
// ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSet
/**
 * Tier band set details
**/
var ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSet = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSet, _super);
    function ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AuthorisedIndicator" }),
        __metadata("design:type", Boolean)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSet.prototype, "authorisedIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BufferAmount" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSet.prototype, "bufferAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSet.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSet.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftFeesCharges", elemType: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftFeesCharges }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSet.prototype, "overdraftFeesCharges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftTierBand", elemType: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSetOverdraftTierBand }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSet.prototype, "overdraftTierBand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftType" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSet.prototype, "overdraftType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierBandMethod" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSet.prototype, "tierBandMethod", void 0);
    return ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSet;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSet };
// ObReadProduct2DataProductOtherProductTypeOverdraft
/**
 * Borrowing details
**/
var ObReadProduct2DataProductOtherProductTypeOverdraft = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeOverdraft, _super);
    function ObReadProduct2DataProductOtherProductTypeOverdraft() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeOverdraft.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftTierBandSet", elemType: ObReadProduct2DataProductOtherProductTypeOverdraftOverdraftTierBandSet }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeOverdraft.prototype, "overdraftTierBandSet", void 0);
    return ObReadProduct2DataProductOtherProductTypeOverdraft;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeOverdraft };
export var ObReadProduct2DataProductOtherProductTypeProductDetailsFeeFreeLengthPeriodEnum;
(function (ObReadProduct2DataProductOtherProductTypeProductDetailsFeeFreeLengthPeriodEnum) {
    ObReadProduct2DataProductOtherProductTypeProductDetailsFeeFreeLengthPeriodEnum["Pact"] = "PACT";
    ObReadProduct2DataProductOtherProductTypeProductDetailsFeeFreeLengthPeriodEnum["Pday"] = "PDAY";
    ObReadProduct2DataProductOtherProductTypeProductDetailsFeeFreeLengthPeriodEnum["Phyr"] = "PHYR";
    ObReadProduct2DataProductOtherProductTypeProductDetailsFeeFreeLengthPeriodEnum["Pmth"] = "PMTH";
    ObReadProduct2DataProductOtherProductTypeProductDetailsFeeFreeLengthPeriodEnum["Pqtr"] = "PQTR";
    ObReadProduct2DataProductOtherProductTypeProductDetailsFeeFreeLengthPeriodEnum["Pwek"] = "PWEK";
    ObReadProduct2DataProductOtherProductTypeProductDetailsFeeFreeLengthPeriodEnum["Pyer"] = "PYER";
})(ObReadProduct2DataProductOtherProductTypeProductDetailsFeeFreeLengthPeriodEnum || (ObReadProduct2DataProductOtherProductTypeProductDetailsFeeFreeLengthPeriodEnum = {}));
export var ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum;
(function (ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum) {
    ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum["Geas"] = "GEAS";
    ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum["Geba"] = "GEBA";
    ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum["Gebr"] = "GEBR";
    ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum["Gebu"] = "GEBU";
    ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum["Geci"] = "GECI";
    ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum["Gecs"] = "GECS";
    ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum["Gefb"] = "GEFB";
    ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum["Gefg"] = "GEFG";
    ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum["Geg"] = "GEG";
    ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum["Gegr"] = "GEGR";
    ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum["Gegs"] = "GEGS";
    ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum["Geot"] = "GEOT";
    ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum["Geov"] = "GEOV";
    ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum["Gepa"] = "GEPA";
    ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum["Gepr"] = "GEPR";
    ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum["Gere"] = "GERE";
    ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum["Gest"] = "GEST";
    ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum["Geya"] = "GEYA";
    ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum["Geyo"] = "GEYO";
    ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum["Psca"] = "PSCA";
    ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum["Pses"] = "PSES";
    ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum["Psnc"] = "PSNC";
    ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum["Psnp"] = "PSNP";
    ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum["Psrg"] = "PSRG";
    ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum["Psss"] = "PSSS";
    ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum["Psst"] = "PSST";
    ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum["Pssw"] = "PSSW";
})(ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum || (ObReadProduct2DataProductOtherProductTypeProductDetailsSegmentEnum = {}));
var ObReadProduct2DataProductOtherProductTypeProductDetails = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeProductDetails, _super);
    function ObReadProduct2DataProductOtherProductTypeProductDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeFreeLength" }),
        __metadata("design:type", Number)
    ], ObReadProduct2DataProductOtherProductTypeProductDetails.prototype, "feeFreeLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeFreeLengthPeriod" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeProductDetails.prototype, "feeFreeLengthPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MonthlyMaximumCharge" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeProductDetails.prototype, "monthlyMaximumCharge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeProductDetails.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherSegment" }),
        __metadata("design:type", ObOtherCodeType10)
    ], ObReadProduct2DataProductOtherProductTypeProductDetails.prototype, "otherSegment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Segment" }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeProductDetails.prototype, "segment", void 0);
    return ObReadProduct2DataProductOtherProductTypeProductDetails;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeProductDetails };
export var ObReadProduct2DataProductOtherProductTypeRepaymentAmountTypeEnum;
(function (ObReadProduct2DataProductOtherProductTypeRepaymentAmountTypeEnum) {
    ObReadProduct2DataProductOtherProductTypeRepaymentAmountTypeEnum["Rabd"] = "RABD";
    ObReadProduct2DataProductOtherProductTypeRepaymentAmountTypeEnum["Rabl"] = "RABL";
    ObReadProduct2DataProductOtherProductTypeRepaymentAmountTypeEnum["Raci"] = "RACI";
    ObReadProduct2DataProductOtherProductTypeRepaymentAmountTypeEnum["Rafc"] = "RAFC";
    ObReadProduct2DataProductOtherProductTypeRepaymentAmountTypeEnum["Raio"] = "RAIO";
    ObReadProduct2DataProductOtherProductTypeRepaymentAmountTypeEnum["Ralt"] = "RALT";
    ObReadProduct2DataProductOtherProductTypeRepaymentAmountTypeEnum["Usot"] = "USOT";
})(ObReadProduct2DataProductOtherProductTypeRepaymentAmountTypeEnum || (ObReadProduct2DataProductOtherProductTypeRepaymentAmountTypeEnum = {}));
// ObReadProduct2DataProductOtherProductTypeRepaymentOtherAmountType
/**
 * Other amount type which is not in the standard code list
**/
var ObReadProduct2DataProductOtherProductTypeRepaymentOtherAmountType = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeRepaymentOtherAmountType, _super);
    function ObReadProduct2DataProductOtherProductTypeRepaymentOtherAmountType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeRepaymentOtherAmountType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeRepaymentOtherAmountType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeRepaymentOtherAmountType.prototype, "name", void 0);
    return ObReadProduct2DataProductOtherProductTypeRepaymentOtherAmountType;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeRepaymentOtherAmountType };
// ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentFrequency
/**
 * Other repayment frequency which is not in the standard code list
**/
var ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentFrequency = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentFrequency, _super);
    function ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentFrequency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentFrequency.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentFrequency.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentFrequency.prototype, "name", void 0);
    return ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentFrequency;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentFrequency };
// ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentType
/**
 * Other repayment type which is not in the standard code list
**/
var ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentType = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentType, _super);
    function ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentType.prototype, "name", void 0);
    return ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentType;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentType };
export var ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapFeeTypeEnum;
(function (ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapFeeTypeEnum) {
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapFeeTypeEnum["Fepf"] = "FEPF";
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapFeeTypeEnum["Ftot"] = "FTOT";
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapFeeTypeEnum["Fyaf"] = "FYAF";
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapFeeTypeEnum["Fyam"] = "FYAM";
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapFeeTypeEnum["Fyaq"] = "FYAQ";
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapFeeTypeEnum["Fycp"] = "FYCP";
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapFeeTypeEnum["Fydb"] = "FYDB";
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapFeeTypeEnum["Fymi"] = "FYMI";
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapFeeTypeEnum["Fyxx"] = "FYXX";
})(ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapFeeTypeEnum || (ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapFeeTypeEnum = {}));
// ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapOtherFeeType
/**
 * Other fee type code which is not available in the standard code set
**/
var ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapOtherFeeType = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapOtherFeeType, _super);
    function ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapOtherFeeType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapOtherFeeType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapOtherFeeType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapOtherFeeType.prototype, "name", void 0);
    return ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapOtherFeeType;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapOtherFeeType };
// ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCap
/**
 * RepaymentFeeChargeCap sets daily, weekly, monthly, yearly limits on the fees that are charged
**/
var ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCap = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCap, _super);
    function ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CappingPeriod" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCap.prototype, "cappingPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapAmount" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCap.prototype, "feeCapAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" }),
        __metadata("design:type", Number)
    ], ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCap.prototype, "feeCapOccurrence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeType" }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCap.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinMaxType" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCap.prototype, "minMaxType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCap.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapOtherFeeType }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCap.prototype, "otherFeeType", void 0);
    return ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCap;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCap };
// ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetail
/**
 * Details about specific fees/charges that are applied for repayment
**/
var ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetail = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetail, _super);
    function ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplicationFrequency" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetail.prototype, "applicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CalculationFrequency" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetail.prototype, "calculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeAmount" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetail.prototype, "feeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeRate" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetail.prototype, "feeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeRateType" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetail.prototype, "feeRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeType" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetail.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NegotiableIndicator" }),
        __metadata("design:type", Boolean)
    ], ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetail.prototype, "negotiableIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetail.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherApplicationFrequency" }),
        __metadata("design:type", ObOtherCodeType16)
    ], ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetail.prototype, "otherApplicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherCalculationFrequency" }),
        __metadata("design:type", ObOtherCodeType17)
    ], ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetail.prototype, "otherCalculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeRateType" }),
        __metadata("design:type", ObOtherCodeType18)
    ], ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetail.prototype, "otherFeeRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeType" }),
        __metadata("design:type", ObOtherFeeChargeDetailType)
    ], ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetail.prototype, "otherFeeType", void 0);
    return ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetail;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetail };
// ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeCharges
/**
 * Applicable fee/charges for repayment such as prepayment, full early repayment or non repayment.
**/
var ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeCharges = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeCharges, _super);
    function ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RepaymentFeeChargeCap", elemType: ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCap }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeCharges.prototype, "repaymentFeeChargeCap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RepaymentFeeChargeDetail", elemType: ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeDetail }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeCharges.prototype, "repaymentFeeChargeDetail", void 0);
    return ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeCharges;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeCharges };
export var ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFrequencyEnum;
(function (ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFrequencyEnum) {
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFrequencyEnum["Smda"] = "SMDA";
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFrequencyEnum["Smfl"] = "SMFL";
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFrequencyEnum["Smfo"] = "SMFO";
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFrequencyEnum["Smhy"] = "SMHY";
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFrequencyEnum["Smmo"] = "SMMO";
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFrequencyEnum["Smot"] = "SMOT";
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFrequencyEnum["Smqu"] = "SMQU";
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFrequencyEnum["Smwe"] = "SMWE";
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFrequencyEnum["Smye"] = "SMYE";
})(ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFrequencyEnum || (ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFrequencyEnum = {}));
export var ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHolidayMaxHolidayPeriodEnum;
(function (ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHolidayMaxHolidayPeriodEnum) {
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHolidayMaxHolidayPeriodEnum["Pact"] = "PACT";
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHolidayMaxHolidayPeriodEnum["Pday"] = "PDAY";
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHolidayMaxHolidayPeriodEnum["Phyr"] = "PHYR";
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHolidayMaxHolidayPeriodEnum["Pmth"] = "PMTH";
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHolidayMaxHolidayPeriodEnum["Pqtr"] = "PQTR";
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHolidayMaxHolidayPeriodEnum["Pwek"] = "PWEK";
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHolidayMaxHolidayPeriodEnum["Pyer"] = "PYER";
})(ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHolidayMaxHolidayPeriodEnum || (ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHolidayMaxHolidayPeriodEnum = {}));
// ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHoliday
/**
 * Details of capital repayment holiday if any
**/
var ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHoliday = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHoliday, _super);
    function ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHoliday() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxHolidayLength" }),
        __metadata("design:type", Number)
    ], ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHoliday.prototype, "maxHolidayLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxHolidayPeriod" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHoliday.prototype, "maxHolidayPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHoliday.prototype, "notes", void 0);
    return ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHoliday;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHoliday };
export var ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentTypeEnum;
(function (ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentTypeEnum) {
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentTypeEnum["Usba"] = "USBA";
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentTypeEnum["Usbu"] = "USBU";
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentTypeEnum["Usci"] = "USCI";
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentTypeEnum["Uscs"] = "USCS";
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentTypeEnum["User"] = "USER";
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentTypeEnum["Usfa"] = "USFA";
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentTypeEnum["Usfb"] = "USFB";
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentTypeEnum["Usfi"] = "USFI";
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentTypeEnum["Usio"] = "USIO";
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentTypeEnum["Usot"] = "USOT";
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentTypeEnum["Uspf"] = "USPF";
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentTypeEnum["Usrw"] = "USRW";
    ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentTypeEnum["Ussl"] = "USSL";
})(ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentTypeEnum || (ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentTypeEnum = {}));
// ObReadProduct2DataProductOtherProductTypeRepayment
/**
 * Repayment details of the Loan product
**/
var ObReadProduct2DataProductOtherProductTypeRepayment = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductTypeRepayment, _super);
    function ObReadProduct2DataProductOtherProductTypeRepayment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AmountType" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeRepayment.prototype, "amountType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeRepayment.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherAmountType" }),
        __metadata("design:type", ObReadProduct2DataProductOtherProductTypeRepaymentOtherAmountType)
    ], ObReadProduct2DataProductOtherProductTypeRepayment.prototype, "otherAmountType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherRepaymentFrequency" }),
        __metadata("design:type", ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentFrequency)
    ], ObReadProduct2DataProductOtherProductTypeRepayment.prototype, "otherRepaymentFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherRepaymentType" }),
        __metadata("design:type", ObReadProduct2DataProductOtherProductTypeRepaymentOtherRepaymentType)
    ], ObReadProduct2DataProductOtherProductTypeRepayment.prototype, "otherRepaymentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RepaymentFeeCharges" }),
        __metadata("design:type", ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentFeeCharges)
    ], ObReadProduct2DataProductOtherProductTypeRepayment.prototype, "repaymentFeeCharges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RepaymentFrequency" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeRepayment.prototype, "repaymentFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RepaymentHoliday", elemType: ObReadProduct2DataProductOtherProductTypeRepaymentRepaymentHoliday }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductTypeRepayment.prototype, "repaymentHoliday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RepaymentType" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductTypeRepayment.prototype, "repaymentType", void 0);
    return ObReadProduct2DataProductOtherProductTypeRepayment;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductTypeRepayment };
// ObReadProduct2DataProductOtherProductType
/**
 * Other product type details associated with the account.
**/
var ObReadProduct2DataProductOtherProductType = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProductOtherProductType, _super);
    function ObReadProduct2DataProductOtherProductType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditInterest" }),
        __metadata("design:type", ObReadProduct2DataProductOtherProductTypeCreditInterest)
    ], ObReadProduct2DataProductOtherProductType.prototype, "creditInterest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LoanInterest" }),
        __metadata("design:type", ObReadProduct2DataProductOtherProductTypeLoanInterest)
    ], ObReadProduct2DataProductOtherProductType.prototype, "loanInterest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProductOtherProductType.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeesCharges", elemType: ObReadProduct2DataProductOtherProductTypeOtherFeesCharges }),
        __metadata("design:type", Array)
    ], ObReadProduct2DataProductOtherProductType.prototype, "otherFeesCharges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Overdraft" }),
        __metadata("design:type", ObReadProduct2DataProductOtherProductTypeOverdraft)
    ], ObReadProduct2DataProductOtherProductType.prototype, "overdraft", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductDetails" }),
        __metadata("design:type", ObReadProduct2DataProductOtherProductTypeProductDetails)
    ], ObReadProduct2DataProductOtherProductType.prototype, "productDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Repayment" }),
        __metadata("design:type", ObReadProduct2DataProductOtherProductTypeRepayment)
    ], ObReadProduct2DataProductOtherProductType.prototype, "repayment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupplementaryData" }),
        __metadata("design:type", Map)
    ], ObReadProduct2DataProductOtherProductType.prototype, "supplementaryData", void 0);
    return ObReadProduct2DataProductOtherProductType;
}(SpeakeasyBase));
export { ObReadProduct2DataProductOtherProductType };
export var ObReadProduct2DataProductProductTypeEnum;
(function (ObReadProduct2DataProductProductTypeEnum) {
    ObReadProduct2DataProductProductTypeEnum["BusinessCurrentAccount"] = "BusinessCurrentAccount";
    ObReadProduct2DataProductProductTypeEnum["CommercialCreditCard"] = "CommercialCreditCard";
    ObReadProduct2DataProductProductTypeEnum["Other"] = "Other";
    ObReadProduct2DataProductProductTypeEnum["PersonalCurrentAccount"] = "PersonalCurrentAccount";
    ObReadProduct2DataProductProductTypeEnum["SmeLoan"] = "SMELoan";
})(ObReadProduct2DataProductProductTypeEnum || (ObReadProduct2DataProductProductTypeEnum = {}));
// ObReadProduct2DataProduct
/**
 * Product details associated with the Account
**/
var ObReadProduct2DataProduct = /** @class */ (function (_super) {
    __extends(ObReadProduct2DataProduct, _super);
    function ObReadProduct2DataProduct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountId" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProduct.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BCA" }),
        __metadata("design:type", ObbcaData1)
    ], ObReadProduct2DataProduct.prototype, "bca", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MarketingStateId" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProduct.prototype, "marketingStateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherProductType" }),
        __metadata("design:type", ObReadProduct2DataProductOtherProductType)
    ], ObReadProduct2DataProduct.prototype, "otherProductType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PCA" }),
        __metadata("design:type", ObpcaData1)
    ], ObReadProduct2DataProduct.prototype, "pca", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductId" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProduct.prototype, "productId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductName" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProduct.prototype, "productName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductType" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProduct.prototype, "productType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryProductId" }),
        __metadata("design:type", String)
    ], ObReadProduct2DataProduct.prototype, "secondaryProductId", void 0);
    return ObReadProduct2DataProduct;
}(SpeakeasyBase));
export { ObReadProduct2DataProduct };
// ObReadProduct2Data
/**
 * Aligning with the read write specs structure.
**/
var ObReadProduct2Data = /** @class */ (function (_super) {
    __extends(ObReadProduct2Data, _super);
    function ObReadProduct2Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Product", elemType: ObReadProduct2DataProduct }),
        __metadata("design:type", Array)
    ], ObReadProduct2Data.prototype, "product", void 0);
    return ObReadProduct2Data;
}(SpeakeasyBase));
export { ObReadProduct2Data };
// ObReadProduct2
/**
 * Product details of Other Product which is not avaiable in the standard list
**/
var ObReadProduct2 = /** @class */ (function (_super) {
    __extends(ObReadProduct2, _super);
    function ObReadProduct2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObReadProduct2Data)
    ], ObReadProduct2.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Links" }),
        __metadata("design:type", Links)
    ], ObReadProduct2.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Meta" }),
        __metadata("design:type", Meta)
    ], ObReadProduct2.prototype, "meta", void 0);
    return ObReadProduct2;
}(SpeakeasyBase));
export { ObReadProduct2 };
