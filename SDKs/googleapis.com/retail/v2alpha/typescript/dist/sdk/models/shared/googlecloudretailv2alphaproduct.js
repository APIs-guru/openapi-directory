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
import { GoogleCloudRetailV2alphaCustomAttribute } from "./googlecloudretailv2alphacustomattribute";
import { GoogleCloudRetailV2alphaAudience } from "./googlecloudretailv2alphaaudience";
import { GoogleCloudRetailV2alphaColorInfo } from "./googlecloudretailv2alphacolorinfo";
import { GoogleCloudRetailV2alphaFulfillmentInfo } from "./googlecloudretailv2alphafulfillmentinfo";
import { GoogleCloudRetailV2alphaImage } from "./googlecloudretailv2alphaimage";
import { GoogleCloudRetailV2alphaPriceInfo } from "./googlecloudretailv2alphapriceinfo";
import { GoogleCloudRetailV2alphaPromotion } from "./googlecloudretailv2alphapromotion";
import { GoogleCloudRetailV2alphaRating } from "./googlecloudretailv2alpharating";
import { GoogleCloudRetailV2alphaLocalInventory } from "./googlecloudretailv2alphalocalinventory";
export var GoogleCloudRetailV2alphaProductAvailabilityEnum;
(function (GoogleCloudRetailV2alphaProductAvailabilityEnum) {
    GoogleCloudRetailV2alphaProductAvailabilityEnum["AvailabilityUnspecified"] = "AVAILABILITY_UNSPECIFIED";
    GoogleCloudRetailV2alphaProductAvailabilityEnum["InStock"] = "IN_STOCK";
    GoogleCloudRetailV2alphaProductAvailabilityEnum["OutOfStock"] = "OUT_OF_STOCK";
    GoogleCloudRetailV2alphaProductAvailabilityEnum["Preorder"] = "PREORDER";
    GoogleCloudRetailV2alphaProductAvailabilityEnum["Backorder"] = "BACKORDER";
})(GoogleCloudRetailV2alphaProductAvailabilityEnum || (GoogleCloudRetailV2alphaProductAvailabilityEnum = {}));
export var GoogleCloudRetailV2alphaProductTypeEnum;
(function (GoogleCloudRetailV2alphaProductTypeEnum) {
    GoogleCloudRetailV2alphaProductTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    GoogleCloudRetailV2alphaProductTypeEnum["Primary"] = "PRIMARY";
    GoogleCloudRetailV2alphaProductTypeEnum["Variant"] = "VARIANT";
    GoogleCloudRetailV2alphaProductTypeEnum["Collection"] = "COLLECTION";
})(GoogleCloudRetailV2alphaProductTypeEnum || (GoogleCloudRetailV2alphaProductTypeEnum = {}));
// GoogleCloudRetailV2alphaProductInput
/**
 * Product captures all metadata information of items to be recommended or searched.
**/
var GoogleCloudRetailV2alphaProductInput = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2alphaProductInput, _super);
    function GoogleCloudRetailV2alphaProductInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudRetailV2alphaCustomAttribute }),
        __metadata("design:type", Map)
    ], GoogleCloudRetailV2alphaProductInput.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audience" }),
        __metadata("design:type", GoogleCloudRetailV2alphaAudience)
    ], GoogleCloudRetailV2alphaProductInput.prototype, "audience", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availability" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaProductInput.prototype, "availability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableQuantity" }),
        __metadata("design:type", Number)
    ], GoogleCloudRetailV2alphaProductInput.prototype, "availableQuantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaProductInput.prototype, "availableTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brands" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaProductInput.prototype, "brands", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaProductInput.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collectionMemberIds" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaProductInput.prototype, "collectionMemberIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=colorInfo" }),
        __metadata("design:type", GoogleCloudRetailV2alphaColorInfo)
    ], GoogleCloudRetailV2alphaProductInput.prototype, "colorInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conditions" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaProductInput.prototype, "conditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaProductInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaProductInput.prototype, "expireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fulfillmentInfo", elemType: GoogleCloudRetailV2alphaFulfillmentInfo }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaProductInput.prototype, "fulfillmentInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gtin" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaProductInput.prototype, "gtin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaProductInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=images", elemType: GoogleCloudRetailV2alphaImage }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaProductInput.prototype, "images", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaProductInput.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=materials" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaProductInput.prototype, "materials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaProductInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=patterns" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaProductInput.prototype, "patterns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceInfo" }),
        __metadata("design:type", GoogleCloudRetailV2alphaPriceInfo)
    ], GoogleCloudRetailV2alphaProductInput.prototype, "priceInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryProductId" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaProductInput.prototype, "primaryProductId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotions", elemType: GoogleCloudRetailV2alphaPromotion }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaProductInput.prototype, "promotions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publishTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaProductInput.prototype, "publishTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rating" }),
        __metadata("design:type", GoogleCloudRetailV2alphaRating)
    ], GoogleCloudRetailV2alphaProductInput.prototype, "rating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retrievableFields" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaProductInput.prototype, "retrievableFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sizes" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaProductInput.prototype, "sizes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaProductInput.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaProductInput.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ttl" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaProductInput.prototype, "ttl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaProductInput.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaProductInput.prototype, "uri", void 0);
    return GoogleCloudRetailV2alphaProductInput;
}(SpeakeasyBase));
export { GoogleCloudRetailV2alphaProductInput };
// GoogleCloudRetailV2alphaProduct
/**
 * Product captures all metadata information of items to be recommended or searched.
**/
var GoogleCloudRetailV2alphaProduct = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2alphaProduct, _super);
    function GoogleCloudRetailV2alphaProduct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudRetailV2alphaCustomAttribute }),
        __metadata("design:type", Map)
    ], GoogleCloudRetailV2alphaProduct.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audience" }),
        __metadata("design:type", GoogleCloudRetailV2alphaAudience)
    ], GoogleCloudRetailV2alphaProduct.prototype, "audience", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availability" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaProduct.prototype, "availability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableQuantity" }),
        __metadata("design:type", Number)
    ], GoogleCloudRetailV2alphaProduct.prototype, "availableQuantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaProduct.prototype, "availableTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brands" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaProduct.prototype, "brands", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaProduct.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collectionMemberIds" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaProduct.prototype, "collectionMemberIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=colorInfo" }),
        __metadata("design:type", GoogleCloudRetailV2alphaColorInfo)
    ], GoogleCloudRetailV2alphaProduct.prototype, "colorInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conditions" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaProduct.prototype, "conditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaProduct.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaProduct.prototype, "expireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fulfillmentInfo", elemType: GoogleCloudRetailV2alphaFulfillmentInfo }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaProduct.prototype, "fulfillmentInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gtin" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaProduct.prototype, "gtin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaProduct.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=images", elemType: GoogleCloudRetailV2alphaImage }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaProduct.prototype, "images", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaProduct.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localInventories", elemType: GoogleCloudRetailV2alphaLocalInventory }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaProduct.prototype, "localInventories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=materials" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaProduct.prototype, "materials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaProduct.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=patterns" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaProduct.prototype, "patterns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceInfo" }),
        __metadata("design:type", GoogleCloudRetailV2alphaPriceInfo)
    ], GoogleCloudRetailV2alphaProduct.prototype, "priceInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryProductId" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaProduct.prototype, "primaryProductId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotions", elemType: GoogleCloudRetailV2alphaPromotion }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaProduct.prototype, "promotions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publishTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaProduct.prototype, "publishTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rating" }),
        __metadata("design:type", GoogleCloudRetailV2alphaRating)
    ], GoogleCloudRetailV2alphaProduct.prototype, "rating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retrievableFields" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaProduct.prototype, "retrievableFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sizes" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaProduct.prototype, "sizes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaProduct.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaProduct.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ttl" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaProduct.prototype, "ttl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaProduct.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2alphaProduct.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=variants", elemType: GoogleCloudRetailV2alphaProduct }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2alphaProduct.prototype, "variants", void 0);
    return GoogleCloudRetailV2alphaProduct;
}(SpeakeasyBase));
export { GoogleCloudRetailV2alphaProduct };
