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
// Metrics
/**
 * Performance metrics. Values are only set for metrics requested explicitly in the request's search query.
**/
var Metrics = /** @class */ (function (_super) {
    __extends(Metrics, _super);
    function Metrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aos" }),
        __metadata("design:type", Number)
    ], Metrics.prototype, "aos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aovMicros" }),
        __metadata("design:type", Number)
    ], Metrics.prototype, "aovMicros", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clicks" }),
        __metadata("design:type", String)
    ], Metrics.prototype, "clicks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversionRate" }),
        __metadata("design:type", Number)
    ], Metrics.prototype, "conversionRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversionValueMicros" }),
        __metadata("design:type", String)
    ], Metrics.prototype, "conversionValueMicros", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversions" }),
        __metadata("design:type", Number)
    ], Metrics.prototype, "conversions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ctr" }),
        __metadata("design:type", Number)
    ], Metrics.prototype, "ctr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=daysToShip" }),
        __metadata("design:type", Number)
    ], Metrics.prototype, "daysToShip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=impressions" }),
        __metadata("design:type", String)
    ], Metrics.prototype, "impressions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemDaysToShip" }),
        __metadata("design:type", Number)
    ], Metrics.prototype, "itemDaysToShip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemFillRate" }),
        __metadata("design:type", Number)
    ], Metrics.prototype, "itemFillRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderedItemSalesMicros" }),
        __metadata("design:type", String)
    ], Metrics.prototype, "orderedItemSalesMicros", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderedItems" }),
        __metadata("design:type", String)
    ], Metrics.prototype, "orderedItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orders" }),
        __metadata("design:type", String)
    ], Metrics.prototype, "orders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rejectedItems" }),
        __metadata("design:type", String)
    ], Metrics.prototype, "rejectedItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnRate" }),
        __metadata("design:type", Number)
    ], Metrics.prototype, "returnRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnedItems" }),
        __metadata("design:type", String)
    ], Metrics.prototype, "returnedItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnsMicros" }),
        __metadata("design:type", String)
    ], Metrics.prototype, "returnsMicros", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shippedItemSalesMicros" }),
        __metadata("design:type", String)
    ], Metrics.prototype, "shippedItemSalesMicros", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shippedItems" }),
        __metadata("design:type", String)
    ], Metrics.prototype, "shippedItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shippedOrders" }),
        __metadata("design:type", String)
    ], Metrics.prototype, "shippedOrders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unshippedItems" }),
        __metadata("design:type", Number)
    ], Metrics.prototype, "unshippedItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unshippedOrders" }),
        __metadata("design:type", Number)
    ], Metrics.prototype, "unshippedOrders", void 0);
    return Metrics;
}(SpeakeasyBase));
export { Metrics };
