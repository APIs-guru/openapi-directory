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
import { TagSetting } from "./tagsetting";
export var SiteSettingsVpaidAdapterChoiceTemplateEnum;
(function (SiteSettingsVpaidAdapterChoiceTemplateEnum) {
    SiteSettingsVpaidAdapterChoiceTemplateEnum["Default"] = "DEFAULT";
    SiteSettingsVpaidAdapterChoiceTemplateEnum["Flash"] = "FLASH";
    SiteSettingsVpaidAdapterChoiceTemplateEnum["Html5"] = "HTML5";
    SiteSettingsVpaidAdapterChoiceTemplateEnum["Both"] = "BOTH";
})(SiteSettingsVpaidAdapterChoiceTemplateEnum || (SiteSettingsVpaidAdapterChoiceTemplateEnum = {}));
// SiteSettings
/**
 * Site Settings
**/
var SiteSettings = /** @class */ (function (_super) {
    __extends(SiteSettings, _super);
    function SiteSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activeViewOptOut" }),
        __metadata("design:type", Boolean)
    ], SiteSettings.prototype, "activeViewOptOut", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adBlockingOptOut" }),
        __metadata("design:type", Boolean)
    ], SiteSettings.prototype, "adBlockingOptOut", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disableNewCookie" }),
        __metadata("design:type", Boolean)
    ], SiteSettings.prototype, "disableNewCookie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagSetting" }),
        __metadata("design:type", TagSetting)
    ], SiteSettings.prototype, "tagSetting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoActiveViewOptOutTemplate" }),
        __metadata("design:type", Boolean)
    ], SiteSettings.prototype, "videoActiveViewOptOutTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vpaidAdapterChoiceTemplate" }),
        __metadata("design:type", String)
    ], SiteSettings.prototype, "vpaidAdapterChoiceTemplate", void 0);
    return SiteSettings;
}(SpeakeasyBase));
export { SiteSettings };
