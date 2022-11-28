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
import { DataSourceFormula } from "./datasourceformula";
import { DataSourceTable } from "./datasourcetable";
import { DataValidationRule } from "./datavalidationrule";
import { CellFormat } from "./cellformat";
import { ExtendedValue } from "./extendedvalue";
import { PivotTable } from "./pivottable";
import { TextFormatRun } from "./textformatrun";
// CellData
/**
 * Data about a specific cell.
**/
var CellData = /** @class */ (function (_super) {
    __extends(CellData, _super);
    function CellData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataSourceFormula" }),
        __metadata("design:type", DataSourceFormula)
    ], CellData.prototype, "dataSourceFormula", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataSourceTable" }),
        __metadata("design:type", DataSourceTable)
    ], CellData.prototype, "dataSourceTable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataValidation" }),
        __metadata("design:type", DataValidationRule)
    ], CellData.prototype, "dataValidation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=effectiveFormat" }),
        __metadata("design:type", CellFormat)
    ], CellData.prototype, "effectiveFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=effectiveValue" }),
        __metadata("design:type", ExtendedValue)
    ], CellData.prototype, "effectiveValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=formattedValue" }),
        __metadata("design:type", String)
    ], CellData.prototype, "formattedValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hyperlink" }),
        __metadata("design:type", String)
    ], CellData.prototype, "hyperlink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], CellData.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pivotTable" }),
        __metadata("design:type", PivotTable)
    ], CellData.prototype, "pivotTable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textFormatRuns", elemType: TextFormatRun }),
        __metadata("design:type", Array)
    ], CellData.prototype, "textFormatRuns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userEnteredFormat" }),
        __metadata("design:type", CellFormat)
    ], CellData.prototype, "userEnteredFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userEnteredValue" }),
        __metadata("design:type", ExtendedValue)
    ], CellData.prototype, "userEnteredValue", void 0);
    return CellData;
}(SpeakeasyBase));
export { CellData };
