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
import { GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy } from "./googlecloudrecommendationenginev1beta1catalogitemcategoryhierarchy";
import { GoogleCloudRecommendationengineV1beta1FeatureMap } from "./googlecloudrecommendationenginev1beta1featuremap";
import { GoogleCloudRecommendationengineV1beta1ProductCatalogItem } from "./googlecloudrecommendationenginev1beta1productcatalogitem";
// GoogleCloudRecommendationengineV1beta1CatalogItem
/**
 * CatalogItem captures all metadata information of items to be recommended.
**/
var GoogleCloudRecommendationengineV1beta1CatalogItem = /** @class */ (function (_super) {
    __extends(GoogleCloudRecommendationengineV1beta1CatalogItem, _super);
    function GoogleCloudRecommendationengineV1beta1CatalogItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categoryHierarchies", elemType: GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy }),
        __metadata("design:type", Array)
    ], GoogleCloudRecommendationengineV1beta1CatalogItem.prototype, "categoryHierarchies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommendationengineV1beta1CatalogItem.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommendationengineV1beta1CatalogItem.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemAttributes" }),
        __metadata("design:type", GoogleCloudRecommendationengineV1beta1FeatureMap)
    ], GoogleCloudRecommendationengineV1beta1CatalogItem.prototype, "itemAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemGroupId" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommendationengineV1beta1CatalogItem.prototype, "itemGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommendationengineV1beta1CatalogItem.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productMetadata" }),
        __metadata("design:type", GoogleCloudRecommendationengineV1beta1ProductCatalogItem)
    ], GoogleCloudRecommendationengineV1beta1CatalogItem.prototype, "productMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], GoogleCloudRecommendationengineV1beta1CatalogItem.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommendationengineV1beta1CatalogItem.prototype, "title", void 0);
    return GoogleCloudRecommendationengineV1beta1CatalogItem;
}(SpeakeasyBase));
export { GoogleCloudRecommendationengineV1beta1CatalogItem };
