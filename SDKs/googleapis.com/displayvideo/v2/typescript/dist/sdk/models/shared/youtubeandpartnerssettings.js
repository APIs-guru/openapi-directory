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
import { YoutubeAndPartnersBiddingStrategy } from "./youtubeandpartnersbiddingstrategy";
import { YoutubeAndPartnersInventorySourceConfig } from "./youtubeandpartnersinventorysourceconfig";
import { YoutubeAndPartnersThirdPartyMeasurementSettings } from "./youtubeandpartnersthirdpartymeasurementsettings";
import { FrequencyCap } from "./frequencycap";
export var YoutubeAndPartnersSettingsContentCategoryEnum;
(function (YoutubeAndPartnersSettingsContentCategoryEnum) {
    YoutubeAndPartnersSettingsContentCategoryEnum["YoutubeAndPartnersContentCategoryUnspecified"] = "YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_UNSPECIFIED";
    YoutubeAndPartnersSettingsContentCategoryEnum["YoutubeAndPartnersContentCategoryStandard"] = "YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_STANDARD";
    YoutubeAndPartnersSettingsContentCategoryEnum["YoutubeAndPartnersContentCategoryExpanded"] = "YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_EXPANDED";
    YoutubeAndPartnersSettingsContentCategoryEnum["YoutubeAndPartnersContentCategoryLimited"] = "YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_LIMITED";
})(YoutubeAndPartnersSettingsContentCategoryEnum || (YoutubeAndPartnersSettingsContentCategoryEnum = {}));
// YoutubeAndPartnersSettings
/**
 * Settings for YouTube and Partners line items.
**/
var YoutubeAndPartnersSettings = /** @class */ (function (_super) {
    __extends(YoutubeAndPartnersSettings, _super);
    function YoutubeAndPartnersSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=biddingStrategy" }),
        __metadata("design:type", YoutubeAndPartnersBiddingStrategy)
    ], YoutubeAndPartnersSettings.prototype, "biddingStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentCategory" }),
        __metadata("design:type", String)
    ], YoutubeAndPartnersSettings.prototype, "contentCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inventorySourceSettings" }),
        __metadata("design:type", YoutubeAndPartnersInventorySourceConfig)
    ], YoutubeAndPartnersSettings.prototype, "inventorySourceSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thirdPartyMeasurementSettings" }),
        __metadata("design:type", YoutubeAndPartnersThirdPartyMeasurementSettings)
    ], YoutubeAndPartnersSettings.prototype, "thirdPartyMeasurementSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=viewFrequencyCap" }),
        __metadata("design:type", FrequencyCap)
    ], YoutubeAndPartnersSettings.prototype, "viewFrequencyCap", void 0);
    return YoutubeAndPartnersSettings;
}(SpeakeasyBase));
export { YoutubeAndPartnersSettings };
