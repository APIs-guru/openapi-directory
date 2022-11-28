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
import { Image } from "./image";
import { Capacity } from "./capacity";
import { Count } from "./count";
import { FeatureDescription } from "./featuredescription";
import { Grocery } from "./grocery";
import { Nutrition } from "./nutrition";
import { ProductDetail } from "./productdetail";
import { Price } from "./price";
// Attributes
/**
 * Attributes of the product. For more information, see https://support.google.com/manufacturers/answer/6124116.
**/
var Attributes = /** @class */ (function (_super) {
    __extends(Attributes, _super);
    function Attributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalImageLink", elemType: Image }),
        __metadata("design:type", Array)
    ], Attributes.prototype, "additionalImageLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ageGroup" }),
        __metadata("design:type", String)
    ], Attributes.prototype, "ageGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brand" }),
        __metadata("design:type", String)
    ], Attributes.prototype, "brand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=capacity" }),
        __metadata("design:type", Capacity)
    ], Attributes.prototype, "capacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], Attributes.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Count)
    ], Attributes.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Attributes.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disclosureDate" }),
        __metadata("design:type", String)
    ], Attributes.prototype, "disclosureDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludedDestination" }),
        __metadata("design:type", Array)
    ], Attributes.prototype, "excludedDestination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=featureDescription", elemType: FeatureDescription }),
        __metadata("design:type", Array)
    ], Attributes.prototype, "featureDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flavor" }),
        __metadata("design:type", String)
    ], Attributes.prototype, "flavor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], Attributes.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gender" }),
        __metadata("design:type", String)
    ], Attributes.prototype, "gender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=grocery" }),
        __metadata("design:type", Grocery)
    ], Attributes.prototype, "grocery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gtin" }),
        __metadata("design:type", Array)
    ], Attributes.prototype, "gtin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageLink" }),
        __metadata("design:type", Image)
    ], Attributes.prototype, "imageLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includedDestination" }),
        __metadata("design:type", Array)
    ], Attributes.prototype, "includedDestination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemGroupId" }),
        __metadata("design:type", String)
    ], Attributes.prototype, "itemGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=material" }),
        __metadata("design:type", String)
    ], Attributes.prototype, "material", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mpn" }),
        __metadata("design:type", String)
    ], Attributes.prototype, "mpn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nutrition" }),
        __metadata("design:type", Nutrition)
    ], Attributes.prototype, "nutrition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pattern" }),
        __metadata("design:type", String)
    ], Attributes.prototype, "pattern", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productDetail", elemType: ProductDetail }),
        __metadata("design:type", Array)
    ], Attributes.prototype, "productDetail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productHighlight" }),
        __metadata("design:type", Array)
    ], Attributes.prototype, "productHighlight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productLine" }),
        __metadata("design:type", String)
    ], Attributes.prototype, "productLine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productName" }),
        __metadata("design:type", String)
    ], Attributes.prototype, "productName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productPageUrl" }),
        __metadata("design:type", String)
    ], Attributes.prototype, "productPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productType" }),
        __metadata("design:type", Array)
    ], Attributes.prototype, "productType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releaseDate" }),
        __metadata("design:type", String)
    ], Attributes.prototype, "releaseDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=richProductContent" }),
        __metadata("design:type", Array)
    ], Attributes.prototype, "richProductContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scent" }),
        __metadata("design:type", String)
    ], Attributes.prototype, "scent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], Attributes.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sizeSystem" }),
        __metadata("design:type", String)
    ], Attributes.prototype, "sizeSystem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sizeType" }),
        __metadata("design:type", Array)
    ], Attributes.prototype, "sizeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestedRetailPrice" }),
        __metadata("design:type", Price)
    ], Attributes.prototype, "suggestedRetailPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetClientId" }),
        __metadata("design:type", String)
    ], Attributes.prototype, "targetClientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=theme" }),
        __metadata("design:type", String)
    ], Attributes.prototype, "theme", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Attributes.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoLink" }),
        __metadata("design:type", Array)
    ], Attributes.prototype, "videoLink", void 0);
    return Attributes;
}(SpeakeasyBase));
export { Attributes };
