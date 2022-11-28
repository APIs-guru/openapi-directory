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
var SiteVerificationWebResourceGetPathParams = /** @class */ (function (_super) {
    __extends(SiteVerificationWebResourceGetPathParams, _super);
    function SiteVerificationWebResourceGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], SiteVerificationWebResourceGetPathParams.prototype, "id", void 0);
    return SiteVerificationWebResourceGetPathParams;
}(SpeakeasyBase));
export { SiteVerificationWebResourceGetPathParams };
var SiteVerificationWebResourceGetQueryParams = /** @class */ (function (_super) {
    __extends(SiteVerificationWebResourceGetQueryParams, _super);
    function SiteVerificationWebResourceGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SiteVerificationWebResourceGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SiteVerificationWebResourceGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SiteVerificationWebResourceGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SiteVerificationWebResourceGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SiteVerificationWebResourceGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SiteVerificationWebResourceGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], SiteVerificationWebResourceGetQueryParams.prototype, "userIp", void 0);
    return SiteVerificationWebResourceGetQueryParams;
}(SpeakeasyBase));
export { SiteVerificationWebResourceGetQueryParams };
var SiteVerificationWebResourceGetSecurity = /** @class */ (function (_super) {
    __extends(SiteVerificationWebResourceGetSecurity, _super);
    function SiteVerificationWebResourceGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SiteVerificationWebResourceGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SiteVerificationWebResourceGetSecurity.prototype, "oauth2c", void 0);
    return SiteVerificationWebResourceGetSecurity;
}(SpeakeasyBase));
export { SiteVerificationWebResourceGetSecurity };
var SiteVerificationWebResourceGetRequest = /** @class */ (function (_super) {
    __extends(SiteVerificationWebResourceGetRequest, _super);
    function SiteVerificationWebResourceGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SiteVerificationWebResourceGetPathParams)
    ], SiteVerificationWebResourceGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SiteVerificationWebResourceGetQueryParams)
    ], SiteVerificationWebResourceGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SiteVerificationWebResourceGetSecurity)
    ], SiteVerificationWebResourceGetRequest.prototype, "security", void 0);
    return SiteVerificationWebResourceGetRequest;
}(SpeakeasyBase));
export { SiteVerificationWebResourceGetRequest };
var SiteVerificationWebResourceGetResponse = /** @class */ (function (_super) {
    __extends(SiteVerificationWebResourceGetResponse, _super);
    function SiteVerificationWebResourceGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SiteVerificationWebResourceGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SiteVerificationWebResourceResource)
    ], SiteVerificationWebResourceGetResponse.prototype, "siteVerificationWebResourceResource", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SiteVerificationWebResourceGetResponse.prototype, "statusCode", void 0);
    return SiteVerificationWebResourceGetResponse;
}(SpeakeasyBase));
export { SiteVerificationWebResourceGetResponse };
