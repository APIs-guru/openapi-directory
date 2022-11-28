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
import * as shared from "../shared";
var PutAccountsAccountOrdersCustomerOrderIdPathParams = /** @class */ (function (_super) {
    __extends(PutAccountsAccountOrdersCustomerOrderIdPathParams, _super);
    function PutAccountsAccountOrdersCustomerOrderIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CustomerOrderId" }),
        __metadata("design:type", String)
    ], PutAccountsAccountOrdersCustomerOrderIdPathParams.prototype, "customerOrderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account" }),
        __metadata("design:type", String)
    ], PutAccountsAccountOrdersCustomerOrderIdPathParams.prototype, "account", void 0);
    return PutAccountsAccountOrdersCustomerOrderIdPathParams;
}(SpeakeasyBase));
export { PutAccountsAccountOrdersCustomerOrderIdPathParams };
var PutAccountsAccountOrdersCustomerOrderIdRequestBody = /** @class */ (function (_super) {
    __extends(PutAccountsAccountOrdersCustomerOrderIdRequestBody, _super);
    function PutAccountsAccountOrdersCustomerOrderIdRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Aux Price" }),
        __metadata("design:type", Number)
    ], PutAccountsAccountOrdersCustomerOrderIdRequestBody.prototype, "auxPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomerOrderId" }),
        __metadata("design:type", String)
    ], PutAccountsAccountOrdersCustomerOrderIdRequestBody.prototype, "customerOrderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GermanHftAlgo" }),
        __metadata("design:type", Boolean)
    ], PutAccountsAccountOrdersCustomerOrderIdRequestBody.prototype, "germanHftAlgo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Mifid2Algo" }),
        __metadata("design:type", String)
    ], PutAccountsAccountOrdersCustomerOrderIdRequestBody.prototype, "mifid2Algo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Mifid2DecisionMaker" }),
        __metadata("design:type", String)
    ], PutAccountsAccountOrdersCustomerOrderIdRequestBody.prototype, "mifid2DecisionMaker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Mifid2ExecutionAlgo" }),
        __metadata("design:type", String)
    ], PutAccountsAccountOrdersCustomerOrderIdRequestBody.prototype, "mifid2ExecutionAlgo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Mifid2ExecutionTrader" }),
        __metadata("design:type", String)
    ], PutAccountsAccountOrdersCustomerOrderIdRequestBody.prototype, "mifid2ExecutionTrader", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Order Type" }),
        __metadata("design:type", Number)
    ], PutAccountsAccountOrdersCustomerOrderIdRequestBody.prototype, "orderType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OrigCustomerOrderId" }),
        __metadata("design:type", String)
    ], PutAccountsAccountOrdersCustomerOrderIdRequestBody.prototype, "origCustomerOrderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Outside RTH" }),
        __metadata("design:type", Number)
    ], PutAccountsAccountOrdersCustomerOrderIdRequestBody.prototype, "outsideRth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Price" }),
        __metadata("design:type", Number)
    ], PutAccountsAccountOrdersCustomerOrderIdRequestBody.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Quantity" }),
        __metadata("design:type", Number)
    ], PutAccountsAccountOrdersCustomerOrderIdRequestBody.prototype, "quantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Side" }),
        __metadata("design:type", Number)
    ], PutAccountsAccountOrdersCustomerOrderIdRequestBody.prototype, "side", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Time in Force" }),
        __metadata("design:type", Number)
    ], PutAccountsAccountOrdersCustomerOrderIdRequestBody.prototype, "timeInForce", void 0);
    return PutAccountsAccountOrdersCustomerOrderIdRequestBody;
}(SpeakeasyBase));
export { PutAccountsAccountOrdersCustomerOrderIdRequestBody };
var PutAccountsAccountOrdersCustomerOrderId200ApplicationJson = /** @class */ (function (_super) {
    __extends(PutAccountsAccountOrdersCustomerOrderId200ApplicationJson, _super);
    function PutAccountsAccountOrdersCustomerOrderId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomerOrderId" }),
        __metadata("design:type", String)
    ], PutAccountsAccountOrdersCustomerOrderId200ApplicationJson.prototype, "customerOrderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OrderQty" }),
        __metadata("design:type", Number)
    ], PutAccountsAccountOrdersCustomerOrderId200ApplicationJson.prototype, "orderQty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OrderType" }),
        __metadata("design:type", Number)
    ], PutAccountsAccountOrdersCustomerOrderId200ApplicationJson.prototype, "orderType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Price" }),
        __metadata("design:type", String)
    ], PutAccountsAccountOrdersCustomerOrderId200ApplicationJson.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Side" }),
        __metadata("design:type", Number)
    ], PutAccountsAccountOrdersCustomerOrderId200ApplicationJson.prototype, "side", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], PutAccountsAccountOrdersCustomerOrderId200ApplicationJson.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Symbol" }),
        __metadata("design:type", Number)
    ], PutAccountsAccountOrdersCustomerOrderId200ApplicationJson.prototype, "symbol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Warning" }),
        __metadata("design:type", String)
    ], PutAccountsAccountOrdersCustomerOrderId200ApplicationJson.prototype, "warning", void 0);
    return PutAccountsAccountOrdersCustomerOrderId200ApplicationJson;
}(SpeakeasyBase));
export { PutAccountsAccountOrdersCustomerOrderId200ApplicationJson };
var PutAccountsAccountOrdersCustomerOrderIdRequest = /** @class */ (function (_super) {
    __extends(PutAccountsAccountOrdersCustomerOrderIdRequest, _super);
    function PutAccountsAccountOrdersCustomerOrderIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutAccountsAccountOrdersCustomerOrderIdPathParams)
    ], PutAccountsAccountOrdersCustomerOrderIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutAccountsAccountOrdersCustomerOrderIdRequestBody)
    ], PutAccountsAccountOrdersCustomerOrderIdRequest.prototype, "request", void 0);
    return PutAccountsAccountOrdersCustomerOrderIdRequest;
}(SpeakeasyBase));
export { PutAccountsAccountOrdersCustomerOrderIdRequest };
var PutAccountsAccountOrdersCustomerOrderIdResponse = /** @class */ (function (_super) {
    __extends(PutAccountsAccountOrdersCustomerOrderIdResponse, _super);
    function PutAccountsAccountOrdersCustomerOrderIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutAccountsAccountOrdersCustomerOrderIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: PutAccountsAccountOrdersCustomerOrderId200ApplicationJson }),
        __metadata("design:type", Array)
    ], PutAccountsAccountOrdersCustomerOrderIdResponse.prototype, "putAccountsAccountOrdersCustomerOrderId200ApplicationJsonObjects", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutAccountsAccountOrdersCustomerOrderIdResponse.prototype, "statusCode", void 0);
    return PutAccountsAccountOrdersCustomerOrderIdResponse;
}(SpeakeasyBase));
export { PutAccountsAccountOrdersCustomerOrderIdResponse };
