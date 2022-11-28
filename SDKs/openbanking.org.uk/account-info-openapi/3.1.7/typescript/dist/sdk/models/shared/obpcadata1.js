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
export var ObpcaData1CreditInterestTierBandSetCalculationMethodEnum;
(function (ObpcaData1CreditInterestTierBandSetCalculationMethodEnum) {
    ObpcaData1CreditInterestTierBandSetCalculationMethodEnum["Compound"] = "Compound";
    ObpcaData1CreditInterestTierBandSetCalculationMethodEnum["SimpleInterest"] = "SimpleInterest";
})(ObpcaData1CreditInterestTierBandSetCalculationMethodEnum || (ObpcaData1CreditInterestTierBandSetCalculationMethodEnum = {}));
export var ObpcaData1CreditInterestTierBandSetDestinationEnum;
(function (ObpcaData1CreditInterestTierBandSetDestinationEnum) {
    ObpcaData1CreditInterestTierBandSetDestinationEnum["PayAway"] = "PayAway";
    ObpcaData1CreditInterestTierBandSetDestinationEnum["SelfCredit"] = "SelfCredit";
})(ObpcaData1CreditInterestTierBandSetDestinationEnum || (ObpcaData1CreditInterestTierBandSetDestinationEnum = {}));
export var ObpcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum;
(function (ObpcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum) {
    ObpcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum["PerAcademicTerm"] = "PerAcademicTerm";
    ObpcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum["Daily"] = "Daily";
    ObpcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum["HalfYearly"] = "HalfYearly";
    ObpcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum["Monthly"] = "Monthly";
    ObpcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum["Other"] = "Other";
    ObpcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum["Quarterly"] = "Quarterly";
    ObpcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum["PerStatementDate"] = "PerStatementDate";
    ObpcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum["Weekly"] = "Weekly";
    ObpcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum["Yearly"] = "Yearly";
})(ObpcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum || (ObpcaData1CreditInterestTierBandSetTierBandApplicationFrequencyEnum = {}));
export var ObpcaData1CreditInterestTierBandSetTierBandBankInterestRateTypeEnum;
(function (ObpcaData1CreditInterestTierBandSetTierBandBankInterestRateTypeEnum) {
    ObpcaData1CreditInterestTierBandSetTierBandBankInterestRateTypeEnum["LinkedBaseRate"] = "LinkedBaseRate";
    ObpcaData1CreditInterestTierBandSetTierBandBankInterestRateTypeEnum["Gross"] = "Gross";
    ObpcaData1CreditInterestTierBandSetTierBandBankInterestRateTypeEnum["Net"] = "Net";
    ObpcaData1CreditInterestTierBandSetTierBandBankInterestRateTypeEnum["Other"] = "Other";
})(ObpcaData1CreditInterestTierBandSetTierBandBankInterestRateTypeEnum || (ObpcaData1CreditInterestTierBandSetTierBandBankInterestRateTypeEnum = {}));
export var ObpcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum;
(function (ObpcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum) {
    ObpcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum["PerAcademicTerm"] = "PerAcademicTerm";
    ObpcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum["Daily"] = "Daily";
    ObpcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum["HalfYearly"] = "HalfYearly";
    ObpcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum["Monthly"] = "Monthly";
    ObpcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum["Other"] = "Other";
    ObpcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum["Quarterly"] = "Quarterly";
    ObpcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum["PerStatementDate"] = "PerStatementDate";
    ObpcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum["Weekly"] = "Weekly";
    ObpcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum["Yearly"] = "Yearly";
})(ObpcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum || (ObpcaData1CreditInterestTierBandSetTierBandCalculationFrequencyEnum = {}));
export var ObpcaData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum;
(function (ObpcaData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum) {
    ObpcaData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum["Tiered"] = "Tiered";
    ObpcaData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum["Whole"] = "Whole";
})(ObpcaData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum || (ObpcaData1CreditInterestTierBandSetTierBandDepositInterestAppliedCoverageEnum = {}));
export var ObpcaData1CreditInterestTierBandSetTierBandFixedVariableInterestRateTypeEnum;
(function (ObpcaData1CreditInterestTierBandSetTierBandFixedVariableInterestRateTypeEnum) {
    ObpcaData1CreditInterestTierBandSetTierBandFixedVariableInterestRateTypeEnum["Fixed"] = "Fixed";
    ObpcaData1CreditInterestTierBandSetTierBandFixedVariableInterestRateTypeEnum["Variable"] = "Variable";
})(ObpcaData1CreditInterestTierBandSetTierBandFixedVariableInterestRateTypeEnum || (ObpcaData1CreditInterestTierBandSetTierBandFixedVariableInterestRateTypeEnum = {}));
// ObpcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency
/**
 * Other application frequencies that are not available in the standard code list
**/
var ObpcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency = /** @class */ (function (_super) {
    __extends(ObpcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency, _super);
    function ObpcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObpcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObpcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObpcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency.prototype, "name", void 0);
    return ObpcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency;
}(SpeakeasyBase));
export { ObpcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency };
// ObpcaData1CreditInterestTierBandSetTierBandOtherBankInterestType
/**
 * Other interest rate types which are not available in the standard code list
**/
var ObpcaData1CreditInterestTierBandSetTierBandOtherBankInterestType = /** @class */ (function (_super) {
    __extends(ObpcaData1CreditInterestTierBandSetTierBandOtherBankInterestType, _super);
    function ObpcaData1CreditInterestTierBandSetTierBandOtherBankInterestType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObpcaData1CreditInterestTierBandSetTierBandOtherBankInterestType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObpcaData1CreditInterestTierBandSetTierBandOtherBankInterestType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObpcaData1CreditInterestTierBandSetTierBandOtherBankInterestType.prototype, "name", void 0);
    return ObpcaData1CreditInterestTierBandSetTierBandOtherBankInterestType;
}(SpeakeasyBase));
export { ObpcaData1CreditInterestTierBandSetTierBandOtherBankInterestType };
// ObpcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency
/**
 * Other calculation frequency which is not available in the standard code set.
**/
var ObpcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency = /** @class */ (function (_super) {
    __extends(ObpcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency, _super);
    function ObpcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObpcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObpcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObpcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency.prototype, "name", void 0);
    return ObpcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency;
}(SpeakeasyBase));
export { ObpcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency };
// ObpcaData1CreditInterestTierBandSetTierBand
/**
 * Tier Band Details
**/
var ObpcaData1CreditInterestTierBandSetTierBand = /** @class */ (function (_super) {
    __extends(ObpcaData1CreditInterestTierBandSetTierBand, _super);
    function ObpcaData1CreditInterestTierBandSetTierBand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AER" }),
        __metadata("design:type", String)
    ], ObpcaData1CreditInterestTierBandSetTierBand.prototype, "aer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplicationFrequency" }),
        __metadata("design:type", String)
    ], ObpcaData1CreditInterestTierBandSetTierBand.prototype, "applicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BankInterestRate" }),
        __metadata("design:type", String)
    ], ObpcaData1CreditInterestTierBandSetTierBand.prototype, "bankInterestRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BankInterestRateType" }),
        __metadata("design:type", String)
    ], ObpcaData1CreditInterestTierBandSetTierBand.prototype, "bankInterestRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CalculationFrequency" }),
        __metadata("design:type", String)
    ], ObpcaData1CreditInterestTierBandSetTierBand.prototype, "calculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DepositInterestAppliedCoverage" }),
        __metadata("design:type", String)
    ], ObpcaData1CreditInterestTierBandSetTierBand.prototype, "depositInterestAppliedCoverage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FixedVariableInterestRateType" }),
        __metadata("design:type", String)
    ], ObpcaData1CreditInterestTierBandSetTierBand.prototype, "fixedVariableInterestRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObpcaData1CreditInterestTierBandSetTierBand.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObpcaData1CreditInterestTierBandSetTierBand.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherApplicationFrequency" }),
        __metadata("design:type", ObpcaData1CreditInterestTierBandSetTierBandOtherApplicationFrequency)
    ], ObpcaData1CreditInterestTierBandSetTierBand.prototype, "otherApplicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherBankInterestType" }),
        __metadata("design:type", ObpcaData1CreditInterestTierBandSetTierBandOtherBankInterestType)
    ], ObpcaData1CreditInterestTierBandSetTierBand.prototype, "otherBankInterestType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherCalculationFrequency" }),
        __metadata("design:type", ObpcaData1CreditInterestTierBandSetTierBandOtherCalculationFrequency)
    ], ObpcaData1CreditInterestTierBandSetTierBand.prototype, "otherCalculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierValueMaximum" }),
        __metadata("design:type", String)
    ], ObpcaData1CreditInterestTierBandSetTierBand.prototype, "tierValueMaximum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierValueMinimum" }),
        __metadata("design:type", String)
    ], ObpcaData1CreditInterestTierBandSetTierBand.prototype, "tierValueMinimum", void 0);
    return ObpcaData1CreditInterestTierBandSetTierBand;
}(SpeakeasyBase));
export { ObpcaData1CreditInterestTierBandSetTierBand };
export var ObpcaData1CreditInterestTierBandSetTierBandMethodEnum;
(function (ObpcaData1CreditInterestTierBandSetTierBandMethodEnum) {
    ObpcaData1CreditInterestTierBandSetTierBandMethodEnum["Tiered"] = "Tiered";
    ObpcaData1CreditInterestTierBandSetTierBandMethodEnum["Whole"] = "Whole";
})(ObpcaData1CreditInterestTierBandSetTierBandMethodEnum || (ObpcaData1CreditInterestTierBandSetTierBandMethodEnum = {}));
// ObpcaData1CreditInterestTierBandSet
/**
 * The group of tiers or bands for which credit interest can be applied.
**/
var ObpcaData1CreditInterestTierBandSet = /** @class */ (function (_super) {
    __extends(ObpcaData1CreditInterestTierBandSet, _super);
    function ObpcaData1CreditInterestTierBandSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CalculationMethod" }),
        __metadata("design:type", String)
    ], ObpcaData1CreditInterestTierBandSet.prototype, "calculationMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Destination" }),
        __metadata("design:type", String)
    ], ObpcaData1CreditInterestTierBandSet.prototype, "destination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObpcaData1CreditInterestTierBandSet.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierBand", elemType: ObpcaData1CreditInterestTierBandSetTierBand }),
        __metadata("design:type", Array)
    ], ObpcaData1CreditInterestTierBandSet.prototype, "tierBand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierBandMethod" }),
        __metadata("design:type", String)
    ], ObpcaData1CreditInterestTierBandSet.prototype, "tierBandMethod", void 0);
    return ObpcaData1CreditInterestTierBandSet;
}(SpeakeasyBase));
export { ObpcaData1CreditInterestTierBandSet };
// ObpcaData1CreditInterest
/**
 * Details about the interest that may be payable to the PCA account holders
**/
var ObpcaData1CreditInterest = /** @class */ (function (_super) {
    __extends(ObpcaData1CreditInterest, _super);
    function ObpcaData1CreditInterest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierBandSet", elemType: ObpcaData1CreditInterestTierBandSet }),
        __metadata("design:type", Array)
    ], ObpcaData1CreditInterest.prototype, "tierBandSet", void 0);
    return ObpcaData1CreditInterest;
}(SpeakeasyBase));
export { ObpcaData1CreditInterest };
export var ObpcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum;
(function (ObpcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum) {
    ObpcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum["AcademicTerm"] = "AcademicTerm";
    ObpcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum["Day"] = "Day";
    ObpcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum["HalfYear"] = "Half Year";
    ObpcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum["Month"] = "Month";
    ObpcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum["Quarter"] = "Quarter";
    ObpcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum["Week"] = "Week";
    ObpcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum["Year"] = "Year";
})(ObpcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum || (ObpcaData1OtherFeesChargesFeeChargeCapCappingPeriodEnum = {}));
export var ObpcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum;
(function (ObpcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum) {
    ObpcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum["ServiceCAccountFee"] = "ServiceCAccountFee";
    ObpcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum["ServiceCAccountFeeMonthly"] = "ServiceCAccountFeeMonthly";
    ObpcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum["ServiceCOther"] = "ServiceCOther";
    ObpcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum["Other"] = "Other";
})(ObpcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum || (ObpcaData1OtherFeesChargesFeeChargeCapFeeTypeEnum = {}));
export var ObpcaData1OtherFeesChargesFeeChargeCapMinMaxTypeEnum;
(function (ObpcaData1OtherFeesChargesFeeChargeCapMinMaxTypeEnum) {
    ObpcaData1OtherFeesChargesFeeChargeCapMinMaxTypeEnum["Minimum"] = "Minimum";
    ObpcaData1OtherFeesChargesFeeChargeCapMinMaxTypeEnum["Maximum"] = "Maximum";
})(ObpcaData1OtherFeesChargesFeeChargeCapMinMaxTypeEnum || (ObpcaData1OtherFeesChargesFeeChargeCapMinMaxTypeEnum = {}));
// ObpcaData1OtherFeesChargesFeeChargeCapOtherFeeType
/**
 * Other fee type code which is not available in the standard code set
**/
var ObpcaData1OtherFeesChargesFeeChargeCapOtherFeeType = /** @class */ (function (_super) {
    __extends(ObpcaData1OtherFeesChargesFeeChargeCapOtherFeeType, _super);
    function ObpcaData1OtherFeesChargesFeeChargeCapOtherFeeType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeCapOtherFeeType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeCapOtherFeeType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeCapOtherFeeType.prototype, "name", void 0);
    return ObpcaData1OtherFeesChargesFeeChargeCapOtherFeeType;
}(SpeakeasyBase));
export { ObpcaData1OtherFeesChargesFeeChargeCapOtherFeeType };
// ObpcaData1OtherFeesChargesFeeChargeCap
/**
 * Details about any caps (maximum charges) that apply to a particular fee/charge
**/
var ObpcaData1OtherFeesChargesFeeChargeCap = /** @class */ (function (_super) {
    __extends(ObpcaData1OtherFeesChargesFeeChargeCap, _super);
    function ObpcaData1OtherFeesChargesFeeChargeCap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CappingPeriod" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeCap.prototype, "cappingPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapAmount" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeCap.prototype, "feeCapAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" }),
        __metadata("design:type", Number)
    ], ObpcaData1OtherFeesChargesFeeChargeCap.prototype, "feeCapOccurrence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeType" }),
        __metadata("design:type", Array)
    ], ObpcaData1OtherFeesChargesFeeChargeCap.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinMaxType" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeCap.prototype, "minMaxType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObpcaData1OtherFeesChargesFeeChargeCap.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObpcaData1OtherFeesChargesFeeChargeCapOtherFeeType }),
        __metadata("design:type", Array)
    ], ObpcaData1OtherFeesChargesFeeChargeCap.prototype, "otherFeeType", void 0);
    return ObpcaData1OtherFeesChargesFeeChargeCap;
}(SpeakeasyBase));
export { ObpcaData1OtherFeesChargesFeeChargeCap };
export var ObpcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum;
(function (ObpcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum) {
    ObpcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["AccountClosing"] = "AccountClosing";
    ObpcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["AccountOpening"] = "AccountOpening";
    ObpcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["AcademicTerm"] = "AcademicTerm";
    ObpcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["ChargingPeriod"] = "ChargingPeriod";
    ObpcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["Daily"] = "Daily";
    ObpcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["PerItem"] = "PerItem";
    ObpcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["Monthly"] = "Monthly";
    ObpcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["OnAccountAnniversary"] = "OnAccountAnniversary";
    ObpcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["Other"] = "Other";
    ObpcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["PerHour"] = "PerHour";
    ObpcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["PerOccurrence"] = "PerOccurrence";
    ObpcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["PerSheet"] = "PerSheet";
    ObpcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["PerTransaction"] = "PerTransaction";
    ObpcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["PerTransactionAmount"] = "PerTransactionAmount";
    ObpcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["PerTransactionPercentage"] = "PerTransactionPercentage";
    ObpcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["Quarterly"] = "Quarterly";
    ObpcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["SixMonthly"] = "SixMonthly";
    ObpcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["StatementMonthly"] = "StatementMonthly";
    ObpcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["Weekly"] = "Weekly";
    ObpcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum["Yearly"] = "Yearly";
})(ObpcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum || (ObpcaData1OtherFeesChargesFeeChargeDetailApplicationFrequencyEnum = {}));
export var ObpcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum;
(function (ObpcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum) {
    ObpcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["AccountClosing"] = "AccountClosing";
    ObpcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["AccountOpening"] = "AccountOpening";
    ObpcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["AcademicTerm"] = "AcademicTerm";
    ObpcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["ChargingPeriod"] = "ChargingPeriod";
    ObpcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["Daily"] = "Daily";
    ObpcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["PerItem"] = "PerItem";
    ObpcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["Monthly"] = "Monthly";
    ObpcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["OnAccountAnniversary"] = "OnAccountAnniversary";
    ObpcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["Other"] = "Other";
    ObpcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["PerHour"] = "PerHour";
    ObpcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["PerOccurrence"] = "PerOccurrence";
    ObpcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["PerSheet"] = "PerSheet";
    ObpcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["PerTransaction"] = "PerTransaction";
    ObpcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["PerTransactionAmount"] = "PerTransactionAmount";
    ObpcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["PerTransactionPercentage"] = "PerTransactionPercentage";
    ObpcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["Quarterly"] = "Quarterly";
    ObpcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["SixMonthly"] = "SixMonthly";
    ObpcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["StatementMonthly"] = "StatementMonthly";
    ObpcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["Weekly"] = "Weekly";
    ObpcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum["Yearly"] = "Yearly";
})(ObpcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum || (ObpcaData1OtherFeesChargesFeeChargeDetailCalculationFrequencyEnum = {}));
// ObpcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange
/**
 * Range or amounts or rates for which the fee/charge applies
**/
var ObpcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange = /** @class */ (function (_super) {
    __extends(ObpcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange, _super);
    function ObpcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumAmount" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange.prototype, "maximumAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumRate" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange.prototype, "maximumRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumAmount" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange.prototype, "minimumAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumRate" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange.prototype, "minimumRate", void 0);
    return ObpcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange;
}(SpeakeasyBase));
export { ObpcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange };
export var ObpcaData1OtherFeesChargesFeeChargeDetailFeeCategoryEnum;
(function (ObpcaData1OtherFeesChargesFeeChargeDetailFeeCategoryEnum) {
    ObpcaData1OtherFeesChargesFeeChargeDetailFeeCategoryEnum["Other"] = "Other";
    ObpcaData1OtherFeesChargesFeeChargeDetailFeeCategoryEnum["Servicing"] = "Servicing";
})(ObpcaData1OtherFeesChargesFeeChargeDetailFeeCategoryEnum || (ObpcaData1OtherFeesChargesFeeChargeDetailFeeCategoryEnum = {}));
export var ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum;
(function (ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum) {
    ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum["AcademicTerm"] = "AcademicTerm";
    ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum["Day"] = "Day";
    ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum["HalfYear"] = "Half Year";
    ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum["Month"] = "Month";
    ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum["Quarter"] = "Quarter";
    ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum["Week"] = "Week";
    ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum["Year"] = "Year";
})(ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum || (ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapCappingPeriodEnum = {}));
export var ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum;
(function (ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum) {
    ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum["ServiceCAccountFee"] = "ServiceCAccountFee";
    ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum["ServiceCAccountFeeMonthly"] = "ServiceCAccountFeeMonthly";
    ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum["ServiceCOther"] = "ServiceCOther";
    ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum["Other"] = "Other";
})(ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum || (ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapFeeTypeEnum = {}));
export var ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapMinMaxTypeEnum;
(function (ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapMinMaxTypeEnum) {
    ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapMinMaxTypeEnum["Minimum"] = "Minimum";
    ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapMinMaxTypeEnum["Maximum"] = "Maximum";
})(ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapMinMaxTypeEnum || (ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapMinMaxTypeEnum = {}));
// ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType
/**
 * Other fee type code which is not available in the standard code set
**/
var ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType = /** @class */ (function (_super) {
    __extends(ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType, _super);
    function ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType.prototype, "name", void 0);
    return ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType;
}(SpeakeasyBase));
export { ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType };
// ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap
/**
 * Details about any caps (maximum charges) that apply to a particular fee/charge
**/
var ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap = /** @class */ (function (_super) {
    __extends(ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap, _super);
    function ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CappingPeriod" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap.prototype, "cappingPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapAmount" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap.prototype, "feeCapAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" }),
        __metadata("design:type", Number)
    ], ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap.prototype, "feeCapOccurrence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeType" }),
        __metadata("design:type", Array)
    ], ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinMaxType" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap.prototype, "minMaxType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCapOtherFeeType }),
        __metadata("design:type", Array)
    ], ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap.prototype, "otherFeeType", void 0);
    return ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap;
}(SpeakeasyBase));
export { ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap };
export var ObpcaData1OtherFeesChargesFeeChargeDetailFeeRateTypeEnum;
(function (ObpcaData1OtherFeesChargesFeeChargeDetailFeeRateTypeEnum) {
    ObpcaData1OtherFeesChargesFeeChargeDetailFeeRateTypeEnum["LinkedBaseRate"] = "LinkedBaseRate";
    ObpcaData1OtherFeesChargesFeeChargeDetailFeeRateTypeEnum["Gross"] = "Gross";
    ObpcaData1OtherFeesChargesFeeChargeDetailFeeRateTypeEnum["Net"] = "Net";
    ObpcaData1OtherFeesChargesFeeChargeDetailFeeRateTypeEnum["Other"] = "Other";
})(ObpcaData1OtherFeesChargesFeeChargeDetailFeeRateTypeEnum || (ObpcaData1OtherFeesChargesFeeChargeDetailFeeRateTypeEnum = {}));
export var ObpcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum;
(function (ObpcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum) {
    ObpcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum["ServiceCAccountFee"] = "ServiceCAccountFee";
    ObpcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum["ServiceCAccountFeeMonthly"] = "ServiceCAccountFeeMonthly";
    ObpcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum["ServiceCOther"] = "ServiceCOther";
    ObpcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum["Other"] = "Other";
})(ObpcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum || (ObpcaData1OtherFeesChargesFeeChargeDetailFeeTypeEnum = {}));
// ObpcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency
/**
 * Other application frequencies not covered in the standard code list
**/
var ObpcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency = /** @class */ (function (_super) {
    __extends(ObpcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency, _super);
    function ObpcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency.prototype, "name", void 0);
    return ObpcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency;
}(SpeakeasyBase));
export { ObpcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency };
// ObpcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency
/**
 * Other calculation frequency which is not available in standard code set.
**/
var ObpcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency = /** @class */ (function (_super) {
    __extends(ObpcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency, _super);
    function ObpcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency.prototype, "name", void 0);
    return ObpcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency;
}(SpeakeasyBase));
export { ObpcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency };
var ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType = /** @class */ (function (_super) {
    __extends(ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType, _super);
    function ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType.prototype, "name", void 0);
    return ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType;
}(SpeakeasyBase));
export { ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType };
// ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType
/**
 * Other fee rate type which is not available in the standard code set
**/
var ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType = /** @class */ (function (_super) {
    __extends(ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType, _super);
    function ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType.prototype, "name", void 0);
    return ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType;
}(SpeakeasyBase));
export { ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType };
export var ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFeeCategoryEnum;
(function (ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFeeCategoryEnum) {
    ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFeeCategoryEnum["Other"] = "Other";
    ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFeeCategoryEnum["Servicing"] = "Servicing";
})(ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFeeCategoryEnum || (ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeTypeFeeCategoryEnum = {}));
// ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeType
/**
 * Other Fee/charge type which is not available in the standard code set
**/
var ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeType = /** @class */ (function (_super) {
    __extends(ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeType, _super);
    function ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCategory" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeType.prototype, "feeCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeType.prototype, "name", void 0);
    return ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeType;
}(SpeakeasyBase));
export { ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeType };
// ObpcaData1OtherFeesChargesFeeChargeDetail
/**
 * Other fees/charges details
**/
var ObpcaData1OtherFeesChargesFeeChargeDetail = /** @class */ (function (_super) {
    __extends(ObpcaData1OtherFeesChargesFeeChargeDetail, _super);
    function ObpcaData1OtherFeesChargesFeeChargeDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplicationFrequency" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeDetail.prototype, "applicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CalculationFrequency" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeDetail.prototype, "calculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeAmount" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeDetail.prototype, "feeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeApplicableRange" }),
        __metadata("design:type", ObpcaData1OtherFeesChargesFeeChargeDetailFeeApplicableRange)
    ], ObpcaData1OtherFeesChargesFeeChargeDetail.prototype, "feeApplicableRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCategory" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeDetail.prototype, "feeCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeCap", elemType: ObpcaData1OtherFeesChargesFeeChargeDetailFeeChargeCap }),
        __metadata("design:type", Array)
    ], ObpcaData1OtherFeesChargesFeeChargeDetail.prototype, "feeChargeCap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeRate" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeDetail.prototype, "feeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeRateType" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeDetail.prototype, "feeRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeType" }),
        __metadata("design:type", String)
    ], ObpcaData1OtherFeesChargesFeeChargeDetail.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObpcaData1OtherFeesChargesFeeChargeDetail.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherApplicationFrequency" }),
        __metadata("design:type", ObpcaData1OtherFeesChargesFeeChargeDetailOtherApplicationFrequency)
    ], ObpcaData1OtherFeesChargesFeeChargeDetail.prototype, "otherApplicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherCalculationFrequency" }),
        __metadata("design:type", ObpcaData1OtherFeesChargesFeeChargeDetailOtherCalculationFrequency)
    ], ObpcaData1OtherFeesChargesFeeChargeDetail.prototype, "otherCalculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeCategoryType" }),
        __metadata("design:type", ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeCategoryType)
    ], ObpcaData1OtherFeesChargesFeeChargeDetail.prototype, "otherFeeCategoryType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeRateType" }),
        __metadata("design:type", ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeRateType)
    ], ObpcaData1OtherFeesChargesFeeChargeDetail.prototype, "otherFeeRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeType" }),
        __metadata("design:type", ObpcaData1OtherFeesChargesFeeChargeDetailOtherFeeType)
    ], ObpcaData1OtherFeesChargesFeeChargeDetail.prototype, "otherFeeType", void 0);
    return ObpcaData1OtherFeesChargesFeeChargeDetail;
}(SpeakeasyBase));
export { ObpcaData1OtherFeesChargesFeeChargeDetail };
// ObpcaData1OtherFeesCharges
/**
 * Contains details of fees and charges which are not associated with either borrowing or features/benefits
**/
var ObpcaData1OtherFeesCharges = /** @class */ (function (_super) {
    __extends(ObpcaData1OtherFeesCharges, _super);
    function ObpcaData1OtherFeesCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeCap", elemType: ObpcaData1OtherFeesChargesFeeChargeCap }),
        __metadata("design:type", Array)
    ], ObpcaData1OtherFeesCharges.prototype, "feeChargeCap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeDetail", elemType: ObpcaData1OtherFeesChargesFeeChargeDetail }),
        __metadata("design:type", Array)
    ], ObpcaData1OtherFeesCharges.prototype, "feeChargeDetail", void 0);
    return ObpcaData1OtherFeesCharges;
}(SpeakeasyBase));
export { ObpcaData1OtherFeesCharges };
export var ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum;
(function (ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum) {
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum["AcademicTerm"] = "AcademicTerm";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum["Day"] = "Day";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum["HalfYear"] = "Half Year";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum["Month"] = "Month";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum["Quarter"] = "Quarter";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum["Week"] = "Week";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum["Year"] = "Year";
})(ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum || (ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum = {}));
export var ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum;
(function (ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum) {
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["ArrangedOverdraft"] = "ArrangedOverdraft";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["EmergencyBorrowing"] = "EmergencyBorrowing";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["BorrowingItem"] = "BorrowingItem";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["OverdraftRenewal"] = "OverdraftRenewal";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["AnnualReview"] = "AnnualReview";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["OverdraftSetup"] = "OverdraftSetup";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["Surcharge"] = "Surcharge";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["TempOverdraft"] = "TempOverdraft";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["UnauthorisedBorrowing"] = "UnauthorisedBorrowing";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["UnauthorisedPaidTrans"] = "UnauthorisedPaidTrans";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["Other"] = "Other";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["UnauthorisedUnpaidTrans"] = "UnauthorisedUnpaidTrans";
})(ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum || (ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum = {}));
export var ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum;
(function (ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum) {
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum["Minimum"] = "Minimum";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum["Maximum"] = "Maximum";
})(ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum || (ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum = {}));
// ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType
/**
 * Other fee type code which is not available in the standard code set
**/
var ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType = /** @class */ (function (_super) {
    __extends(ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType, _super);
    function ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType.prototype, "name", void 0);
    return ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType;
}(SpeakeasyBase));
export { ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType };
// ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap
/**
 * Details about any caps (maximum charges) that apply to a particular fee/charge
**/
var ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap = /** @class */ (function (_super) {
    __extends(ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap, _super);
    function ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CappingPeriod" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "cappingPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapAmount" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "feeCapAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" }),
        __metadata("design:type", Number)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "feeCapOccurrence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeType" }),
        __metadata("design:type", Array)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinMaxType" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "minMaxType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType }),
        __metadata("design:type", Array)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "otherFeeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftControlIndicator" }),
        __metadata("design:type", Boolean)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "overdraftControlIndicator", void 0);
    return ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap;
}(SpeakeasyBase));
export { ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap };
export var ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum;
(function (ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum) {
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["AccountClosing"] = "AccountClosing";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["AccountOpening"] = "AccountOpening";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["AcademicTerm"] = "AcademicTerm";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["ChargingPeriod"] = "ChargingPeriod";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["Daily"] = "Daily";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["PerItem"] = "PerItem";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["Monthly"] = "Monthly";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["OnAccountAnniversary"] = "OnAccountAnniversary";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["Other"] = "Other";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["PerHour"] = "PerHour";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["PerOccurrence"] = "PerOccurrence";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["PerSheet"] = "PerSheet";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["PerTransaction"] = "PerTransaction";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["PerTransactionAmount"] = "PerTransactionAmount";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["PerTransactionPercentage"] = "PerTransactionPercentage";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["Quarterly"] = "Quarterly";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["SixMonthly"] = "SixMonthly";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["StatementMonthly"] = "StatementMonthly";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["Weekly"] = "Weekly";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["Yearly"] = "Yearly";
})(ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum || (ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum = {}));
export var ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum;
(function (ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum) {
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["AccountClosing"] = "AccountClosing";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["AccountOpening"] = "AccountOpening";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["AcademicTerm"] = "AcademicTerm";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["ChargingPeriod"] = "ChargingPeriod";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["Daily"] = "Daily";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["PerItem"] = "PerItem";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["Monthly"] = "Monthly";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["OnAccountAnniversary"] = "OnAccountAnniversary";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["Other"] = "Other";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["PerHour"] = "PerHour";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["PerOccurrence"] = "PerOccurrence";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["PerSheet"] = "PerSheet";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["PerTransaction"] = "PerTransaction";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["PerTransactionAmount"] = "PerTransactionAmount";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["PerTransactionPercentage"] = "PerTransactionPercentage";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["Quarterly"] = "Quarterly";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["SixMonthly"] = "SixMonthly";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["StatementMonthly"] = "StatementMonthly";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["Weekly"] = "Weekly";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["Yearly"] = "Yearly";
})(ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum || (ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum = {}));
export var ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum;
(function (ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum) {
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum["LinkedBaseRate"] = "LinkedBaseRate";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum["Gross"] = "Gross";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum["Net"] = "Net";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum["Other"] = "Other";
})(ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum || (ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum = {}));
export var ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum;
(function (ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum) {
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["ArrangedOverdraft"] = "ArrangedOverdraft";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["EmergencyBorrowing"] = "EmergencyBorrowing";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["BorrowingItem"] = "BorrowingItem";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["OverdraftRenewal"] = "OverdraftRenewal";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["AnnualReview"] = "AnnualReview";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["OverdraftSetup"] = "OverdraftSetup";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["Surcharge"] = "Surcharge";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["TempOverdraft"] = "TempOverdraft";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["UnauthorisedBorrowing"] = "UnauthorisedBorrowing";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["UnauthorisedPaidTrans"] = "UnauthorisedPaidTrans";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["Other"] = "Other";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["UnauthorisedUnpaidTrans"] = "UnauthorisedUnpaidTrans";
})(ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum || (ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum = {}));
// ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency
/**
 * Other application frequencies that are not available in the standard code list
**/
var ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency = /** @class */ (function (_super) {
    __extends(ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency, _super);
    function ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency.prototype, "name", void 0);
    return ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency;
}(SpeakeasyBase));
export { ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency };
// ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency
/**
 * Other calculation frequency which is not available in the standard code set.
**/
var ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency = /** @class */ (function (_super) {
    __extends(ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency, _super);
    function ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency.prototype, "name", void 0);
    return ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency;
}(SpeakeasyBase));
export { ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency };
// ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType
/**
 * Other fee rate type code which is not available in the standard code set
**/
var ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType = /** @class */ (function (_super) {
    __extends(ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType, _super);
    function ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType.prototype, "name", void 0);
    return ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType;
}(SpeakeasyBase));
export { ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType };
// ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType
/**
 * Other Fee type which is not available in the standard code set
**/
var ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType = /** @class */ (function (_super) {
    __extends(ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType, _super);
    function ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType.prototype, "name", void 0);
    return ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType;
}(SpeakeasyBase));
export { ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType };
export var ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum;
(function (ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum) {
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum["AcademicTerm"] = "AcademicTerm";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum["Day"] = "Day";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum["HalfYear"] = "Half Year";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum["Month"] = "Month";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum["Quarter"] = "Quarter";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum["Week"] = "Week";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum["Year"] = "Year";
})(ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum || (ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum = {}));
export var ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum;
(function (ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum) {
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["ArrangedOverdraft"] = "ArrangedOverdraft";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["EmergencyBorrowing"] = "EmergencyBorrowing";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["BorrowingItem"] = "BorrowingItem";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["OverdraftRenewal"] = "OverdraftRenewal";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["AnnualReview"] = "AnnualReview";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["OverdraftSetup"] = "OverdraftSetup";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["Surcharge"] = "Surcharge";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["TempOverdraft"] = "TempOverdraft";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["UnauthorisedBorrowing"] = "UnauthorisedBorrowing";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["UnauthorisedPaidTrans"] = "UnauthorisedPaidTrans";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["Other"] = "Other";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["UnauthorisedUnpaidTrans"] = "UnauthorisedUnpaidTrans";
})(ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum || (ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum = {}));
export var ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum;
(function (ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum) {
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum["Minimum"] = "Minimum";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum["Maximum"] = "Maximum";
})(ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum || (ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum = {}));
// ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType
/**
 * Other fee type code which is not available in the standard code set
**/
var ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType = /** @class */ (function (_super) {
    __extends(ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType, _super);
    function ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType.prototype, "name", void 0);
    return ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType;
}(SpeakeasyBase));
export { ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType };
// ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap
/**
 * Details about any caps (maximum charges) that apply to a particular fee/charge
**/
var ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap = /** @class */ (function (_super) {
    __extends(ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap, _super);
    function ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CappingPeriod" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "cappingPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapAmount" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "feeCapAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" }),
        __metadata("design:type", Number)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "feeCapOccurrence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeType" }),
        __metadata("design:type", Array)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinMaxType" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "minMaxType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType }),
        __metadata("design:type", Array)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "otherFeeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftControlIndicator" }),
        __metadata("design:type", Boolean)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "overdraftControlIndicator", void 0);
    return ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap;
}(SpeakeasyBase));
export { ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap };
// ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail
/**
 * Details about the fees/charges
**/
var ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail = /** @class */ (function (_super) {
    __extends(ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail, _super);
    function ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplicationFrequency" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "applicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CalculationFrequency" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "calculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeAmount" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "feeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeRate" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "feeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeRateType" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "feeRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeType" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IncrementalBorrowingAmount" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "incrementalBorrowingAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherApplicationFrequency" }),
        __metadata("design:type", ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "otherApplicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherCalculationFrequency" }),
        __metadata("design:type", ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "otherCalculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeRateType" }),
        __metadata("design:type", ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "otherFeeRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeType" }),
        __metadata("design:type", ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "otherFeeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftControlIndicator" }),
        __metadata("design:type", Boolean)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "overdraftControlIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftFeeChargeCap" }),
        __metadata("design:type", ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "overdraftFeeChargeCap", void 0);
    return ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail;
}(SpeakeasyBase));
export { ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail };
// ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges
/**
 * Overdraft fees and charges details
**/
var ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges = /** @class */ (function (_super) {
    __extends(ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges, _super);
    function ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftFeeChargeCap", elemType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeCap }),
        __metadata("design:type", Array)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges.prototype, "overdraftFeeChargeCap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftFeeChargeDetail", elemType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesChargesOverdraftFeeChargeDetail }),
        __metadata("design:type", Array)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges.prototype, "overdraftFeeChargeDetail", void 0);
    return ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges;
}(SpeakeasyBase));
export { ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges };
export var ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum;
(function (ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum) {
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum["AcademicTerm"] = "AcademicTerm";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum["Day"] = "Day";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum["HalfYear"] = "Half Year";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum["Month"] = "Month";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum["Quarter"] = "Quarter";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum["Week"] = "Week";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum["Year"] = "Year";
})(ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum || (ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapCappingPeriodEnum = {}));
export var ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum;
(function (ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum) {
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["ArrangedOverdraft"] = "ArrangedOverdraft";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["EmergencyBorrowing"] = "EmergencyBorrowing";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["BorrowingItem"] = "BorrowingItem";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["OverdraftRenewal"] = "OverdraftRenewal";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["AnnualReview"] = "AnnualReview";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["OverdraftSetup"] = "OverdraftSetup";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["Surcharge"] = "Surcharge";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["TempOverdraft"] = "TempOverdraft";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["UnauthorisedBorrowing"] = "UnauthorisedBorrowing";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["UnauthorisedPaidTrans"] = "UnauthorisedPaidTrans";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["Other"] = "Other";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum["UnauthorisedUnpaidTrans"] = "UnauthorisedUnpaidTrans";
})(ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum || (ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapFeeTypeEnum = {}));
export var ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum;
(function (ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum) {
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum["Minimum"] = "Minimum";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum["Maximum"] = "Maximum";
})(ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum || (ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapMinMaxTypeEnum = {}));
// ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType
/**
 * Other fee type code which is not available in the standard code set
**/
var ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType = /** @class */ (function (_super) {
    __extends(ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType, _super);
    function ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType.prototype, "name", void 0);
    return ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType;
}(SpeakeasyBase));
export { ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType };
// ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap
/**
 * Details about any caps (maximum charges) that apply to a particular fee/charge
**/
var ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap = /** @class */ (function (_super) {
    __extends(ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap, _super);
    function ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CappingPeriod" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "cappingPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapAmount" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "feeCapAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" }),
        __metadata("design:type", Number)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "feeCapOccurrence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeType" }),
        __metadata("design:type", Array)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinMaxType" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "minMaxType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCapOtherFeeType }),
        __metadata("design:type", Array)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "otherFeeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftControlIndicator" }),
        __metadata("design:type", Boolean)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap.prototype, "overdraftControlIndicator", void 0);
    return ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap;
}(SpeakeasyBase));
export { ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap };
export var ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum;
(function (ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum) {
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["AccountClosing"] = "AccountClosing";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["AccountOpening"] = "AccountOpening";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["AcademicTerm"] = "AcademicTerm";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["ChargingPeriod"] = "ChargingPeriod";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["Daily"] = "Daily";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["PerItem"] = "PerItem";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["Monthly"] = "Monthly";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["OnAccountAnniversary"] = "OnAccountAnniversary";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["Other"] = "Other";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["PerHour"] = "PerHour";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["PerOccurrence"] = "PerOccurrence";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["PerSheet"] = "PerSheet";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["PerTransaction"] = "PerTransaction";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["PerTransactionAmount"] = "PerTransactionAmount";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["PerTransactionPercentage"] = "PerTransactionPercentage";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["Quarterly"] = "Quarterly";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["SixMonthly"] = "SixMonthly";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["StatementMonthly"] = "StatementMonthly";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["Weekly"] = "Weekly";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum["Yearly"] = "Yearly";
})(ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum || (ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailApplicationFrequencyEnum = {}));
export var ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum;
(function (ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum) {
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["AccountClosing"] = "AccountClosing";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["AccountOpening"] = "AccountOpening";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["AcademicTerm"] = "AcademicTerm";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["ChargingPeriod"] = "ChargingPeriod";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["Daily"] = "Daily";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["PerItem"] = "PerItem";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["Monthly"] = "Monthly";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["OnAccountAnniversary"] = "OnAccountAnniversary";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["Other"] = "Other";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["PerHour"] = "PerHour";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["PerOccurrence"] = "PerOccurrence";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["PerSheet"] = "PerSheet";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["PerTransaction"] = "PerTransaction";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["PerTransactionAmount"] = "PerTransactionAmount";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["PerTransactionPercentage"] = "PerTransactionPercentage";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["Quarterly"] = "Quarterly";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["SixMonthly"] = "SixMonthly";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["StatementMonthly"] = "StatementMonthly";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["Weekly"] = "Weekly";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum["Yearly"] = "Yearly";
})(ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum || (ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailCalculationFrequencyEnum = {}));
export var ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum;
(function (ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum) {
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum["LinkedBaseRate"] = "LinkedBaseRate";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum["Gross"] = "Gross";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum["Net"] = "Net";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum["Other"] = "Other";
})(ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum || (ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeRateTypeEnum = {}));
export var ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum;
(function (ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum) {
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["ArrangedOverdraft"] = "ArrangedOverdraft";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["EmergencyBorrowing"] = "EmergencyBorrowing";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["BorrowingItem"] = "BorrowingItem";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["OverdraftRenewal"] = "OverdraftRenewal";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["AnnualReview"] = "AnnualReview";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["OverdraftSetup"] = "OverdraftSetup";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["Surcharge"] = "Surcharge";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["TempOverdraft"] = "TempOverdraft";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["UnauthorisedBorrowing"] = "UnauthorisedBorrowing";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["UnauthorisedPaidTrans"] = "UnauthorisedPaidTrans";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["Other"] = "Other";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum["UnauthorisedUnpaidTrans"] = "UnauthorisedUnpaidTrans";
})(ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum || (ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailFeeTypeEnum = {}));
// ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency
/**
 * Other application frequencies that are not available in the standard code list
**/
var ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency = /** @class */ (function (_super) {
    __extends(ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency, _super);
    function ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency.prototype, "name", void 0);
    return ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency;
}(SpeakeasyBase));
export { ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency };
// ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency
/**
 * Other calculation frequency which is not available in the standard code set.
**/
var ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency = /** @class */ (function (_super) {
    __extends(ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency, _super);
    function ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency.prototype, "name", void 0);
    return ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency;
}(SpeakeasyBase));
export { ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency };
// ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType
/**
 * Other fee rate type code which is not available in the standard code set
**/
var ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType = /** @class */ (function (_super) {
    __extends(ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType, _super);
    function ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType.prototype, "name", void 0);
    return ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType;
}(SpeakeasyBase));
export { ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType };
// ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType
/**
 * Other Fee type which is not available in the standard code set
**/
var ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType = /** @class */ (function (_super) {
    __extends(ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType, _super);
    function ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType.prototype, "name", void 0);
    return ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType;
}(SpeakeasyBase));
export { ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType };
export var ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum;
(function (ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum) {
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum["AcademicTerm"] = "AcademicTerm";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum["Day"] = "Day";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum["HalfYear"] = "Half Year";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum["Month"] = "Month";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum["Quarter"] = "Quarter";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum["Week"] = "Week";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum["Year"] = "Year";
})(ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum || (ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapCappingPeriodEnum = {}));
export var ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum;
(function (ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum) {
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["ArrangedOverdraft"] = "ArrangedOverdraft";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["EmergencyBorrowing"] = "EmergencyBorrowing";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["BorrowingItem"] = "BorrowingItem";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["OverdraftRenewal"] = "OverdraftRenewal";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["AnnualReview"] = "AnnualReview";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["OverdraftSetup"] = "OverdraftSetup";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["Surcharge"] = "Surcharge";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["TempOverdraft"] = "TempOverdraft";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["UnauthorisedBorrowing"] = "UnauthorisedBorrowing";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["UnauthorisedPaidTrans"] = "UnauthorisedPaidTrans";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["Other"] = "Other";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum["UnauthorisedUnpaidTrans"] = "UnauthorisedUnpaidTrans";
})(ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum || (ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapFeeTypeEnum = {}));
export var ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum;
(function (ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum) {
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum["Minimum"] = "Minimum";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum["Maximum"] = "Maximum";
})(ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum || (ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapMinMaxTypeEnum = {}));
// ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType
/**
 * Other fee type code which is not available in the standard code set
**/
var ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType = /** @class */ (function (_super) {
    __extends(ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType, _super);
    function ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType.prototype, "name", void 0);
    return ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType;
}(SpeakeasyBase));
export { ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType };
// ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap
/**
 * Details about any caps (maximum charges) that apply to a particular fee/charge
**/
var ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap = /** @class */ (function (_super) {
    __extends(ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap, _super);
    function ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CappingPeriod" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "cappingPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapAmount" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "feeCapAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeCapOccurrence" }),
        __metadata("design:type", Number)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "feeCapOccurrence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeType" }),
        __metadata("design:type", Array)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinMaxType" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "minMaxType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeType", elemType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCapOtherFeeType }),
        __metadata("design:type", Array)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "otherFeeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftControlIndicator" }),
        __metadata("design:type", Boolean)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap.prototype, "overdraftControlIndicator", void 0);
    return ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap;
}(SpeakeasyBase));
export { ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap };
// ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail
/**
 * Details about the fees/charges
**/
var ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail = /** @class */ (function (_super) {
    __extends(ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail, _super);
    function ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplicationFrequency" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "applicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CalculationFrequency" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "calculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeAmount" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "feeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeRate" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "feeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeRateType" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "feeRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeType" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IncrementalBorrowingAmount" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "incrementalBorrowingAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherApplicationFrequency" }),
        __metadata("design:type", ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherApplicationFrequency)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "otherApplicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherCalculationFrequency" }),
        __metadata("design:type", ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherCalculationFrequency)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "otherCalculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeRateType" }),
        __metadata("design:type", ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeRateType)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "otherFeeRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeeType" }),
        __metadata("design:type", ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOtherFeeType)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "otherFeeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftControlIndicator" }),
        __metadata("design:type", Boolean)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "overdraftControlIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftFeeChargeCap" }),
        __metadata("design:type", ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetailOverdraftFeeChargeCap)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail.prototype, "overdraftFeeChargeCap", void 0);
    return ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail;
}(SpeakeasyBase));
export { ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail };
// ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges
/**
 * Overdraft fees and charges
**/
var ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges = /** @class */ (function (_super) {
    __extends(ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges, _super);
    function ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftFeeChargeCap", elemType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeCap }),
        __metadata("design:type", Array)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges.prototype, "overdraftFeeChargeCap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftFeeChargeDetail", elemType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesChargesOverdraftFeeChargeDetail }),
        __metadata("design:type", Array)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges.prototype, "overdraftFeeChargeDetail", void 0);
    return ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges;
}(SpeakeasyBase));
export { ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges };
export var ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum;
(function (ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum) {
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum["Tiered"] = "Tiered";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum["Whole"] = "Whole";
})(ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum || (ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftInterestChargingCoverageEnum = {}));
// ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBand
/**
 * Provides overdraft details for a specific tier or band
**/
var ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBand = /** @class */ (function (_super) {
    __extends(ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBand, _super);
    function ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BankGuaranteedIndicator" }),
        __metadata("design:type", Boolean)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "bankGuaranteedIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EAR" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "ear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftFeesCharges", elemType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBandOverdraftFeesCharges }),
        __metadata("design:type", Array)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "overdraftFeesCharges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftInterestChargingCoverage" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "overdraftInterestChargingCoverage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RepresentativeAPR" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "representativeApr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierValueMax" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "tierValueMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierValueMin" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "tierValueMin", void 0);
    return ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBand;
}(SpeakeasyBase));
export { ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBand };
export var ObpcaData1OverdraftOverdraftTierBandSetOverdraftTypeEnum;
(function (ObpcaData1OverdraftOverdraftTierBandSetOverdraftTypeEnum) {
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTypeEnum["Committed"] = "Committed";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTypeEnum["OnDemand"] = "OnDemand";
    ObpcaData1OverdraftOverdraftTierBandSetOverdraftTypeEnum["Other"] = "Other";
})(ObpcaData1OverdraftOverdraftTierBandSetOverdraftTypeEnum || (ObpcaData1OverdraftOverdraftTierBandSetOverdraftTypeEnum = {}));
export var ObpcaData1OverdraftOverdraftTierBandSetTierBandMethodEnum;
(function (ObpcaData1OverdraftOverdraftTierBandSetTierBandMethodEnum) {
    ObpcaData1OverdraftOverdraftTierBandSetTierBandMethodEnum["Tiered"] = "Tiered";
    ObpcaData1OverdraftOverdraftTierBandSetTierBandMethodEnum["Whole"] = "Whole";
    ObpcaData1OverdraftOverdraftTierBandSetTierBandMethodEnum["Banded"] = "Banded";
})(ObpcaData1OverdraftOverdraftTierBandSetTierBandMethodEnum || (ObpcaData1OverdraftOverdraftTierBandSetTierBandMethodEnum = {}));
// ObpcaData1OverdraftOverdraftTierBandSet
/**
 * Tier band set details
**/
var ObpcaData1OverdraftOverdraftTierBandSet = /** @class */ (function (_super) {
    __extends(ObpcaData1OverdraftOverdraftTierBandSet, _super);
    function ObpcaData1OverdraftOverdraftTierBandSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AuthorisedIndicator" }),
        __metadata("design:type", Boolean)
    ], ObpcaData1OverdraftOverdraftTierBandSet.prototype, "authorisedIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BufferAmount" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSet.prototype, "bufferAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSet.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObpcaData1OverdraftOverdraftTierBandSet.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftFeesCharges", elemType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftFeesCharges }),
        __metadata("design:type", Array)
    ], ObpcaData1OverdraftOverdraftTierBandSet.prototype, "overdraftFeesCharges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftTierBand", elemType: ObpcaData1OverdraftOverdraftTierBandSetOverdraftTierBand }),
        __metadata("design:type", Array)
    ], ObpcaData1OverdraftOverdraftTierBandSet.prototype, "overdraftTierBand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftType" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSet.prototype, "overdraftType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierBandMethod" }),
        __metadata("design:type", String)
    ], ObpcaData1OverdraftOverdraftTierBandSet.prototype, "tierBandMethod", void 0);
    return ObpcaData1OverdraftOverdraftTierBandSet;
}(SpeakeasyBase));
export { ObpcaData1OverdraftOverdraftTierBandSet };
// ObpcaData1Overdraft
/**
 * Details about Overdraft rates, fees & charges
**/
var ObpcaData1Overdraft = /** @class */ (function (_super) {
    __extends(ObpcaData1Overdraft, _super);
    function ObpcaData1Overdraft() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObpcaData1Overdraft.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftTierBandSet", elemType: ObpcaData1OverdraftOverdraftTierBandSet }),
        __metadata("design:type", Array)
    ], ObpcaData1Overdraft.prototype, "overdraftTierBandSet", void 0);
    return ObpcaData1Overdraft;
}(SpeakeasyBase));
export { ObpcaData1Overdraft };
export var ObpcaData1ProductDetailsSegmentEnum;
(function (ObpcaData1ProductDetailsSegmentEnum) {
    ObpcaData1ProductDetailsSegmentEnum["Basic"] = "Basic";
    ObpcaData1ProductDetailsSegmentEnum["BenefitAndReward"] = "BenefitAndReward";
    ObpcaData1ProductDetailsSegmentEnum["CreditInterest"] = "CreditInterest";
    ObpcaData1ProductDetailsSegmentEnum["Cashback"] = "Cashback";
    ObpcaData1ProductDetailsSegmentEnum["General"] = "General";
    ObpcaData1ProductDetailsSegmentEnum["Graduate"] = "Graduate";
    ObpcaData1ProductDetailsSegmentEnum["Other"] = "Other";
    ObpcaData1ProductDetailsSegmentEnum["Overdraft"] = "Overdraft";
    ObpcaData1ProductDetailsSegmentEnum["Packaged"] = "Packaged";
    ObpcaData1ProductDetailsSegmentEnum["Premium"] = "Premium";
    ObpcaData1ProductDetailsSegmentEnum["Reward"] = "Reward";
    ObpcaData1ProductDetailsSegmentEnum["Student"] = "Student";
    ObpcaData1ProductDetailsSegmentEnum["YoungAdult"] = "YoungAdult";
    ObpcaData1ProductDetailsSegmentEnum["Youth"] = "Youth";
})(ObpcaData1ProductDetailsSegmentEnum || (ObpcaData1ProductDetailsSegmentEnum = {}));
var ObpcaData1ProductDetails = /** @class */ (function (_super) {
    __extends(ObpcaData1ProductDetails, _super);
    function ObpcaData1ProductDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MonthlyMaximumCharge" }),
        __metadata("design:type", String)
    ], ObpcaData1ProductDetails.prototype, "monthlyMaximumCharge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", Array)
    ], ObpcaData1ProductDetails.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Segment" }),
        __metadata("design:type", Array)
    ], ObpcaData1ProductDetails.prototype, "segment", void 0);
    return ObpcaData1ProductDetails;
}(SpeakeasyBase));
export { ObpcaData1ProductDetails };
var ObpcaData1 = /** @class */ (function (_super) {
    __extends(ObpcaData1, _super);
    function ObpcaData1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditInterest" }),
        __metadata("design:type", ObpcaData1CreditInterest)
    ], ObpcaData1.prototype, "creditInterest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFeesCharges" }),
        __metadata("design:type", ObpcaData1OtherFeesCharges)
    ], ObpcaData1.prototype, "otherFeesCharges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Overdraft" }),
        __metadata("design:type", ObpcaData1Overdraft)
    ], ObpcaData1.prototype, "overdraft", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductDetails" }),
        __metadata("design:type", ObpcaData1ProductDetails)
    ], ObpcaData1.prototype, "productDetails", void 0);
    return ObpcaData1;
}(SpeakeasyBase));
export { ObpcaData1 };
