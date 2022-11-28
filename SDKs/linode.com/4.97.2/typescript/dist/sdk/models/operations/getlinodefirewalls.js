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
var GetLinodeFirewallsPathParams = /** @class */ (function (_super) {
    __extends(GetLinodeFirewallsPathParams, _super);
    function GetLinodeFirewallsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" }),
        __metadata("design:type", Number)
    ], GetLinodeFirewallsPathParams.prototype, "linodeId", void 0);
    return GetLinodeFirewallsPathParams;
}(SpeakeasyBase));
export { GetLinodeFirewallsPathParams };
var GetLinodeFirewallsQueryParams = /** @class */ (function (_super) {
    __extends(GetLinodeFirewallsQueryParams, _super);
    function GetLinodeFirewallsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetLinodeFirewallsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetLinodeFirewallsQueryParams.prototype, "pageSize", void 0);
    return GetLinodeFirewallsQueryParams;
}(SpeakeasyBase));
export { GetLinodeFirewallsQueryParams };
var GetLinodeFirewallsSecurity = /** @class */ (function (_super) {
    __extends(GetLinodeFirewallsSecurity, _super);
    function GetLinodeFirewallsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetLinodeFirewallsSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetLinodeFirewallsSecurity.prototype, "oauth", void 0);
    return GetLinodeFirewallsSecurity;
}(SpeakeasyBase));
export { GetLinodeFirewallsSecurity };
var GetLinodeFirewalls200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLinodeFirewalls200ApplicationJson, _super);
    function GetLinodeFirewalls200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.Firewall }),
        __metadata("design:type", Array)
    ], GetLinodeFirewalls200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetLinodeFirewalls200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetLinodeFirewalls200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetLinodeFirewalls200ApplicationJson.prototype, "results", void 0);
    return GetLinodeFirewalls200ApplicationJson;
}(SpeakeasyBase));
export { GetLinodeFirewalls200ApplicationJson };
var GetLinodeFirewallsDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetLinodeFirewallsDefaultApplicationJson, _super);
    function GetLinodeFirewallsDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetLinodeFirewallsDefaultApplicationJson.prototype, "errors", void 0);
    return GetLinodeFirewallsDefaultApplicationJson;
}(SpeakeasyBase));
export { GetLinodeFirewallsDefaultApplicationJson };
var GetLinodeFirewallsRequest = /** @class */ (function (_super) {
    __extends(GetLinodeFirewallsRequest, _super);
    function GetLinodeFirewallsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeFirewallsPathParams)
    ], GetLinodeFirewallsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeFirewallsQueryParams)
    ], GetLinodeFirewallsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeFirewallsSecurity)
    ], GetLinodeFirewallsRequest.prototype, "security", void 0);
    return GetLinodeFirewallsRequest;
}(SpeakeasyBase));
export { GetLinodeFirewallsRequest };
var GetLinodeFirewallsResponse = /** @class */ (function (_super) {
    __extends(GetLinodeFirewallsResponse, _super);
    function GetLinodeFirewallsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLinodeFirewallsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLinodeFirewallsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeFirewalls200ApplicationJson)
    ], GetLinodeFirewallsResponse.prototype, "getLinodeFirewalls200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLinodeFirewallsDefaultApplicationJson)
    ], GetLinodeFirewallsResponse.prototype, "getLinodeFirewallsDefaultApplicationJsonObject", void 0);
    return GetLinodeFirewallsResponse;
}(SpeakeasyBase));
export { GetLinodeFirewallsResponse };
