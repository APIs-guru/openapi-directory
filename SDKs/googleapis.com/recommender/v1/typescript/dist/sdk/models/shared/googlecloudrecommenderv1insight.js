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
import { GoogleCloudRecommenderV1InsightRecommendationReference } from "./googlecloudrecommenderv1insightrecommendationreference";
import { GoogleCloudRecommenderV1InsightStateInfo } from "./googlecloudrecommenderv1insightstateinfo";
export var GoogleCloudRecommenderV1InsightCategoryEnum;
(function (GoogleCloudRecommenderV1InsightCategoryEnum) {
    GoogleCloudRecommenderV1InsightCategoryEnum["CategoryUnspecified"] = "CATEGORY_UNSPECIFIED";
    GoogleCloudRecommenderV1InsightCategoryEnum["Cost"] = "COST";
    GoogleCloudRecommenderV1InsightCategoryEnum["Security"] = "SECURITY";
    GoogleCloudRecommenderV1InsightCategoryEnum["Performance"] = "PERFORMANCE";
    GoogleCloudRecommenderV1InsightCategoryEnum["Manageability"] = "MANAGEABILITY";
    GoogleCloudRecommenderV1InsightCategoryEnum["Sustainability"] = "SUSTAINABILITY";
    GoogleCloudRecommenderV1InsightCategoryEnum["Reliability"] = "RELIABILITY";
})(GoogleCloudRecommenderV1InsightCategoryEnum || (GoogleCloudRecommenderV1InsightCategoryEnum = {}));
export var GoogleCloudRecommenderV1InsightSeverityEnum;
(function (GoogleCloudRecommenderV1InsightSeverityEnum) {
    GoogleCloudRecommenderV1InsightSeverityEnum["SeverityUnspecified"] = "SEVERITY_UNSPECIFIED";
    GoogleCloudRecommenderV1InsightSeverityEnum["Low"] = "LOW";
    GoogleCloudRecommenderV1InsightSeverityEnum["Medium"] = "MEDIUM";
    GoogleCloudRecommenderV1InsightSeverityEnum["High"] = "HIGH";
    GoogleCloudRecommenderV1InsightSeverityEnum["Critical"] = "CRITICAL";
})(GoogleCloudRecommenderV1InsightSeverityEnum || (GoogleCloudRecommenderV1InsightSeverityEnum = {}));
// GoogleCloudRecommenderV1Insight
/**
 * An insight along with the information used to derive the insight. The insight may have associated recommendations as well.
**/
var GoogleCloudRecommenderV1Insight = /** @class */ (function (_super) {
    __extends(GoogleCloudRecommenderV1Insight, _super);
    function GoogleCloudRecommenderV1Insight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=associatedRecommendations", elemType: GoogleCloudRecommenderV1InsightRecommendationReference }),
        __metadata("design:type", Array)
    ], GoogleCloudRecommenderV1Insight.prototype, "associatedRecommendations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommenderV1Insight.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", Map)
    ], GoogleCloudRecommenderV1Insight.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommenderV1Insight.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommenderV1Insight.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insightSubtype" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommenderV1Insight.prototype, "insightSubtype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastRefreshTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommenderV1Insight.prototype, "lastRefreshTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommenderV1Insight.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=observationPeriod" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommenderV1Insight.prototype, "observationPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=severity" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommenderV1Insight.prototype, "severity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stateInfo" }),
        __metadata("design:type", GoogleCloudRecommenderV1InsightStateInfo)
    ], GoogleCloudRecommenderV1Insight.prototype, "stateInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetResources" }),
        __metadata("design:type", Array)
    ], GoogleCloudRecommenderV1Insight.prototype, "targetResources", void 0);
    return GoogleCloudRecommenderV1Insight;
}(SpeakeasyBase));
export { GoogleCloudRecommenderV1Insight };
