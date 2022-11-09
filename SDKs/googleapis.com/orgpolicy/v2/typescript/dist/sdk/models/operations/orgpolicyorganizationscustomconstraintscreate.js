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
var OrgpolicyOrganizationsCustomConstraintsCreatePathParams = /** @class */ (function (_super) {
    __extends(OrgpolicyOrganizationsCustomConstraintsCreatePathParams, _super);
    function OrgpolicyOrganizationsCustomConstraintsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], OrgpolicyOrganizationsCustomConstraintsCreatePathParams.prototype, "parent", void 0);
    return OrgpolicyOrganizationsCustomConstraintsCreatePathParams;
}(SpeakeasyBase));
export { OrgpolicyOrganizationsCustomConstraintsCreatePathParams };
var OrgpolicyOrganizationsCustomConstraintsCreateQueryParams = /** @class */ (function (_super) {
    __extends(OrgpolicyOrganizationsCustomConstraintsCreateQueryParams, _super);
    function OrgpolicyOrganizationsCustomConstraintsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], OrgpolicyOrganizationsCustomConstraintsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], OrgpolicyOrganizationsCustomConstraintsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], OrgpolicyOrganizationsCustomConstraintsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], OrgpolicyOrganizationsCustomConstraintsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], OrgpolicyOrganizationsCustomConstraintsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], OrgpolicyOrganizationsCustomConstraintsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], OrgpolicyOrganizationsCustomConstraintsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], OrgpolicyOrganizationsCustomConstraintsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], OrgpolicyOrganizationsCustomConstraintsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], OrgpolicyOrganizationsCustomConstraintsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], OrgpolicyOrganizationsCustomConstraintsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return OrgpolicyOrganizationsCustomConstraintsCreateQueryParams;
}(SpeakeasyBase));
export { OrgpolicyOrganizationsCustomConstraintsCreateQueryParams };
var OrgpolicyOrganizationsCustomConstraintsCreateSecurity = /** @class */ (function (_super) {
    __extends(OrgpolicyOrganizationsCustomConstraintsCreateSecurity, _super);
    function OrgpolicyOrganizationsCustomConstraintsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], OrgpolicyOrganizationsCustomConstraintsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], OrgpolicyOrganizationsCustomConstraintsCreateSecurity.prototype, "oauth2c", void 0);
    return OrgpolicyOrganizationsCustomConstraintsCreateSecurity;
}(SpeakeasyBase));
export { OrgpolicyOrganizationsCustomConstraintsCreateSecurity };
var OrgpolicyOrganizationsCustomConstraintsCreateRequest = /** @class */ (function (_super) {
    __extends(OrgpolicyOrganizationsCustomConstraintsCreateRequest, _super);
    function OrgpolicyOrganizationsCustomConstraintsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", OrgpolicyOrganizationsCustomConstraintsCreatePathParams)
    ], OrgpolicyOrganizationsCustomConstraintsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OrgpolicyOrganizationsCustomConstraintsCreateQueryParams)
    ], OrgpolicyOrganizationsCustomConstraintsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudOrgpolicyV2CustomConstraint)
    ], OrgpolicyOrganizationsCustomConstraintsCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OrgpolicyOrganizationsCustomConstraintsCreateSecurity)
    ], OrgpolicyOrganizationsCustomConstraintsCreateRequest.prototype, "security", void 0);
    return OrgpolicyOrganizationsCustomConstraintsCreateRequest;
}(SpeakeasyBase));
export { OrgpolicyOrganizationsCustomConstraintsCreateRequest };
var OrgpolicyOrganizationsCustomConstraintsCreateResponse = /** @class */ (function (_super) {
    __extends(OrgpolicyOrganizationsCustomConstraintsCreateResponse, _super);
    function OrgpolicyOrganizationsCustomConstraintsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], OrgpolicyOrganizationsCustomConstraintsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleCloudOrgpolicyV2CustomConstraint)
    ], OrgpolicyOrganizationsCustomConstraintsCreateResponse.prototype, "googleCloudOrgpolicyV2CustomConstraint", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], OrgpolicyOrganizationsCustomConstraintsCreateResponse.prototype, "statusCode", void 0);
    return OrgpolicyOrganizationsCustomConstraintsCreateResponse;
}(SpeakeasyBase));
export { OrgpolicyOrganizationsCustomConstraintsCreateResponse };
