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
import { CategoryFields } from "./categoryfields";
import { ImageFields } from "./imagefields";
import { VariantFields } from "./variantfields";
export var ProductFieldsPackageFormatEnum;
(function (ProductFieldsPackageFormatEnum) {
    ProductFieldsPackageFormatEnum["Box"] = "box";
    ProductFieldsPackageFormatEnum["Cylinder"] = "cylinder";
})(ProductFieldsPackageFormatEnum || (ProductFieldsPackageFormatEnum = {}));
export var ProductFieldsStatusEnum;
(function (ProductFieldsStatusEnum) {
    ProductFieldsStatusEnum["Available"] = "available";
    ProductFieldsStatusEnum["NotAvailable"] = "not-available";
    ProductFieldsStatusEnum["Disabled"] = "disabled";
})(ProductFieldsStatusEnum || (ProductFieldsStatusEnum = {}));
var ProductFields = /** @class */ (function (_super) {
    __extends(ProductFields, _super);
    function ProductFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=barcode" }),
        __metadata("design:type", String)
    ], ProductFields.prototype, "barcode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories", elemType: CategoryFields }),
        __metadata("design:type", Array)
    ], ProductFields.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], ProductFields.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ProductFields.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diameter" }),
        __metadata("design:type", Number)
    ], ProductFields.prototype, "diameter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discount" }),
        __metadata("design:type", Number)
    ], ProductFields.prototype, "discount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=featured" }),
        __metadata("design:type", Boolean)
    ], ProductFields.prototype, "featured", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=google_product_category" }),
        __metadata("design:type", String)
    ], ProductFields.prototype, "googleProductCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], ProductFields.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ProductFields.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=images", elemType: ImageFields }),
        __metadata("design:type", Array)
    ], ProductFields.prototype, "images", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], ProductFields.prototype, "length", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ProductFields.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=package_format" }),
        __metadata("design:type", String)
    ], ProductFields.prototype, "packageFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permalink" }),
        __metadata("design:type", String)
    ], ProductFields.prototype, "permalink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], ProductFields.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sku" }),
        __metadata("design:type", String)
    ], ProductFields.prototype, "sku", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ProductFields.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stock" }),
        __metadata("design:type", Number)
    ], ProductFields.prototype, "stock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stock_unlimited" }),
        __metadata("design:type", Boolean)
    ], ProductFields.prototype, "stockUnlimited", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=variants", elemType: VariantFields }),
        __metadata("design:type", Array)
    ], ProductFields.prototype, "variants", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=weight" }),
        __metadata("design:type", Number)
    ], ProductFields.prototype, "weight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], ProductFields.prototype, "width", void 0);
    return ProductFields;
}(SpeakeasyBase));
export { ProductFields };
