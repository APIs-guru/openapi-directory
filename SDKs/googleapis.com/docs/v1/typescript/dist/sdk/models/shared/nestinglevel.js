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
import { Dimension } from "./dimension";
import { TextStyle } from "./textstyle";
export var NestingLevelBulletAlignmentEnum;
(function (NestingLevelBulletAlignmentEnum) {
    NestingLevelBulletAlignmentEnum["BulletAlignmentUnspecified"] = "BULLET_ALIGNMENT_UNSPECIFIED";
    NestingLevelBulletAlignmentEnum["Start"] = "START";
    NestingLevelBulletAlignmentEnum["Center"] = "CENTER";
    NestingLevelBulletAlignmentEnum["End"] = "END";
})(NestingLevelBulletAlignmentEnum || (NestingLevelBulletAlignmentEnum = {}));
export var NestingLevelGlyphTypeEnum;
(function (NestingLevelGlyphTypeEnum) {
    NestingLevelGlyphTypeEnum["GlyphTypeUnspecified"] = "GLYPH_TYPE_UNSPECIFIED";
    NestingLevelGlyphTypeEnum["None"] = "NONE";
    NestingLevelGlyphTypeEnum["Decimal"] = "DECIMAL";
    NestingLevelGlyphTypeEnum["ZeroDecimal"] = "ZERO_DECIMAL";
    NestingLevelGlyphTypeEnum["UpperAlpha"] = "UPPER_ALPHA";
    NestingLevelGlyphTypeEnum["Alpha"] = "ALPHA";
    NestingLevelGlyphTypeEnum["UpperRoman"] = "UPPER_ROMAN";
    NestingLevelGlyphTypeEnum["Roman"] = "ROMAN";
})(NestingLevelGlyphTypeEnum || (NestingLevelGlyphTypeEnum = {}));
// NestingLevel
/**
 * Contains properties describing the look and feel of a list bullet at a given level of nesting.
**/
var NestingLevel = /** @class */ (function (_super) {
    __extends(NestingLevel, _super);
    function NestingLevel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bulletAlignment" }),
        __metadata("design:type", String)
    ], NestingLevel.prototype, "bulletAlignment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=glyphFormat" }),
        __metadata("design:type", String)
    ], NestingLevel.prototype, "glyphFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=glyphSymbol" }),
        __metadata("design:type", String)
    ], NestingLevel.prototype, "glyphSymbol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=glyphType" }),
        __metadata("design:type", String)
    ], NestingLevel.prototype, "glyphType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indentFirstLine" }),
        __metadata("design:type", Dimension)
    ], NestingLevel.prototype, "indentFirstLine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indentStart" }),
        __metadata("design:type", Dimension)
    ], NestingLevel.prototype, "indentStart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startNumber" }),
        __metadata("design:type", Number)
    ], NestingLevel.prototype, "startNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textStyle" }),
        __metadata("design:type", TextStyle)
    ], NestingLevel.prototype, "textStyle", void 0);
    return NestingLevel;
}(SpeakeasyBase));
export { NestingLevel };
