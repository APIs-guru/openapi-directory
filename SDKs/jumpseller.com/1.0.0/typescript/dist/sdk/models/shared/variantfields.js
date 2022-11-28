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
import { ImageFields } from "./imagefields";
import { ProductOptionVariantEdit } from "./productoptionvariantedit";
var VariantFields = /** @class */ (function (_super) {
    __extends(VariantFields, _super);
    function VariantFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], VariantFields.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", ImageFields)
    ], VariantFields.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options", elemType: ProductOptionVariantEdit }),
        __metadata("design:type", Array)
    ], VariantFields.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], VariantFields.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sku" }),
        __metadata("design:type", String)
    ], VariantFields.prototype, "sku", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stock" }),
        __metadata("design:type", Number)
    ], VariantFields.prototype, "stock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stock_unlimited" }),
        __metadata("design:type", Boolean)
    ], VariantFields.prototype, "stockUnlimited", void 0);
    return VariantFields;
}(SpeakeasyBase));
export { VariantFields };
