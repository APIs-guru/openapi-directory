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
export var TopUpAccountBalanceServerList = [
    "https://rest.nexmo.com",
];
var TopUpAccountBalanceQueryParams = /** @class */ (function (_super) {
    __extends(TopUpAccountBalanceQueryParams, _super);
    function TopUpAccountBalanceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], TopUpAccountBalanceQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_secret" }),
        __metadata("design:type", String)
    ], TopUpAccountBalanceQueryParams.prototype, "apiSecret", void 0);
    return TopUpAccountBalanceQueryParams;
}(SpeakeasyBase));
export { TopUpAccountBalanceQueryParams };
var TopUpAccountBalanceRequest = /** @class */ (function (_super) {
    __extends(TopUpAccountBalanceRequest, _super);
    function TopUpAccountBalanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TopUpAccountBalanceRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TopUpAccountBalanceQueryParams)
    ], TopUpAccountBalanceRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.TopupRequest)
    ], TopUpAccountBalanceRequest.prototype, "request", void 0);
    return TopUpAccountBalanceRequest;
}(SpeakeasyBase));
export { TopUpAccountBalanceRequest };
var TopUpAccountBalanceResponse = /** @class */ (function (_super) {
    __extends(TopUpAccountBalanceResponse, _super);
    function TopUpAccountBalanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], TopUpAccountBalanceResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TopUpAccountBalanceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TopUpAccountBalanceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Success)
    ], TopUpAccountBalanceResponse.prototype, "success", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], TopUpAccountBalanceResponse.prototype, "topUpAccountBalance401ApplicationJsonOneOf", void 0);
    return TopUpAccountBalanceResponse;
}(SpeakeasyBase));
export { TopUpAccountBalanceResponse };
