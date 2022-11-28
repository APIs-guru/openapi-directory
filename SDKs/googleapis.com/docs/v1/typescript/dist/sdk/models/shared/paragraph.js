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
import { Bullet } from "./bullet";
import { ParagraphElement } from "./paragraphelement";
import { ParagraphStyle } from "./paragraphstyle";
import { SuggestedBullet } from "./suggestedbullet";
import { SuggestedParagraphStyle } from "./suggestedparagraphstyle";
import { ObjectReferences } from "./objectreferences";
import { ParagraphElementInput } from "./paragraphelement";
// Paragraph
/**
 * A StructuralElement representing a paragraph. A paragraph is a range of content that's terminated with a newline character.
**/
var Paragraph = /** @class */ (function (_super) {
    __extends(Paragraph, _super);
    function Paragraph() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bullet" }),
        __metadata("design:type", Bullet)
    ], Paragraph.prototype, "bullet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=elements", elemType: ParagraphElement }),
        __metadata("design:type", Array)
    ], Paragraph.prototype, "elements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paragraphStyle" }),
        __metadata("design:type", ParagraphStyle)
    ], Paragraph.prototype, "paragraphStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=positionedObjectIds" }),
        __metadata("design:type", Array)
    ], Paragraph.prototype, "positionedObjectIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestedBulletChanges", elemType: SuggestedBullet }),
        __metadata("design:type", Map)
    ], Paragraph.prototype, "suggestedBulletChanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestedParagraphStyleChanges", elemType: SuggestedParagraphStyle }),
        __metadata("design:type", Map)
    ], Paragraph.prototype, "suggestedParagraphStyleChanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestedPositionedObjectIds", elemType: ObjectReferences }),
        __metadata("design:type", Map)
    ], Paragraph.prototype, "suggestedPositionedObjectIds", void 0);
    return Paragraph;
}(SpeakeasyBase));
export { Paragraph };
// ParagraphInput
/**
 * A StructuralElement representing a paragraph. A paragraph is a range of content that's terminated with a newline character.
**/
var ParagraphInput = /** @class */ (function (_super) {
    __extends(ParagraphInput, _super);
    function ParagraphInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bullet" }),
        __metadata("design:type", Bullet)
    ], ParagraphInput.prototype, "bullet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=elements", elemType: ParagraphElementInput }),
        __metadata("design:type", Array)
    ], ParagraphInput.prototype, "elements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paragraphStyle" }),
        __metadata("design:type", ParagraphStyle)
    ], ParagraphInput.prototype, "paragraphStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=positionedObjectIds" }),
        __metadata("design:type", Array)
    ], ParagraphInput.prototype, "positionedObjectIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestedBulletChanges", elemType: SuggestedBullet }),
        __metadata("design:type", Map)
    ], ParagraphInput.prototype, "suggestedBulletChanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestedParagraphStyleChanges", elemType: SuggestedParagraphStyle }),
        __metadata("design:type", Map)
    ], ParagraphInput.prototype, "suggestedParagraphStyleChanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestedPositionedObjectIds", elemType: ObjectReferences }),
        __metadata("design:type", Map)
    ], ParagraphInput.prototype, "suggestedPositionedObjectIds", void 0);
    return ParagraphInput;
}(SpeakeasyBase));
export { ParagraphInput };
