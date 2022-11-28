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
import { GoogleCloudRecommendationengineV1beta1BigQuerySource } from "./googlecloudrecommendationenginev1beta1bigquerysource";
import { GoogleCloudRecommendationengineV1beta1CatalogInlineSource } from "./googlecloudrecommendationenginev1beta1cataloginlinesource";
import { GoogleCloudRecommendationengineV1beta1GcsSource } from "./googlecloudrecommendationenginev1beta1gcssource";
import { GoogleCloudRecommendationengineV1beta1UserEventInlineSource } from "./googlecloudrecommendationenginev1beta1usereventinlinesource";
// GoogleCloudRecommendationengineV1beta1InputConfig
/**
 * The input config source.
**/
var GoogleCloudRecommendationengineV1beta1InputConfig = /** @class */ (function (_super) {
    __extends(GoogleCloudRecommendationengineV1beta1InputConfig, _super);
    function GoogleCloudRecommendationengineV1beta1InputConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bigQuerySource" }),
        __metadata("design:type", GoogleCloudRecommendationengineV1beta1BigQuerySource)
    ], GoogleCloudRecommendationengineV1beta1InputConfig.prototype, "bigQuerySource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=catalogInlineSource" }),
        __metadata("design:type", GoogleCloudRecommendationengineV1beta1CatalogInlineSource)
    ], GoogleCloudRecommendationengineV1beta1InputConfig.prototype, "catalogInlineSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gcsSource" }),
        __metadata("design:type", GoogleCloudRecommendationengineV1beta1GcsSource)
    ], GoogleCloudRecommendationengineV1beta1InputConfig.prototype, "gcsSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userEventInlineSource" }),
        __metadata("design:type", GoogleCloudRecommendationengineV1beta1UserEventInlineSource)
    ], GoogleCloudRecommendationengineV1beta1InputConfig.prototype, "userEventInlineSource", void 0);
    return GoogleCloudRecommendationengineV1beta1InputConfig;
}(SpeakeasyBase));
export { GoogleCloudRecommendationengineV1beta1InputConfig };
