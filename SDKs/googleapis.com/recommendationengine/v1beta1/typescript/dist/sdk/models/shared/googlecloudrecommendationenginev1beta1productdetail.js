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
import { GoogleCloudRecommendationengineV1beta1FeatureMap } from "./googlecloudrecommendationenginev1beta1featuremap";
export var GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum;
(function (GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum) {
    GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum["StockStateUnspecified"] = "STOCK_STATE_UNSPECIFIED";
    GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum["InStock"] = "IN_STOCK";
    GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum["OutOfStock"] = "OUT_OF_STOCK";
    GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum["Preorder"] = "PREORDER";
    GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum["Backorder"] = "BACKORDER";
})(GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum || (GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum = {}));
// GoogleCloudRecommendationengineV1beta1ProductDetail
/**
 * Detailed product information associated with a user event.
**/
var GoogleCloudRecommendationengineV1beta1ProductDetail = /** @class */ (function (_super) {
    __extends(GoogleCloudRecommendationengineV1beta1ProductDetail, _super);
    function GoogleCloudRecommendationengineV1beta1ProductDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableQuantity" }),
        __metadata("design:type", Number)
    ], GoogleCloudRecommendationengineV1beta1ProductDetail.prototype, "availableQuantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommendationengineV1beta1ProductDetail.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayPrice" }),
        __metadata("design:type", Number)
    ], GoogleCloudRecommendationengineV1beta1ProductDetail.prototype, "displayPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommendationengineV1beta1ProductDetail.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemAttributes" }),
        __metadata("design:type", GoogleCloudRecommendationengineV1beta1FeatureMap)
    ], GoogleCloudRecommendationengineV1beta1ProductDetail.prototype, "itemAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originalPrice" }),
        __metadata("design:type", Number)
    ], GoogleCloudRecommendationengineV1beta1ProductDetail.prototype, "originalPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], GoogleCloudRecommendationengineV1beta1ProductDetail.prototype, "quantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stockState" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommendationengineV1beta1ProductDetail.prototype, "stockState", void 0);
    return GoogleCloudRecommendationengineV1beta1ProductDetail;
}(SpeakeasyBase));
export { GoogleCloudRecommendationengineV1beta1ProductDetail };
