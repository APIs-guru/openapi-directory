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
var OrgpolicyProjectsPoliciesGetPathParams = /** @class */ (function (_super) {
    __extends(OrgpolicyProjectsPoliciesGetPathParams, _super);
    function OrgpolicyProjectsPoliciesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesGetPathParams.prototype, "name", void 0);
    return OrgpolicyProjectsPoliciesGetPathParams;
}(SpeakeasyBase));
export { OrgpolicyProjectsPoliciesGetPathParams };
var OrgpolicyProjectsPoliciesGetQueryParams = /** @class */ (function (_super) {
    __extends(OrgpolicyProjectsPoliciesGetQueryParams, _super);
    function OrgpolicyProjectsPoliciesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], OrgpolicyProjectsPoliciesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesGetQueryParams.prototype, "uploadProtocol", void 0);
    return OrgpolicyProjectsPoliciesGetQueryParams;
}(SpeakeasyBase));
export { OrgpolicyProjectsPoliciesGetQueryParams };
var OrgpolicyProjectsPoliciesGetSecurity = /** @class */ (function (_super) {
    __extends(OrgpolicyProjectsPoliciesGetSecurity, _super);
    function OrgpolicyProjectsPoliciesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], OrgpolicyProjectsPoliciesGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], OrgpolicyProjectsPoliciesGetSecurity.prototype, "oauth2c", void 0);
    return OrgpolicyProjectsPoliciesGetSecurity;
}(SpeakeasyBase));
export { OrgpolicyProjectsPoliciesGetSecurity };
var OrgpolicyProjectsPoliciesGetRequest = /** @class */ (function (_super) {
    __extends(OrgpolicyProjectsPoliciesGetRequest, _super);
    function OrgpolicyProjectsPoliciesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", OrgpolicyProjectsPoliciesGetPathParams)
    ], OrgpolicyProjectsPoliciesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OrgpolicyProjectsPoliciesGetQueryParams)
    ], OrgpolicyProjectsPoliciesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OrgpolicyProjectsPoliciesGetSecurity)
    ], OrgpolicyProjectsPoliciesGetRequest.prototype, "security", void 0);
    return OrgpolicyProjectsPoliciesGetRequest;
}(SpeakeasyBase));
export { OrgpolicyProjectsPoliciesGetRequest };
var OrgpolicyProjectsPoliciesGetResponse = /** @class */ (function (_super) {
    __extends(OrgpolicyProjectsPoliciesGetResponse, _super);
    function OrgpolicyProjectsPoliciesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], OrgpolicyProjectsPoliciesGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleCloudOrgpolicyV2Policy)
    ], OrgpolicyProjectsPoliciesGetResponse.prototype, "googleCloudOrgpolicyV2Policy", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], OrgpolicyProjectsPoliciesGetResponse.prototype, "statusCode", void 0);
    return OrgpolicyProjectsPoliciesGetResponse;
}(SpeakeasyBase));
export { OrgpolicyProjectsPoliciesGetResponse };
