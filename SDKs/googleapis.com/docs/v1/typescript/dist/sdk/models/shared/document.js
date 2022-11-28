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
import { BodyInput } from "./body";
import { DocumentStyle } from "./documentstyle";
import { FooterInput } from "./footer";
import { FootnoteInput } from "./footnote";
import { HeaderInput } from "./header";
import { InlineObject } from "./inlineobject";
import { List } from "./list";
import { NamedRanges } from "./namedranges";
import { NamedStyles } from "./namedstyles";
import { PositionedObject } from "./positionedobject";
import { SuggestedDocumentStyle } from "./suggesteddocumentstyle";
import { SuggestedNamedStyles } from "./suggestednamedstyles";
import { Body } from "./body";
import { Footer } from "./footer";
import { Footnote } from "./footnote";
import { Header } from "./header";
export var DocumentSuggestionsViewModeEnum;
(function (DocumentSuggestionsViewModeEnum) {
    DocumentSuggestionsViewModeEnum["DefaultForCurrentAccess"] = "DEFAULT_FOR_CURRENT_ACCESS";
    DocumentSuggestionsViewModeEnum["SuggestionsInline"] = "SUGGESTIONS_INLINE";
    DocumentSuggestionsViewModeEnum["PreviewSuggestionsAccepted"] = "PREVIEW_SUGGESTIONS_ACCEPTED";
    DocumentSuggestionsViewModeEnum["PreviewWithoutSuggestions"] = "PREVIEW_WITHOUT_SUGGESTIONS";
})(DocumentSuggestionsViewModeEnum || (DocumentSuggestionsViewModeEnum = {}));
// DocumentInput
/**
 * A Google Docs document.
**/
var DocumentInput = /** @class */ (function (_super) {
    __extends(DocumentInput, _super);
    function DocumentInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", BodyInput)
    ], DocumentInput.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentId" }),
        __metadata("design:type", String)
    ], DocumentInput.prototype, "documentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentStyle" }),
        __metadata("design:type", DocumentStyle)
    ], DocumentInput.prototype, "documentStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=footers", elemType: FooterInput }),
        __metadata("design:type", Map)
    ], DocumentInput.prototype, "footers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=footnotes", elemType: FootnoteInput }),
        __metadata("design:type", Map)
    ], DocumentInput.prototype, "footnotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers", elemType: HeaderInput }),
        __metadata("design:type", Map)
    ], DocumentInput.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inlineObjects", elemType: InlineObject }),
        __metadata("design:type", Map)
    ], DocumentInput.prototype, "inlineObjects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lists", elemType: List }),
        __metadata("design:type", Map)
    ], DocumentInput.prototype, "lists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=namedRanges", elemType: NamedRanges }),
        __metadata("design:type", Map)
    ], DocumentInput.prototype, "namedRanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=namedStyles" }),
        __metadata("design:type", NamedStyles)
    ], DocumentInput.prototype, "namedStyles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=positionedObjects", elemType: PositionedObject }),
        __metadata("design:type", Map)
    ], DocumentInput.prototype, "positionedObjects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisionId" }),
        __metadata("design:type", String)
    ], DocumentInput.prototype, "revisionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestedDocumentStyleChanges", elemType: SuggestedDocumentStyle }),
        __metadata("design:type", Map)
    ], DocumentInput.prototype, "suggestedDocumentStyleChanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestedNamedStylesChanges", elemType: SuggestedNamedStyles }),
        __metadata("design:type", Map)
    ], DocumentInput.prototype, "suggestedNamedStylesChanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestionsViewMode" }),
        __metadata("design:type", String)
    ], DocumentInput.prototype, "suggestionsViewMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], DocumentInput.prototype, "title", void 0);
    return DocumentInput;
}(SpeakeasyBase));
export { DocumentInput };
// Document
/**
 * A Google Docs document.
**/
var Document = /** @class */ (function (_super) {
    __extends(Document, _super);
    function Document() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", Body)
    ], Document.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentId" }),
        __metadata("design:type", String)
    ], Document.prototype, "documentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentStyle" }),
        __metadata("design:type", DocumentStyle)
    ], Document.prototype, "documentStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=footers", elemType: Footer }),
        __metadata("design:type", Map)
    ], Document.prototype, "footers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=footnotes", elemType: Footnote }),
        __metadata("design:type", Map)
    ], Document.prototype, "footnotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers", elemType: Header }),
        __metadata("design:type", Map)
    ], Document.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inlineObjects", elemType: InlineObject }),
        __metadata("design:type", Map)
    ], Document.prototype, "inlineObjects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lists", elemType: List }),
        __metadata("design:type", Map)
    ], Document.prototype, "lists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=namedRanges", elemType: NamedRanges }),
        __metadata("design:type", Map)
    ], Document.prototype, "namedRanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=namedStyles" }),
        __metadata("design:type", NamedStyles)
    ], Document.prototype, "namedStyles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=positionedObjects", elemType: PositionedObject }),
        __metadata("design:type", Map)
    ], Document.prototype, "positionedObjects", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisionId" }),
        __metadata("design:type", String)
    ], Document.prototype, "revisionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestedDocumentStyleChanges", elemType: SuggestedDocumentStyle }),
        __metadata("design:type", Map)
    ], Document.prototype, "suggestedDocumentStyleChanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestedNamedStylesChanges", elemType: SuggestedNamedStyles }),
        __metadata("design:type", Map)
    ], Document.prototype, "suggestedNamedStylesChanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestionsViewMode" }),
        __metadata("design:type", String)
    ], Document.prototype, "suggestionsViewMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Document.prototype, "title", void 0);
    return Document;
}(SpeakeasyBase));
export { Document };
