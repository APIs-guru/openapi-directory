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
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { DataSourceColumnReference } from "./datasourcecolumnreference";
export var SortSpecSortOrderEnum;
(function (SortSpecSortOrderEnum) {
    SortSpecSortOrderEnum["SortOrderUnspecified"] = "SORT_ORDER_UNSPECIFIED";
    SortSpecSortOrderEnum["Ascending"] = "ASCENDING";
    SortSpecSortOrderEnum["Descending"] = "DESCENDING";
})(SortSpecSortOrderEnum || (SortSpecSortOrderEnum = {}));
// SortSpec
/**
 * A sort order associated with a specific column or row.
**/
var SortSpec = /** @class */ (function (_super) {
    __extends(SortSpec, _super);
    function SortSpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backgroundColor" }),
        __metadata("design:type", Color)
    ], SortSpec.prototype, "backgroundColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backgroundColorStyle" }),
        __metadata("design:type", ColorStyle)
    ], SortSpec.prototype, "backgroundColorStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataSourceColumnReference" }),
        __metadata("design:type", DataSourceColumnReference)
    ], SortSpec.prototype, "dataSourceColumnReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensionIndex" }),
        __metadata("design:type", Number)
    ], SortSpec.prototype, "dimensionIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=foregroundColor" }),
        __metadata("design:type", Color)
    ], SortSpec.prototype, "foregroundColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=foregroundColorStyle" }),
        __metadata("design:type", ColorStyle)
    ], SortSpec.prototype, "foregroundColorStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortOrder" }),
        __metadata("design:type", String)
    ], SortSpec.prototype, "sortOrder", void 0);
    return SortSpec;
}(SpeakeasyBase));
export { SortSpec };
