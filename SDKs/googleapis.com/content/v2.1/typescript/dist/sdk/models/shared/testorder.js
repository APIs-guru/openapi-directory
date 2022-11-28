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
import { TestOrderDeliveryDetails } from "./testorderdeliverydetails";
import { TestOrderLineItem } from "./testorderlineitem";
import { TestOrderPickupDetails } from "./testorderpickupdetails";
import { OrderPromotion } from "./orderpromotion";
import { Price } from "./price";
var TestOrder = /** @class */ (function (_super) {
    __extends(TestOrder, _super);
    function TestOrder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliveryDetails" }),
        __metadata("design:type", TestOrderDeliveryDetails)
    ], TestOrder.prototype, "deliveryDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableOrderinvoices" }),
        __metadata("design:type", Boolean)
    ], TestOrder.prototype, "enableOrderinvoices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], TestOrder.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lineItems", elemType: TestOrderLineItem }),
        __metadata("design:type", Array)
    ], TestOrder.prototype, "lineItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationMode" }),
        __metadata("design:type", String)
    ], TestOrder.prototype, "notificationMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pickupDetails" }),
        __metadata("design:type", TestOrderPickupDetails)
    ], TestOrder.prototype, "pickupDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=predefinedBillingAddress" }),
        __metadata("design:type", String)
    ], TestOrder.prototype, "predefinedBillingAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=predefinedDeliveryAddress" }),
        __metadata("design:type", String)
    ], TestOrder.prototype, "predefinedDeliveryAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=predefinedEmail" }),
        __metadata("design:type", String)
    ], TestOrder.prototype, "predefinedEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=predefinedPickupDetails" }),
        __metadata("design:type", String)
    ], TestOrder.prototype, "predefinedPickupDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotions", elemType: OrderPromotion }),
        __metadata("design:type", Array)
    ], TestOrder.prototype, "promotions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shippingCost" }),
        __metadata("design:type", Price)
    ], TestOrder.prototype, "shippingCost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shippingOption" }),
        __metadata("design:type", String)
    ], TestOrder.prototype, "shippingOption", void 0);
    return TestOrder;
}(SpeakeasyBase));
export { TestOrder };
