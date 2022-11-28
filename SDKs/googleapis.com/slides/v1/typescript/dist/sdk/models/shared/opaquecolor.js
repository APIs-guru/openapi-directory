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
export var OpaqueColorThemeColorEnum;
(function (OpaqueColorThemeColorEnum) {
    OpaqueColorThemeColorEnum["ThemeColorTypeUnspecified"] = "THEME_COLOR_TYPE_UNSPECIFIED";
    OpaqueColorThemeColorEnum["Dark1"] = "DARK1";
    OpaqueColorThemeColorEnum["Light1"] = "LIGHT1";
    OpaqueColorThemeColorEnum["Dark2"] = "DARK2";
    OpaqueColorThemeColorEnum["Light2"] = "LIGHT2";
    OpaqueColorThemeColorEnum["Accent1"] = "ACCENT1";
    OpaqueColorThemeColorEnum["Accent2"] = "ACCENT2";
    OpaqueColorThemeColorEnum["Accent3"] = "ACCENT3";
    OpaqueColorThemeColorEnum["Accent4"] = "ACCENT4";
    OpaqueColorThemeColorEnum["Accent5"] = "ACCENT5";
    OpaqueColorThemeColorEnum["Accent6"] = "ACCENT6";
    OpaqueColorThemeColorEnum["Hyperlink"] = "HYPERLINK";
    OpaqueColorThemeColorEnum["FollowedHyperlink"] = "FOLLOWED_HYPERLINK";
    OpaqueColorThemeColorEnum["Text1"] = "TEXT1";
    OpaqueColorThemeColorEnum["Background1"] = "BACKGROUND1";
    OpaqueColorThemeColorEnum["Text2"] = "TEXT2";
    OpaqueColorThemeColorEnum["Background2"] = "BACKGROUND2";
})(OpaqueColorThemeColorEnum || (OpaqueColorThemeColorEnum = {}));
// OpaqueColor
/**
 * A themeable solid color value.
**/
var OpaqueColor = /** @class */ (function (_super) {
    __extends(OpaqueColor, _super);
    function OpaqueColor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rgbColor" }),
        __metadata("design:type", RgbColor)
    ], OpaqueColor.prototype, "rgbColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=themeColor" }),
        __metadata("design:type", String)
    ], OpaqueColor.prototype, "themeColor", void 0);
    return OpaqueColor;
}(SpeakeasyBase));
export { OpaqueColor };
