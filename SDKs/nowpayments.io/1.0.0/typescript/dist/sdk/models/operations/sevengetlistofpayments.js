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
var SevenGetListOfPaymentsQueryParams = /** @class */ (function (_super) {
    __extends(SevenGetListOfPaymentsQueryParams, _super);
    function SevenGetListOfPaymentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateFrom" }),
        __metadata("design:type", String)
    ], SevenGetListOfPaymentsQueryParams.prototype, "dateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateTo" }),
        __metadata("design:type", String)
    ], SevenGetListOfPaymentsQueryParams.prototype, "dateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", String)
    ], SevenGetListOfPaymentsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], SevenGetListOfPaymentsQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", String)
    ], SevenGetListOfPaymentsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" }),
        __metadata("design:type", String)
    ], SevenGetListOfPaymentsQueryParams.prototype, "sortBy", void 0);
    return SevenGetListOfPaymentsQueryParams;
}(SpeakeasyBase));
export { SevenGetListOfPaymentsQueryParams };
var SevenGetListOfPayments200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(SevenGetListOfPayments200ApplicationJsonData, _super);
    function SevenGetListOfPayments200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actually_paid" }),
        __metadata("design:type", Number)
    ], SevenGetListOfPayments200ApplicationJsonData.prototype, "actuallyPaid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order_description" }),
        __metadata("design:type", String)
    ], SevenGetListOfPayments200ApplicationJsonData.prototype, "orderDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order_id" }),
        __metadata("design:type", String)
    ], SevenGetListOfPayments200ApplicationJsonData.prototype, "orderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outcome_amount" }),
        __metadata("design:type", Number)
    ], SevenGetListOfPayments200ApplicationJsonData.prototype, "outcomeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outcome_currency" }),
        __metadata("design:type", String)
    ], SevenGetListOfPayments200ApplicationJsonData.prototype, "outcomeCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pay_address" }),
        __metadata("design:type", String)
    ], SevenGetListOfPayments200ApplicationJsonData.prototype, "payAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pay_amount" }),
        __metadata("design:type", Number)
    ], SevenGetListOfPayments200ApplicationJsonData.prototype, "payAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pay_currency" }),
        __metadata("design:type", String)
    ], SevenGetListOfPayments200ApplicationJsonData.prototype, "payCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payment_id" }),
        __metadata("design:type", Number)
    ], SevenGetListOfPayments200ApplicationJsonData.prototype, "paymentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payment_status" }),
        __metadata("design:type", String)
    ], SevenGetListOfPayments200ApplicationJsonData.prototype, "paymentStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_amount" }),
        __metadata("design:type", Number)
    ], SevenGetListOfPayments200ApplicationJsonData.prototype, "priceAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_currency" }),
        __metadata("design:type", String)
    ], SevenGetListOfPayments200ApplicationJsonData.prototype, "priceCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purchase_id" }),
        __metadata("design:type", String)
    ], SevenGetListOfPayments200ApplicationJsonData.prototype, "purchaseId", void 0);
    return SevenGetListOfPayments200ApplicationJsonData;
}(SpeakeasyBase));
export { SevenGetListOfPayments200ApplicationJsonData };
var SevenGetListOfPayments200ApplicationJson = /** @class */ (function (_super) {
    __extends(SevenGetListOfPayments200ApplicationJson, _super);
    function SevenGetListOfPayments200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: SevenGetListOfPayments200ApplicationJsonData }),
        __metadata("design:type", Array)
    ], SevenGetListOfPayments200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limit" }),
        __metadata("design:type", Number)
    ], SevenGetListOfPayments200ApplicationJson.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], SevenGetListOfPayments200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pagesCount" }),
        __metadata("design:type", Number)
    ], SevenGetListOfPayments200ApplicationJson.prototype, "pagesCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], SevenGetListOfPayments200ApplicationJson.prototype, "total", void 0);
    return SevenGetListOfPayments200ApplicationJson;
}(SpeakeasyBase));
export { SevenGetListOfPayments200ApplicationJson };
var SevenGetListOfPaymentsRequest = /** @class */ (function (_super) {
    __extends(SevenGetListOfPaymentsRequest, _super);
    function SevenGetListOfPaymentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SevenGetListOfPaymentsQueryParams)
    ], SevenGetListOfPaymentsRequest.prototype, "queryParams", void 0);
    return SevenGetListOfPaymentsRequest;
}(SpeakeasyBase));
export { SevenGetListOfPaymentsRequest };
var SevenGetListOfPaymentsResponse = /** @class */ (function (_super) {
    __extends(SevenGetListOfPaymentsResponse, _super);
    function SevenGetListOfPaymentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SevenGetListOfPayments200ApplicationJson)
    ], SevenGetListOfPaymentsResponse.prototype, "sevenGetListOfPayments200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SevenGetListOfPaymentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], SevenGetListOfPaymentsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SevenGetListOfPaymentsResponse.prototype, "statusCode", void 0);
    return SevenGetListOfPaymentsResponse;
}(SpeakeasyBase));
export { SevenGetListOfPaymentsResponse };
