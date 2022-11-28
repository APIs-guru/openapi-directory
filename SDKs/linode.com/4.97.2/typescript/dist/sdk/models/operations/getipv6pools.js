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
var GetIPv6PoolsQueryParams = /** @class */ (function (_super) {
    __extends(GetIPv6PoolsQueryParams, _super);
    function GetIPv6PoolsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetIPv6PoolsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetIPv6PoolsQueryParams.prototype, "pageSize", void 0);
    return GetIPv6PoolsQueryParams;
}(SpeakeasyBase));
export { GetIPv6PoolsQueryParams };
var GetIPv6PoolsSecurity = /** @class */ (function (_super) {
    __extends(GetIPv6PoolsSecurity, _super);
    function GetIPv6PoolsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetIPv6PoolsSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetIPv6PoolsSecurity.prototype, "oauth", void 0);
    return GetIPv6PoolsSecurity;
}(SpeakeasyBase));
export { GetIPv6PoolsSecurity };
var GetIPv6Pools200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetIPv6Pools200ApplicationJson, _super);
    function GetIPv6Pools200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.IPv6Pool }),
        __metadata("design:type", Array)
    ], GetIPv6Pools200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetIPv6Pools200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetIPv6Pools200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetIPv6Pools200ApplicationJson.prototype, "results", void 0);
    return GetIPv6Pools200ApplicationJson;
}(SpeakeasyBase));
export { GetIPv6Pools200ApplicationJson };
var GetIPv6PoolsDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetIPv6PoolsDefaultApplicationJson, _super);
    function GetIPv6PoolsDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetIPv6PoolsDefaultApplicationJson.prototype, "errors", void 0);
    return GetIPv6PoolsDefaultApplicationJson;
}(SpeakeasyBase));
export { GetIPv6PoolsDefaultApplicationJson };
var GetIPv6PoolsRequest = /** @class */ (function (_super) {
    __extends(GetIPv6PoolsRequest, _super);
    function GetIPv6PoolsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetIPv6PoolsQueryParams)
    ], GetIPv6PoolsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetIPv6PoolsSecurity)
    ], GetIPv6PoolsRequest.prototype, "security", void 0);
    return GetIPv6PoolsRequest;
}(SpeakeasyBase));
export { GetIPv6PoolsRequest };
var GetIPv6PoolsResponse = /** @class */ (function (_super) {
    __extends(GetIPv6PoolsResponse, _super);
    function GetIPv6PoolsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetIPv6PoolsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetIPv6PoolsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetIPv6Pools200ApplicationJson)
    ], GetIPv6PoolsResponse.prototype, "getIPv6Pools200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetIPv6PoolsDefaultApplicationJson)
    ], GetIPv6PoolsResponse.prototype, "getIPv6PoolsDefaultApplicationJsonObject", void 0);
    return GetIPv6PoolsResponse;
}(SpeakeasyBase));
export { GetIPv6PoolsResponse };
