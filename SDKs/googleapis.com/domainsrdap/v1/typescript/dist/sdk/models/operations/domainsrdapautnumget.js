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
var DomainsrdapAutnumGetPathParams = /** @class */ (function (_super) {
    __extends(DomainsrdapAutnumGetPathParams, _super);
    function DomainsrdapAutnumGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=autnumId" }),
        __metadata("design:type", String)
    ], DomainsrdapAutnumGetPathParams.prototype, "autnumId", void 0);
    return DomainsrdapAutnumGetPathParams;
}(SpeakeasyBase));
export { DomainsrdapAutnumGetPathParams };
var DomainsrdapAutnumGetQueryParams = /** @class */ (function (_super) {
    __extends(DomainsrdapAutnumGetQueryParams, _super);
    function DomainsrdapAutnumGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DomainsrdapAutnumGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DomainsrdapAutnumGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DomainsrdapAutnumGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DomainsrdapAutnumGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DomainsrdapAutnumGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DomainsrdapAutnumGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DomainsrdapAutnumGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DomainsrdapAutnumGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DomainsrdapAutnumGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DomainsrdapAutnumGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DomainsrdapAutnumGetQueryParams.prototype, "uploadProtocol", void 0);
    return DomainsrdapAutnumGetQueryParams;
}(SpeakeasyBase));
export { DomainsrdapAutnumGetQueryParams };
var DomainsrdapAutnumGetRequest = /** @class */ (function (_super) {
    __extends(DomainsrdapAutnumGetRequest, _super);
    function DomainsrdapAutnumGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DomainsrdapAutnumGetPathParams)
    ], DomainsrdapAutnumGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DomainsrdapAutnumGetQueryParams)
    ], DomainsrdapAutnumGetRequest.prototype, "queryParams", void 0);
    return DomainsrdapAutnumGetRequest;
}(SpeakeasyBase));
export { DomainsrdapAutnumGetRequest };
var DomainsrdapAutnumGetResponse = /** @class */ (function (_super) {
    __extends(DomainsrdapAutnumGetResponse, _super);
    function DomainsrdapAutnumGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DomainsrdapAutnumGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.RdapResponse)
    ], DomainsrdapAutnumGetResponse.prototype, "rdapResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DomainsrdapAutnumGetResponse.prototype, "statusCode", void 0);
    return DomainsrdapAutnumGetResponse;
}(SpeakeasyBase));
export { DomainsrdapAutnumGetResponse };
