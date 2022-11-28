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
import { PivotGroupLimit } from "./pivotgrouplimit";
import { PivotGroupRule } from "./pivotgrouprule";
import { PivotGroupSortValueBucket } from "./pivotgroupsortvaluebucket";
import { PivotGroupValueMetadata } from "./pivotgroupvaluemetadata";
export var PivotGroupSortOrderEnum;
(function (PivotGroupSortOrderEnum) {
    PivotGroupSortOrderEnum["SortOrderUnspecified"] = "SORT_ORDER_UNSPECIFIED";
    PivotGroupSortOrderEnum["Ascending"] = "ASCENDING";
    PivotGroupSortOrderEnum["Descending"] = "DESCENDING";
})(PivotGroupSortOrderEnum || (PivotGroupSortOrderEnum = {}));
// PivotGroup
/**
 * A single grouping (either row or column) in a pivot table.
**/
var PivotGroup = /** @class */ (function (_super) {
    __extends(PivotGroup, _super);
    function PivotGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataSourceColumnReference" }),
        __metadata("design:type", DataSourceColumnReference)
    ], PivotGroup.prototype, "dataSourceColumnReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupLimit" }),
        __metadata("design:type", PivotGroupLimit)
    ], PivotGroup.prototype, "groupLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupRule" }),
        __metadata("design:type", PivotGroupRule)
    ], PivotGroup.prototype, "groupRule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], PivotGroup.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repeatHeadings" }),
        __metadata("design:type", Boolean)
    ], PivotGroup.prototype, "repeatHeadings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showTotals" }),
        __metadata("design:type", Boolean)
    ], PivotGroup.prototype, "showTotals", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortOrder" }),
        __metadata("design:type", String)
    ], PivotGroup.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceColumnOffset" }),
        __metadata("design:type", Number)
    ], PivotGroup.prototype, "sourceColumnOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=valueBucket" }),
        __metadata("design:type", PivotGroupSortValueBucket)
    ], PivotGroup.prototype, "valueBucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=valueMetadata", elemType: PivotGroupValueMetadata }),
        __metadata("design:type", Array)
    ], PivotGroup.prototype, "valueMetadata", void 0);
    return PivotGroup;
}(SpeakeasyBase));
export { PivotGroup };
