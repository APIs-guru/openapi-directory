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
import { OrderStatusEnum } from "./orderstatusenum";
export var OrderStateSideEnum;
(function (OrderStateSideEnum) {
    OrderStateSideEnum["One"] = "1";
    OrderStateSideEnum["Two"] = "2";
})(OrderStateSideEnum || (OrderStateSideEnum = {}));
// OrderState
/**
 * An object containing all the properties defining an order
**/
var OrderState = /** @class */ (function (_super) {
    __extends(OrderState, _super);
    function OrderState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContractId" }),
        __metadata("design:type", Number)
    ], OrderState.prototype, "contractId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomerOrderId" }),
        __metadata("design:type", Number)
    ], OrderState.prototype, "customerOrderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FilledQuantity" }),
        __metadata("design:type", Number)
    ], OrderState.prototype, "filledQuantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ListingExchange" }),
        __metadata("design:type", String)
    ], OrderState.prototype, "listingExchange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OrderType" }),
        __metadata("design:type", Number)
    ], OrderState.prototype, "orderType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutsideRTH" }),
        __metadata("design:type", String)
    ], OrderState.prototype, "outsideRth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Price" }),
        __metadata("design:type", Number)
    ], OrderState.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemainingQuantity" }),
        __metadata("design:type", Number)
    ], OrderState.prototype, "remainingQuantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Side" }),
        __metadata("design:type", String)
    ], OrderState.prototype, "side", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], OrderState.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Ticker" }),
        __metadata("design:type", String)
    ], OrderState.prototype, "ticker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TimeInForce" }),
        __metadata("design:type", Number)
    ], OrderState.prototype, "timeInForce", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TransactionTime" }),
        __metadata("design:type", String)
    ], OrderState.prototype, "transactionTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Warning" }),
        __metadata("design:type", String)
    ], OrderState.prototype, "warning", void 0);
    return OrderState;
}(SpeakeasyBase));
export { OrderState };
