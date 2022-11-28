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
var PromotionEditFields = /** @class */ (function (_super) {
    __extends(PromotionEditFields, _super);
    function PromotionEditFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=begins_at" }),
        __metadata("design:type", String)
    ], PromotionEditFields.prototype, "beginsAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buys_at_least" }),
        __metadata("design:type", String)
    ], PromotionEditFields.prototype, "buysAtLeast", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories" }),
        __metadata("design:type", Array)
    ], PromotionEditFields.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PromotionEditFields.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=condition_price" }),
        __metadata("design:type", Number)
    ], PromotionEditFields.prototype, "conditionPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=condition_qty" }),
        __metadata("design:type", Number)
    ], PromotionEditFields.prototype, "conditionQty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cumulative" }),
        __metadata("design:type", Boolean)
    ], PromotionEditFields.prototype, "cumulative", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customer_categories" }),
        __metadata("design:type", Array)
    ], PromotionEditFields.prototype, "customerCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customers" }),
        __metadata("design:type", String)
    ], PromotionEditFields.prototype, "customers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discount_amount_fix" }),
        __metadata("design:type", Number)
    ], PromotionEditFields.prototype, "discountAmountFix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discount_amount_percent" }),
        __metadata("design:type", Number)
    ], PromotionEditFields.prototype, "discountAmountPercent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discount_target" }),
        __metadata("design:type", String)
    ], PromotionEditFields.prototype, "discountTarget", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], PromotionEditFields.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expires_at" }),
        __metadata("design:type", String)
    ], PromotionEditFields.prototype, "expiresAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lasts" }),
        __metadata("design:type", String)
    ], PromotionEditFields.prototype, "lasts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_times_used" }),
        __metadata("design:type", Number)
    ], PromotionEditFields.prototype, "maxTimesUsed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PromotionEditFields.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=products" }),
        __metadata("design:type", Array)
    ], PromotionEditFields.prototype, "products", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=products_x" }),
        __metadata("design:type", Array)
    ], PromotionEditFields.prototype, "productsX", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantity_x" }),
        __metadata("design:type", Number)
    ], PromotionEditFields.prototype, "quantityX", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PromotionEditFields.prototype, "type", void 0);
    return PromotionEditFields;
}(SpeakeasyBase));
export { PromotionEditFields };
