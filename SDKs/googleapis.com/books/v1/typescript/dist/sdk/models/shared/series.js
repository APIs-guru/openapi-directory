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
var SeriesSeriesSeriesSubscriptionReleaseInfoCurrentReleaseInfo = /** @class */ (function (_super) {
    __extends(SeriesSeriesSeriesSubscriptionReleaseInfoCurrentReleaseInfo, _super);
    function SeriesSeriesSeriesSubscriptionReleaseInfoCurrentReleaseInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amountInMicros" }),
        __metadata("design:type", Number)
    ], SeriesSeriesSeriesSubscriptionReleaseInfoCurrentReleaseInfo.prototype, "amountInMicros", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], SeriesSeriesSeriesSubscriptionReleaseInfoCurrentReleaseInfo.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releaseNumber" }),
        __metadata("design:type", String)
    ], SeriesSeriesSeriesSubscriptionReleaseInfoCurrentReleaseInfo.prototype, "releaseNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releaseTime" }),
        __metadata("design:type", String)
    ], SeriesSeriesSeriesSubscriptionReleaseInfoCurrentReleaseInfo.prototype, "releaseTime", void 0);
    return SeriesSeriesSeriesSubscriptionReleaseInfoCurrentReleaseInfo;
}(SpeakeasyBase));
export { SeriesSeriesSeriesSubscriptionReleaseInfoCurrentReleaseInfo };
var SeriesSeriesSeriesSubscriptionReleaseInfoNextReleaseInfo = /** @class */ (function (_super) {
    __extends(SeriesSeriesSeriesSubscriptionReleaseInfoNextReleaseInfo, _super);
    function SeriesSeriesSeriesSubscriptionReleaseInfoNextReleaseInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amountInMicros" }),
        __metadata("design:type", Number)
    ], SeriesSeriesSeriesSubscriptionReleaseInfoNextReleaseInfo.prototype, "amountInMicros", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], SeriesSeriesSeriesSubscriptionReleaseInfoNextReleaseInfo.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releaseNumber" }),
        __metadata("design:type", String)
    ], SeriesSeriesSeriesSubscriptionReleaseInfoNextReleaseInfo.prototype, "releaseNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releaseTime" }),
        __metadata("design:type", String)
    ], SeriesSeriesSeriesSubscriptionReleaseInfoNextReleaseInfo.prototype, "releaseTime", void 0);
    return SeriesSeriesSeriesSubscriptionReleaseInfoNextReleaseInfo;
}(SpeakeasyBase));
export { SeriesSeriesSeriesSubscriptionReleaseInfoNextReleaseInfo };
var SeriesSeriesSeriesSubscriptionReleaseInfo = /** @class */ (function (_super) {
    __extends(SeriesSeriesSeriesSubscriptionReleaseInfo, _super);
    function SeriesSeriesSeriesSubscriptionReleaseInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancelTime" }),
        __metadata("design:type", String)
    ], SeriesSeriesSeriesSubscriptionReleaseInfo.prototype, "cancelTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentReleaseInfo" }),
        __metadata("design:type", SeriesSeriesSeriesSubscriptionReleaseInfoCurrentReleaseInfo)
    ], SeriesSeriesSeriesSubscriptionReleaseInfo.prototype, "currentReleaseInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextReleaseInfo" }),
        __metadata("design:type", SeriesSeriesSeriesSubscriptionReleaseInfoNextReleaseInfo)
    ], SeriesSeriesSeriesSubscriptionReleaseInfo.prototype, "nextReleaseInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seriesSubscriptionType" }),
        __metadata("design:type", String)
    ], SeriesSeriesSeriesSubscriptionReleaseInfo.prototype, "seriesSubscriptionType", void 0);
    return SeriesSeriesSeriesSubscriptionReleaseInfo;
}(SpeakeasyBase));
export { SeriesSeriesSeriesSubscriptionReleaseInfo };
var SeriesSeries = /** @class */ (function (_super) {
    __extends(SeriesSeries, _super);
    function SeriesSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bannerImageUrl" }),
        __metadata("design:type", String)
    ], SeriesSeries.prototype, "bannerImageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eligibleForSubscription" }),
        __metadata("design:type", Boolean)
    ], SeriesSeries.prototype, "eligibleForSubscription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageUrl" }),
        __metadata("design:type", String)
    ], SeriesSeries.prototype, "imageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isComplete" }),
        __metadata("design:type", Boolean)
    ], SeriesSeries.prototype, "isComplete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seriesFormatType" }),
        __metadata("design:type", String)
    ], SeriesSeries.prototype, "seriesFormatType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seriesId" }),
        __metadata("design:type", String)
    ], SeriesSeries.prototype, "seriesId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seriesSubscriptionReleaseInfo" }),
        __metadata("design:type", SeriesSeriesSeriesSubscriptionReleaseInfo)
    ], SeriesSeries.prototype, "seriesSubscriptionReleaseInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seriesType" }),
        __metadata("design:type", String)
    ], SeriesSeries.prototype, "seriesType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptionId" }),
        __metadata("design:type", String)
    ], SeriesSeries.prototype, "subscriptionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], SeriesSeries.prototype, "title", void 0);
    return SeriesSeries;
}(SpeakeasyBase));
export { SeriesSeries };
var Series = /** @class */ (function (_super) {
    __extends(Series, _super);
    function Series() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Series.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=series", elemType: SeriesSeries }),
        __metadata("design:type", Array)
    ], Series.prototype, "series", void 0);
    return Series;
}(SpeakeasyBase));
export { Series };
