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
import { OrderMerchantProvidedAnnotation } from "./ordermerchantprovidedannotation";
import { OrderCancellation } from "./ordercancellation";
import { Price } from "./price";
import { OrderLineItemProduct } from "./orderlineitemproduct";
import { OrderLineItemReturnInfo } from "./orderlineitemreturninfo";
import { OrderReturn } from "./orderreturn";
import { OrderLineItemShippingDetails } from "./orderlineitemshippingdetails";
var OrderLineItem = /** @class */ (function (_super) {
    __extends(OrderLineItem, _super);
    function OrderLineItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations", elemType: OrderMerchantProvidedAnnotation }),
        __metadata("design:type", Array)
    ], OrderLineItem.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancellations", elemType: OrderCancellation }),
        __metadata("design:type", Array)
    ], OrderLineItem.prototype, "cancellations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], OrderLineItem.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", Price)
    ], OrderLineItem.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=product" }),
        __metadata("design:type", OrderLineItemProduct)
    ], OrderLineItem.prototype, "product", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantityCanceled" }),
        __metadata("design:type", Number)
    ], OrderLineItem.prototype, "quantityCanceled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantityDelivered" }),
        __metadata("design:type", Number)
    ], OrderLineItem.prototype, "quantityDelivered", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantityOrdered" }),
        __metadata("design:type", Number)
    ], OrderLineItem.prototype, "quantityOrdered", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantityPending" }),
        __metadata("design:type", Number)
    ], OrderLineItem.prototype, "quantityPending", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantityReadyForPickup" }),
        __metadata("design:type", Number)
    ], OrderLineItem.prototype, "quantityReadyForPickup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantityReturned" }),
        __metadata("design:type", Number)
    ], OrderLineItem.prototype, "quantityReturned", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantityShipped" }),
        __metadata("design:type", Number)
    ], OrderLineItem.prototype, "quantityShipped", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnInfo" }),
        __metadata("design:type", OrderLineItemReturnInfo)
    ], OrderLineItem.prototype, "returnInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returns", elemType: OrderReturn }),
        __metadata("design:type", Array)
    ], OrderLineItem.prototype, "returns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shippingDetails" }),
        __metadata("design:type", OrderLineItemShippingDetails)
    ], OrderLineItem.prototype, "shippingDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax" }),
        __metadata("design:type", Price)
    ], OrderLineItem.prototype, "tax", void 0);
    return OrderLineItem;
}(SpeakeasyBase));
export { OrderLineItem };
