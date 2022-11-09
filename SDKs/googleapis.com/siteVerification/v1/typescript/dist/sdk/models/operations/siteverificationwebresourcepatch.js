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
var SiteVerificationWebResourcePatchPathParams = /** @class */ (function (_super) {
    __extends(SiteVerificationWebResourcePatchPathParams, _super);
    function SiteVerificationWebResourcePatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], SiteVerificationWebResourcePatchPathParams.prototype, "id", void 0);
    return SiteVerificationWebResourcePatchPathParams;
}(SpeakeasyBase));
export { SiteVerificationWebResourcePatchPathParams };
var SiteVerificationWebResourcePatchQueryParams = /** @class */ (function (_super) {
    __extends(SiteVerificationWebResourcePatchQueryParams, _super);
    function SiteVerificationWebResourcePatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SiteVerificationWebResourcePatchQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SiteVerificationWebResourcePatchQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SiteVerificationWebResourcePatchQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SiteVerificationWebResourcePatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SiteVerificationWebResourcePatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SiteVerificationWebResourcePatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], SiteVerificationWebResourcePatchQueryParams.prototype, "userIp", void 0);
    return SiteVerificationWebResourcePatchQueryParams;
}(SpeakeasyBase));
export { SiteVerificationWebResourcePatchQueryParams };
var SiteVerificationWebResourcePatchSecurity = /** @class */ (function (_super) {
    __extends(SiteVerificationWebResourcePatchSecurity, _super);
    function SiteVerificationWebResourcePatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SiteVerificationWebResourcePatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SiteVerificationWebResourcePatchSecurity.prototype, "oauth2c", void 0);
    return SiteVerificationWebResourcePatchSecurity;
}(SpeakeasyBase));
export { SiteVerificationWebResourcePatchSecurity };
var SiteVerificationWebResourcePatchRequest = /** @class */ (function (_super) {
    __extends(SiteVerificationWebResourcePatchRequest, _super);
    function SiteVerificationWebResourcePatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SiteVerificationWebResourcePatchPathParams)
    ], SiteVerificationWebResourcePatchRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SiteVerificationWebResourcePatchQueryParams)
    ], SiteVerificationWebResourcePatchRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SiteVerificationWebResourceResource)
    ], SiteVerificationWebResourcePatchRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SiteVerificationWebResourcePatchSecurity)
    ], SiteVerificationWebResourcePatchRequest.prototype, "security", void 0);
    return SiteVerificationWebResourcePatchRequest;
}(SpeakeasyBase));
export { SiteVerificationWebResourcePatchRequest };
var SiteVerificationWebResourcePatchResponse = /** @class */ (function (_super) {
    __extends(SiteVerificationWebResourcePatchResponse, _super);
    function SiteVerificationWebResourcePatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SiteVerificationWebResourcePatchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SiteVerificationWebResourceResource)
    ], SiteVerificationWebResourcePatchResponse.prototype, "siteVerificationWebResourceResource", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SiteVerificationWebResourcePatchResponse.prototype, "statusCode", void 0);
    return SiteVerificationWebResourcePatchResponse;
}(SpeakeasyBase));
export { SiteVerificationWebResourcePatchResponse };
