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
import { BillingRateTieredRate } from "./billingratetieredrate";
export var BillingRateTypeEnum;
(function (BillingRateTypeEnum) {
    BillingRateTypeEnum["AdServing"] = "AD_SERVING";
    BillingRateTypeEnum["Clicks"] = "CLICKS";
    BillingRateTypeEnum["MinimumService"] = "MINIMUM_SERVICE";
    BillingRateTypeEnum["PathToConversion"] = "PATH_TO_CONVERSION";
    BillingRateTypeEnum["RichMediaInpage"] = "RICH_MEDIA_INPAGE";
    BillingRateTypeEnum["RichMediaExpanding"] = "RICH_MEDIA_EXPANDING";
    BillingRateTypeEnum["RichMediaFloating"] = "RICH_MEDIA_FLOATING";
    BillingRateTypeEnum["RichMediaVideo"] = "RICH_MEDIA_VIDEO";
    BillingRateTypeEnum["RichMediaTeaser"] = "RICH_MEDIA_TEASER";
    BillingRateTypeEnum["RichMediaVpaid"] = "RICH_MEDIA_VPAID";
    BillingRateTypeEnum["InstreamVideo"] = "INSTREAM_VIDEO";
    BillingRateTypeEnum["Pixel"] = "PIXEL";
    BillingRateTypeEnum["Tracking"] = "TRACKING";
    BillingRateTypeEnum["TraffickingFeature"] = "TRAFFICKING_FEATURE";
    BillingRateTypeEnum["CustomReports"] = "CUSTOM_REPORTS";
    BillingRateTypeEnum["ExposureToConversion"] = "EXPOSURE_TO_CONVERSION";
    BillingRateTypeEnum["DataTransfer"] = "DATA_TRANSFER";
    BillingRateTypeEnum["DataTransferSetup"] = "DATA_TRANSFER_SETUP";
    BillingRateTypeEnum["Startup"] = "STARTUP";
    BillingRateTypeEnum["StatementOfWork"] = "STATEMENT_OF_WORK";
    BillingRateTypeEnum["ProvidedList"] = "PROVIDED_LIST";
    BillingRateTypeEnum["ProvidedListSetup"] = "PROVIDED_LIST_SETUP";
    BillingRateTypeEnum["EnhancedFormats"] = "ENHANCED_FORMATS";
    BillingRateTypeEnum["TrackingAdImpressions"] = "TRACKING_AD_IMPRESSIONS";
    BillingRateTypeEnum["TrackingAdClicks"] = "TRACKING_AD_CLICKS";
    BillingRateTypeEnum["NielsenDigitalAdRatingsFee"] = "NIELSEN_DIGITAL_AD_RATINGS_FEE";
    BillingRateTypeEnum["InstreamVideoRedirect"] = "INSTREAM_VIDEO_REDIRECT";
    BillingRateTypeEnum["InstreamVideoVpaid"] = "INSTREAM_VIDEO_VPAID";
    BillingRateTypeEnum["DisplayAdServing"] = "DISPLAY_AD_SERVING";
    BillingRateTypeEnum["VideoAdServing"] = "VIDEO_AD_SERVING";
    BillingRateTypeEnum["AudioAdServing"] = "AUDIO_AD_SERVING";
    BillingRateTypeEnum["AdvancedDisplayAdServing"] = "ADVANCED_DISPLAY_AD_SERVING";
})(BillingRateTypeEnum || (BillingRateTypeEnum = {}));
export var BillingRateUnitOfMeasureEnum;
(function (BillingRateUnitOfMeasureEnum) {
    BillingRateUnitOfMeasureEnum["Cpm"] = "CPM";
    BillingRateUnitOfMeasureEnum["Cpc"] = "CPC";
    BillingRateUnitOfMeasureEnum["Ea"] = "EA";
    BillingRateUnitOfMeasureEnum["P2C"] = "P2C";
})(BillingRateUnitOfMeasureEnum || (BillingRateUnitOfMeasureEnum = {}));
var BillingRate = /** @class */ (function (_super) {
    __extends(BillingRate, _super);
    function BillingRate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], BillingRate.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endDate" }),
        __metadata("design:type", String)
    ], BillingRate.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], BillingRate.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BillingRate.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rateInMicros" }),
        __metadata("design:type", String)
    ], BillingRate.prototype, "rateInMicros", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startDate" }),
        __metadata("design:type", String)
    ], BillingRate.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tieredRates", elemType: BillingRateTieredRate }),
        __metadata("design:type", Array)
    ], BillingRate.prototype, "tieredRates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], BillingRate.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unitOfMeasure" }),
        __metadata("design:type", String)
    ], BillingRate.prototype, "unitOfMeasure", void 0);
    return BillingRate;
}(SpeakeasyBase));
export { BillingRate };
