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
import { GoogleCloudRecommenderV1Impact } from "./googlecloudrecommenderv1impact";
import { GoogleCloudRecommenderV1RecommendationInsightReference } from "./googlecloudrecommenderv1recommendationinsightreference";
import { GoogleCloudRecommenderV1RecommendationContent } from "./googlecloudrecommenderv1recommendationcontent";
import { GoogleCloudRecommenderV1RecommendationStateInfo } from "./googlecloudrecommenderv1recommendationstateinfo";
export var GoogleCloudRecommenderV1RecommendationPriorityEnum;
(function (GoogleCloudRecommenderV1RecommendationPriorityEnum) {
    GoogleCloudRecommenderV1RecommendationPriorityEnum["PriorityUnspecified"] = "PRIORITY_UNSPECIFIED";
    GoogleCloudRecommenderV1RecommendationPriorityEnum["P4"] = "P4";
    GoogleCloudRecommenderV1RecommendationPriorityEnum["P3"] = "P3";
    GoogleCloudRecommenderV1RecommendationPriorityEnum["P2"] = "P2";
    GoogleCloudRecommenderV1RecommendationPriorityEnum["P1"] = "P1";
})(GoogleCloudRecommenderV1RecommendationPriorityEnum || (GoogleCloudRecommenderV1RecommendationPriorityEnum = {}));
// GoogleCloudRecommenderV1Recommendation
/**
 * A recommendation along with a suggested action. E.g., a rightsizing recommendation for an underutilized VM, IAM role recommendations, etc
**/
var GoogleCloudRecommenderV1Recommendation = /** @class */ (function (_super) {
    __extends(GoogleCloudRecommenderV1Recommendation, _super);
    function GoogleCloudRecommenderV1Recommendation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalImpact", elemType: GoogleCloudRecommenderV1Impact }),
        __metadata("design:type", Array)
    ], GoogleCloudRecommenderV1Recommendation.prototype, "additionalImpact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=associatedInsights", elemType: GoogleCloudRecommenderV1RecommendationInsightReference }),
        __metadata("design:type", Array)
    ], GoogleCloudRecommenderV1Recommendation.prototype, "associatedInsights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", GoogleCloudRecommenderV1RecommendationContent)
    ], GoogleCloudRecommenderV1Recommendation.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommenderV1Recommendation.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommenderV1Recommendation.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastRefreshTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommenderV1Recommendation.prototype, "lastRefreshTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommenderV1Recommendation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryImpact" }),
        __metadata("design:type", GoogleCloudRecommenderV1Impact)
    ], GoogleCloudRecommenderV1Recommendation.prototype, "primaryImpact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommenderV1Recommendation.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommenderSubtype" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommenderV1Recommendation.prototype, "recommenderSubtype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stateInfo" }),
        __metadata("design:type", GoogleCloudRecommenderV1RecommendationStateInfo)
    ], GoogleCloudRecommenderV1Recommendation.prototype, "stateInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=xorGroupId" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommenderV1Recommendation.prototype, "xorGroupId", void 0);
    return GoogleCloudRecommenderV1Recommendation;
}(SpeakeasyBase));
export { GoogleCloudRecommenderV1Recommendation };
