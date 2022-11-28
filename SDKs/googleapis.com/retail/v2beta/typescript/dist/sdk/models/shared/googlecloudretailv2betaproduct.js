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
import { GoogleCloudRetailV2betaCustomAttribute } from "./googlecloudretailv2betacustomattribute";
import { GoogleCloudRetailV2betaAudience } from "./googlecloudretailv2betaaudience";
import { GoogleCloudRetailV2betaColorInfo } from "./googlecloudretailv2betacolorinfo";
import { GoogleCloudRetailV2betaFulfillmentInfo } from "./googlecloudretailv2betafulfillmentinfo";
import { GoogleCloudRetailV2betaImage } from "./googlecloudretailv2betaimage";
import { GoogleCloudRetailV2betaPriceInfo } from "./googlecloudretailv2betapriceinfo";
import { GoogleCloudRetailV2betaPromotion } from "./googlecloudretailv2betapromotion";
import { GoogleCloudRetailV2betaRating } from "./googlecloudretailv2betarating";
import { GoogleCloudRetailV2betaLocalInventory } from "./googlecloudretailv2betalocalinventory";
export var GoogleCloudRetailV2betaProductAvailabilityEnum;
(function (GoogleCloudRetailV2betaProductAvailabilityEnum) {
    GoogleCloudRetailV2betaProductAvailabilityEnum["AvailabilityUnspecified"] = "AVAILABILITY_UNSPECIFIED";
    GoogleCloudRetailV2betaProductAvailabilityEnum["InStock"] = "IN_STOCK";
    GoogleCloudRetailV2betaProductAvailabilityEnum["OutOfStock"] = "OUT_OF_STOCK";
    GoogleCloudRetailV2betaProductAvailabilityEnum["Preorder"] = "PREORDER";
    GoogleCloudRetailV2betaProductAvailabilityEnum["Backorder"] = "BACKORDER";
})(GoogleCloudRetailV2betaProductAvailabilityEnum || (GoogleCloudRetailV2betaProductAvailabilityEnum = {}));
export var GoogleCloudRetailV2betaProductTypeEnum;
(function (GoogleCloudRetailV2betaProductTypeEnum) {
    GoogleCloudRetailV2betaProductTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    GoogleCloudRetailV2betaProductTypeEnum["Primary"] = "PRIMARY";
    GoogleCloudRetailV2betaProductTypeEnum["Variant"] = "VARIANT";
    GoogleCloudRetailV2betaProductTypeEnum["Collection"] = "COLLECTION";
})(GoogleCloudRetailV2betaProductTypeEnum || (GoogleCloudRetailV2betaProductTypeEnum = {}));
// GoogleCloudRetailV2betaProductInput
/**
 * Product captures all metadata information of items to be recommended or searched.
**/
var GoogleCloudRetailV2betaProductInput = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2betaProductInput, _super);
    function GoogleCloudRetailV2betaProductInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudRetailV2betaCustomAttribute }),
        __metadata("design:type", Map)
    ], GoogleCloudRetailV2betaProductInput.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audience" }),
        __metadata("design:type", GoogleCloudRetailV2betaAudience)
    ], GoogleCloudRetailV2betaProductInput.prototype, "audience", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availability" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaProductInput.prototype, "availability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableQuantity" }),
        __metadata("design:type", Number)
    ], GoogleCloudRetailV2betaProductInput.prototype, "availableQuantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaProductInput.prototype, "availableTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brands" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaProductInput.prototype, "brands", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaProductInput.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collectionMemberIds" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaProductInput.prototype, "collectionMemberIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=colorInfo" }),
        __metadata("design:type", GoogleCloudRetailV2betaColorInfo)
    ], GoogleCloudRetailV2betaProductInput.prototype, "colorInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conditions" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaProductInput.prototype, "conditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaProductInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaProductInput.prototype, "expireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fulfillmentInfo", elemType: GoogleCloudRetailV2betaFulfillmentInfo }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaProductInput.prototype, "fulfillmentInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gtin" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaProductInput.prototype, "gtin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaProductInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=images", elemType: GoogleCloudRetailV2betaImage }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaProductInput.prototype, "images", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaProductInput.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=materials" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaProductInput.prototype, "materials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaProductInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=patterns" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaProductInput.prototype, "patterns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceInfo" }),
        __metadata("design:type", GoogleCloudRetailV2betaPriceInfo)
    ], GoogleCloudRetailV2betaProductInput.prototype, "priceInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryProductId" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaProductInput.prototype, "primaryProductId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotions", elemType: GoogleCloudRetailV2betaPromotion }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaProductInput.prototype, "promotions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publishTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaProductInput.prototype, "publishTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rating" }),
        __metadata("design:type", GoogleCloudRetailV2betaRating)
    ], GoogleCloudRetailV2betaProductInput.prototype, "rating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retrievableFields" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaProductInput.prototype, "retrievableFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sizes" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaProductInput.prototype, "sizes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaProductInput.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaProductInput.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ttl" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaProductInput.prototype, "ttl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaProductInput.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaProductInput.prototype, "uri", void 0);
    return GoogleCloudRetailV2betaProductInput;
}(SpeakeasyBase));
export { GoogleCloudRetailV2betaProductInput };
// GoogleCloudRetailV2betaProduct
/**
 * Product captures all metadata information of items to be recommended or searched.
**/
var GoogleCloudRetailV2betaProduct = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2betaProduct, _super);
    function GoogleCloudRetailV2betaProduct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudRetailV2betaCustomAttribute }),
        __metadata("design:type", Map)
    ], GoogleCloudRetailV2betaProduct.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audience" }),
        __metadata("design:type", GoogleCloudRetailV2betaAudience)
    ], GoogleCloudRetailV2betaProduct.prototype, "audience", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availability" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaProduct.prototype, "availability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableQuantity" }),
        __metadata("design:type", Number)
    ], GoogleCloudRetailV2betaProduct.prototype, "availableQuantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaProduct.prototype, "availableTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brands" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaProduct.prototype, "brands", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaProduct.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collectionMemberIds" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaProduct.prototype, "collectionMemberIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=colorInfo" }),
        __metadata("design:type", GoogleCloudRetailV2betaColorInfo)
    ], GoogleCloudRetailV2betaProduct.prototype, "colorInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conditions" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaProduct.prototype, "conditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaProduct.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaProduct.prototype, "expireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fulfillmentInfo", elemType: GoogleCloudRetailV2betaFulfillmentInfo }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaProduct.prototype, "fulfillmentInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gtin" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaProduct.prototype, "gtin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaProduct.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=images", elemType: GoogleCloudRetailV2betaImage }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaProduct.prototype, "images", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaProduct.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localInventories", elemType: GoogleCloudRetailV2betaLocalInventory }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaProduct.prototype, "localInventories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=materials" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaProduct.prototype, "materials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaProduct.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=patterns" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaProduct.prototype, "patterns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceInfo" }),
        __metadata("design:type", GoogleCloudRetailV2betaPriceInfo)
    ], GoogleCloudRetailV2betaProduct.prototype, "priceInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryProductId" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaProduct.prototype, "primaryProductId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotions", elemType: GoogleCloudRetailV2betaPromotion }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaProduct.prototype, "promotions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publishTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaProduct.prototype, "publishTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rating" }),
        __metadata("design:type", GoogleCloudRetailV2betaRating)
    ], GoogleCloudRetailV2betaProduct.prototype, "rating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retrievableFields" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaProduct.prototype, "retrievableFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sizes" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaProduct.prototype, "sizes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaProduct.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaProduct.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ttl" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaProduct.prototype, "ttl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaProduct.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2betaProduct.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=variants", elemType: GoogleCloudRetailV2betaProduct }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2betaProduct.prototype, "variants", void 0);
    return GoogleCloudRetailV2betaProduct;
}(SpeakeasyBase));
export { GoogleCloudRetailV2betaProduct };
