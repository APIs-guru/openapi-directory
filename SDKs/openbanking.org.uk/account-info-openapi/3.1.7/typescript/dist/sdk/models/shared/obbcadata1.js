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
export var ObbcaData1CreditInterestTierBandSetCalculationMethodEnum;
(function (ObbcaData1CreditInterestTierBandSetCalculationMethodEnum) {
    ObbcaData1CreditInterestTierBandSetCalculationMethodEnum["Compound"] = "Compound";
    ObbcaData1CreditInterestTierBandSetCalculationMethodEnum["SimpleInterest"] = "SimpleInterest";
})(ObbcaData1CreditInterestTierBandSetCalculationMethodEnum || (ObbcaData1CreditInterestTierBandSetCalculationMethodEnum = {}));
export var ObbcaData1CreditInterestTierBandSetDestinationEnum;
(function (ObbcaData1CreditInterestTierBandSetDestinationEnum) {
    ObbcaData1CreditInterestTierBandSetDestinationEnum["PayAway"] = "PayAway";
    ObbcaData1CreditInterestTierBandSetDestinationEnum["SelfCredit"] = "SelfCredit";
})(ObbcaData1CreditInterestTierBandSetDestinationEnum || (ObbcaData1CreditInterestTierBandSetDestinationEnum = {}));
export var ObbcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum;
(function (ObbcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum) {
    ObbcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum["Daily"] = "Daily";
    ObbcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum["HalfYearly"] = "HalfYearly";
    ObbcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum["Monthly"] = "Monthly";
    ObbcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum["Other"] = "Other";
    ObbcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum["Quarterly"] = "Quarterly";
    ObbcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum["PerStatementDate"] = "PerStatementDate";
    ObbcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum["Weekly"] = "Weekly";
    ObbcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum["Yearly"] = "Yearly";
})(ObbcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum || (ObbcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum = {}));
export var ObbcaData1CreditInterestTierBandSetTierBandBankInterestRateTypeEnum;
(function (ObbcaData1CreditInterestTierBandSetTierBandBankInterestRateTypeEnum) {
    ObbcaData1CreditInterestTierBandSetTierBandBankInterestRateTypeEnum["Gross"] = "Gross";
    ObbcaData1CreditInterestTierBandSetTierBandBankInterestRateTypeEnum["Other"] = "Other";
})(ObbcaData1CreditInterestTierBandSetTierBandBankInterestRateTypeEnum || (ObbcaData1CreditInterestTierBandSetTierBandBankInterestRateTypeEnum = {}));
export var ObbcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum;
(function (ObbcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum) {
    ObbcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum["Daily"] = "Daily";
    ObbcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum["HalfYearly"] = "HalfYearly";
    ObbcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum["Monthly"] = "Monthly";
    ObbcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum["Other"] = "Other";
    ObbcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum["Quarterly"] = "Quarterly";
    ObbcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum["PerStatementDate"] = "PerStatementDate";
    ObbcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum["Weekly"] = "Weekly";
    ObbcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum["Yearly"] = "Yearly";
})(ObbcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum || (ObbcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum = {}));
export var ObbcaData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum;
(function (ObbcaData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum) {
    ObbcaData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum["Banded"] = "Banded";
    ObbcaData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum["Tiered"] = "Tiered";
    ObbcaData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum["Whole"] = "Whole";
})(ObbcaData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum || (ObbcaData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum = {}));
export var ObbcaData1CreditInterestTierBandSetTierBandFixedVariableInterestRateTypeEnum;
(function (ObbcaData1CreditInterestTierBandSetTierBandFixedVariableInterestRateTypeEnum) {
    ObbcaData1CreditInterestTierBandSetTierBandFixedVariableInterestRateTypeEnum["Fixed"] = "Fixed";
    ObbcaData1CreditInterestTierBandSetTierBandFixedVariableInterestRateTypeEnum["Variable"] = "Variable";
})(ObbcaData1CreditInterestTierBandSetTierBandFixedVariableInterestRateTypeEnum || (ObbcaData1CreditInterestTierBandSetTierBandFixedVariableInterestRateTypeEnum = {}));
// ObbcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency
/**
 * Other application frequencies that are not available in the standard code list
**/
var ObbcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency = /** @class */ (function (_super) {
    __extends(ObbcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency, _super);
    function ObbcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObbcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObbcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObbcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency.prototype, "name", void 0);
    return ObbcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency;
}(SpeakeasyBase));
export { ObbcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency };
// ObbcaData1CreditInterestTierBandSetTierBandOtherBankInterestType
/**
 * Other interest rate types which are not available in the standard code list
**/
var ObbcaData1CreditInterestTierBandSetTierBandOtherBankInterestType = /** @class */ (function (_super) {
    __extends(ObbcaData1CreditInterestTierBandSetTierBandOtherBankInterestType, _super);
    function ObbcaData1CreditInterestTierBandSetTierBandOtherBankInterestType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObbcaData1CreditInterestTierBandSetTierBandOtherBankInterestType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObbcaData1CreditInterestTierBandSetTierBandOtherBankInterestType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObbcaData1CreditInterestTierBandSetTierBandOtherBankInterestType.prototype, "name", void 0);
    return ObbcaData1CreditInterestTierBandSetTierBandOtherBankInterestType;
}(SpeakeasyBase));
export { ObbcaData1CreditInterestTierBandSetTierBandOtherBankInterestType };
// ObbcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency
/**
 * Other calculation frequency which is not available in the standard code set.
**/
var ObbcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency = /** @class */ (function (_super) {
    __extends(ObbcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency, _super);
    function ObbcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObbcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObbcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObbcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency.prototype, "name", void 0);
    return ObbcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency;
}(SpeakeasyBase));
export { ObbcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency };
// ObbcaData1CreditInterestTierBandSetTierBand
/**
 * Tier Band Details
**/
var ObbcaData1CreditInterestTierBandSetTierBand = /** @class */ (function (_super) {
    __extends(ObbcaData1CreditInterestTierBandSetTierBand, _super);
    function ObbcaData1CreditInterestTierBandSetTierBand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AER" }),
        __metadata("design:type", String)
    ], ObbcaData1CreditInterestTierBandSetTierBand.prototype, "aer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplicationFrequency" }),
        __metadata("design:type", String)
    ], ObbcaData1CreditInterestTierBandSetTierBand.prototype, "applicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BankInterestRate" }),
        __metadata("design:type", String)
    ], ObbcaData1CreditInterestTierBandSetTierBand.prototype, "bankInterestRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BankInterestRateType" }),
        __metadata("design:type", String)
    ], ObbcaData1CreditInterestTierBandSetTierBand.prototype, "bankInterestRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CalculationFrequency" }),
        __metadata("design:type", String)
    ], ObbcaData1CreditInterestTierBandSetTierBand.prototype, "calculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DepositInterestAppliedCoverage" }),
        __metadata("design:type", String)
    ], ObbcaData1CreditInterestTierBandSetTierBand.prototype, "depositInterestAppliedCoverage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FixedVariableInterestRateType" }),
        __metadata("design:type", String)
    ], ObbcaData1CreditInterestTierBandSetTierBand.prototype, "fixedVariableInterestRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObbcaData1CreditInterestTierBandSetTierBand.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObbcaData1CreditInterestTierBandSetTierBand.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherApplicationFrequency" }),
        __metadata("design:type", ObbcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency)
    ], ObbcaData1CreditInterestTierBandSetTierBand.prototype, "otherApplicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherBankInterestType" }),
        __metadata("design:type", ObbcaData1CreditInterestTierBandSetTierBandOtherBankInterestType)
    ], ObbcaData1CreditInterestTierBandSetTierBand.prototype, "otherBankInterestType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherCalculationFrequency" }),
        __metadata("design:type", ObbcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency)
    ], ObbcaData1CreditInterestTierBandSetTierBand.prototype, "otherCalculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierValueMaximum" }),
        __metadata("design:type", String)
    ], ObbcaData1CreditInterestTierBandSetTierBand.prototype, "tierValueMaximum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierValueMinimum" }),
        __metadata("design:type", String)
    ], ObbcaData1CreditInterestTierBandSetTierBand.prototype, "tierValueMinimum", void 0);
    return ObbcaData1CreditInterestTierBandSetTierBand;
}(SpeakeasyBase));
export { ObbcaData1CreditInterestTierBandSetTierBand };
export var ObbcaData1CreditInterestTierBandSetTierBandMethodEnum;
(function (ObbcaData1CreditInterestTierBandSetTierBandMethodEnum) {
    ObbcaData1CreditInterestTierBandSetTierBandMethodEnum["Banded"] = "Banded";
    ObbcaData1CreditInterestTierBandSetTierBandMethodEnum["Tiered"] = "Tiered";
    ObbcaData1CreditInterestTierBandSetTierBandMethodEnum["Whole"] = "Whole";
})(ObbcaData1CreditInterestTierBandSetTierBandMethodEnum || (ObbcaData1CreditInterestTierBandSetTierBandMethodEnum = {}));
// ObbcaData1CreditInterestTierBandSet
/**
 * The group of tiers or bands for which credit interest can be applied.
**/
var ObbcaData1CreditInterestTierBandSet = /** @class */ (function (_super) {
    __extends(ObbcaData1CreditInterestTierBandSet, _super);
    function ObbcaData1CreditInterestTierBandSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CalculationMethod" }),
        __metadata("design:type", String)
    ], ObbcaData1CreditInterestTierBandSet.prototype, "calculationMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Destination" }),
        __metadata("design:type", String)
    ], ObbcaData1CreditInterestTierBandSet.prototype, "destination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObbcaData1CreditInterestTierBandSet.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierBand", elemType: ObbcaData1CreditInterestTierBandSetTierBand }),
        __metadata("design:type", Array)
    ], ObbcaData1CreditInterestTierBandSet.prototype, "tierBand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierBandMethod" }),
        __metadata("design:type", String)
    ], ObbcaData1CreditInterestTierBandSet.prototype, "tierBandMethod", void 0);
    return ObbcaData1CreditInterestTierBandSet;
}(SpeakeasyBase));
export { ObbcaData1CreditInterestTierBandSet };
// ObbcaData1CreditInterest
/**
 * Details about the interest that may be payable to the BCA account holders
**/
var ObbcaData1CreditInterest = /** @class */ (function (_super) {
    __extends(ObbcaData1CreditInterest, _super);
    function ObbcaData1CreditInterest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierBandSet", elemType: ObbcaData1CreditInterestTierBandSet }),
        __metadata("design:type", Array)
    ], ObbcaData1CreditInterest.prototype, "tierBandSet", void 0);
    return ObbcaData1CreditInterest;
}(SpeakeasyBase));
export { ObbcaData1CreditInterest };
export var ObbcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum;
(function (ObbcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum) {
    ObbcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum["Day"] = "Day";
    ObbcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum["HalfYear"] = "Half Year";
    ObbcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum["Month"] = "Month";
    ObbcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum["Quarter"] = "Quarter";
    ObbcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum["Week"] = "Week";
    ObbcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum["Year"] = "Year";
})(ObbcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum || (ObbcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum = {}));
export var ObbcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum;
(function (ObbcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum) {
    ObbcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum["Other"] = "Other";
    ObbcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum["ServiceCAccountFee"] = "ServiceCAccountFee";
    ObbcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum["ServiceCAccountFeeMonthly"] = "ServiceCAccountFeeMonthly";
    ObbcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum["ServiceCAccountFeeQuarterly"] = "ServiceCAccountFeeQuarterly";
    ObbcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum["ServiceCFixedTariff"] = "ServiceCFixedTariff";
    ObbcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum["ServiceCBusiDepAccBreakage"] = "ServiceCBusiDepAccBreakage";
    ObbcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum["ServiceCMinimumMonthlyFee"] = "ServiceCMinimumMonthlyFee";
    ObbcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum["ServiceCOther"] = "ServiceCOther";
})(ObbcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum || (ObbcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum = {}));
export var ObbcaData1OtherFeesChargesFeeChargeCapMinMaxTypeEnum;
(function (ObbcaData1OtherFeesChargesFeeChargeCapMinMaxTypeEnum) {
    ObbcaData1OtherFeesChargesFeeChargeCapMinMaxTypeEnum["Minimum"] = "Minimum";
    ObbcaData1OtherFeesChargesFeeChargeCapMinMaxTypeEnum["Maximum"] = "Maximum";
})(ObbcaData1OtherFeesChargesFeeChargeCapMinMaxTypeEnum || (ObbcaData1OtherFeesChargesFeeChargeCapMinMaxTypeEnum = {}));
// ObbcaData1OtherFeesChargesFeeChargeCapOtherFeeType
/**
 * Other fee type code which is not available in the standard code set
**/
var ObbcaData1OtherFeesChargesFeeChargeCapOtherFeeType = /** @class */ (function (_super) {
    __extends(ObbcaData1OtherFeesChargesFeeChargeCapOtherFeeType, _super);
    function ObbcaData1OtherFeesChargesFeeChargeCapOtherFeeType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeCapOtherFeeType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeCapOtherFeeType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeCapOtherFeeType.prototype, "name", void 0);
    return ObbcaData1OtherFeesChargesFeeChargeCapOtherFeeType;
}(SpeakeasyBase));
export { ObbcaData1OtherFeesChargesFeeChargeCapOtherFeeType };
// ObbcaData1OtherFeesChargesFeeChargeCap
/**
 * Details about any caps (maximum charges) that apply to a particular or group of fee/charge
**/
var ObbcaData1OtherFeesChargesFeeChargeCap = /** @class */ (function (_super) {
    __extends(ObbcaData1OtherFeesChargesFeeChargeCap, _super);
    function ObbcaData1OtherFeesChargesFeeChargeCap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CappingPeriod" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeCap.prototype, "cappingPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapAmount" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeCap.prototype, "feeCapAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" }),
        __metadata("design:type", Number)
    ], ObbcaData1OtherFeesChargesFeeChargeCap.prototype, "feeCapOccurrence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeType" }),
        __metadata("design:type", Array)
    ], ObbcaData1OtherFeesChargesFeeChargeCap.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinMaxType" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeCap.prototype, "minMaxType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObbcaData1OtherFeesChargesFeeChargeCap.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObbcaData1OtherFeesChargesFeeChargeCapOtherFeeType }),
        __metadata("design:type", Array)
    ], ObbcaData1OtherFeesChargesFeeChargeCap.prototype, "otherFeeType", void 0);
    return ObbcaData1OtherFeesChargesFeeChargeCap;
}(SpeakeasyBase));
export { ObbcaData1OtherFeesChargesFeeChargeCap };
export var ObbcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum;
(function (ObbcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum) {
    ObbcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["OnClosing"] = "OnClosing";
    ObbcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["OnOpening"] = "OnOpening";
    ObbcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["ChargingPeriod"] = "ChargingPeriod";
    ObbcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["Daily"] = "Daily";
    ObbcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["PerItem"] = "PerItem";
    ObbcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["Monthly"] = "Monthly";
    ObbcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["OnAnniversary"] = "OnAnniversary";
    ObbcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["Other"] = "Other";
    ObbcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["PerHundredPounds"] = "PerHundredPounds";
    ObbcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["PerHour"] = "PerHour";
    ObbcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["PerOccurrence"] = "PerOccurrence";
    ObbcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["PerSheet"] = "PerSheet";
    ObbcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["PerTransaction"] = "PerTransaction";
    ObbcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["PerTransactionAmount"] = "PerTransactionAmount";
    ObbcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["PerTransactionPercentage"] = "PerTransactionPercentage";
    ObbcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["Quarterly"] = "Quarterly";
    ObbcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["SixMonthly"] = "SixMonthly";
    ObbcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["StatementMonthly"] = "StatementMonthly";
    ObbcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["Weekly"] = "Weekly";
    ObbcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["Yearly"] = "Yearly";
})(ObbcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum || (ObbcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum = {}));
export var ObbcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum;
(function (ObbcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum) {
    ObbcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["OnClosing"] = "OnClosing";
    ObbcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["OnOpening"] = "OnOpening";
    ObbcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["ChargingPeriod"] = "ChargingPeriod";
    ObbcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["Daily"] = "Daily";
    ObbcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["PerItem"] = "PerItem";
    ObbcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["Monthly"] = "Monthly";
    ObbcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["OnAnniversary"] = "OnAnniversary";
    ObbcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["Other"] = "Other";
    ObbcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["PerHundredPounds"] = "PerHundredPounds";
    ObbcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["PerHour"] = "PerHour";
    ObbcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["PerOccurrence"] = "PerOccurrence";
    ObbcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["PerSheet"] = "PerSheet";
    ObbcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["PerTransaction"] = "PerTransaction";
    ObbcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["PerTransactionAmount"] = "PerTransactionAmount";
    ObbcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["PerTransactionPercentage"] = "PerTransactionPercentage";
    ObbcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["Quarterly"] = "Quarterly";
    ObbcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["SixMonthly"] = "SixMonthly";
    ObbcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["StatementMonthly"] = "StatementMonthly";
    ObbcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["Weekly"] = "Weekly";
    ObbcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["Yearly"] = "Yearly";
})(ObbcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum || (ObbcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum = {}));
// ObbcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange
/**
 * Range or amounts or rates for which the fee/charge applies
**/
var ObbcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange = /** @class */ (function (_super) {
    __extends(ObbcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange, _super);
    function ObbcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumAmount" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange.prototype, "maximumAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumRate" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange.prototype, "maximumRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumAmount" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange.prototype, "minimumAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumRate" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange.prototype, "minimumRate", void 0);
    return ObbcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange;
}(SpeakeasyBase));
export { ObbcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange };
export var ObbcaData1OtherFeesChargesFeeChargeDetailFeeCategoryEnum;
(function (ObbcaData1OtherFeesChargesFeeChargeDetailFeeCategoryEnum) {
    ObbcaData1OtherFeesChargesFeeChargeDetailFeeCategoryEnum["Other"] = "Other";
    ObbcaData1OtherFeesChargesFeeChargeDetailFeeCategoryEnum["Servicing"] = "Servicing";
})(ObbcaData1OtherFeesChargesFeeChargeDetailFeeCategoryEnum || (ObbcaData1OtherFeesChargesFeeChargeDetailFeeCategoryEnum = {}));
export var ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum;
(function (ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum) {
    ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum["Day"] = "Day";
    ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum["HalfYear"] = "Half Year";
    ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum["Month"] = "Month";
    ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum["Quarter"] = "Quarter";
    ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum["Week"] = "Week";
    ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum["Year"] = "Year";
})(ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum || (ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum = {}));
export var ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum;
(function (ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum) {
    ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum["Other"] = "Other";
    ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum["ServiceCAccountFee"] = "ServiceCAccountFee";
    ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum["ServiceCAccountFeeMonthly"] = "ServiceCAccountFeeMonthly";
    ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum["ServiceCAccountFeeQuarterly"] = "ServiceCAccountFeeQuarterly";
    ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum["ServiceCFixedTariff"] = "ServiceCFixedTariff";
    ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum["ServiceCBusiDepAccBreakage"] = "ServiceCBusiDepAccBreakage";
    ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum["ServiceCMinimumMonthlyFee"] = "ServiceCMinimumMonthlyFee";
    ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum["ServiceCOther"] = "ServiceCOther";
})(ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum || (ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum = {}));
export var ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapMinMaxTypeEnum;
(function (ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapMinMaxTypeEnum) {
    ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapMinMaxTypeEnum["Minimum"] = "Minimum";
    ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapMinMaxTypeEnum["Maximum"] = "Maximum";
})(ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapMinMaxTypeEnum || (ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapMinMaxTypeEnum = {}));
// ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType
/**
 * Other fee type code which is not available in the standard code set
**/
var ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType = /** @class */ (function (_super) {
    __extends(ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType, _super);
    function ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType.prototype, "name", void 0);
    return ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType;
}(SpeakeasyBase));
export { ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType };
// ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap
/**
 * Details about any caps (maximum charges) that apply to a particular or group of fee/charge
**/
var ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap = /** @class */ (function (_super) {
    __extends(ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap, _super);
    function ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CappingPeriod" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap.prototype, "cappingPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapAmount" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap.prototype, "feeCapAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" }),
        __metadata("design:type", Number)
    ], ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap.prototype, "feeCapOccurrence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeType" }),
        __metadata("design:type", Array)
    ], ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinMaxType" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap.prototype, "minMaxType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType }),
        __metadata("design:type", Array)
    ], ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap.prototype, "otherFeeType", void 0);
    return ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap;
}(SpeakeasyBase));
export { ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap };
export var ObbcaData1OtherFeesChargesFeeChargeDetailFeeRateTypeEnum;
(function (ObbcaData1OtherFeesChargesFeeChargeDetailFeeRateTypeEnum) {
    ObbcaData1OtherFeesChargesFeeChargeDetailFeeRateTypeEnum["Gross"] = "Gross";
    ObbcaData1OtherFeesChargesFeeChargeDetailFeeRateTypeEnum["Other"] = "Other";
})(ObbcaData1OtherFeesChargesFeeChargeDetailFeeRateTypeEnum || (ObbcaData1OtherFeesChargesFeeChargeDetailFeeRateTypeEnum = {}));
export var ObbcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum;
(function (ObbcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum) {
    ObbcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum["Other"] = "Other";
    ObbcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum["ServiceCAccountFee"] = "ServiceCAccountFee";
    ObbcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum["ServiceCAccountFeeMonthly"] = "ServiceCAccountFeeMonthly";
    ObbcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum["ServiceCAccountFeeQuarterly"] = "ServiceCAccountFeeQuarterly";
    ObbcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum["ServiceCFixedTariff"] = "ServiceCFixedTariff";
    ObbcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum["ServiceCBusiDepAccBreakage"] = "ServiceCBusiDepAccBreakage";
    ObbcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum["ServiceCMinimumMonthlyFee"] = "ServiceCMinimumMonthlyFee";
    ObbcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum["ServiceCOther"] = "ServiceCOther";
})(ObbcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum || (ObbcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum = {}));
// ObbcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency
/**
 * Other application frequencies not covered in the standard code list
**/
var ObbcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency = /** @class */ (function (_super) {
    __extends(ObbcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency, _super);
    function ObbcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency.prototype, "name", void 0);
    return ObbcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency;
}(SpeakeasyBase));
export { ObbcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency };
// ObbcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency
/**
 * Other calculation frequency which is not available in standard code set.
**/
var ObbcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency = /** @class */ (function (_super) {
    __extends(ObbcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency, _super);
    function ObbcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency.prototype, "name", void 0);
    return ObbcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency;
}(SpeakeasyBase));
export { ObbcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency };
var ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType = /** @class */ (function (_super) {
    __extends(ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType, _super);
    function ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType.prototype, "name", void 0);
    return ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType;
}(SpeakeasyBase));
export { ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType };
// ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType
/**
 * Other fee rate type which is not available in the standard code set
**/
var ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType = /** @class */ (function (_super) {
    __extends(ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType, _super);
    function ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType.prototype, "name", void 0);
    return ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType;
}(SpeakeasyBase));
export { ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType };
export var ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFeeCategoryEnum;
(function (ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFeeCategoryEnum) {
    ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFeeCategoryEnum["Other"] = "Other";
    ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFeeCategoryEnum["Servicing"] = "Servicing";
})(ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFeeCategoryEnum || (ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFeeCategoryEnum = {}));
// ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeType
/**
 * Other Fee/charge type which is not available in the standard code set
**/
var ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeType = /** @class */ (function (_super) {
    __extends(ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeType, _super);
    function ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCategory" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeType.prototype, "feeCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeType.prototype, "name", void 0);
    return ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeType;
}(SpeakeasyBase));
export { ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeType };
// ObbcaData1OtherFeesChargesFeeChargeDetail
/**
 * Other fees/charges details
**/
var ObbcaData1OtherFeesChargesFeeChargeDetail = /** @class */ (function (_super) {
    __extends(ObbcaData1OtherFeesChargesFeeChargeDetail, _super);
    function ObbcaData1OtherFeesChargesFeeChargeDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplicationFrequency" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeDetail.prototype, "applicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CalculationFrequency" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeDetail.prototype, "calculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeAmount" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeDetail.prototype, "feeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeApplicableRange" }),
        __metadata("design:type", ObbcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange)
    ], ObbcaData1OtherFeesChargesFeeChargeDetail.prototype, "feeApplicableRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCategory" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeDetail.prototype, "feeCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeCap", elemType: ObbcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap }),
        __metadata("design:type", Array)
    ], ObbcaData1OtherFeesChargesFeeChargeDetail.prototype, "feeChargeCap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeRate" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeDetail.prototype, "feeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeRateType" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeDetail.prototype, "feeRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeType" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesFeeChargeDetail.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NegotiableIndicator" }),
        __metadata("design:type", Boolean)
    ], ObbcaData1OtherFeesChargesFeeChargeDetail.prototype, "negotiableIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObbcaData1OtherFeesChargesFeeChargeDetail.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherApplicationFrequency" }),
        __metadata("design:type", ObbcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency)
    ], ObbcaData1OtherFeesChargesFeeChargeDetail.prototype, "otherApplicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherCalculationFrequency" }),
        __metadata("design:type", ObbcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency)
    ], ObbcaData1OtherFeesChargesFeeChargeDetail.prototype, "otherCalculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeCategoryType" }),
        __metadata("design:type", ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType)
    ], ObbcaData1OtherFeesChargesFeeChargeDetail.prototype, "otherFeeCategoryType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeRateType" }),
        __metadata("design:type", ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType)
    ], ObbcaData1OtherFeesChargesFeeChargeDetail.prototype, "otherFeeRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeType" }),
        __metadata("design:type", ObbcaData1OtherFeesChargesFeeChargeDetailOtherFeeType)
    ], ObbcaData1OtherFeesChargesFeeChargeDetail.prototype, "otherFeeType", void 0);
    return ObbcaData1OtherFeesChargesFeeChargeDetail;
}(SpeakeasyBase));
export { ObbcaData1OtherFeesChargesFeeChargeDetail };
// ObbcaData1OtherFeesChargesOtherTariffType
/**
 * Other tariff type which is not in the standard list.
**/
var ObbcaData1OtherFeesChargesOtherTariffType = /** @class */ (function (_super) {
    __extends(ObbcaData1OtherFeesChargesOtherTariffType, _super);
    function ObbcaData1OtherFeesChargesOtherTariffType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesOtherTariffType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesOtherTariffType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesChargesOtherTariffType.prototype, "name", void 0);
    return ObbcaData1OtherFeesChargesOtherTariffType;
}(SpeakeasyBase));
export { ObbcaData1OtherFeesChargesOtherTariffType };
export var ObbcaData1OtherFeesChargesTariffTypeEnum;
(function (ObbcaData1OtherFeesChargesTariffTypeEnum) {
    ObbcaData1OtherFeesChargesTariffTypeEnum["Electronic"] = "Electronic";
    ObbcaData1OtherFeesChargesTariffTypeEnum["Mixed"] = "Mixed";
    ObbcaData1OtherFeesChargesTariffTypeEnum["Other"] = "Other";
})(ObbcaData1OtherFeesChargesTariffTypeEnum || (ObbcaData1OtherFeesChargesTariffTypeEnum = {}));
// ObbcaData1OtherFeesCharges
/**
 * Contains details of fees and charges which are not associated with either Overdraft or features/benefits
**/
var ObbcaData1OtherFeesCharges = /** @class */ (function (_super) {
    __extends(ObbcaData1OtherFeesCharges, _super);
    function ObbcaData1OtherFeesCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeCap", elemType: ObbcaData1OtherFeesChargesFeeChargeCap }),
        __metadata("design:type", Array)
    ], ObbcaData1OtherFeesCharges.prototype, "feeChargeCap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeDetail", elemType: ObbcaData1OtherFeesChargesFeeChargeDetail }),
        __metadata("design:type", Array)
    ], ObbcaData1OtherFeesCharges.prototype, "feeChargeDetail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherTariffType" }),
        __metadata("design:type", ObbcaData1OtherFeesChargesOtherTariffType)
    ], ObbcaData1OtherFeesCharges.prototype, "otherTariffType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TariffName" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesCharges.prototype, "tariffName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TariffType" }),
        __metadata("design:type", String)
    ], ObbcaData1OtherFeesCharges.prototype, "tariffType", void 0);
    return ObbcaData1OtherFeesCharges;
}(SpeakeasyBase));
export { ObbcaData1OtherFeesCharges };
export var ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum;
(function (ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum) {
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum["Day"] = "Day";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum["HalfYear"] = "Half Year";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum["Month"] = "Month";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum["Quarter"] = "Quarter";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum["Week"] = "Week";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum["Year"] = "Year";
})(ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum || (ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum = {}));
export var ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum;
(function (ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum) {
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["ArrangedOverdraft"] = "ArrangedOverdraft";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["AnnualReview"] = "AnnualReview";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["EmergencyBorrowing"] = "EmergencyBorrowing";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["BorrowingItem"] = "BorrowingItem";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["OverdraftRenewal"] = "OverdraftRenewal";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["OverdraftSetup"] = "OverdraftSetup";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["Surcharge"] = "Surcharge";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["TempOverdraft"] = "TempOverdraft";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["UnauthorisedBorrowing"] = "UnauthorisedBorrowing";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["UnauthorisedPaidTrans"] = "UnauthorisedPaidTrans";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["Other"] = "Other";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["UnauthorisedUnpaidTrans"] = "UnauthorisedUnpaidTrans";
})(ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum || (ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum = {}));
export var ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum;
(function (ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum) {
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum["Minimum"] = "Minimum";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum["Maximum"] = "Maximum";
})(ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum || (ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum = {}));
// ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType
/**
 * Other fee type code which is not available in the standard code set
**/
var ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType = /** @class */ (function (_super) {
    __extends(ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType, _super);
    function ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType.prototype, "name", void 0);
    return ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType;
}(SpeakeasyBase));
export { ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType };
// ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap
/**
 * Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
**/
var ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap = /** @class */ (function (_super) {
    __extends(ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap, _super);
    function ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CappingPeriod" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "cappingPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapAmount" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "feeCapAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" }),
        __metadata("design:type", Number)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "feeCapOccurrence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeType" }),
        __metadata("design:type", Array)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinMaxType" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "minMaxType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType }),
        __metadata("design:type", Array)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "otherFeeType", void 0);
    return ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap;
}(SpeakeasyBase));
export { ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap };
export var ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum;
(function (ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum) {
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["OnClosing"] = "OnClosing";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["OnOpening"] = "OnOpening";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["ChargingPeriod"] = "ChargingPeriod";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["Daily"] = "Daily";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["PerItem"] = "PerItem";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["Monthly"] = "Monthly";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["OnAnniversary"] = "OnAnniversary";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["Other"] = "Other";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["PerHundredPounds"] = "PerHundredPounds";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["PerHour"] = "PerHour";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["PerOccurrence"] = "PerOccurrence";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["PerSheet"] = "PerSheet";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["PerTransaction"] = "PerTransaction";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["PerTransactionAmount"] = "PerTransactionAmount";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["PerTransactionPercentage"] = "PerTransactionPercentage";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["Quarterly"] = "Quarterly";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["SixMonthly"] = "SixMonthly";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["StatementMonthly"] = "StatementMonthly";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["Weekly"] = "Weekly";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["Yearly"] = "Yearly";
})(ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum || (ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum = {}));
export var ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum;
(function (ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum) {
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["OnClosing"] = "OnClosing";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["OnOpening"] = "OnOpening";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["ChargingPeriod"] = "ChargingPeriod";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["Daily"] = "Daily";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["PerItem"] = "PerItem";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["Monthly"] = "Monthly";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["OnAnniversary"] = "OnAnniversary";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["Other"] = "Other";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["PerHundredPounds"] = "PerHundredPounds";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["PerHour"] = "PerHour";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["PerOccurrence"] = "PerOccurrence";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["PerSheet"] = "PerSheet";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["PerTransaction"] = "PerTransaction";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["PerTransactionAmount"] = "PerTransactionAmount";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["PerTransactionPercentage"] = "PerTransactionPercentage";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["Quarterly"] = "Quarterly";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["SixMonthly"] = "SixMonthly";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["StatementMonthly"] = "StatementMonthly";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["Weekly"] = "Weekly";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["Yearly"] = "Yearly";
})(ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum || (ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum = {}));
export var ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum;
(function (ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum) {
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum["Gross"] = "Gross";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum["Other"] = "Other";
})(ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum || (ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum = {}));
export var ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum;
(function (ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum) {
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["ArrangedOverdraft"] = "ArrangedOverdraft";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["AnnualReview"] = "AnnualReview";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["EmergencyBorrowing"] = "EmergencyBorrowing";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["BorrowingItem"] = "BorrowingItem";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["OverdraftRenewal"] = "OverdraftRenewal";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["OverdraftSetup"] = "OverdraftSetup";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["Surcharge"] = "Surcharge";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["TempOverdraft"] = "TempOverdraft";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["UnauthorisedBorrowing"] = "UnauthorisedBorrowing";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["UnauthorisedPaidTrans"] = "UnauthorisedPaidTrans";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["Other"] = "Other";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["UnauthorisedUnpaidTrans"] = "UnauthorisedUnpaidTrans";
})(ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum || (ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum = {}));
// ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency
/**
 * Other application frequencies that are not available in the standard code list
**/
var ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency = /** @class */ (function (_super) {
    __extends(ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency, _super);
    function ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency.prototype, "name", void 0);
    return ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency;
}(SpeakeasyBase));
export { ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency };
// ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency
/**
 * Other calculation frequency which is not available in the standard code set.
**/
var ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency = /** @class */ (function (_super) {
    __extends(ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency, _super);
    function ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency.prototype, "name", void 0);
    return ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency;
}(SpeakeasyBase));
export { ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency };
// ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType
/**
 * Other fee rate type code which is not available in the standard code set
**/
var ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType = /** @class */ (function (_super) {
    __extends(ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType, _super);
    function ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType.prototype, "name", void 0);
    return ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType;
}(SpeakeasyBase));
export { ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType };
// ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType
/**
 * Other Fee type which is not available in the standard code set
**/
var ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType = /** @class */ (function (_super) {
    __extends(ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType, _super);
    function ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType.prototype, "name", void 0);
    return ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType;
}(SpeakeasyBase));
export { ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType };
export var ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum;
(function (ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum) {
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum["Day"] = "Day";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum["HalfYear"] = "Half Year";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum["Month"] = "Month";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum["Quarter"] = "Quarter";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum["Week"] = "Week";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum["Year"] = "Year";
})(ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum || (ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum = {}));
export var ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum;
(function (ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum) {
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["ArrangedOverdraft"] = "ArrangedOverdraft";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["AnnualReview"] = "AnnualReview";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["EmergencyBorrowing"] = "EmergencyBorrowing";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["BorrowingItem"] = "BorrowingItem";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["OverdraftRenewal"] = "OverdraftRenewal";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["OverdraftSetup"] = "OverdraftSetup";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["Surcharge"] = "Surcharge";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["TempOverdraft"] = "TempOverdraft";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["UnauthorisedBorrowing"] = "UnauthorisedBorrowing";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["UnauthorisedPaidTrans"] = "UnauthorisedPaidTrans";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["Other"] = "Other";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["UnauthorisedUnpaidTrans"] = "UnauthorisedUnpaidTrans";
})(ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum || (ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum = {}));
export var ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum;
(function (ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum) {
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum["Minimum"] = "Minimum";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum["Maximum"] = "Maximum";
})(ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum || (ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum = {}));
// ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType
/**
 * Other fee type code which is not available in the standard code set
**/
var ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType = /** @class */ (function (_super) {
    __extends(ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType, _super);
    function ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType.prototype, "name", void 0);
    return ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType;
}(SpeakeasyBase));
export { ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType };
// ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap
/**
 * Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
**/
var ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap = /** @class */ (function (_super) {
    __extends(ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap, _super);
    function ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CappingPeriod" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "cappingPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapAmount" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "feeCapAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" }),
        __metadata("design:type", Number)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "feeCapOccurrence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeType" }),
        __metadata("design:type", Array)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinMaxType" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "minMaxType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType }),
        __metadata("design:type", Array)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "otherFeeType", void 0);
    return ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap;
}(SpeakeasyBase));
export { ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap };
// ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail
/**
 * Details about the fees/charges
**/
var ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail = /** @class */ (function (_super) {
    __extends(ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail, _super);
    function ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplicationFrequency" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "applicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CalculationFrequency" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "calculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeAmount" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "feeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeRate" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "feeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeRateType" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "feeRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeType" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IncrementalBorrowingAmount" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "incrementalBorrowingAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NegotiableIndicator" }),
        __metadata("design:type", Boolean)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "negotiableIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherApplicationFrequency" }),
        __metadata("design:type", ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "otherApplicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherCalculationFrequency" }),
        __metadata("design:type", ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "otherCalculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeRateType" }),
        __metadata("design:type", ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "otherFeeRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeType" }),
        __metadata("design:type", ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "otherFeeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftControlIndicator" }),
        __metadata("design:type", Boolean)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "overdraftControlIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftFeeChargeCap", elemType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap }),
        __metadata("design:type", Array)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "overdraftFeeChargeCap", void 0);
    return ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail;
}(SpeakeasyBase));
export { ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail };
// ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges
/**
 * Overdraft fees and charges details
**/
var ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges = /** @class */ (function (_super) {
    __extends(ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges, _super);
    function ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftFeeChargeCap", elemType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap }),
        __metadata("design:type", Array)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges.prototype, "overdraftFeeChargeCap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftFeeChargeDetail", elemType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail }),
        __metadata("design:type", Array)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges.prototype, "overdraftFeeChargeDetail", void 0);
    return ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges;
}(SpeakeasyBase));
export { ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges };
export var ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodEnum;
(function (ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodEnum) {
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodEnum["Day"] = "Day";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodEnum["HalfYear"] = "Half Year";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodEnum["Month"] = "Month";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodEnum["Quarter"] = "Quarter";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodEnum["Week"] = "Week";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodEnum["Year"] = "Year";
})(ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodEnum || (ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandAgreementPeriodEnum = {}));
export var ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum;
(function (ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum) {
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum["Day"] = "Day";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum["HalfYear"] = "Half Year";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum["Month"] = "Month";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum["Quarter"] = "Quarter";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum["Week"] = "Week";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum["Year"] = "Year";
})(ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum || (ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum = {}));
export var ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum;
(function (ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum) {
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["ArrangedOverdraft"] = "ArrangedOverdraft";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["AnnualReview"] = "AnnualReview";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["EmergencyBorrowing"] = "EmergencyBorrowing";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["BorrowingItem"] = "BorrowingItem";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["OverdraftRenewal"] = "OverdraftRenewal";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["OverdraftSetup"] = "OverdraftSetup";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["Surcharge"] = "Surcharge";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["TempOverdraft"] = "TempOverdraft";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["UnauthorisedBorrowing"] = "UnauthorisedBorrowing";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["UnauthorisedPaidTrans"] = "UnauthorisedPaidTrans";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["Other"] = "Other";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["UnauthorisedUnpaidTrans"] = "UnauthorisedUnpaidTrans";
})(ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum || (ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum = {}));
export var ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum;
(function (ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum) {
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum["Minimum"] = "Minimum";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum["Maximum"] = "Maximum";
})(ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum || (ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum = {}));
// ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType
/**
 * Other fee type code which is not available in the standard code set
**/
var ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType = /** @class */ (function (_super) {
    __extends(ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType, _super);
    function ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType.prototype, "name", void 0);
    return ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType;
}(SpeakeasyBase));
export { ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType };
// ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap
/**
 * Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
**/
var ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap = /** @class */ (function (_super) {
    __extends(ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap, _super);
    function ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CappingPeriod" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "cappingPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapAmount" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "feeCapAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" }),
        __metadata("design:type", Number)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "feeCapOccurrence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeType" }),
        __metadata("design:type", Array)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinMaxType" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "minMaxType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType }),
        __metadata("design:type", Array)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "otherFeeType", void 0);
    return ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap;
}(SpeakeasyBase));
export { ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap };
export var ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum;
(function (ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum) {
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["OnClosing"] = "OnClosing";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["OnOpening"] = "OnOpening";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["ChargingPeriod"] = "ChargingPeriod";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["Daily"] = "Daily";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["PerItem"] = "PerItem";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["Monthly"] = "Monthly";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["OnAnniversary"] = "OnAnniversary";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["Other"] = "Other";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["PerHundredPounds"] = "PerHundredPounds";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["PerHour"] = "PerHour";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["PerOccurrence"] = "PerOccurrence";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["PerSheet"] = "PerSheet";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["PerTransaction"] = "PerTransaction";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["PerTransactionAmount"] = "PerTransactionAmount";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["PerTransactionPercentage"] = "PerTransactionPercentage";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["Quarterly"] = "Quarterly";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["SixMonthly"] = "SixMonthly";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["StatementMonthly"] = "StatementMonthly";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["Weekly"] = "Weekly";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["Yearly"] = "Yearly";
})(ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum || (ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum = {}));
export var ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum;
(function (ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum) {
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["OnClosing"] = "OnClosing";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["OnOpening"] = "OnOpening";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["ChargingPeriod"] = "ChargingPeriod";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["Daily"] = "Daily";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["PerItem"] = "PerItem";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["Monthly"] = "Monthly";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["OnAnniversary"] = "OnAnniversary";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["Other"] = "Other";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["PerHundredPounds"] = "PerHundredPounds";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["PerHour"] = "PerHour";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["PerOccurrence"] = "PerOccurrence";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["PerSheet"] = "PerSheet";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["PerTransaction"] = "PerTransaction";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["PerTransactionAmount"] = "PerTransactionAmount";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["PerTransactionPercentage"] = "PerTransactionPercentage";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["Quarterly"] = "Quarterly";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["SixMonthly"] = "SixMonthly";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["StatementMonthly"] = "StatementMonthly";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["Weekly"] = "Weekly";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["Yearly"] = "Yearly";
})(ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum || (ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum = {}));
export var ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum;
(function (ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum) {
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum["Gross"] = "Gross";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum["Other"] = "Other";
})(ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum || (ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum = {}));
export var ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum;
(function (ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum) {
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["ArrangedOverdraft"] = "ArrangedOverdraft";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["AnnualReview"] = "AnnualReview";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["EmergencyBorrowing"] = "EmergencyBorrowing";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["BorrowingItem"] = "BorrowingItem";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["OverdraftRenewal"] = "OverdraftRenewal";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["OverdraftSetup"] = "OverdraftSetup";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["Surcharge"] = "Surcharge";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["TempOverdraft"] = "TempOverdraft";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["UnauthorisedBorrowing"] = "UnauthorisedBorrowing";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["UnauthorisedPaidTrans"] = "UnauthorisedPaidTrans";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["Other"] = "Other";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["UnauthorisedUnpaidTrans"] = "UnauthorisedUnpaidTrans";
})(ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum || (ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum = {}));
// ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency
/**
 * Other application frequencies that are not available in the standard code list
**/
var ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency = /** @class */ (function (_super) {
    __extends(ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency, _super);
    function ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency.prototype, "name", void 0);
    return ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency;
}(SpeakeasyBase));
export { ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency };
// ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency
/**
 * Other calculation frequency which is not available in the standard code set.
**/
var ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency = /** @class */ (function (_super) {
    __extends(ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency, _super);
    function ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency.prototype, "name", void 0);
    return ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency;
}(SpeakeasyBase));
export { ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency };
// ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType
/**
 * Other fee rate type code which is not available in the standard code set
**/
var ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType = /** @class */ (function (_super) {
    __extends(ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType, _super);
    function ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType.prototype, "name", void 0);
    return ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType;
}(SpeakeasyBase));
export { ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType };
// ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType
/**
 * Other Fee type which is not available in the standard code set
**/
var ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType = /** @class */ (function (_super) {
    __extends(ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType, _super);
    function ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType.prototype, "name", void 0);
    return ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType;
}(SpeakeasyBase));
export { ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType };
export var ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum;
(function (ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum) {
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum["Day"] = "Day";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum["HalfYear"] = "Half Year";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum["Month"] = "Month";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum["Quarter"] = "Quarter";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum["Week"] = "Week";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum["Year"] = "Year";
})(ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum || (ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum = {}));
export var ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum;
(function (ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum) {
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["ArrangedOverdraft"] = "ArrangedOverdraft";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["AnnualReview"] = "AnnualReview";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["EmergencyBorrowing"] = "EmergencyBorrowing";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["BorrowingItem"] = "BorrowingItem";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["OverdraftRenewal"] = "OverdraftRenewal";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["OverdraftSetup"] = "OverdraftSetup";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["Surcharge"] = "Surcharge";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["TempOverdraft"] = "TempOverdraft";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["UnauthorisedBorrowing"] = "UnauthorisedBorrowing";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["UnauthorisedPaidTrans"] = "UnauthorisedPaidTrans";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["Other"] = "Other";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["UnauthorisedUnpaidTrans"] = "UnauthorisedUnpaidTrans";
})(ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum || (ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum = {}));
export var ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum;
(function (ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum) {
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum["Minimum"] = "Minimum";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum["Maximum"] = "Maximum";
})(ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum || (ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum = {}));
// ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType
/**
 * Other fee type code which is not available in the standard code set
**/
var ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType = /** @class */ (function (_super) {
    __extends(ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType, _super);
    function ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType.prototype, "name", void 0);
    return ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType;
}(SpeakeasyBase));
export { ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType };
// ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap
/**
 * Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
**/
var ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap = /** @class */ (function (_super) {
    __extends(ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap, _super);
    function ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CappingPeriod" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "cappingPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapAmount" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "feeCapAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" }),
        __metadata("design:type", Number)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "feeCapOccurrence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeType" }),
        __metadata("design:type", Array)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinMaxType" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "minMaxType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType }),
        __metadata("design:type", Array)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "otherFeeType", void 0);
    return ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap;
}(SpeakeasyBase));
export { ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap };
// ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail
/**
 * Details about the fees/charges
**/
var ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail = /** @class */ (function (_super) {
    __extends(ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail, _super);
    function ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplicationFrequency" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "applicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CalculationFrequency" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "calculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeAmount" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "feeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeRate" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "feeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeRateType" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "feeRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeType" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IncrementalBorrowingAmount" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "incrementalBorrowingAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NegotiableIndicator" }),
        __metadata("design:type", Boolean)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "negotiableIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherApplicationFrequency" }),
        __metadata("design:type", ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "otherApplicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherCalculationFrequency" }),
        __metadata("design:type", ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "otherCalculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeRateType" }),
        __metadata("design:type", ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "otherFeeRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeType" }),
        __metadata("design:type", ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "otherFeeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftControlIndicator" }),
        __metadata("design:type", Boolean)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "overdraftControlIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftFeeChargeCap", elemType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap }),
        __metadata("design:type", Array)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "overdraftFeeChargeCap", void 0);
    return ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail;
}(SpeakeasyBase));
export { ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail };
// ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges
/**
 * Overdraft fees and charges
**/
var ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges = /** @class */ (function (_super) {
    __extends(ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges, _super);
    function ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftFeeChargeCap", elemType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap }),
        __metadata("design:type", Array)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges.prototype, "overdraftFeeChargeCap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftFeeChargeDetail", elemType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail }),
        __metadata("design:type", Array)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges.prototype, "overdraftFeeChargeDetail", void 0);
    return ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges;
}(SpeakeasyBase));
export { ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges };
export var ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum;
(function (ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum) {
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum["Banded"] = "Banded";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum["Tiered"] = "Tiered";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum["Whole"] = "Whole";
})(ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum || (ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum = {}));
// ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBand
/**
 * Provides overdraft details for a specific tier or band
**/
var ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBand = /** @class */ (function (_super) {
    __extends(ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBand, _super);
    function ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AgreementLengthMax" }),
        __metadata("design:type", Number)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "agreementLengthMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AgreementLengthMin" }),
        __metadata("design:type", Number)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "agreementLengthMin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AgreementPeriod" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "agreementPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BankGuaranteedIndicator" }),
        __metadata("design:type", Boolean)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "bankGuaranteedIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EAR" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "ear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftFeesCharges", elemType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges }),
        __metadata("design:type", Array)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "overdraftFeesCharges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftInterestChargingCoverage" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "overdraftInterestChargingCoverage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RepresentativeAPR" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "representativeApr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierValueMax" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "tierValueMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierValueMin" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "tierValueMin", void 0);
    return ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBand;
}(SpeakeasyBase));
export { ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBand };
export var ObbcaData1OverdraftOverdraftTierBandSetOverdraftTypeEnum;
(function (ObbcaData1OverdraftOverdraftTierBandSetOverdraftTypeEnum) {
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTypeEnum["Committed"] = "Committed";
    ObbcaData1OverdraftOverdraftTierBandSetOverdraftTypeEnum["OnDemand"] = "OnDemand";
})(ObbcaData1OverdraftOverdraftTierBandSetOverdraftTypeEnum || (ObbcaData1OverdraftOverdraftTierBandSetOverdraftTypeEnum = {}));
export var ObbcaData1OverdraftOverdraftTierBandSetTierBandMethodEnum;
(function (ObbcaData1OverdraftOverdraftTierBandSetTierBandMethodEnum) {
    ObbcaData1OverdraftOverdraftTierBandSetTierBandMethodEnum["Banded"] = "Banded";
    ObbcaData1OverdraftOverdraftTierBandSetTierBandMethodEnum["Tiered"] = "Tiered";
    ObbcaData1OverdraftOverdraftTierBandSetTierBandMethodEnum["Whole"] = "Whole";
})(ObbcaData1OverdraftOverdraftTierBandSetTierBandMethodEnum || (ObbcaData1OverdraftOverdraftTierBandSetTierBandMethodEnum = {}));
// ObbcaData1OverdraftOverdraftTierBandSet
/**
 * Tier band set details
**/
var ObbcaData1OverdraftOverdraftTierBandSet = /** @class */ (function (_super) {
    __extends(ObbcaData1OverdraftOverdraftTierBandSet, _super);
    function ObbcaData1OverdraftOverdraftTierBandSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AuthorisedIndicator" }),
        __metadata("design:type", Boolean)
    ], ObbcaData1OverdraftOverdraftTierBandSet.prototype, "authorisedIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BufferAmount" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSet.prototype, "bufferAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSet.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObbcaData1OverdraftOverdraftTierBandSet.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftFeesCharges", elemType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges }),
        __metadata("design:type", Array)
    ], ObbcaData1OverdraftOverdraftTierBandSet.prototype, "overdraftFeesCharges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftTierBand", elemType: ObbcaData1OverdraftOverdraftTierBandSetOverdraftTierBand }),
        __metadata("design:type", Array)
    ], ObbcaData1OverdraftOverdraftTierBandSet.prototype, "overdraftTierBand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftType" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSet.prototype, "overdraftType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierBandMethod" }),
        __metadata("design:type", String)
    ], ObbcaData1OverdraftOverdraftTierBandSet.prototype, "tierBandMethod", void 0);
    return ObbcaData1OverdraftOverdraftTierBandSet;
}(SpeakeasyBase));
export { ObbcaData1OverdraftOverdraftTierBandSet };
// ObbcaData1Overdraft
/**
 * Borrowing details
**/
var ObbcaData1Overdraft = /** @class */ (function (_super) {
    __extends(ObbcaData1Overdraft, _super);
    function ObbcaData1Overdraft() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObbcaData1Overdraft.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftTierBandSet", elemType: ObbcaData1OverdraftOverdraftTierBandSet }),
        __metadata("design:type", Array)
    ], ObbcaData1Overdraft.prototype, "overdraftTierBandSet", void 0);
    return ObbcaData1Overdraft;
}(SpeakeasyBase));
export { ObbcaData1Overdraft };
export var ObbcaData1ProductDetailsFeeFreeLengthPeriodEnum;
(function (ObbcaData1ProductDetailsFeeFreeLengthPeriodEnum) {
    ObbcaData1ProductDetailsFeeFreeLengthPeriodEnum["Day"] = "Day";
    ObbcaData1ProductDetailsFeeFreeLengthPeriodEnum["HalfYear"] = "Half Year";
    ObbcaData1ProductDetailsFeeFreeLengthPeriodEnum["Month"] = "Month";
    ObbcaData1ProductDetailsFeeFreeLengthPeriodEnum["Quarter"] = "Quarter";
    ObbcaData1ProductDetailsFeeFreeLengthPeriodEnum["Week"] = "Week";
    ObbcaData1ProductDetailsFeeFreeLengthPeriodEnum["Year"] = "Year";
})(ObbcaData1ProductDetailsFeeFreeLengthPeriodEnum || (ObbcaData1ProductDetailsFeeFreeLengthPeriodEnum = {}));
export var ObbcaData1ProductDetailsSegmentEnum;
(function (ObbcaData1ProductDetailsSegmentEnum) {
    ObbcaData1ProductDetailsSegmentEnum["ClientAccount"] = "ClientAccount";
    ObbcaData1ProductDetailsSegmentEnum["Standard"] = "Standard";
    ObbcaData1ProductDetailsSegmentEnum["NonCommercialChaitiesClbSoc"] = "NonCommercialChaitiesClbSoc";
    ObbcaData1ProductDetailsSegmentEnum["NonCommercialPublicAuthGovt"] = "NonCommercialPublicAuthGovt";
    ObbcaData1ProductDetailsSegmentEnum["Religious"] = "Religious";
    ObbcaData1ProductDetailsSegmentEnum["SectorSpecific"] = "SectorSpecific";
    ObbcaData1ProductDetailsSegmentEnum["Startup"] = "Startup";
    ObbcaData1ProductDetailsSegmentEnum["Switcher"] = "Switcher";
})(ObbcaData1ProductDetailsSegmentEnum || (ObbcaData1ProductDetailsSegmentEnum = {}));
var ObbcaData1ProductDetails = /** @class */ (function (_super) {
    __extends(ObbcaData1ProductDetails, _super);
    function ObbcaData1ProductDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeFreeLength" }),
        __metadata("design:type", Number)
    ], ObbcaData1ProductDetails.prototype, "feeFreeLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeFreeLengthPeriod" }),
        __metadata("design:type", String)
    ], ObbcaData1ProductDetails.prototype, "feeFreeLengthPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObbcaData1ProductDetails.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Segment" }),
        __metadata("design:type", Array)
    ], ObbcaData1ProductDetails.prototype, "segment", void 0);
    return ObbcaData1ProductDetails;
}(SpeakeasyBase));
export { ObbcaData1ProductDetails };
var ObbcaData1 = /** @class */ (function (_super) {
    __extends(ObbcaData1, _super);
    function ObbcaData1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditInterest" }),
        __metadata("design:type", ObbcaData1CreditInterest)
    ], ObbcaData1.prototype, "creditInterest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeesCharges", elemType: ObbcaData1OtherFeesCharges }),
        __metadata("design:type", Array)
    ], ObbcaData1.prototype, "otherFeesCharges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Overdraft" }),
        __metadata("design:type", ObbcaData1Overdraft)
    ], ObbcaData1.prototype, "overdraft", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductDetails" }),
        __metadata("design:type", ObbcaData1ProductDetails)
    ], ObbcaData1.prototype, "productDetails", void 0);
    return ObbcaData1;
}(SpeakeasyBase));
export { ObbcaData1 };
