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
import { BestSold } from "./bestsold";
import { DailyVisits } from "./dailyvisits";
import { NewVsReturning } from "./newvsreturning";
import { OrdersData } from "./ordersdata";
import { PaymentMethodFreq } from "./paymentmethodfreq";
import { Referrer } from "./referrer";
import { CountryOrders } from "./countryorders";
import { ShippingMethodFreq } from "./shippingmethodfreq";
import { TrafficType } from "./traffictype";
var StoreStatsConversions = /** @class */ (function (_super) {
    __extends(StoreStatsConversions, _super);
    function StoreStatsConversions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=added_to_cart" }),
        __metadata("design:type", Number)
    ], StoreStatsConversions.prototype, "addedToCart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checkout" }),
        __metadata("design:type", Number)
    ], StoreStatsConversions.prototype, "checkout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paid" }),
        __metadata("design:type", Number)
    ], StoreStatsConversions.prototype, "paid", void 0);
    return StoreStatsConversions;
}(SpeakeasyBase));
export { StoreStatsConversions };
var StoreStatsNewVsReturningCustomers = /** @class */ (function (_super) {
    __extends(StoreStatsNewVsReturningCustomers, _super);
    function StoreStatsNewVsReturningCustomers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=global" }),
        __metadata("design:type", Number)
    ], StoreStatsNewVsReturningCustomers.prototype, "global", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=per_day", elemType: NewVsReturning }),
        __metadata("design:type", Array)
    ], StoreStatsNewVsReturningCustomers.prototype, "perDay", void 0);
    return StoreStatsNewVsReturningCustomers;
}(SpeakeasyBase));
export { StoreStatsNewVsReturningCustomers };
var StoreStatsNewVsReturningOrders = /** @class */ (function (_super) {
    __extends(StoreStatsNewVsReturningOrders, _super);
    function StoreStatsNewVsReturningOrders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=global" }),
        __metadata("design:type", Number)
    ], StoreStatsNewVsReturningOrders.prototype, "global", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=per_day", elemType: NewVsReturning }),
        __metadata("design:type", Array)
    ], StoreStatsNewVsReturningOrders.prototype, "perDay", void 0);
    return StoreStatsNewVsReturningOrders;
}(SpeakeasyBase));
export { StoreStatsNewVsReturningOrders };
var StoreStatsOrders = /** @class */ (function (_super) {
    __extends(StoreStatsOrders, _super);
    function StoreStatsOrders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=average" }),
        __metadata("design:type", Number)
    ], StoreStatsOrders.prototype, "average", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], StoreStatsOrders.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: OrdersData }),
        __metadata("design:type", Array)
    ], StoreStatsOrders.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], StoreStatsOrders.prototype, "total", void 0);
    return StoreStatsOrders;
}(SpeakeasyBase));
export { StoreStatsOrders };
var StoreStatsRegionOrders = /** @class */ (function (_super) {
    __extends(StoreStatsRegionOrders, _super);
    function StoreStatsRegionOrders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_mode" }),
        __metadata("design:type", String)
    ], StoreStatsRegionOrders.prototype, "displayMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regions_orders", elemType: CountryOrders }),
        __metadata("design:type", Array)
    ], StoreStatsRegionOrders.prototype, "regionsOrders", void 0);
    return StoreStatsRegionOrders;
}(SpeakeasyBase));
export { StoreStatsRegionOrders };
var StoreStats = /** @class */ (function (_super) {
    __extends(StoreStats, _super);
    function StoreStats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=best_sold", elemType: BestSold }),
        __metadata("design:type", Array)
    ], StoreStats.prototype, "bestSold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversions" }),
        __metadata("design:type", StoreStatsConversions)
    ], StoreStats.prototype, "conversions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], StoreStats.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=daily_visits", elemType: DailyVisits }),
        __metadata("design:type", Array)
    ], StoreStats.prototype, "dailyVisits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], StoreStats.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=new_vs_returning_customers" }),
        __metadata("design:type", StoreStatsNewVsReturningCustomers)
    ], StoreStats.prototype, "newVsReturningCustomers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=new_vs_returning_orders" }),
        __metadata("design:type", StoreStatsNewVsReturningOrders)
    ], StoreStats.prototype, "newVsReturningOrders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orders" }),
        __metadata("design:type", StoreStatsOrders)
    ], StoreStats.prototype, "orders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payment_methods", elemType: PaymentMethodFreq }),
        __metadata("design:type", Array)
    ], StoreStats.prototype, "paymentMethods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referrers", elemType: Referrer }),
        __metadata("design:type", Array)
    ], StoreStats.prototype, "referrers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region_orders" }),
        __metadata("design:type", StoreStatsRegionOrders)
    ], StoreStats.prototype, "regionOrders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=search_frequencies_all" }),
        __metadata("design:type", Array)
    ], StoreStats.prototype, "searchFrequenciesAll", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=search_frequencies_without_results" }),
        __metadata("design:type", Array)
    ], StoreStats.prototype, "searchFrequenciesWithoutResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipping_methods", elemType: ShippingMethodFreq }),
        __metadata("design:type", Array)
    ], StoreStats.prototype, "shippingMethods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], StoreStats.prototype, "to", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=traffic_type", elemType: TrafficType }),
        __metadata("design:type", Array)
    ], StoreStats.prototype, "trafficType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visits" }),
        __metadata("design:type", Number)
    ], StoreStats.prototype, "visits", void 0);
    return StoreStats;
}(SpeakeasyBase));
export { StoreStats };
