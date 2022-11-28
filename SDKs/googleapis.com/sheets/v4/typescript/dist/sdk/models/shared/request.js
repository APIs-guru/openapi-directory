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
import { AddBandingRequest } from "./addbandingrequest";
import { AddChartRequest } from "./addchartrequest";
import { AddConditionalFormatRuleRequest } from "./addconditionalformatrulerequest";
import { AddDataSourceRequest } from "./adddatasourcerequest";
import { AddDimensionGroupRequest } from "./adddimensiongrouprequest";
import { AddFilterViewRequest } from "./addfilterviewrequest";
import { AddNamedRangeRequest } from "./addnamedrangerequest";
import { AddProtectedRangeRequest } from "./addprotectedrangerequest";
import { AddSheetRequest } from "./addsheetrequest";
import { AddSlicerRequest } from "./addslicerrequest";
import { AppendCellsRequest } from "./appendcellsrequest";
import { AppendDimensionRequest } from "./appenddimensionrequest";
import { AutoFillRequest } from "./autofillrequest";
import { AutoResizeDimensionsRequest } from "./autoresizedimensionsrequest";
import { ClearBasicFilterRequest } from "./clearbasicfilterrequest";
import { CopyPasteRequest } from "./copypasterequest";
import { CreateDeveloperMetadataRequest } from "./createdevelopermetadatarequest";
import { CutPasteRequest } from "./cutpasterequest";
import { DeleteBandingRequest } from "./deletebandingrequest";
import { DeleteConditionalFormatRuleRequest } from "./deleteconditionalformatrulerequest";
import { DeleteDataSourceRequest } from "./deletedatasourcerequest";
import { DeleteDeveloperMetadataRequest } from "./deletedevelopermetadatarequest";
import { DeleteDimensionRequest } from "./deletedimensionrequest";
import { DeleteDimensionGroupRequest } from "./deletedimensiongrouprequest";
import { DeleteDuplicatesRequest } from "./deleteduplicatesrequest";
import { DeleteEmbeddedObjectRequest } from "./deleteembeddedobjectrequest";
import { DeleteFilterViewRequest } from "./deletefilterviewrequest";
import { DeleteNamedRangeRequest } from "./deletenamedrangerequest";
import { DeleteProtectedRangeRequest } from "./deleteprotectedrangerequest";
import { DeleteRangeRequest } from "./deleterangerequest";
import { DeleteSheetRequest } from "./deletesheetrequest";
import { DuplicateFilterViewRequest } from "./duplicatefilterviewrequest";
import { DuplicateSheetRequest } from "./duplicatesheetrequest";
import { FindReplaceRequest } from "./findreplacerequest";
import { InsertDimensionRequest } from "./insertdimensionrequest";
import { InsertRangeRequest } from "./insertrangerequest";
import { MergeCellsRequest } from "./mergecellsrequest";
import { MoveDimensionRequest } from "./movedimensionrequest";
import { PasteDataRequest } from "./pastedatarequest";
import { RandomizeRangeRequest } from "./randomizerangerequest";
import { RefreshDataSourceRequest } from "./refreshdatasourcerequest";
import { RepeatCellRequest } from "./repeatcellrequest";
import { SetBasicFilterRequest } from "./setbasicfilterrequest";
import { SetDataValidationRequest } from "./setdatavalidationrequest";
import { SortRangeRequest } from "./sortrangerequest";
import { TextToColumnsRequest } from "./texttocolumnsrequest";
import { TrimWhitespaceRequest } from "./trimwhitespacerequest";
import { UnmergeCellsRequest } from "./unmergecellsrequest";
import { UpdateBandingRequest } from "./updatebandingrequest";
import { UpdateBordersRequest } from "./updatebordersrequest";
import { UpdateCellsRequest } from "./updatecellsrequest";
import { UpdateChartSpecRequest } from "./updatechartspecrequest";
import { UpdateConditionalFormatRuleRequest } from "./updateconditionalformatrulerequest";
import { UpdateDataSourceRequest } from "./updatedatasourcerequest";
import { UpdateDeveloperMetadataRequest } from "./updatedevelopermetadatarequest";
import { UpdateDimensionGroupRequest } from "./updatedimensiongrouprequest";
import { UpdateDimensionPropertiesRequest } from "./updatedimensionpropertiesrequest";
import { UpdateEmbeddedObjectBorderRequest } from "./updateembeddedobjectborderrequest";
import { UpdateEmbeddedObjectPositionRequest } from "./updateembeddedobjectpositionrequest";
import { UpdateFilterViewRequest } from "./updatefilterviewrequest";
import { UpdateNamedRangeRequest } from "./updatenamedrangerequest";
import { UpdateProtectedRangeRequest } from "./updateprotectedrangerequest";
import { UpdateSheetPropertiesRequest } from "./updatesheetpropertiesrequest";
import { UpdateSlicerSpecRequest } from "./updateslicerspecrequest";
import { UpdateSpreadsheetPropertiesRequest } from "./updatespreadsheetpropertiesrequest";
// Request
/**
 * A single kind of update to apply to a spreadsheet.
**/
var Request = /** @class */ (function (_super) {
    __extends(Request, _super);
    function Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addBanding" }),
        __metadata("design:type", AddBandingRequest)
    ], Request.prototype, "addBanding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addChart" }),
        __metadata("design:type", AddChartRequest)
    ], Request.prototype, "addChart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addConditionalFormatRule" }),
        __metadata("design:type", AddConditionalFormatRuleRequest)
    ], Request.prototype, "addConditionalFormatRule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addDataSource" }),
        __metadata("design:type", AddDataSourceRequest)
    ], Request.prototype, "addDataSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addDimensionGroup" }),
        __metadata("design:type", AddDimensionGroupRequest)
    ], Request.prototype, "addDimensionGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addFilterView" }),
        __metadata("design:type", AddFilterViewRequest)
    ], Request.prototype, "addFilterView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addNamedRange" }),
        __metadata("design:type", AddNamedRangeRequest)
    ], Request.prototype, "addNamedRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addProtectedRange" }),
        __metadata("design:type", AddProtectedRangeRequest)
    ], Request.prototype, "addProtectedRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addSheet" }),
        __metadata("design:type", AddSheetRequest)
    ], Request.prototype, "addSheet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addSlicer" }),
        __metadata("design:type", AddSlicerRequest)
    ], Request.prototype, "addSlicer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appendCells" }),
        __metadata("design:type", AppendCellsRequest)
    ], Request.prototype, "appendCells", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appendDimension" }),
        __metadata("design:type", AppendDimensionRequest)
    ], Request.prototype, "appendDimension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoFill" }),
        __metadata("design:type", AutoFillRequest)
    ], Request.prototype, "autoFill", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoResizeDimensions" }),
        __metadata("design:type", AutoResizeDimensionsRequest)
    ], Request.prototype, "autoResizeDimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clearBasicFilter" }),
        __metadata("design:type", ClearBasicFilterRequest)
    ], Request.prototype, "clearBasicFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=copyPaste" }),
        __metadata("design:type", CopyPasteRequest)
    ], Request.prototype, "copyPaste", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createDeveloperMetadata" }),
        __metadata("design:type", CreateDeveloperMetadataRequest)
    ], Request.prototype, "createDeveloperMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cutPaste" }),
        __metadata("design:type", CutPasteRequest)
    ], Request.prototype, "cutPaste", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteBanding" }),
        __metadata("design:type", DeleteBandingRequest)
    ], Request.prototype, "deleteBanding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteConditionalFormatRule" }),
        __metadata("design:type", DeleteConditionalFormatRuleRequest)
    ], Request.prototype, "deleteConditionalFormatRule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteDataSource" }),
        __metadata("design:type", DeleteDataSourceRequest)
    ], Request.prototype, "deleteDataSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteDeveloperMetadata" }),
        __metadata("design:type", DeleteDeveloperMetadataRequest)
    ], Request.prototype, "deleteDeveloperMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteDimension" }),
        __metadata("design:type", DeleteDimensionRequest)
    ], Request.prototype, "deleteDimension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteDimensionGroup" }),
        __metadata("design:type", DeleteDimensionGroupRequest)
    ], Request.prototype, "deleteDimensionGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteDuplicates" }),
        __metadata("design:type", DeleteDuplicatesRequest)
    ], Request.prototype, "deleteDuplicates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteEmbeddedObject" }),
        __metadata("design:type", DeleteEmbeddedObjectRequest)
    ], Request.prototype, "deleteEmbeddedObject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteFilterView" }),
        __metadata("design:type", DeleteFilterViewRequest)
    ], Request.prototype, "deleteFilterView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteNamedRange" }),
        __metadata("design:type", DeleteNamedRangeRequest)
    ], Request.prototype, "deleteNamedRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteProtectedRange" }),
        __metadata("design:type", DeleteProtectedRangeRequest)
    ], Request.prototype, "deleteProtectedRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteRange" }),
        __metadata("design:type", DeleteRangeRequest)
    ], Request.prototype, "deleteRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteSheet" }),
        __metadata("design:type", DeleteSheetRequest)
    ], Request.prototype, "deleteSheet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duplicateFilterView" }),
        __metadata("design:type", DuplicateFilterViewRequest)
    ], Request.prototype, "duplicateFilterView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duplicateSheet" }),
        __metadata("design:type", DuplicateSheetRequest)
    ], Request.prototype, "duplicateSheet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=findReplace" }),
        __metadata("design:type", FindReplaceRequest)
    ], Request.prototype, "findReplace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insertDimension" }),
        __metadata("design:type", InsertDimensionRequest)
    ], Request.prototype, "insertDimension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insertRange" }),
        __metadata("design:type", InsertRangeRequest)
    ], Request.prototype, "insertRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mergeCells" }),
        __metadata("design:type", MergeCellsRequest)
    ], Request.prototype, "mergeCells", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moveDimension" }),
        __metadata("design:type", MoveDimensionRequest)
    ], Request.prototype, "moveDimension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pasteData" }),
        __metadata("design:type", PasteDataRequest)
    ], Request.prototype, "pasteData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=randomizeRange" }),
        __metadata("design:type", RandomizeRangeRequest)
    ], Request.prototype, "randomizeRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refreshDataSource" }),
        __metadata("design:type", RefreshDataSourceRequest)
    ], Request.prototype, "refreshDataSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repeatCell" }),
        __metadata("design:type", RepeatCellRequest)
    ], Request.prototype, "repeatCell", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=setBasicFilter" }),
        __metadata("design:type", SetBasicFilterRequest)
    ], Request.prototype, "setBasicFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=setDataValidation" }),
        __metadata("design:type", SetDataValidationRequest)
    ], Request.prototype, "setDataValidation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortRange" }),
        __metadata("design:type", SortRangeRequest)
    ], Request.prototype, "sortRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textToColumns" }),
        __metadata("design:type", TextToColumnsRequest)
    ], Request.prototype, "textToColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trimWhitespace" }),
        __metadata("design:type", TrimWhitespaceRequest)
    ], Request.prototype, "trimWhitespace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unmergeCells" }),
        __metadata("design:type", UnmergeCellsRequest)
    ], Request.prototype, "unmergeCells", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateBanding" }),
        __metadata("design:type", UpdateBandingRequest)
    ], Request.prototype, "updateBanding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateBorders" }),
        __metadata("design:type", UpdateBordersRequest)
    ], Request.prototype, "updateBorders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateCells" }),
        __metadata("design:type", UpdateCellsRequest)
    ], Request.prototype, "updateCells", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateChartSpec" }),
        __metadata("design:type", UpdateChartSpecRequest)
    ], Request.prototype, "updateChartSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateConditionalFormatRule" }),
        __metadata("design:type", UpdateConditionalFormatRuleRequest)
    ], Request.prototype, "updateConditionalFormatRule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateDataSource" }),
        __metadata("design:type", UpdateDataSourceRequest)
    ], Request.prototype, "updateDataSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateDeveloperMetadata" }),
        __metadata("design:type", UpdateDeveloperMetadataRequest)
    ], Request.prototype, "updateDeveloperMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateDimensionGroup" }),
        __metadata("design:type", UpdateDimensionGroupRequest)
    ], Request.prototype, "updateDimensionGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateDimensionProperties" }),
        __metadata("design:type", UpdateDimensionPropertiesRequest)
    ], Request.prototype, "updateDimensionProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateEmbeddedObjectBorder" }),
        __metadata("design:type", UpdateEmbeddedObjectBorderRequest)
    ], Request.prototype, "updateEmbeddedObjectBorder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateEmbeddedObjectPosition" }),
        __metadata("design:type", UpdateEmbeddedObjectPositionRequest)
    ], Request.prototype, "updateEmbeddedObjectPosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateFilterView" }),
        __metadata("design:type", UpdateFilterViewRequest)
    ], Request.prototype, "updateFilterView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateNamedRange" }),
        __metadata("design:type", UpdateNamedRangeRequest)
    ], Request.prototype, "updateNamedRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateProtectedRange" }),
        __metadata("design:type", UpdateProtectedRangeRequest)
    ], Request.prototype, "updateProtectedRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateSheetProperties" }),
        __metadata("design:type", UpdateSheetPropertiesRequest)
    ], Request.prototype, "updateSheetProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateSlicerSpec" }),
        __metadata("design:type", UpdateSlicerSpecRequest)
    ], Request.prototype, "updateSlicerSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateSpreadsheetProperties" }),
        __metadata("design:type", UpdateSpreadsheetPropertiesRequest)
    ], Request.prototype, "updateSpreadsheetProperties", void 0);
    return Request;
}(SpeakeasyBase));
export { Request };
