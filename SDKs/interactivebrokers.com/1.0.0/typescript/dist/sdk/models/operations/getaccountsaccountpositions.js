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
var GetAccountsAccountPositionsPathParams = /** @class */ (function (_super) {
    __extends(GetAccountsAccountPositionsPathParams, _super);
    function GetAccountsAccountPositionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account" }),
        __metadata("design:type", String)
    ], GetAccountsAccountPositionsPathParams.prototype, "account", void 0);
    return GetAccountsAccountPositionsPathParams;
}(SpeakeasyBase));
export { GetAccountsAccountPositionsPathParams };
var GetAccountsAccountPositions200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAccountsAccountPositions200ApplicationJson, _super);
    function GetAccountsAccountPositions200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AverageCost" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountPositions200ApplicationJson.prototype, "averageCost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContractId" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountPositions200ApplicationJson.prototype, "contractId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Position" }),
        __metadata("design:type", Number)
    ], GetAccountsAccountPositions200ApplicationJson.prototype, "position", void 0);
    return GetAccountsAccountPositions200ApplicationJson;
}(SpeakeasyBase));
export { GetAccountsAccountPositions200ApplicationJson };
var GetAccountsAccountPositionsRequest = /** @class */ (function (_super) {
    __extends(GetAccountsAccountPositionsRequest, _super);
    function GetAccountsAccountPositionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAccountsAccountPositionsPathParams)
    ], GetAccountsAccountPositionsRequest.prototype, "pathParams", void 0);
    return GetAccountsAccountPositionsRequest;
}(SpeakeasyBase));
export { GetAccountsAccountPositionsRequest };
var GetAccountsAccountPositionsResponse = /** @class */ (function (_super) {
    __extends(GetAccountsAccountPositionsResponse, _super);
    function GetAccountsAccountPositionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAccountsAccountPositionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: GetAccountsAccountPositions200ApplicationJson }),
        __metadata("design:type", Array)
    ], GetAccountsAccountPositionsResponse.prototype, "getAccountsAccountPositions200ApplicationJsonObjects", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAccountsAccountPositionsResponse.prototype, "statusCode", void 0);
    return GetAccountsAccountPositionsResponse;
}(SpeakeasyBase));
export { GetAccountsAccountPositionsResponse };
