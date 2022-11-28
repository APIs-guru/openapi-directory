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
import { GoogleCloudRecommenderV1beta1Impact } from "./googlecloudrecommenderv1beta1impact";
import { GoogleCloudRecommenderV1beta1RecommendationInsightReference } from "./googlecloudrecommenderv1beta1recommendationinsightreference";
import { GoogleCloudRecommenderV1beta1RecommendationContent } from "./googlecloudrecommenderv1beta1recommendationcontent";
import { GoogleCloudRecommenderV1beta1RecommendationStateInfo } from "./googlecloudrecommenderv1beta1recommendationstateinfo";
export var GoogleCloudRecommenderV1beta1RecommendationPriorityEnum;
(function (GoogleCloudRecommenderV1beta1RecommendationPriorityEnum) {
    GoogleCloudRecommenderV1beta1RecommendationPriorityEnum["PriorityUnspecified"] = "PRIORITY_UNSPECIFIED";
    GoogleCloudRecommenderV1beta1RecommendationPriorityEnum["P4"] = "P4";
    GoogleCloudRecommenderV1beta1RecommendationPriorityEnum["P3"] = "P3";
    GoogleCloudRecommenderV1beta1RecommendationPriorityEnum["P2"] = "P2";
    GoogleCloudRecommenderV1beta1RecommendationPriorityEnum["P1"] = "P1";
})(GoogleCloudRecommenderV1beta1RecommendationPriorityEnum || (GoogleCloudRecommenderV1beta1RecommendationPriorityEnum = {}));
// GoogleCloudRecommenderV1beta1Recommendation
/**
 * A recommendation along with a suggested action. E.g., a rightsizing recommendation for an underutilized VM, IAM role recommendations, etc
**/
var GoogleCloudRecommenderV1beta1Recommendation = /** @class */ (function (_super) {
    __extends(GoogleCloudRecommenderV1beta1Recommendation, _super);
    function GoogleCloudRecommenderV1beta1Recommendation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalImpact", elemType: GoogleCloudRecommenderV1beta1Impact }),
        __metadata("design:type", Array)
    ], GoogleCloudRecommenderV1beta1Recommendation.prototype, "additionalImpact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=associatedInsights", elemType: GoogleCloudRecommenderV1beta1RecommendationInsightReference }),
        __metadata("design:type", Array)
    ], GoogleCloudRecommenderV1beta1Recommendation.prototype, "associatedInsights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", GoogleCloudRecommenderV1beta1RecommendationContent)
    ], GoogleCloudRecommenderV1beta1Recommendation.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommenderV1beta1Recommendation.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommenderV1beta1Recommendation.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastRefreshTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommenderV1beta1Recommendation.prototype, "lastRefreshTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommenderV1beta1Recommendation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryImpact" }),
        __metadata("design:type", GoogleCloudRecommenderV1beta1Impact)
    ], GoogleCloudRecommenderV1beta1Recommendation.prototype, "primaryImpact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommenderV1beta1Recommendation.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommenderSubtype" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommenderV1beta1Recommendation.prototype, "recommenderSubtype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stateInfo" }),
        __metadata("design:type", GoogleCloudRecommenderV1beta1RecommendationStateInfo)
    ], GoogleCloudRecommenderV1beta1Recommendation.prototype, "stateInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=xorGroupId" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommenderV1beta1Recommendation.prototype, "xorGroupId", void 0);
    return GoogleCloudRecommenderV1beta1Recommendation;
}(SpeakeasyBase));
export { GoogleCloudRecommenderV1beta1Recommendation };
