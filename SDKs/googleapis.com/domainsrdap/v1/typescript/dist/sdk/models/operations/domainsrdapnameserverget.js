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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var DomainsrdapNameserverGetPathParams = /** @class */ (function (_super) {
    __extends(DomainsrdapNameserverGetPathParams, _super);
    function DomainsrdapNameserverGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=nameserverId" }),
        __metadata("design:type", String)
    ], DomainsrdapNameserverGetPathParams.prototype, "nameserverId", void 0);
    return DomainsrdapNameserverGetPathParams;
}(SpeakeasyBase));
export { DomainsrdapNameserverGetPathParams };
var DomainsrdapNameserverGetQueryParams = /** @class */ (function (_super) {
    __extends(DomainsrdapNameserverGetQueryParams, _super);
    function DomainsrdapNameserverGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DomainsrdapNameserverGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DomainsrdapNameserverGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DomainsrdapNameserverGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DomainsrdapNameserverGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DomainsrdapNameserverGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DomainsrdapNameserverGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DomainsrdapNameserverGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DomainsrdapNameserverGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DomainsrdapNameserverGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DomainsrdapNameserverGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DomainsrdapNameserverGetQueryParams.prototype, "uploadProtocol", void 0);
    return DomainsrdapNameserverGetQueryParams;
}(SpeakeasyBase));
export { DomainsrdapNameserverGetQueryParams };
var DomainsrdapNameserverGetRequest = /** @class */ (function (_super) {
    __extends(DomainsrdapNameserverGetRequest, _super);
    function DomainsrdapNameserverGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DomainsrdapNameserverGetPathParams)
    ], DomainsrdapNameserverGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DomainsrdapNameserverGetQueryParams)
    ], DomainsrdapNameserverGetRequest.prototype, "queryParams", void 0);
    return DomainsrdapNameserverGetRequest;
}(SpeakeasyBase));
export { DomainsrdapNameserverGetRequest };
var DomainsrdapNameserverGetResponse = /** @class */ (function (_super) {
    __extends(DomainsrdapNameserverGetResponse, _super);
    function DomainsrdapNameserverGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DomainsrdapNameserverGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.RdapResponse)
    ], DomainsrdapNameserverGetResponse.prototype, "rdapResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DomainsrdapNameserverGetResponse.prototype, "statusCode", void 0);
    return DomainsrdapNameserverGetResponse;
}(SpeakeasyBase));
export { DomainsrdapNameserverGetResponse };
