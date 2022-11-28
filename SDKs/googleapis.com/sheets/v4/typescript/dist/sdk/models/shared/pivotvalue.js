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
import { DataSourceColumnReference } from "./datasourcecolumnreference";
export var PivotValueCalculatedDisplayTypeEnum;
(function (PivotValueCalculatedDisplayTypeEnum) {
    PivotValueCalculatedDisplayTypeEnum["PivotValueCalculatedDisplayTypeUnspecified"] = "PIVOT_VALUE_CALCULATED_DISPLAY_TYPE_UNSPECIFIED";
    PivotValueCalculatedDisplayTypeEnum["PercentOfRowTotal"] = "PERCENT_OF_ROW_TOTAL";
    PivotValueCalculatedDisplayTypeEnum["PercentOfColumnTotal"] = "PERCENT_OF_COLUMN_TOTAL";
    PivotValueCalculatedDisplayTypeEnum["PercentOfGrandTotal"] = "PERCENT_OF_GRAND_TOTAL";
})(PivotValueCalculatedDisplayTypeEnum || (PivotValueCalculatedDisplayTypeEnum = {}));
export var PivotValueSummarizeFunctionEnum;
(function (PivotValueSummarizeFunctionEnum) {
    PivotValueSummarizeFunctionEnum["PivotStandardValueFunctionUnspecified"] = "PIVOT_STANDARD_VALUE_FUNCTION_UNSPECIFIED";
    PivotValueSummarizeFunctionEnum["Sum"] = "SUM";
    PivotValueSummarizeFunctionEnum["Counta"] = "COUNTA";
    PivotValueSummarizeFunctionEnum["Count"] = "COUNT";
    PivotValueSummarizeFunctionEnum["Countunique"] = "COUNTUNIQUE";
    PivotValueSummarizeFunctionEnum["Average"] = "AVERAGE";
    PivotValueSummarizeFunctionEnum["Max"] = "MAX";
    PivotValueSummarizeFunctionEnum["Min"] = "MIN";
    PivotValueSummarizeFunctionEnum["Median"] = "MEDIAN";
    PivotValueSummarizeFunctionEnum["Product"] = "PRODUCT";
    PivotValueSummarizeFunctionEnum["Stdev"] = "STDEV";
    PivotValueSummarizeFunctionEnum["Stdevp"] = "STDEVP";
    PivotValueSummarizeFunctionEnum["Var"] = "VAR";
    PivotValueSummarizeFunctionEnum["Varp"] = "VARP";
    PivotValueSummarizeFunctionEnum["Custom"] = "CUSTOM";
})(PivotValueSummarizeFunctionEnum || (PivotValueSummarizeFunctionEnum = {}));
// PivotValue
/**
 * The definition of how a value in a pivot table should be calculated.
**/
var PivotValue = /** @class */ (function (_super) {
    __extends(PivotValue, _super);
    function PivotValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=calculatedDisplayType" }),
        __metadata("design:type", String)
    ], PivotValue.prototype, "calculatedDisplayType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataSourceColumnReference" }),
        __metadata("design:type", DataSourceColumnReference)
    ], PivotValue.prototype, "dataSourceColumnReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=formula" }),
        __metadata("design:type", String)
    ], PivotValue.prototype, "formula", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PivotValue.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceColumnOffset" }),
        __metadata("design:type", Number)
    ], PivotValue.prototype, "sourceColumnOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=summarizeFunction" }),
        __metadata("design:type", String)
    ], PivotValue.prototype, "summarizeFunction", void 0);
    return PivotValue;
}(SpeakeasyBase));
export { PivotValue };
