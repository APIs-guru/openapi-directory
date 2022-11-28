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
var GetDomainsQueryParams = /** @class */ (function (_super) {
    __extends(GetDomainsQueryParams, _super);
    function GetDomainsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetDomainsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetDomainsQueryParams.prototype, "pageSize", void 0);
    return GetDomainsQueryParams;
}(SpeakeasyBase));
export { GetDomainsQueryParams };
var GetDomainsSecurity = /** @class */ (function (_super) {
    __extends(GetDomainsSecurity, _super);
    function GetDomainsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetDomainsSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetDomainsSecurity.prototype, "oauth", void 0);
    return GetDomainsSecurity;
}(SpeakeasyBase));
export { GetDomainsSecurity };
var GetDomains200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDomains200ApplicationJson, _super);
    function GetDomains200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.Domain }),
        __metadata("design:type", Array)
    ], GetDomains200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetDomains200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetDomains200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetDomains200ApplicationJson.prototype, "results", void 0);
    return GetDomains200ApplicationJson;
}(SpeakeasyBase));
export { GetDomains200ApplicationJson };
var GetDomainsDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetDomainsDefaultApplicationJson, _super);
    function GetDomainsDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetDomainsDefaultApplicationJson.prototype, "errors", void 0);
    return GetDomainsDefaultApplicationJson;
}(SpeakeasyBase));
export { GetDomainsDefaultApplicationJson };
var GetDomainsRequest = /** @class */ (function (_super) {
    __extends(GetDomainsRequest, _super);
    function GetDomainsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomainsQueryParams)
    ], GetDomainsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomainsSecurity)
    ], GetDomainsRequest.prototype, "security", void 0);
    return GetDomainsRequest;
}(SpeakeasyBase));
export { GetDomainsRequest };
var GetDomainsResponse = /** @class */ (function (_super) {
    __extends(GetDomainsResponse, _super);
    function GetDomainsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDomainsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDomainsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomains200ApplicationJson)
    ], GetDomainsResponse.prototype, "getDomains200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomainsDefaultApplicationJson)
    ], GetDomainsResponse.prototype, "getDomainsDefaultApplicationJsonObject", void 0);
    return GetDomainsResponse;
}(SpeakeasyBase));
export { GetDomainsResponse };
