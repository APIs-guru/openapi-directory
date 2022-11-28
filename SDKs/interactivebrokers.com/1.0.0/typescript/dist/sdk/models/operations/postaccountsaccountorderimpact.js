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
var PostAccountsAccountOrderImpactPathParams = /** @class */ (function (_super) {
    __extends(PostAccountsAccountOrderImpactPathParams, _super);
    function PostAccountsAccountOrderImpactPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account" }),
        __metadata("design:type", String)
    ], PostAccountsAccountOrderImpactPathParams.prototype, "account", void 0);
    return PostAccountsAccountOrderImpactPathParams;
}(SpeakeasyBase));
export { PostAccountsAccountOrderImpactPathParams };
var PostAccountsAccountOrderImpactRequestBody = /** @class */ (function (_super) {
    __extends(PostAccountsAccountOrderImpactRequestBody, _super);
    function PostAccountsAccountOrderImpactRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Aux Price" }),
        __metadata("design:type", Number)
    ], PostAccountsAccountOrderImpactRequestBody.prototype, "auxPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContractId" }),
        __metadata("design:type", Number)
    ], PostAccountsAccountOrderImpactRequestBody.prototype, "contractId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], PostAccountsAccountOrderImpactRequestBody.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomerOrderId" }),
        __metadata("design:type", String)
    ], PostAccountsAccountOrderImpactRequestBody.prototype, "customerOrderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstrumentType" }),
        __metadata("design:type", String)
    ], PostAccountsAccountOrderImpactRequestBody.prototype, "instrumentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ListingExchange" }),
        __metadata("design:type", String)
    ], PostAccountsAccountOrderImpactRequestBody.prototype, "listingExchange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Order Type" }),
        __metadata("design:type", Number)
    ], PostAccountsAccountOrderImpactRequestBody.prototype, "orderType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Price" }),
        __metadata("design:type", Number)
    ], PostAccountsAccountOrderImpactRequestBody.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Quantity" }),
        __metadata("design:type", Number)
    ], PostAccountsAccountOrderImpactRequestBody.prototype, "quantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Side" }),
        __metadata("design:type", Number)
    ], PostAccountsAccountOrderImpactRequestBody.prototype, "side", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Ticker" }),
        __metadata("design:type", String)
    ], PostAccountsAccountOrderImpactRequestBody.prototype, "ticker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Time in Force" }),
        __metadata("design:type", Number)
    ], PostAccountsAccountOrderImpactRequestBody.prototype, "timeInForce", void 0);
    return PostAccountsAccountOrderImpactRequestBody;
}(SpeakeasyBase));
export { PostAccountsAccountOrderImpactRequestBody };
var PostAccountsAccountOrderImpact200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostAccountsAccountOrderImpact200ApplicationJson, _super);
    function PostAccountsAccountOrderImpact200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Commission" }),
        __metadata("design:type", Number)
    ], PostAccountsAccountOrderImpact200ApplicationJson.prototype, "commission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CommissionsCurrency" }),
        __metadata("design:type", String)
    ], PostAccountsAccountOrderImpact200ApplicationJson.prototype, "commissionsCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EquityWithLoan" }),
        __metadata("design:type", Number)
    ], PostAccountsAccountOrderImpact200ApplicationJson.prototype, "equityWithLoan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InitMargin" }),
        __metadata("design:type", Number)
    ], PostAccountsAccountOrderImpact200ApplicationJson.prototype, "initMargin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InitMarginBefore" }),
        __metadata("design:type", Number)
    ], PostAccountsAccountOrderImpact200ApplicationJson.prototype, "initMarginBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaintMargin" }),
        __metadata("design:type", Number)
    ], PostAccountsAccountOrderImpact200ApplicationJson.prototype, "maintMargin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaintMarginBefore" }),
        __metadata("design:type", Number)
    ], PostAccountsAccountOrderImpact200ApplicationJson.prototype, "maintMarginBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MarginCurrency" }),
        __metadata("design:type", String)
    ], PostAccountsAccountOrderImpact200ApplicationJson.prototype, "marginCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxCommissions" }),
        __metadata("design:type", Number)
    ], PostAccountsAccountOrderImpact200ApplicationJson.prototype, "maxCommissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinCommissions" }),
        __metadata("design:type", Number)
    ], PostAccountsAccountOrderImpact200ApplicationJson.prototype, "minCommissions", void 0);
    return PostAccountsAccountOrderImpact200ApplicationJson;
}(SpeakeasyBase));
export { PostAccountsAccountOrderImpact200ApplicationJson };
var PostAccountsAccountOrderImpactRequest = /** @class */ (function (_super) {
    __extends(PostAccountsAccountOrderImpactRequest, _super);
    function PostAccountsAccountOrderImpactRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAccountsAccountOrderImpactPathParams)
    ], PostAccountsAccountOrderImpactRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostAccountsAccountOrderImpactRequestBody)
    ], PostAccountsAccountOrderImpactRequest.prototype, "request", void 0);
    return PostAccountsAccountOrderImpactRequest;
}(SpeakeasyBase));
export { PostAccountsAccountOrderImpactRequest };
var PostAccountsAccountOrderImpactResponse = /** @class */ (function (_super) {
    __extends(PostAccountsAccountOrderImpactResponse, _super);
    function PostAccountsAccountOrderImpactResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAccountsAccountOrderImpactResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAccountsAccountOrderImpact200ApplicationJson)
    ], PostAccountsAccountOrderImpactResponse.prototype, "postAccountsAccountOrderImpact200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAccountsAccountOrderImpactResponse.prototype, "statusCode", void 0);
    return PostAccountsAccountOrderImpactResponse;
}(SpeakeasyBase));
export { PostAccountsAccountOrderImpactResponse };
