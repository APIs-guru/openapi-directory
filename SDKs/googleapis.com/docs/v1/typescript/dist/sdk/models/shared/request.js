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
import { CreateFooterRequest } from "./createfooterrequest";
import { CreateFootnoteRequest } from "./createfootnoterequest";
import { CreateHeaderRequest } from "./createheaderrequest";
import { CreateNamedRangeRequest } from "./createnamedrangerequest";
import { CreateParagraphBulletsRequest } from "./createparagraphbulletsrequest";
import { DeleteContentRangeRequest } from "./deletecontentrangerequest";
import { DeleteFooterRequest } from "./deletefooterrequest";
import { DeleteHeaderRequest } from "./deleteheaderrequest";
import { DeleteNamedRangeRequest } from "./deletenamedrangerequest";
import { DeleteParagraphBulletsRequest } from "./deleteparagraphbulletsrequest";
import { DeletePositionedObjectRequest } from "./deletepositionedobjectrequest";
import { DeleteTableColumnRequest } from "./deletetablecolumnrequest";
import { DeleteTableRowRequest } from "./deletetablerowrequest";
import { InsertInlineImageRequest } from "./insertinlineimagerequest";
import { InsertPageBreakRequest } from "./insertpagebreakrequest";
import { InsertSectionBreakRequest } from "./insertsectionbreakrequest";
import { InsertTableRequest } from "./inserttablerequest";
import { InsertTableColumnRequest } from "./inserttablecolumnrequest";
import { InsertTableRowRequest } from "./inserttablerowrequest";
import { InsertTextRequest } from "./inserttextrequest";
import { MergeTableCellsRequest } from "./mergetablecellsrequest";
import { PinTableHeaderRowsRequest } from "./pintableheaderrowsrequest";
import { ReplaceAllTextRequest } from "./replacealltextrequest";
import { ReplaceImageRequest } from "./replaceimagerequest";
import { ReplaceNamedRangeContentRequest } from "./replacenamedrangecontentrequest";
import { UnmergeTableCellsRequest } from "./unmergetablecellsrequest";
import { UpdateDocumentStyleRequest } from "./updatedocumentstylerequest";
import { UpdateParagraphStyleRequest } from "./updateparagraphstylerequest";
import { UpdateSectionStyleRequest } from "./updatesectionstylerequest";
import { UpdateTableCellStyleRequest } from "./updatetablecellstylerequest";
import { UpdateTableColumnPropertiesRequest } from "./updatetablecolumnpropertiesrequest";
import { UpdateTableRowStyleRequest } from "./updatetablerowstylerequest";
import { UpdateTextStyleRequest } from "./updatetextstylerequest";
// Request
/**
 * A single update to apply to a document.
**/
var Request = /** @class */ (function (_super) {
    __extends(Request, _super);
    function Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createFooter" }),
        __metadata("design:type", CreateFooterRequest)
    ], Request.prototype, "createFooter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createFootnote" }),
        __metadata("design:type", CreateFootnoteRequest)
    ], Request.prototype, "createFootnote", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createHeader" }),
        __metadata("design:type", CreateHeaderRequest)
    ], Request.prototype, "createHeader", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createNamedRange" }),
        __metadata("design:type", CreateNamedRangeRequest)
    ], Request.prototype, "createNamedRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createParagraphBullets" }),
        __metadata("design:type", CreateParagraphBulletsRequest)
    ], Request.prototype, "createParagraphBullets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteContentRange" }),
        __metadata("design:type", DeleteContentRangeRequest)
    ], Request.prototype, "deleteContentRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteFooter" }),
        __metadata("design:type", DeleteFooterRequest)
    ], Request.prototype, "deleteFooter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteHeader" }),
        __metadata("design:type", DeleteHeaderRequest)
    ], Request.prototype, "deleteHeader", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteNamedRange" }),
        __metadata("design:type", DeleteNamedRangeRequest)
    ], Request.prototype, "deleteNamedRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteParagraphBullets" }),
        __metadata("design:type", DeleteParagraphBulletsRequest)
    ], Request.prototype, "deleteParagraphBullets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deletePositionedObject" }),
        __metadata("design:type", DeletePositionedObjectRequest)
    ], Request.prototype, "deletePositionedObject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteTableColumn" }),
        __metadata("design:type", DeleteTableColumnRequest)
    ], Request.prototype, "deleteTableColumn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteTableRow" }),
        __metadata("design:type", DeleteTableRowRequest)
    ], Request.prototype, "deleteTableRow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insertInlineImage" }),
        __metadata("design:type", InsertInlineImageRequest)
    ], Request.prototype, "insertInlineImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insertPageBreak" }),
        __metadata("design:type", InsertPageBreakRequest)
    ], Request.prototype, "insertPageBreak", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insertSectionBreak" }),
        __metadata("design:type", InsertSectionBreakRequest)
    ], Request.prototype, "insertSectionBreak", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insertTable" }),
        __metadata("design:type", InsertTableRequest)
    ], Request.prototype, "insertTable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insertTableColumn" }),
        __metadata("design:type", InsertTableColumnRequest)
    ], Request.prototype, "insertTableColumn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insertTableRow" }),
        __metadata("design:type", InsertTableRowRequest)
    ], Request.prototype, "insertTableRow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insertText" }),
        __metadata("design:type", InsertTextRequest)
    ], Request.prototype, "insertText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mergeTableCells" }),
        __metadata("design:type", MergeTableCellsRequest)
    ], Request.prototype, "mergeTableCells", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pinTableHeaderRows" }),
        __metadata("design:type", PinTableHeaderRowsRequest)
    ], Request.prototype, "pinTableHeaderRows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replaceAllText" }),
        __metadata("design:type", ReplaceAllTextRequest)
    ], Request.prototype, "replaceAllText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replaceImage" }),
        __metadata("design:type", ReplaceImageRequest)
    ], Request.prototype, "replaceImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replaceNamedRangeContent" }),
        __metadata("design:type", ReplaceNamedRangeContentRequest)
    ], Request.prototype, "replaceNamedRangeContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unmergeTableCells" }),
        __metadata("design:type", UnmergeTableCellsRequest)
    ], Request.prototype, "unmergeTableCells", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateDocumentStyle" }),
        __metadata("design:type", UpdateDocumentStyleRequest)
    ], Request.prototype, "updateDocumentStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateParagraphStyle" }),
        __metadata("design:type", UpdateParagraphStyleRequest)
    ], Request.prototype, "updateParagraphStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateSectionStyle" }),
        __metadata("design:type", UpdateSectionStyleRequest)
    ], Request.prototype, "updateSectionStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTableCellStyle" }),
        __metadata("design:type", UpdateTableCellStyleRequest)
    ], Request.prototype, "updateTableCellStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTableColumnProperties" }),
        __metadata("design:type", UpdateTableColumnPropertiesRequest)
    ], Request.prototype, "updateTableColumnProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTableRowStyle" }),
        __metadata("design:type", UpdateTableRowStyleRequest)
    ], Request.prototype, "updateTableRowStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTextStyle" }),
        __metadata("design:type", UpdateTextStyleRequest)
    ], Request.prototype, "updateTextStyle", void 0);
    return Request;
}(SpeakeasyBase));
export { Request };
