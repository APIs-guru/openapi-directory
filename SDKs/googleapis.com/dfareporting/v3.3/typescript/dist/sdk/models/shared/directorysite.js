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
import { DimensionValue } from "./dimensionvalue";
import { DirectorySiteSettings } from "./directorysitesettings";
export var DirectorySiteInpageTagFormatsEnum;
(function (DirectorySiteInpageTagFormatsEnum) {
    DirectorySiteInpageTagFormatsEnum["Standard"] = "STANDARD";
    DirectorySiteInpageTagFormatsEnum["IframeJavascriptInpage"] = "IFRAME_JAVASCRIPT_INPAGE";
    DirectorySiteInpageTagFormatsEnum["InternalRedirectInpage"] = "INTERNAL_REDIRECT_INPAGE";
    DirectorySiteInpageTagFormatsEnum["JavascriptInpage"] = "JAVASCRIPT_INPAGE";
})(DirectorySiteInpageTagFormatsEnum || (DirectorySiteInpageTagFormatsEnum = {}));
export var DirectorySiteInterstitialTagFormatsEnum;
(function (DirectorySiteInterstitialTagFormatsEnum) {
    DirectorySiteInterstitialTagFormatsEnum["IframeJavascriptInterstitial"] = "IFRAME_JAVASCRIPT_INTERSTITIAL";
    DirectorySiteInterstitialTagFormatsEnum["InternalRedirectInterstitial"] = "INTERNAL_REDIRECT_INTERSTITIAL";
    DirectorySiteInterstitialTagFormatsEnum["JavascriptInterstitial"] = "JAVASCRIPT_INTERSTITIAL";
})(DirectorySiteInterstitialTagFormatsEnum || (DirectorySiteInterstitialTagFormatsEnum = {}));
// DirectorySite
/**
 * DirectorySites contains properties of a website from the Site Directory. Sites need to be added to an account via the Sites resource before they can be assigned to a placement.
**/
var DirectorySite = /** @class */ (function (_super) {
    __extends(DirectorySite, _super);
    function DirectorySite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], DirectorySite.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], DirectorySite.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idDimensionValue" }),
        __metadata("design:type", DimensionValue)
    ], DirectorySite.prototype, "idDimensionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inpageTagFormats" }),
        __metadata("design:type", Array)
    ], DirectorySite.prototype, "inpageTagFormats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interstitialTagFormats" }),
        __metadata("design:type", Array)
    ], DirectorySite.prototype, "interstitialTagFormats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], DirectorySite.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DirectorySite.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=settings" }),
        __metadata("design:type", DirectorySiteSettings)
    ], DirectorySite.prototype, "settings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], DirectorySite.prototype, "url", void 0);
    return DirectorySite;
}(SpeakeasyBase));
export { DirectorySite };
