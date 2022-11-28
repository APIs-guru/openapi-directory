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
import { DateTime } from "./datetime";
export var OrderTrackingSignalShippingInfoShippingStatusEnum;
(function (OrderTrackingSignalShippingInfoShippingStatusEnum) {
    OrderTrackingSignalShippingInfoShippingStatusEnum["ShippingStateUnspecified"] = "SHIPPING_STATE_UNSPECIFIED";
    OrderTrackingSignalShippingInfoShippingStatusEnum["Shipped"] = "SHIPPED";
    OrderTrackingSignalShippingInfoShippingStatusEnum["Delivered"] = "DELIVERED";
})(OrderTrackingSignalShippingInfoShippingStatusEnum || (OrderTrackingSignalShippingInfoShippingStatusEnum = {}));
// OrderTrackingSignalShippingInfo
/**
 * The shipping information for the order.
**/
var OrderTrackingSignalShippingInfo = /** @class */ (function (_super) {
    __extends(OrderTrackingSignalShippingInfo, _super);
    function OrderTrackingSignalShippingInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actualDeliveryTime" }),
        __metadata("design:type", DateTime)
    ], OrderTrackingSignalShippingInfo.prototype, "actualDeliveryTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=carrierName" }),
        __metadata("design:type", String)
    ], OrderTrackingSignalShippingInfo.prototype, "carrierName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=carrierServiceName" }),
        __metadata("design:type", String)
    ], OrderTrackingSignalShippingInfo.prototype, "carrierServiceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=earliestDeliveryPromiseTime" }),
        __metadata("design:type", DateTime)
    ], OrderTrackingSignalShippingInfo.prototype, "earliestDeliveryPromiseTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latestDeliveryPromiseTime" }),
        __metadata("design:type", DateTime)
    ], OrderTrackingSignalShippingInfo.prototype, "latestDeliveryPromiseTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originPostalCode" }),
        __metadata("design:type", String)
    ], OrderTrackingSignalShippingInfo.prototype, "originPostalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originRegionCode" }),
        __metadata("design:type", String)
    ], OrderTrackingSignalShippingInfo.prototype, "originRegionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipmentId" }),
        __metadata("design:type", String)
    ], OrderTrackingSignalShippingInfo.prototype, "shipmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shippedTime" }),
        __metadata("design:type", DateTime)
    ], OrderTrackingSignalShippingInfo.prototype, "shippedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shippingStatus" }),
        __metadata("design:type", String)
    ], OrderTrackingSignalShippingInfo.prototype, "shippingStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trackingId" }),
        __metadata("design:type", String)
    ], OrderTrackingSignalShippingInfo.prototype, "trackingId", void 0);
    return OrderTrackingSignalShippingInfo;
}(SpeakeasyBase));
export { OrderTrackingSignalShippingInfo };
