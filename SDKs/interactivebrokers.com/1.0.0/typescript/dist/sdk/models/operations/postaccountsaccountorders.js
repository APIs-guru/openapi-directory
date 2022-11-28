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
var PostAccountsAccountOrdersPathParams = /** @class */ (function (_super) {
    __extends(PostAccountsAccountOrdersPathParams, _super);
    function PostAccountsAccountOrdersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account" }),
        __metadata("design:type", String)
    ], PostAccountsAccountOrdersPathParams.prototype, "account", void 0);
    return PostAccountsAccountOrdersPathParams;
}(SpeakeasyBase));
export { PostAccountsAccountOrdersPathParams };
var PostAccountsAccountOrdersRequestBody = /** @class */ (function (_super) {
    __extends(PostAccountsAccountOrdersRequestBody, _super);
    function PostAccountsAccountOrdersRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Aux Price" }),
        __metadata("design:type", Number)
    ], PostAccountsAccountOrdersRequestBody.prototype, "auxPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContractId" }),
        __metadata("design:type", Number)
    ], PostAccountsAccountOrdersRequestBody.prototype, "contractId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], PostAccountsAccountOrdersRequestBody.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomerOrderId" }),
        __metadata("design:type", String)
    ], PostAccountsAccountOrdersRequestBody.prototype, "customerOrderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GermanHftAlgo" }),
        __metadata("design:type", Boolean)
    ], PostAccountsAccountOrdersRequestBody.prototype, "germanHftAlgo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstrumentType" }),
        __metadata("design:type", String)
    ], PostAccountsAccountOrdersRequestBody.prototype, "instrumentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ListingExchange" }),
        __metadata("design:type", String)
    ], PostAccountsAccountOrdersRequestBody.prototype, "listingExchange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Mifid2Algo" }),
        __metadata("design:type", String)
    ], PostAccountsAccountOrdersRequestBody.prototype, "mifid2Algo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Mifid2DecisionMaker" }),
        __metadata("design:type", String)
    ], PostAccountsAccountOrdersRequestBody.prototype, "mifid2DecisionMaker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Mifid2ExecutionAlgo" }),
        __metadata("design:type", String)
    ], PostAccountsAccountOrdersRequestBody.prototype, "mifid2ExecutionAlgo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Mifid2ExecutionTrader" }),
        __metadata("design:type", String)
    ], PostAccountsAccountOrdersRequestBody.prototype, "mifid2ExecutionTrader", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Order Type" }),
        __metadata("design:type", Number)
    ], PostAccountsAccountOrdersRequestBody.prototype, "orderType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OrderRestrictions" }),
        __metadata("design:type", Number)
    ], PostAccountsAccountOrdersRequestBody.prototype, "orderRestrictions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Outside RTH" }),
        __metadata("design:type", Number)
    ], PostAccountsAccountOrdersRequestBody.prototype, "outsideRth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Price" }),
        __metadata("design:type", Number)
    ], PostAccountsAccountOrdersRequestBody.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Quantity" }),
        __metadata("design:type", Number)
    ], PostAccountsAccountOrdersRequestBody.prototype, "quantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Side" }),
        __metadata("design:type", Number)
    ], PostAccountsAccountOrdersRequestBody.prototype, "side", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Ticker" }),
        __metadata("design:type", String)
    ], PostAccountsAccountOrdersRequestBody.prototype, "ticker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Time in Force" }),
        __metadata("design:type", Number)
    ], PostAccountsAccountOrdersRequestBody.prototype, "timeInForce", void 0);
    return PostAccountsAccountOrdersRequestBody;
}(SpeakeasyBase));
export { PostAccountsAccountOrdersRequestBody };
var PostAccountsAccountOrdersRequest = /** @class */ (function (_super) {
    __extends(PostAccountsAccountOrdersRequest, _super);
    function PostAccountsAccountOrdersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAccountsAccountOrdersPathParams)
    ], PostAccountsAccountOrdersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostAccountsAccountOrdersRequestBody)
    ], PostAccountsAccountOrdersRequest.prototype, "request", void 0);
    return PostAccountsAccountOrdersRequest;
}(SpeakeasyBase));
export { PostAccountsAccountOrdersRequest };
var PostAccountsAccountOrdersResponse = /** @class */ (function (_super) {
    __extends(PostAccountsAccountOrdersResponse, _super);
    function PostAccountsAccountOrdersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAccountsAccountOrdersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAccountsAccountOrdersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.OrderState }),
        __metadata("design:type", Array)
    ], PostAccountsAccountOrdersResponse.prototype, "orderStates", void 0);
    return PostAccountsAccountOrdersResponse;
}(SpeakeasyBase));
export { PostAccountsAccountOrdersResponse };
