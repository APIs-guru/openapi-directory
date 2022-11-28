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
import { CompensationRange } from "./compensationrange";
export var CompensationFilterTypeEnum;
(function (CompensationFilterTypeEnum) {
    CompensationFilterTypeEnum["FilterTypeUnspecified"] = "FILTER_TYPE_UNSPECIFIED";
    CompensationFilterTypeEnum["UnitOnly"] = "UNIT_ONLY";
    CompensationFilterTypeEnum["UnitAndAmount"] = "UNIT_AND_AMOUNT";
    CompensationFilterTypeEnum["AnnualizedBaseAmount"] = "ANNUALIZED_BASE_AMOUNT";
    CompensationFilterTypeEnum["AnnualizedTotalAmount"] = "ANNUALIZED_TOTAL_AMOUNT";
})(CompensationFilterTypeEnum || (CompensationFilterTypeEnum = {}));
export var CompensationFilterUnitsEnum;
(function (CompensationFilterUnitsEnum) {
    CompensationFilterUnitsEnum["CompensationUnitUnspecified"] = "COMPENSATION_UNIT_UNSPECIFIED";
    CompensationFilterUnitsEnum["Hourly"] = "HOURLY";
    CompensationFilterUnitsEnum["Daily"] = "DAILY";
    CompensationFilterUnitsEnum["Weekly"] = "WEEKLY";
    CompensationFilterUnitsEnum["Monthly"] = "MONTHLY";
    CompensationFilterUnitsEnum["Yearly"] = "YEARLY";
    CompensationFilterUnitsEnum["OneTime"] = "ONE_TIME";
    CompensationFilterUnitsEnum["OtherCompensationUnit"] = "OTHER_COMPENSATION_UNIT";
})(CompensationFilterUnitsEnum || (CompensationFilterUnitsEnum = {}));
// CompensationFilter
/**
 * Filter on job compensation type and amount.
**/
var CompensationFilter = /** @class */ (function (_super) {
    __extends(CompensationFilter, _super);
    function CompensationFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includeJobsWithUnspecifiedCompensationRange" }),
        __metadata("design:type", Boolean)
    ], CompensationFilter.prototype, "includeJobsWithUnspecifiedCompensationRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=range" }),
        __metadata("design:type", CompensationRange)
    ], CompensationFilter.prototype, "range", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CompensationFilter.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=units" }),
        __metadata("design:type", Array)
    ], CompensationFilter.prototype, "units", void 0);
    return CompensationFilter;
}(SpeakeasyBase));
export { CompensationFilter };
