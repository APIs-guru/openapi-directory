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
import { GoogleCloudRetailV2CustomAttribute } from "./googlecloudretailv2customattribute";
import { GoogleCloudRetailV2Audience } from "./googlecloudretailv2audience";
import { GoogleCloudRetailV2ColorInfo } from "./googlecloudretailv2colorinfo";
import { GoogleCloudRetailV2FulfillmentInfo } from "./googlecloudretailv2fulfillmentinfo";
import { GoogleCloudRetailV2Image } from "./googlecloudretailv2image";
import { GoogleCloudRetailV2LocalInventory } from "./googlecloudretailv2localinventory";
import { GoogleCloudRetailV2PriceInfo } from "./googlecloudretailv2priceinfo";
import { GoogleCloudRetailV2Promotion } from "./googlecloudretailv2promotion";
import { GoogleCloudRetailV2Rating } from "./googlecloudretailv2rating";
export var GoogleCloudRetailV2ProductAvailabilityEnum;
(function (GoogleCloudRetailV2ProductAvailabilityEnum) {
    GoogleCloudRetailV2ProductAvailabilityEnum["AvailabilityUnspecified"] = "AVAILABILITY_UNSPECIFIED";
    GoogleCloudRetailV2ProductAvailabilityEnum["InStock"] = "IN_STOCK";
    GoogleCloudRetailV2ProductAvailabilityEnum["OutOfStock"] = "OUT_OF_STOCK";
    GoogleCloudRetailV2ProductAvailabilityEnum["Preorder"] = "PREORDER";
    GoogleCloudRetailV2ProductAvailabilityEnum["Backorder"] = "BACKORDER";
})(GoogleCloudRetailV2ProductAvailabilityEnum || (GoogleCloudRetailV2ProductAvailabilityEnum = {}));
export var GoogleCloudRetailV2ProductTypeEnum;
(function (GoogleCloudRetailV2ProductTypeEnum) {
    GoogleCloudRetailV2ProductTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    GoogleCloudRetailV2ProductTypeEnum["Primary"] = "PRIMARY";
    GoogleCloudRetailV2ProductTypeEnum["Variant"] = "VARIANT";
    GoogleCloudRetailV2ProductTypeEnum["Collection"] = "COLLECTION";
})(GoogleCloudRetailV2ProductTypeEnum || (GoogleCloudRetailV2ProductTypeEnum = {}));
// GoogleCloudRetailV2Product
/**
 * Product captures all metadata information of items to be recommended or searched.
**/
var GoogleCloudRetailV2Product = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2Product, _super);
    function GoogleCloudRetailV2Product() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudRetailV2CustomAttribute }),
        __metadata("design:type", Map)
    ], GoogleCloudRetailV2Product.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audience" }),
        __metadata("design:type", GoogleCloudRetailV2Audience)
    ], GoogleCloudRetailV2Product.prototype, "audience", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availability" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2Product.prototype, "availability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableQuantity" }),
        __metadata("design:type", Number)
    ], GoogleCloudRetailV2Product.prototype, "availableQuantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2Product.prototype, "availableTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brands" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2Product.prototype, "brands", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2Product.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collectionMemberIds" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2Product.prototype, "collectionMemberIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=colorInfo" }),
        __metadata("design:type", GoogleCloudRetailV2ColorInfo)
    ], GoogleCloudRetailV2Product.prototype, "colorInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conditions" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2Product.prototype, "conditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2Product.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2Product.prototype, "expireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fulfillmentInfo", elemType: GoogleCloudRetailV2FulfillmentInfo }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2Product.prototype, "fulfillmentInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gtin" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2Product.prototype, "gtin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2Product.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=images", elemType: GoogleCloudRetailV2Image }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2Product.prototype, "images", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2Product.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localInventories", elemType: GoogleCloudRetailV2LocalInventory }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2Product.prototype, "localInventories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=materials" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2Product.prototype, "materials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2Product.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=patterns" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2Product.prototype, "patterns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceInfo" }),
        __metadata("design:type", GoogleCloudRetailV2PriceInfo)
    ], GoogleCloudRetailV2Product.prototype, "priceInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryProductId" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2Product.prototype, "primaryProductId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotions", elemType: GoogleCloudRetailV2Promotion }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2Product.prototype, "promotions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publishTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2Product.prototype, "publishTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rating" }),
        __metadata("design:type", GoogleCloudRetailV2Rating)
    ], GoogleCloudRetailV2Product.prototype, "rating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retrievableFields" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2Product.prototype, "retrievableFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sizes" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2Product.prototype, "sizes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2Product.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2Product.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ttl" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2Product.prototype, "ttl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2Product.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2Product.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=variants", elemType: GoogleCloudRetailV2Product }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2Product.prototype, "variants", void 0);
    return GoogleCloudRetailV2Product;
}(SpeakeasyBase));
export { GoogleCloudRetailV2Product };
// GoogleCloudRetailV2ProductInput
/**
 * Product captures all metadata information of items to be recommended or searched.
**/
var GoogleCloudRetailV2ProductInput = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2ProductInput, _super);
    function GoogleCloudRetailV2ProductInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudRetailV2CustomAttribute }),
        __metadata("design:type", Map)
    ], GoogleCloudRetailV2ProductInput.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audience" }),
        __metadata("design:type", GoogleCloudRetailV2Audience)
    ], GoogleCloudRetailV2ProductInput.prototype, "audience", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availability" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2ProductInput.prototype, "availability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableQuantity" }),
        __metadata("design:type", Number)
    ], GoogleCloudRetailV2ProductInput.prototype, "availableQuantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2ProductInput.prototype, "availableTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brands" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2ProductInput.prototype, "brands", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2ProductInput.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collectionMemberIds" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2ProductInput.prototype, "collectionMemberIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=colorInfo" }),
        __metadata("design:type", GoogleCloudRetailV2ColorInfo)
    ], GoogleCloudRetailV2ProductInput.prototype, "colorInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conditions" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2ProductInput.prototype, "conditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2ProductInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2ProductInput.prototype, "expireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fulfillmentInfo", elemType: GoogleCloudRetailV2FulfillmentInfo }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2ProductInput.prototype, "fulfillmentInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gtin" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2ProductInput.prototype, "gtin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2ProductInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=images", elemType: GoogleCloudRetailV2Image }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2ProductInput.prototype, "images", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2ProductInput.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=materials" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2ProductInput.prototype, "materials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2ProductInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=patterns" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2ProductInput.prototype, "patterns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceInfo" }),
        __metadata("design:type", GoogleCloudRetailV2PriceInfo)
    ], GoogleCloudRetailV2ProductInput.prototype, "priceInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryProductId" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2ProductInput.prototype, "primaryProductId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotions", elemType: GoogleCloudRetailV2Promotion }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2ProductInput.prototype, "promotions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publishTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2ProductInput.prototype, "publishTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rating" }),
        __metadata("design:type", GoogleCloudRetailV2Rating)
    ], GoogleCloudRetailV2ProductInput.prototype, "rating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retrievableFields" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2ProductInput.prototype, "retrievableFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sizes" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2ProductInput.prototype, "sizes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2ProductInput.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2ProductInput.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ttl" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2ProductInput.prototype, "ttl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2ProductInput.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], GoogleCloudRetailV2ProductInput.prototype, "uri", void 0);
    return GoogleCloudRetailV2ProductInput;
}(SpeakeasyBase));
export { GoogleCloudRetailV2ProductInput };
