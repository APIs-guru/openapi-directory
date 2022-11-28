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
import { BooksAnnotationsRange } from "./booksannotationsrange";
// VolumeannotationContentRanges
/**
 * The content ranges to identify the selected text.
**/
var VolumeannotationContentRanges = /** @class */ (function (_super) {
    __extends(VolumeannotationContentRanges, _super);
    function VolumeannotationContentRanges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cfiRange" }),
        __metadata("design:type", BooksAnnotationsRange)
    ], VolumeannotationContentRanges.prototype, "cfiRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentVersion" }),
        __metadata("design:type", String)
    ], VolumeannotationContentRanges.prototype, "contentVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gbImageRange" }),
        __metadata("design:type", BooksAnnotationsRange)
    ], VolumeannotationContentRanges.prototype, "gbImageRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gbTextRange" }),
        __metadata("design:type", BooksAnnotationsRange)
    ], VolumeannotationContentRanges.prototype, "gbTextRange", void 0);
    return VolumeannotationContentRanges;
}(SpeakeasyBase));
export { VolumeannotationContentRanges };
var Volumeannotation = /** @class */ (function (_super) {
    __extends(Volumeannotation, _super);
    function Volumeannotation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotationDataId" }),
        __metadata("design:type", String)
    ], Volumeannotation.prototype, "annotationDataId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotationDataLink" }),
        __metadata("design:type", String)
    ], Volumeannotation.prototype, "annotationDataLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotationType" }),
        __metadata("design:type", String)
    ], Volumeannotation.prototype, "annotationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentRanges" }),
        __metadata("design:type", VolumeannotationContentRanges)
    ], Volumeannotation.prototype, "contentRanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", String)
    ], Volumeannotation.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], Volumeannotation.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Volumeannotation.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Volumeannotation.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=layerId" }),
        __metadata("design:type", String)
    ], Volumeannotation.prototype, "layerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageIds" }),
        __metadata("design:type", Array)
    ], Volumeannotation.prototype, "pageIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selectedText" }),
        __metadata("design:type", String)
    ], Volumeannotation.prototype, "selectedText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], Volumeannotation.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", String)
    ], Volumeannotation.prototype, "updated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumeId" }),
        __metadata("design:type", String)
    ], Volumeannotation.prototype, "volumeId", void 0);
    return Volumeannotation;
}(SpeakeasyBase));
export { Volumeannotation };
