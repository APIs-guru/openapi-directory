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
import { GoogleCloudRecommendationengineV1beta1UserEvent } from "./googlecloudrecommendationenginev1beta1userevent";
// GoogleCloudRecommendationengineV1beta1PredictRequest
/**
 * Request message for Predict method. Full resource name of the format: `{name=projects/* /locations/global/catalogs/default_catalog/eventStores/default_event_store/placements/*}` The id of the recommendation engine placement. This id is used to identify the set of models that will be used to make the prediction. We currently support three placements with the following IDs by default: // * `shopping_cart`: Predicts items frequently bought together with one or more catalog items in the same shopping session. Commonly displayed after `add-to-cart` event, on product detail pages, or on the shopping cart page. * `home_page`: Predicts the next product that a user will most likely engage with or purchase based on the shopping or viewing history of the specified `userId` or `visitorId`. For example - Recommendations for you. * `product_detail`: Predicts the next product that a user will most likely engage with or purchase. The prediction is based on the shopping or viewing history of the specified `userId` or `visitorId` and its relevance to a specified `CatalogItem`. Typically used on product detail pages. For example - More items like this. * `recently_viewed_default`: Returns up to 75 items recently viewed by the specified `userId` or `visitorId`, most recent ones first. Returns nothing if neither of them has viewed any items yet. For example - Recently viewed. The full list of available placements can be seen at https://console.cloud.google.com/recommendation/catalogs/default_catalog/placements
**/
var GoogleCloudRecommendationengineV1beta1PredictRequest = /** @class */ (function (_super) {
    __extends(GoogleCloudRecommendationengineV1beta1PredictRequest, _super);
    function GoogleCloudRecommendationengineV1beta1PredictRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dryRun" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudRecommendationengineV1beta1PredictRequest.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommendationengineV1beta1PredictRequest.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudRecommendationengineV1beta1PredictRequest.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageSize" }),
        __metadata("design:type", Number)
    ], GoogleCloudRecommendationengineV1beta1PredictRequest.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageToken" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommendationengineV1beta1PredictRequest.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=params" }),
        __metadata("design:type", Map)
    ], GoogleCloudRecommendationengineV1beta1PredictRequest.prototype, "params", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userEvent" }),
        __metadata("design:type", GoogleCloudRecommendationengineV1beta1UserEvent)
    ], GoogleCloudRecommendationengineV1beta1PredictRequest.prototype, "userEvent", void 0);
    return GoogleCloudRecommendationengineV1beta1PredictRequest;
}(SpeakeasyBase));
export { GoogleCloudRecommendationengineV1beta1PredictRequest };
