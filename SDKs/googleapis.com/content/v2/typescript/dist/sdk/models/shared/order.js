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
import { OrderCustomer } from "./ordercustomer";
import { OrderDeliveryDetails } from "./orderdeliverydetails";
import { OrderLineItem } from "./orderlineitem";
import { Price } from "./price";
import { OrderPaymentMethod } from "./orderpaymentmethod";
import { OrderPickupDetails } from "./orderpickupdetails";
import { OrderLegacyPromotion } from "./orderlegacypromotion";
import { OrderRefund } from "./orderrefund";
import { OrderShipment } from "./ordershipment";
// Order
/**
 * Order. Production access (all methods) requires the order manager role. Sandbox access does not.
**/
var Order = /** @class */ (function (_super) {
    __extends(Order, _super);
    function Order() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acknowledged" }),
        __metadata("design:type", Boolean)
    ], Order.prototype, "acknowledged", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channelType" }),
        __metadata("design:type", String)
    ], Order.prototype, "channelType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customer" }),
        __metadata("design:type", OrderCustomer)
    ], Order.prototype, "customer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliveryDetails" }),
        __metadata("design:type", OrderDeliveryDetails)
    ], Order.prototype, "deliveryDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Order.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Order.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lineItems", elemType: OrderLineItem }),
        __metadata("design:type", Array)
    ], Order.prototype, "lineItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantId" }),
        __metadata("design:type", String)
    ], Order.prototype, "merchantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantOrderId" }),
        __metadata("design:type", String)
    ], Order.prototype, "merchantOrderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=netAmount" }),
        __metadata("design:type", Price)
    ], Order.prototype, "netAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentMethod" }),
        __metadata("design:type", OrderPaymentMethod)
    ], Order.prototype, "paymentMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentStatus" }),
        __metadata("design:type", String)
    ], Order.prototype, "paymentStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pickupDetails" }),
        __metadata("design:type", OrderPickupDetails)
    ], Order.prototype, "pickupDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placedDate" }),
        __metadata("design:type", String)
    ], Order.prototype, "placedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotions", elemType: OrderLegacyPromotion }),
        __metadata("design:type", Array)
    ], Order.prototype, "promotions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refunds", elemType: OrderRefund }),
        __metadata("design:type", Array)
    ], Order.prototype, "refunds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipments", elemType: OrderShipment }),
        __metadata("design:type", Array)
    ], Order.prototype, "shipments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shippingCost" }),
        __metadata("design:type", Price)
    ], Order.prototype, "shippingCost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shippingCostTax" }),
        __metadata("design:type", Price)
    ], Order.prototype, "shippingCostTax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shippingOption" }),
        __metadata("design:type", String)
    ], Order.prototype, "shippingOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Order.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxCollector" }),
        __metadata("design:type", String)
    ], Order.prototype, "taxCollector", void 0);
    return Order;
}(SpeakeasyBase));
export { Order };
