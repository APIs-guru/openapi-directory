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
import { OrdersCustomBatchRequestEntryCancel } from "./orderscustombatchrequestentrycancel";
import { OrdersCustomBatchRequestEntryCancelLineItem } from "./orderscustombatchrequestentrycancellineitem";
import { OrdersCustomBatchRequestEntryInStoreRefundLineItem } from "./orderscustombatchrequestentryinstorerefundlineitem";
import { OrdersCustomBatchRequestEntryRefund } from "./orderscustombatchrequestentryrefund";
import { OrdersCustomBatchRequestEntryRejectReturnLineItem } from "./orderscustombatchrequestentryrejectreturnlineitem";
import { OrdersCustomBatchRequestEntryReturnLineItem } from "./orderscustombatchrequestentryreturnlineitem";
import { OrdersCustomBatchRequestEntryReturnRefundLineItem } from "./orderscustombatchrequestentryreturnrefundlineitem";
import { OrdersCustomBatchRequestEntrySetLineItemMetadata } from "./orderscustombatchrequestentrysetlineitemmetadata";
import { OrdersCustomBatchRequestEntryShipLineItems } from "./orderscustombatchrequestentryshiplineitems";
import { OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails } from "./orderscustombatchrequestentryupdatelineitemshippingdetails";
import { OrdersCustomBatchRequestEntryUpdateShipment } from "./orderscustombatchrequestentryupdateshipment";
var OrdersCustomBatchRequestEntry = /** @class */ (function (_super) {
    __extends(OrdersCustomBatchRequestEntry, _super);
    function OrdersCustomBatchRequestEntry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=batchId" }),
        __metadata("design:type", Number)
    ], OrdersCustomBatchRequestEntry.prototype, "batchId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancel" }),
        __metadata("design:type", OrdersCustomBatchRequestEntryCancel)
    ], OrdersCustomBatchRequestEntry.prototype, "cancel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancelLineItem" }),
        __metadata("design:type", OrdersCustomBatchRequestEntryCancelLineItem)
    ], OrdersCustomBatchRequestEntry.prototype, "cancelLineItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inStoreRefundLineItem" }),
        __metadata("design:type", OrdersCustomBatchRequestEntryInStoreRefundLineItem)
    ], OrdersCustomBatchRequestEntry.prototype, "inStoreRefundLineItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantId" }),
        __metadata("design:type", String)
    ], OrdersCustomBatchRequestEntry.prototype, "merchantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchantOrderId" }),
        __metadata("design:type", String)
    ], OrdersCustomBatchRequestEntry.prototype, "merchantOrderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], OrdersCustomBatchRequestEntry.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operationId" }),
        __metadata("design:type", String)
    ], OrdersCustomBatchRequestEntry.prototype, "operationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderId" }),
        __metadata("design:type", String)
    ], OrdersCustomBatchRequestEntry.prototype, "orderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refund" }),
        __metadata("design:type", OrdersCustomBatchRequestEntryRefund)
    ], OrdersCustomBatchRequestEntry.prototype, "refund", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rejectReturnLineItem" }),
        __metadata("design:type", OrdersCustomBatchRequestEntryRejectReturnLineItem)
    ], OrdersCustomBatchRequestEntry.prototype, "rejectReturnLineItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnLineItem" }),
        __metadata("design:type", OrdersCustomBatchRequestEntryReturnLineItem)
    ], OrdersCustomBatchRequestEntry.prototype, "returnLineItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnRefundLineItem" }),
        __metadata("design:type", OrdersCustomBatchRequestEntryReturnRefundLineItem)
    ], OrdersCustomBatchRequestEntry.prototype, "returnRefundLineItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=setLineItemMetadata" }),
        __metadata("design:type", OrdersCustomBatchRequestEntrySetLineItemMetadata)
    ], OrdersCustomBatchRequestEntry.prototype, "setLineItemMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipLineItems" }),
        __metadata("design:type", OrdersCustomBatchRequestEntryShipLineItems)
    ], OrdersCustomBatchRequestEntry.prototype, "shipLineItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateLineItemShippingDetails" }),
        __metadata("design:type", OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails)
    ], OrdersCustomBatchRequestEntry.prototype, "updateLineItemShippingDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateShipment" }),
        __metadata("design:type", OrdersCustomBatchRequestEntryUpdateShipment)
    ], OrdersCustomBatchRequestEntry.prototype, "updateShipment", void 0);
    return OrdersCustomBatchRequestEntry;
}(SpeakeasyBase));
export { OrdersCustomBatchRequestEntry };
