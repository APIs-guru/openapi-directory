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
var SiteVerificationWebResourceListQueryParams = /** @class */ (function (_super) {
    __extends(SiteVerificationWebResourceListQueryParams, _super);
    function SiteVerificationWebResourceListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SiteVerificationWebResourceListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SiteVerificationWebResourceListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SiteVerificationWebResourceListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SiteVerificationWebResourceListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SiteVerificationWebResourceListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SiteVerificationWebResourceListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], SiteVerificationWebResourceListQueryParams.prototype, "userIp", void 0);
    return SiteVerificationWebResourceListQueryParams;
}(SpeakeasyBase));
export { SiteVerificationWebResourceListQueryParams };
var SiteVerificationWebResourceListSecurity = /** @class */ (function (_super) {
    __extends(SiteVerificationWebResourceListSecurity, _super);
    function SiteVerificationWebResourceListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SiteVerificationWebResourceListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SiteVerificationWebResourceListSecurity.prototype, "oauth2c", void 0);
    return SiteVerificationWebResourceListSecurity;
}(SpeakeasyBase));
export { SiteVerificationWebResourceListSecurity };
var SiteVerificationWebResourceListRequest = /** @class */ (function (_super) {
    __extends(SiteVerificationWebResourceListRequest, _super);
    function SiteVerificationWebResourceListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SiteVerificationWebResourceListQueryParams)
    ], SiteVerificationWebResourceListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SiteVerificationWebResourceListSecurity)
    ], SiteVerificationWebResourceListRequest.prototype, "security", void 0);
    return SiteVerificationWebResourceListRequest;
}(SpeakeasyBase));
export { SiteVerificationWebResourceListRequest };
var SiteVerificationWebResourceListResponse = /** @class */ (function (_super) {
    __extends(SiteVerificationWebResourceListResponse, _super);
    function SiteVerificationWebResourceListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SiteVerificationWebResourceListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SiteVerificationWebResourceListResponse)
    ], SiteVerificationWebResourceListResponse.prototype, "siteVerificationWebResourceListResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SiteVerificationWebResourceListResponse.prototype, "statusCode", void 0);
    return SiteVerificationWebResourceListResponse;
}(SpeakeasyBase));
export { SiteVerificationWebResourceListResponse };
