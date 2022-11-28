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
import { TableCellLocation } from "./tablecelllocation";
import { Range } from "./range";
export var CreateParagraphBulletsRequestBulletPresetEnum;
(function (CreateParagraphBulletsRequestBulletPresetEnum) {
    CreateParagraphBulletsRequestBulletPresetEnum["BulletDiscCircleSquare"] = "BULLET_DISC_CIRCLE_SQUARE";
    CreateParagraphBulletsRequestBulletPresetEnum["BulletDiamondxArrow3DSquare"] = "BULLET_DIAMONDX_ARROW3D_SQUARE";
    CreateParagraphBulletsRequestBulletPresetEnum["BulletCheckbox"] = "BULLET_CHECKBOX";
    CreateParagraphBulletsRequestBulletPresetEnum["BulletArrowDiamondDisc"] = "BULLET_ARROW_DIAMOND_DISC";
    CreateParagraphBulletsRequestBulletPresetEnum["BulletStarCircleSquare"] = "BULLET_STAR_CIRCLE_SQUARE";
    CreateParagraphBulletsRequestBulletPresetEnum["BulletArrow3DCircleSquare"] = "BULLET_ARROW3D_CIRCLE_SQUARE";
    CreateParagraphBulletsRequestBulletPresetEnum["BulletLefttriangleDiamondDisc"] = "BULLET_LEFTTRIANGLE_DIAMOND_DISC";
    CreateParagraphBulletsRequestBulletPresetEnum["BulletDiamondxHollowdiamondSquare"] = "BULLET_DIAMONDX_HOLLOWDIAMOND_SQUARE";
    CreateParagraphBulletsRequestBulletPresetEnum["BulletDiamondCircleSquare"] = "BULLET_DIAMOND_CIRCLE_SQUARE";
    CreateParagraphBulletsRequestBulletPresetEnum["NumberedDigitAlphaRoman"] = "NUMBERED_DIGIT_ALPHA_ROMAN";
    CreateParagraphBulletsRequestBulletPresetEnum["NumberedDigitAlphaRomanParens"] = "NUMBERED_DIGIT_ALPHA_ROMAN_PARENS";
    CreateParagraphBulletsRequestBulletPresetEnum["NumberedDigitNested"] = "NUMBERED_DIGIT_NESTED";
    CreateParagraphBulletsRequestBulletPresetEnum["NumberedUpperalphaAlphaRoman"] = "NUMBERED_UPPERALPHA_ALPHA_ROMAN";
    CreateParagraphBulletsRequestBulletPresetEnum["NumberedUpperromanUpperalphaDigit"] = "NUMBERED_UPPERROMAN_UPPERALPHA_DIGIT";
    CreateParagraphBulletsRequestBulletPresetEnum["NumberedZerodigitAlphaRoman"] = "NUMBERED_ZERODIGIT_ALPHA_ROMAN";
})(CreateParagraphBulletsRequestBulletPresetEnum || (CreateParagraphBulletsRequestBulletPresetEnum = {}));
// CreateParagraphBulletsRequest
/**
 * Creates bullets for all of the paragraphs that overlap with the given text index range. The nesting level of each paragraph will be determined by counting leading tabs in front of each paragraph. To avoid excess space between the bullet and the corresponding paragraph, these leading tabs are removed by this request. This may change the indices of parts of the text. If the paragraph immediately before paragraphs being updated is in a list with a matching preset, the paragraphs being updated are added to that preceding list.
**/
var CreateParagraphBulletsRequest = /** @class */ (function (_super) {
    __extends(CreateParagraphBulletsRequest, _super);
    function CreateParagraphBulletsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bulletPreset" }),
        __metadata("design:type", String)
    ], CreateParagraphBulletsRequest.prototype, "bulletPreset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cellLocation" }),
        __metadata("design:type", TableCellLocation)
    ], CreateParagraphBulletsRequest.prototype, "cellLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectId" }),
        __metadata("design:type", String)
    ], CreateParagraphBulletsRequest.prototype, "objectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textRange" }),
        __metadata("design:type", Range)
    ], CreateParagraphBulletsRequest.prototype, "textRange", void 0);
    return CreateParagraphBulletsRequest;
}(SpeakeasyBase));
export { CreateParagraphBulletsRequest };
