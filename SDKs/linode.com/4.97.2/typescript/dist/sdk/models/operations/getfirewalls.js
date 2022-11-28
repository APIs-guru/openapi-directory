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
export var GetFirewallsServerList = [
    "https://api.linode.com/v4",
];
var GetFirewallsQueryParams = /** @class */ (function (_super) {
    __extends(GetFirewallsQueryParams, _super);
    function GetFirewallsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetFirewallsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetFirewallsQueryParams.prototype, "pageSize", void 0);
    return GetFirewallsQueryParams;
}(SpeakeasyBase));
export { GetFirewallsQueryParams };
var GetFirewallsSecurity = /** @class */ (function (_super) {
    __extends(GetFirewallsSecurity, _super);
    function GetFirewallsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetFirewallsSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetFirewallsSecurity.prototype, "oauth", void 0);
    return GetFirewallsSecurity;
}(SpeakeasyBase));
export { GetFirewallsSecurity };
var GetFirewalls200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetFirewalls200ApplicationJson, _super);
    function GetFirewalls200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.Firewall }),
        __metadata("design:type", Array)
    ], GetFirewalls200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetFirewalls200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetFirewalls200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetFirewalls200ApplicationJson.prototype, "results", void 0);
    return GetFirewalls200ApplicationJson;
}(SpeakeasyBase));
export { GetFirewalls200ApplicationJson };
var GetFirewallsDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetFirewallsDefaultApplicationJson, _super);
    function GetFirewallsDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetFirewallsDefaultApplicationJson.prototype, "errors", void 0);
    return GetFirewallsDefaultApplicationJson;
}(SpeakeasyBase));
export { GetFirewallsDefaultApplicationJson };
var GetFirewallsRequest = /** @class */ (function (_super) {
    __extends(GetFirewallsRequest, _super);
    function GetFirewallsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFirewallsRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFirewallsQueryParams)
    ], GetFirewallsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFirewallsSecurity)
    ], GetFirewallsRequest.prototype, "security", void 0);
    return GetFirewallsRequest;
}(SpeakeasyBase));
export { GetFirewallsRequest };
var GetFirewallsResponse = /** @class */ (function (_super) {
    __extends(GetFirewallsResponse, _super);
    function GetFirewallsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFirewallsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFirewallsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFirewalls200ApplicationJson)
    ], GetFirewallsResponse.prototype, "getFirewalls200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFirewallsDefaultApplicationJson)
    ], GetFirewallsResponse.prototype, "getFirewallsDefaultApplicationJsonObject", void 0);
    return GetFirewallsResponse;
}(SpeakeasyBase));
export { GetFirewallsResponse };
