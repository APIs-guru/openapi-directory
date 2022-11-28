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
var GetAccountsQueryParams = /** @class */ (function (_super) {
    __extends(GetAccountsQueryParams, _super);
    function GetAccountsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=account" }),
        __metadata("design:type", String)
    ], GetAccountsQueryParams.prototype, "account", void 0);
    return GetAccountsQueryParams;
}(SpeakeasyBase));
export { GetAccountsQueryParams };
var GetAccounts200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAccounts200ApplicationJson, _super);
    function GetAccounts200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accounts" }),
        __metadata("design:type", Array)
    ], GetAccounts200ApplicationJson.prototype, "accounts", void 0);
    return GetAccounts200ApplicationJson;
}(SpeakeasyBase));
export { GetAccounts200ApplicationJson };
var GetAccountsRequest = /** @class */ (function (_super) {
    __extends(GetAccountsRequest, _super);
    function GetAccountsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsQueryParams)
    ], GetAccountsRequest.prototype, "queryParams", void 0);
    return GetAccountsRequest;
}(SpeakeasyBase));
export { GetAccountsRequest };
var GetAccountsResponse = /** @class */ (function (_super) {
    __extends(GetAccountsResponse, _super);
    function GetAccountsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAccountsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccounts200ApplicationJson)
    ], GetAccountsResponse.prototype, "getAccounts200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAccountsResponse.prototype, "statusCode", void 0);
    return GetAccountsResponse;
}(SpeakeasyBase));
export { GetAccountsResponse };
