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
import { RgbColor } from "./rgbcolor";
export var ThemeColorPairTypeEnum;
(function (ThemeColorPairTypeEnum) {
    ThemeColorPairTypeEnum["ThemeColorTypeUnspecified"] = "THEME_COLOR_TYPE_UNSPECIFIED";
    ThemeColorPairTypeEnum["Dark1"] = "DARK1";
    ThemeColorPairTypeEnum["Light1"] = "LIGHT1";
    ThemeColorPairTypeEnum["Dark2"] = "DARK2";
    ThemeColorPairTypeEnum["Light2"] = "LIGHT2";
    ThemeColorPairTypeEnum["Accent1"] = "ACCENT1";
    ThemeColorPairTypeEnum["Accent2"] = "ACCENT2";
    ThemeColorPairTypeEnum["Accent3"] = "ACCENT3";
    ThemeColorPairTypeEnum["Accent4"] = "ACCENT4";
    ThemeColorPairTypeEnum["Accent5"] = "ACCENT5";
    ThemeColorPairTypeEnum["Accent6"] = "ACCENT6";
    ThemeColorPairTypeEnum["Hyperlink"] = "HYPERLINK";
    ThemeColorPairTypeEnum["FollowedHyperlink"] = "FOLLOWED_HYPERLINK";
    ThemeColorPairTypeEnum["Text1"] = "TEXT1";
    ThemeColorPairTypeEnum["Background1"] = "BACKGROUND1";
    ThemeColorPairTypeEnum["Text2"] = "TEXT2";
    ThemeColorPairTypeEnum["Background2"] = "BACKGROUND2";
})(ThemeColorPairTypeEnum || (ThemeColorPairTypeEnum = {}));
// ThemeColorPair
/**
 * A pair mapping a theme color type to the concrete color it represents.
**/
var ThemeColorPair = /** @class */ (function (_super) {
    __extends(ThemeColorPair, _super);
    function ThemeColorPair() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", RgbColor)
    ], ThemeColorPair.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ThemeColorPair.prototype, "type", void 0);
    return ThemeColorPair;
}(SpeakeasyBase));
export { ThemeColorPair };
