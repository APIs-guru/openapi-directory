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
export var ProductEditFieldsPackageFormatEnum;
(function (ProductEditFieldsPackageFormatEnum) {
    ProductEditFieldsPackageFormatEnum["Box"] = "box";
    ProductEditFieldsPackageFormatEnum["Cylinder"] = "cylinder";
})(ProductEditFieldsPackageFormatEnum || (ProductEditFieldsPackageFormatEnum = {}));
export var ProductEditFieldsStatusEnum;
(function (ProductEditFieldsStatusEnum) {
    ProductEditFieldsStatusEnum["Available"] = "available";
    ProductEditFieldsStatusEnum["NotAvailable"] = "not-available";
    ProductEditFieldsStatusEnum["Disabled"] = "disabled";
})(ProductEditFieldsStatusEnum || (ProductEditFieldsStatusEnum = {}));
var ProductEditFields = /** @class */ (function (_super) {
    __extends(ProductEditFields, _super);
    function ProductEditFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=barcode" }),
        __metadata("design:type", String)
    ], ProductEditFields.prototype, "barcode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories", elemType: CategoryFields }),
        __metadata("design:type", Array)
    ], ProductEditFields.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ProductEditFields.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diameter" }),
        __metadata("design:type", Number)
    ], ProductEditFields.prototype, "diameter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=featured" }),
        __metadata("design:type", Boolean)
    ], ProductEditFields.prototype, "featured", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=google_product_category" }),
        __metadata("design:type", String)
    ], ProductEditFields.prototype, "googleProductCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], ProductEditFields.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], ProductEditFields.prototype, "length", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta_description" }),
        __metadata("design:type", String)
    ], ProductEditFields.prototype, "metaDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ProductEditFields.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=package_format" }),
        __metadata("design:type", String)
    ], ProductEditFields.prototype, "packageFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_title" }),
        __metadata("design:type", String)
    ], ProductEditFields.prototype, "pageTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permalink" }),
        __metadata("design:type", String)
    ], ProductEditFields.prototype, "permalink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], ProductEditFields.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipping_required" }),
        __metadata("design:type", Boolean)
    ], ProductEditFields.prototype, "shippingRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sku" }),
        __metadata("design:type", String)
    ], ProductEditFields.prototype, "sku", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ProductEditFields.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stock" }),
        __metadata("design:type", Number)
    ], ProductEditFields.prototype, "stock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stock_unlimited" }),
        __metadata("design:type", Boolean)
    ], ProductEditFields.prototype, "stockUnlimited", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=weight" }),
        __metadata("design:type", Number)
    ], ProductEditFields.prototype, "weight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], ProductEditFields.prototype, "width", void 0);
    return ProductEditFields;
}(SpeakeasyBase));
export { ProductEditFields };
