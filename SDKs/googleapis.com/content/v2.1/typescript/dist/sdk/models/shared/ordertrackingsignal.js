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
import { PriceAmount } from "./priceamount";
import { OrderTrackingSignalLineItemDetails } from "./ordertrackingsignallineitemdetails";
import { DateTime } from "./datetime";
import { OrderTrackingSignalShipmentLineItemMapping } from "./ordertrackingsignalshipmentlineitemmapping";
import { OrderTrackingSignalShippingInfo } from "./ordertrackingsignalshippinginfo";
// OrderTrackingSignal
/**
 * Represents a merchant trade from which signals are extracted, e.g. shipping.
**/
var OrderTrackingSignal = /** @class */ (function (_super) {
    __extends(OrderTrackingSignal, _super);
    function OrderTrackingSignal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerShippingFee" }),
        __metadata("design:type", PriceAmount)
    ], OrderTrackingSignal.prototype, "customerShippingFee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliveryPostalCode" }),
        __metadata("design:type", String)
    ], OrderTrackingSignal.prototype, "deliveryPostalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliveryRegionCode" }),
        __metadata("design:type", String)
    ], OrderTrackingSignal.prototype, "deliveryRegionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lineItems", elemType: OrderTrackingSignalLineItemDetails }),
        __metadata("design:type", Array)
    ], OrderTrackingSignal.prototype, "lineItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantId" }),
        __metadata("design:type", String)
    ], OrderTrackingSignal.prototype, "merchantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderCreatedTime" }),
        __metadata("design:type", DateTime)
    ], OrderTrackingSignal.prototype, "orderCreatedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderId" }),
        __metadata("design:type", String)
    ], OrderTrackingSignal.prototype, "orderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderTrackingSignalId" }),
        __metadata("design:type", String)
    ], OrderTrackingSignal.prototype, "orderTrackingSignalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipmentLineItemMapping", elemType: OrderTrackingSignalShipmentLineItemMapping }),
        __metadata("design:type", Array)
    ], OrderTrackingSignal.prototype, "shipmentLineItemMapping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shippingInfo", elemType: OrderTrackingSignalShippingInfo }),
        __metadata("design:type", Array)
    ], OrderTrackingSignal.prototype, "shippingInfo", void 0);
    return OrderTrackingSignal;
}(SpeakeasyBase));
export { OrderTrackingSignal };
// OrderTrackingSignalInput
/**
 * Represents a merchant trade from which signals are extracted, e.g. shipping.
**/
var OrderTrackingSignalInput = /** @class */ (function (_super) {
    __extends(OrderTrackingSignalInput, _super);
    function OrderTrackingSignalInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerShippingFee" }),
        __metadata("design:type", PriceAmount)
    ], OrderTrackingSignalInput.prototype, "customerShippingFee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliveryPostalCode" }),
        __metadata("design:type", String)
    ], OrderTrackingSignalInput.prototype, "deliveryPostalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliveryRegionCode" }),
        __metadata("design:type", String)
    ], OrderTrackingSignalInput.prototype, "deliveryRegionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lineItems", elemType: OrderTrackingSignalLineItemDetails }),
        __metadata("design:type", Array)
    ], OrderTrackingSignalInput.prototype, "lineItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantId" }),
        __metadata("design:type", String)
    ], OrderTrackingSignalInput.prototype, "merchantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderCreatedTime" }),
        __metadata("design:type", DateTime)
    ], OrderTrackingSignalInput.prototype, "orderCreatedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderId" }),
        __metadata("design:type", String)
    ], OrderTrackingSignalInput.prototype, "orderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipmentLineItemMapping", elemType: OrderTrackingSignalShipmentLineItemMapping }),
        __metadata("design:type", Array)
    ], OrderTrackingSignalInput.prototype, "shipmentLineItemMapping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shippingInfo", elemType: OrderTrackingSignalShippingInfo }),
        __metadata("design:type", Array)
    ], OrderTrackingSignalInput.prototype, "shippingInfo", void 0);
    return OrderTrackingSignalInput;
}(SpeakeasyBase));
export { OrderTrackingSignalInput };
