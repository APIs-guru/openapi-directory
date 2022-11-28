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
import { GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries } from "./googlecloudcontactcenterinsightsv1calculatestatsresponsetimeseries";
import { GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats } from "./googlecloudcontactcenterinsightsv1issuemodellabelstatsissuestats";
// GoogleCloudContactcenterinsightsV1CalculateStatsResponse
/**
 * The response for calculating conversation statistics.
**/
var GoogleCloudContactcenterinsightsV1CalculateStatsResponse = /** @class */ (function (_super) {
    __extends(GoogleCloudContactcenterinsightsV1CalculateStatsResponse, _super);
    function GoogleCloudContactcenterinsightsV1CalculateStatsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=averageDuration" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1CalculateStatsResponse.prototype, "averageDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=averageTurnCount" }),
        __metadata("design:type", Number)
    ], GoogleCloudContactcenterinsightsV1CalculateStatsResponse.prototype, "averageTurnCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversationCount" }),
        __metadata("design:type", Number)
    ], GoogleCloudContactcenterinsightsV1CalculateStatsResponse.prototype, "conversationCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversationCountTimeSeries" }),
        __metadata("design:type", GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries)
    ], GoogleCloudContactcenterinsightsV1CalculateStatsResponse.prototype, "conversationCountTimeSeries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customHighlighterMatches" }),
        __metadata("design:type", Map)
    ], GoogleCloudContactcenterinsightsV1CalculateStatsResponse.prototype, "customHighlighterMatches", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issueMatches" }),
        __metadata("design:type", Map)
    ], GoogleCloudContactcenterinsightsV1CalculateStatsResponse.prototype, "issueMatches", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issueMatchesStats", elemType: GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats }),
        __metadata("design:type", Map)
    ], GoogleCloudContactcenterinsightsV1CalculateStatsResponse.prototype, "issueMatchesStats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=smartHighlighterMatches" }),
        __metadata("design:type", Map)
    ], GoogleCloudContactcenterinsightsV1CalculateStatsResponse.prototype, "smartHighlighterMatches", void 0);
    return GoogleCloudContactcenterinsightsV1CalculateStatsResponse;
}(SpeakeasyBase));
export { GoogleCloudContactcenterinsightsV1CalculateStatsResponse };
