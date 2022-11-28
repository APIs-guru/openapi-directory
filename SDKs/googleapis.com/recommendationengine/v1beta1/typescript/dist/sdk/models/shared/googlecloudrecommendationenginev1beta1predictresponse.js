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
import { GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult } from "./googlecloudrecommendationenginev1beta1predictresponsepredictionresult";
// GoogleCloudRecommendationengineV1beta1PredictResponse
/**
 * Response message for predict method.
**/
var GoogleCloudRecommendationengineV1beta1PredictResponse = /** @class */ (function (_super) {
    __extends(GoogleCloudRecommendationengineV1beta1PredictResponse, _super);
    function GoogleCloudRecommendationengineV1beta1PredictResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dryRun" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudRecommendationengineV1beta1PredictResponse.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemsMissingInCatalog" }),
        __metadata("design:type", Array)
    ], GoogleCloudRecommendationengineV1beta1PredictResponse.prototype, "itemsMissingInCatalog", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], GoogleCloudRecommendationengineV1beta1PredictResponse.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextPageToken" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommendationengineV1beta1PredictResponse.prototype, "nextPageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommendationToken" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommendationengineV1beta1PredictResponse.prototype, "recommendationToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult }),
        __metadata("design:type", Array)
    ], GoogleCloudRecommendationengineV1beta1PredictResponse.prototype, "results", void 0);
    return GoogleCloudRecommendationengineV1beta1PredictResponse;
}(SpeakeasyBase));
export { GoogleCloudRecommendationengineV1beta1PredictResponse };
