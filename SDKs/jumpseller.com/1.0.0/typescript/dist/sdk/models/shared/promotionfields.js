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
var PromotionFields = /** @class */ (function (_super) {
    __extends(PromotionFields, _super);
    function PromotionFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=begins_at" }),
        __metadata("design:type", String)
    ], PromotionFields.prototype, "beginsAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories" }),
        __metadata("design:type", Array)
    ], PromotionFields.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PromotionFields.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=condition_price" }),
        __metadata("design:type", Number)
    ], PromotionFields.prototype, "conditionPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=condition_qty" }),
        __metadata("design:type", Number)
    ], PromotionFields.prototype, "conditionQty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cumulative" }),
        __metadata("design:type", Boolean)
    ], PromotionFields.prototype, "cumulative", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customer_categories" }),
        __metadata("design:type", Array)
    ], PromotionFields.prototype, "customerCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discount_amount_fix" }),
        __metadata("design:type", Number)
    ], PromotionFields.prototype, "discountAmountFix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discount_amount_percent" }),
        __metadata("design:type", Number)
    ], PromotionFields.prototype, "discountAmountPercent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discount_target" }),
        __metadata("design:type", String)
    ], PromotionFields.prototype, "discountTarget", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], PromotionFields.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expires_at" }),
        __metadata("design:type", String)
    ], PromotionFields.prototype, "expiresAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PromotionFields.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lasts" }),
        __metadata("design:type", String)
    ], PromotionFields.prototype, "lasts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_times_used" }),
        __metadata("design:type", Number)
    ], PromotionFields.prototype, "maxTimesUsed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PromotionFields.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=products" }),
        __metadata("design:type", Array)
    ], PromotionFields.prototype, "products", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=products_x" }),
        __metadata("design:type", Array)
    ], PromotionFields.prototype, "productsX", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantity_x" }),
        __metadata("design:type", Number)
    ], PromotionFields.prototype, "quantityX", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PromotionFields.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=times_used" }),
        __metadata("design:type", Number)
    ], PromotionFields.prototype, "timesUsed", void 0);
    return PromotionFields;
}(SpeakeasyBase));
export { PromotionFields };
