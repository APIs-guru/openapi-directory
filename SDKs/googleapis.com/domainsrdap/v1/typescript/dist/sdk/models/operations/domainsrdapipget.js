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
var DomainsrdapIpGetPathParams = /** @class */ (function (_super) {
    __extends(DomainsrdapIpGetPathParams, _super);
    function DomainsrdapIpGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ipId" }),
        __metadata("design:type", String)
    ], DomainsrdapIpGetPathParams.prototype, "ipId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ipId1" }),
        __metadata("design:type", String)
    ], DomainsrdapIpGetPathParams.prototype, "ipId1", void 0);
    return DomainsrdapIpGetPathParams;
}(SpeakeasyBase));
export { DomainsrdapIpGetPathParams };
var DomainsrdapIpGetQueryParams = /** @class */ (function (_super) {
    __extends(DomainsrdapIpGetQueryParams, _super);
    function DomainsrdapIpGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DomainsrdapIpGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DomainsrdapIpGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DomainsrdapIpGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DomainsrdapIpGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DomainsrdapIpGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DomainsrdapIpGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DomainsrdapIpGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DomainsrdapIpGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DomainsrdapIpGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DomainsrdapIpGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DomainsrdapIpGetQueryParams.prototype, "uploadProtocol", void 0);
    return DomainsrdapIpGetQueryParams;
}(SpeakeasyBase));
export { DomainsrdapIpGetQueryParams };
var DomainsrdapIpGetRequest = /** @class */ (function (_super) {
    __extends(DomainsrdapIpGetRequest, _super);
    function DomainsrdapIpGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DomainsrdapIpGetPathParams)
    ], DomainsrdapIpGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DomainsrdapIpGetQueryParams)
    ], DomainsrdapIpGetRequest.prototype, "queryParams", void 0);
    return DomainsrdapIpGetRequest;
}(SpeakeasyBase));
export { DomainsrdapIpGetRequest };
var DomainsrdapIpGetResponse = /** @class */ (function (_super) {
    __extends(DomainsrdapIpGetResponse, _super);
    function DomainsrdapIpGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DomainsrdapIpGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.RdapResponse)
    ], DomainsrdapIpGetResponse.prototype, "rdapResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DomainsrdapIpGetResponse.prototype, "statusCode", void 0);
    return DomainsrdapIpGetResponse;
}(SpeakeasyBase));
export { DomainsrdapIpGetResponse };
