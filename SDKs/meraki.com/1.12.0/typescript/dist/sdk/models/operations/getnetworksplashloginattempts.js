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
var GetNetworkSplashLoginAttemptsPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkSplashLoginAttemptsPathParams, _super);
    function GetNetworkSplashLoginAttemptsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkSplashLoginAttemptsPathParams.prototype, "networkId", void 0);
    return GetNetworkSplashLoginAttemptsPathParams;
}(SpeakeasyBase));
export { GetNetworkSplashLoginAttemptsPathParams };
var GetNetworkSplashLoginAttemptsQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworkSplashLoginAttemptsQueryParams, _super);
    function GetNetworkSplashLoginAttemptsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=loginIdentifier" }),
        __metadata("design:type", String)
    ], GetNetworkSplashLoginAttemptsQueryParams.prototype, "loginIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ssidNumber" }),
        __metadata("design:type", Number)
    ], GetNetworkSplashLoginAttemptsQueryParams.prototype, "ssidNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timespan" }),
        __metadata("design:type", Number)
    ], GetNetworkSplashLoginAttemptsQueryParams.prototype, "timespan", void 0);
    return GetNetworkSplashLoginAttemptsQueryParams;
}(SpeakeasyBase));
export { GetNetworkSplashLoginAttemptsQueryParams };
var GetNetworkSplashLoginAttemptsRequest = /** @class */ (function (_super) {
    __extends(GetNetworkSplashLoginAttemptsRequest, _super);
    function GetNetworkSplashLoginAttemptsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkSplashLoginAttemptsPathParams)
    ], GetNetworkSplashLoginAttemptsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkSplashLoginAttemptsQueryParams)
    ], GetNetworkSplashLoginAttemptsRequest.prototype, "queryParams", void 0);
    return GetNetworkSplashLoginAttemptsRequest;
}(SpeakeasyBase));
export { GetNetworkSplashLoginAttemptsRequest };
var GetNetworkSplashLoginAttemptsResponse = /** @class */ (function (_super) {
    __extends(GetNetworkSplashLoginAttemptsResponse, _super);
    function GetNetworkSplashLoginAttemptsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNetworkSplashLoginAttemptsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNetworkSplashLoginAttemptsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkSplashLoginAttemptsResponse.prototype, "getNetworkSplashLoginAttempts200ApplicationJsonObject", void 0);
    return GetNetworkSplashLoginAttemptsResponse;
}(SpeakeasyBase));
export { GetNetworkSplashLoginAttemptsResponse };
