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
import { AutoText } from "./autotext";
import { ColumnBreak } from "./columnbreak";
import { Equation } from "./equation";
import { FootnoteReference } from "./footnotereference";
import { HorizontalRule } from "./horizontalrule";
import { InlineObjectElement } from "./inlineobjectelement";
import { PageBreak } from "./pagebreak";
import { PersonInput } from "./person";
import { RichLinkInput } from "./richlink";
import { TextRun } from "./textrun";
import { Person } from "./person";
import { RichLink } from "./richlink";
// ParagraphElementInput
/**
 * A ParagraphElement describes content within a Paragraph.
**/
var ParagraphElementInput = /** @class */ (function (_super) {
    __extends(ParagraphElementInput, _super);
    function ParagraphElementInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoText" }),
        __metadata("design:type", AutoText)
    ], ParagraphElementInput.prototype, "autoText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=columnBreak" }),
        __metadata("design:type", ColumnBreak)
    ], ParagraphElementInput.prototype, "columnBreak", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endIndex" }),
        __metadata("design:type", Number)
    ], ParagraphElementInput.prototype, "endIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=equation" }),
        __metadata("design:type", Equation)
    ], ParagraphElementInput.prototype, "equation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=footnoteReference" }),
        __metadata("design:type", FootnoteReference)
    ], ParagraphElementInput.prototype, "footnoteReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=horizontalRule" }),
        __metadata("design:type", HorizontalRule)
    ], ParagraphElementInput.prototype, "horizontalRule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inlineObjectElement" }),
        __metadata("design:type", InlineObjectElement)
    ], ParagraphElementInput.prototype, "inlineObjectElement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageBreak" }),
        __metadata("design:type", PageBreak)
    ], ParagraphElementInput.prototype, "pageBreak", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=person" }),
        __metadata("design:type", PersonInput)
    ], ParagraphElementInput.prototype, "person", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=richLink" }),
        __metadata("design:type", RichLinkInput)
    ], ParagraphElementInput.prototype, "richLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startIndex" }),
        __metadata("design:type", Number)
    ], ParagraphElementInput.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textRun" }),
        __metadata("design:type", TextRun)
    ], ParagraphElementInput.prototype, "textRun", void 0);
    return ParagraphElementInput;
}(SpeakeasyBase));
export { ParagraphElementInput };
// ParagraphElement
/**
 * A ParagraphElement describes content within a Paragraph.
**/
var ParagraphElement = /** @class */ (function (_super) {
    __extends(ParagraphElement, _super);
    function ParagraphElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoText" }),
        __metadata("design:type", AutoText)
    ], ParagraphElement.prototype, "autoText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=columnBreak" }),
        __metadata("design:type", ColumnBreak)
    ], ParagraphElement.prototype, "columnBreak", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endIndex" }),
        __metadata("design:type", Number)
    ], ParagraphElement.prototype, "endIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=equation" }),
        __metadata("design:type", Equation)
    ], ParagraphElement.prototype, "equation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=footnoteReference" }),
        __metadata("design:type", FootnoteReference)
    ], ParagraphElement.prototype, "footnoteReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=horizontalRule" }),
        __metadata("design:type", HorizontalRule)
    ], ParagraphElement.prototype, "horizontalRule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inlineObjectElement" }),
        __metadata("design:type", InlineObjectElement)
    ], ParagraphElement.prototype, "inlineObjectElement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageBreak" }),
        __metadata("design:type", PageBreak)
    ], ParagraphElement.prototype, "pageBreak", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=person" }),
        __metadata("design:type", Person)
    ], ParagraphElement.prototype, "person", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=richLink" }),
        __metadata("design:type", RichLink)
    ], ParagraphElement.prototype, "richLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startIndex" }),
        __metadata("design:type", Number)
    ], ParagraphElement.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textRun" }),
        __metadata("design:type", TextRun)
    ], ParagraphElement.prototype, "textRun", void 0);
    return ParagraphElement;
}(SpeakeasyBase));
export { ParagraphElement };
