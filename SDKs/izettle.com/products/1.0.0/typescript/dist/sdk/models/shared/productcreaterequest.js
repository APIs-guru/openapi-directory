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
import { CategoryDto } from "./categorydto";
import { MetadataDto } from "./metadatadto";
import { OnlineProperties } from "./onlineproperties";
import { PresentationDto } from "./presentationdto";
import { VariantOptionDefinitions } from "./variantoptiondefinitions";
import { VariantDto } from "./variantdto";
var ProductCreateRequest = /** @class */ (function (_super) {
    __extends(ProductCreateRequest, _super);
    function ProductCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories" }),
        __metadata("design:type", Array)
    ], ProductCreateRequest.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", CategoryDto)
    ], ProductCreateRequest.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createWithDefaultTax" }),
        __metadata("design:type", Boolean)
    ], ProductCreateRequest.prototype, "createWithDefaultTax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ProductCreateRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalReference" }),
        __metadata("design:type", String)
    ], ProductCreateRequest.prototype, "externalReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageLookupKeys" }),
        __metadata("design:type", Array)
    ], ProductCreateRequest.prototype, "imageLookupKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", MetadataDto)
    ], ProductCreateRequest.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ProductCreateRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=online" }),
        __metadata("design:type", OnlineProperties)
    ], ProductCreateRequest.prototype, "online", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=presentation" }),
        __metadata("design:type", PresentationDto)
    ], ProductCreateRequest.prototype, "presentation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxCode" }),
        __metadata("design:type", String)
    ], ProductCreateRequest.prototype, "taxCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxExempt" }),
        __metadata("design:type", Boolean)
    ], ProductCreateRequest.prototype, "taxExempt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxRates" }),
        __metadata("design:type", Array)
    ], ProductCreateRequest.prototype, "taxRates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unitName" }),
        __metadata("design:type", String)
    ], ProductCreateRequest.prototype, "unitName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], ProductCreateRequest.prototype, "uuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=variantOptionDefinitions" }),
        __metadata("design:type", VariantOptionDefinitions)
    ], ProductCreateRequest.prototype, "variantOptionDefinitions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=variants", elemType: VariantDto }),
        __metadata("design:type", Array)
    ], ProductCreateRequest.prototype, "variants", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vatPercentage" }),
        __metadata("design:type", Number)
    ], ProductCreateRequest.prototype, "vatPercentage", void 0);
    return ProductCreateRequest;
}(SpeakeasyBase));
export { ProductCreateRequest };
