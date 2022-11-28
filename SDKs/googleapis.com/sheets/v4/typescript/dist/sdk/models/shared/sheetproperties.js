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
import { DataSourceSheetProperties } from "./datasourcesheetproperties";
import { GridProperties } from "./gridproperties";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
export var SheetPropertiesSheetTypeEnum;
(function (SheetPropertiesSheetTypeEnum) {
    SheetPropertiesSheetTypeEnum["SheetTypeUnspecified"] = "SHEET_TYPE_UNSPECIFIED";
    SheetPropertiesSheetTypeEnum["Grid"] = "GRID";
    SheetPropertiesSheetTypeEnum["Object"] = "OBJECT";
    SheetPropertiesSheetTypeEnum["DataSource"] = "DATA_SOURCE";
})(SheetPropertiesSheetTypeEnum || (SheetPropertiesSheetTypeEnum = {}));
// SheetProperties
/**
 * Properties of a sheet.
**/
var SheetProperties = /** @class */ (function (_super) {
    __extends(SheetProperties, _super);
    function SheetProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataSourceSheetProperties" }),
        __metadata("design:type", DataSourceSheetProperties)
    ], SheetProperties.prototype, "dataSourceSheetProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gridProperties" }),
        __metadata("design:type", GridProperties)
    ], SheetProperties.prototype, "gridProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hidden" }),
        __metadata("design:type", Boolean)
    ], SheetProperties.prototype, "hidden", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=index" }),
        __metadata("design:type", Number)
    ], SheetProperties.prototype, "index", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rightToLeft" }),
        __metadata("design:type", Boolean)
    ], SheetProperties.prototype, "rightToLeft", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sheetId" }),
        __metadata("design:type", Number)
    ], SheetProperties.prototype, "sheetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sheetType" }),
        __metadata("design:type", String)
    ], SheetProperties.prototype, "sheetType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tabColor" }),
        __metadata("design:type", Color)
    ], SheetProperties.prototype, "tabColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tabColorStyle" }),
        __metadata("design:type", ColorStyle)
    ], SheetProperties.prototype, "tabColorStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], SheetProperties.prototype, "title", void 0);
    return SheetProperties;
}(SpeakeasyBase));
export { SheetProperties };
