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
import { CreateImageRequest } from "./createimagerequest";
import { CreateLineRequest } from "./createlinerequest";
import { CreateParagraphBulletsRequest } from "./createparagraphbulletsrequest";
import { CreateShapeRequest } from "./createshaperequest";
import { CreateSheetsChartRequest } from "./createsheetschartrequest";
import { CreateSlideRequest } from "./createsliderequest";
import { CreateTableRequest } from "./createtablerequest";
import { CreateVideoRequest } from "./createvideorequest";
import { DeleteObjectRequest } from "./deleteobjectrequest";
import { DeleteParagraphBulletsRequest } from "./deleteparagraphbulletsrequest";
import { DeleteTableColumnRequest } from "./deletetablecolumnrequest";
import { DeleteTableRowRequest } from "./deletetablerowrequest";
import { DeleteTextRequest } from "./deletetextrequest";
import { DuplicateObjectRequest } from "./duplicateobjectrequest";
import { GroupObjectsRequest } from "./groupobjectsrequest";
import { InsertTableColumnsRequest } from "./inserttablecolumnsrequest";
import { InsertTableRowsRequest } from "./inserttablerowsrequest";
import { InsertTextRequest } from "./inserttextrequest";
import { MergeTableCellsRequest } from "./mergetablecellsrequest";
import { RefreshSheetsChartRequest } from "./refreshsheetschartrequest";
import { ReplaceAllShapesWithImageRequest } from "./replaceallshapeswithimagerequest";
import { ReplaceAllShapesWithSheetsChartRequest } from "./replaceallshapeswithsheetschartrequest";
import { ReplaceAllTextRequest } from "./replacealltextrequest";
import { ReplaceImageRequest } from "./replaceimagerequest";
import { RerouteLineRequest } from "./reroutelinerequest";
import { UngroupObjectsRequest } from "./ungroupobjectsrequest";
import { UnmergeTableCellsRequest } from "./unmergetablecellsrequest";
import { UpdateImagePropertiesRequest } from "./updateimagepropertiesrequest";
import { UpdateLineCategoryRequest } from "./updatelinecategoryrequest";
import { UpdateLinePropertiesRequest } from "./updatelinepropertiesrequest";
import { UpdatePageElementAltTextRequest } from "./updatepageelementalttextrequest";
import { UpdatePageElementTransformRequest } from "./updatepageelementtransformrequest";
import { UpdatePageElementsZOrderRequest } from "./updatepageelementszorderrequest";
import { UpdatePagePropertiesRequest } from "./updatepagepropertiesrequest";
import { UpdateParagraphStyleRequest } from "./updateparagraphstylerequest";
import { UpdateShapePropertiesRequest } from "./updateshapepropertiesrequest";
import { UpdateSlidePropertiesRequest } from "./updateslidepropertiesrequest";
import { UpdateSlidesPositionRequest } from "./updateslidespositionrequest";
import { UpdateTableBorderPropertiesRequest } from "./updatetableborderpropertiesrequest";
import { UpdateTableCellPropertiesRequest } from "./updatetablecellpropertiesrequest";
import { UpdateTableColumnPropertiesRequest } from "./updatetablecolumnpropertiesrequest";
import { UpdateTableRowPropertiesRequest } from "./updatetablerowpropertiesrequest";
import { UpdateTextStyleRequest } from "./updatetextstylerequest";
import { UpdateVideoPropertiesRequest } from "./updatevideopropertiesrequest";
// Request
/**
 * A single kind of update to apply to a presentation.
**/
var Request = /** @class */ (function (_super) {
    __extends(Request, _super);
    function Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createImage" }),
        __metadata("design:type", CreateImageRequest)
    ], Request.prototype, "createImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createLine" }),
        __metadata("design:type", CreateLineRequest)
    ], Request.prototype, "createLine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createParagraphBullets" }),
        __metadata("design:type", CreateParagraphBulletsRequest)
    ], Request.prototype, "createParagraphBullets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createShape" }),
        __metadata("design:type", CreateShapeRequest)
    ], Request.prototype, "createShape", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createSheetsChart" }),
        __metadata("design:type", CreateSheetsChartRequest)
    ], Request.prototype, "createSheetsChart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createSlide" }),
        __metadata("design:type", CreateSlideRequest)
    ], Request.prototype, "createSlide", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTable" }),
        __metadata("design:type", CreateTableRequest)
    ], Request.prototype, "createTable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createVideo" }),
        __metadata("design:type", CreateVideoRequest)
    ], Request.prototype, "createVideo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteObject" }),
        __metadata("design:type", DeleteObjectRequest)
    ], Request.prototype, "deleteObject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteParagraphBullets" }),
        __metadata("design:type", DeleteParagraphBulletsRequest)
    ], Request.prototype, "deleteParagraphBullets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteTableColumn" }),
        __metadata("design:type", DeleteTableColumnRequest)
    ], Request.prototype, "deleteTableColumn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteTableRow" }),
        __metadata("design:type", DeleteTableRowRequest)
    ], Request.prototype, "deleteTableRow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteText" }),
        __metadata("design:type", DeleteTextRequest)
    ], Request.prototype, "deleteText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duplicateObject" }),
        __metadata("design:type", DuplicateObjectRequest)
    ], Request.prototype, "duplicateObject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupObjects" }),
        __metadata("design:type", GroupObjectsRequest)
    ], Request.prototype, "groupObjects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insertTableColumns" }),
        __metadata("design:type", InsertTableColumnsRequest)
    ], Request.prototype, "insertTableColumns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insertTableRows" }),
        __metadata("design:type", InsertTableRowsRequest)
    ], Request.prototype, "insertTableRows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insertText" }),
        __metadata("design:type", InsertTextRequest)
    ], Request.prototype, "insertText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mergeTableCells" }),
        __metadata("design:type", MergeTableCellsRequest)
    ], Request.prototype, "mergeTableCells", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refreshSheetsChart" }),
        __metadata("design:type", RefreshSheetsChartRequest)
    ], Request.prototype, "refreshSheetsChart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replaceAllShapesWithImage" }),
        __metadata("design:type", ReplaceAllShapesWithImageRequest)
    ], Request.prototype, "replaceAllShapesWithImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replaceAllShapesWithSheetsChart" }),
        __metadata("design:type", ReplaceAllShapesWithSheetsChartRequest)
    ], Request.prototype, "replaceAllShapesWithSheetsChart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replaceAllText" }),
        __metadata("design:type", ReplaceAllTextRequest)
    ], Request.prototype, "replaceAllText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replaceImage" }),
        __metadata("design:type", ReplaceImageRequest)
    ], Request.prototype, "replaceImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rerouteLine" }),
        __metadata("design:type", RerouteLineRequest)
    ], Request.prototype, "rerouteLine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ungroupObjects" }),
        __metadata("design:type", UngroupObjectsRequest)
    ], Request.prototype, "ungroupObjects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unmergeTableCells" }),
        __metadata("design:type", UnmergeTableCellsRequest)
    ], Request.prototype, "unmergeTableCells", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateImageProperties" }),
        __metadata("design:type", UpdateImagePropertiesRequest)
    ], Request.prototype, "updateImageProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateLineCategory" }),
        __metadata("design:type", UpdateLineCategoryRequest)
    ], Request.prototype, "updateLineCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateLineProperties" }),
        __metadata("design:type", UpdateLinePropertiesRequest)
    ], Request.prototype, "updateLineProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatePageElementAltText" }),
        __metadata("design:type", UpdatePageElementAltTextRequest)
    ], Request.prototype, "updatePageElementAltText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatePageElementTransform" }),
        __metadata("design:type", UpdatePageElementTransformRequest)
    ], Request.prototype, "updatePageElementTransform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatePageElementsZOrder" }),
        __metadata("design:type", UpdatePageElementsZOrderRequest)
    ], Request.prototype, "updatePageElementsZOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updatePageProperties" }),
        __metadata("design:type", UpdatePagePropertiesRequest)
    ], Request.prototype, "updatePageProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateParagraphStyle" }),
        __metadata("design:type", UpdateParagraphStyleRequest)
    ], Request.prototype, "updateParagraphStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateShapeProperties" }),
        __metadata("design:type", UpdateShapePropertiesRequest)
    ], Request.prototype, "updateShapeProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateSlideProperties" }),
        __metadata("design:type", UpdateSlidePropertiesRequest)
    ], Request.prototype, "updateSlideProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateSlidesPosition" }),
        __metadata("design:type", UpdateSlidesPositionRequest)
    ], Request.prototype, "updateSlidesPosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTableBorderProperties" }),
        __metadata("design:type", UpdateTableBorderPropertiesRequest)
    ], Request.prototype, "updateTableBorderProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTableCellProperties" }),
        __metadata("design:type", UpdateTableCellPropertiesRequest)
    ], Request.prototype, "updateTableCellProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTableColumnProperties" }),
        __metadata("design:type", UpdateTableColumnPropertiesRequest)
    ], Request.prototype, "updateTableColumnProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTableRowProperties" }),
        __metadata("design:type", UpdateTableRowPropertiesRequest)
    ], Request.prototype, "updateTableRowProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTextStyle" }),
        __metadata("design:type", UpdateTextStyleRequest)
    ], Request.prototype, "updateTextStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateVideoProperties" }),
        __metadata("design:type", UpdateVideoPropertiesRequest)
    ], Request.prototype, "updateVideoProperties", void 0);
    return Request;
}(SpeakeasyBase));
export { Request };
