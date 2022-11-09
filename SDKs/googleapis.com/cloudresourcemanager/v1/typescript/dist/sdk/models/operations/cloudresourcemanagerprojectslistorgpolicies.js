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
var CloudresourcemanagerProjectsListOrgPoliciesPathParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsListOrgPoliciesPathParams, _super);
    function CloudresourcemanagerProjectsListOrgPoliciesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListOrgPoliciesPathParams.prototype, "resource", void 0);
    return CloudresourcemanagerProjectsListOrgPoliciesPathParams;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsListOrgPoliciesPathParams };
var CloudresourcemanagerProjectsListOrgPoliciesQueryParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsListOrgPoliciesQueryParams, _super);
    function CloudresourcemanagerProjectsListOrgPoliciesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListOrgPoliciesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListOrgPoliciesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListOrgPoliciesQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListOrgPoliciesQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListOrgPoliciesQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListOrgPoliciesQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListOrgPoliciesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudresourcemanagerProjectsListOrgPoliciesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListOrgPoliciesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListOrgPoliciesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListOrgPoliciesQueryParams.prototype, "uploadProtocol", void 0);
    return CloudresourcemanagerProjectsListOrgPoliciesQueryParams;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsListOrgPoliciesQueryParams };
var CloudresourcemanagerProjectsListOrgPoliciesSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsListOrgPoliciesSecurityOption1, _super);
    function CloudresourcemanagerProjectsListOrgPoliciesSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerProjectsListOrgPoliciesSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerProjectsListOrgPoliciesSecurityOption1.prototype, "oauth2c", void 0);
    return CloudresourcemanagerProjectsListOrgPoliciesSecurityOption1;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsListOrgPoliciesSecurityOption1 };
var CloudresourcemanagerProjectsListOrgPoliciesSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsListOrgPoliciesSecurityOption2, _super);
    function CloudresourcemanagerProjectsListOrgPoliciesSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerProjectsListOrgPoliciesSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerProjectsListOrgPoliciesSecurityOption2.prototype, "oauth2c", void 0);
    return CloudresourcemanagerProjectsListOrgPoliciesSecurityOption2;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsListOrgPoliciesSecurityOption2 };
var CloudresourcemanagerProjectsListOrgPoliciesSecurity = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsListOrgPoliciesSecurity, _super);
    function CloudresourcemanagerProjectsListOrgPoliciesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerProjectsListOrgPoliciesSecurityOption1)
    ], CloudresourcemanagerProjectsListOrgPoliciesSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerProjectsListOrgPoliciesSecurityOption2)
    ], CloudresourcemanagerProjectsListOrgPoliciesSecurity.prototype, "option2", void 0);
    return CloudresourcemanagerProjectsListOrgPoliciesSecurity;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsListOrgPoliciesSecurity };
var CloudresourcemanagerProjectsListOrgPoliciesRequest = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsListOrgPoliciesRequest, _super);
    function CloudresourcemanagerProjectsListOrgPoliciesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerProjectsListOrgPoliciesPathParams)
    ], CloudresourcemanagerProjectsListOrgPoliciesRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerProjectsListOrgPoliciesQueryParams)
    ], CloudresourcemanagerProjectsListOrgPoliciesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListOrgPoliciesRequest)
    ], CloudresourcemanagerProjectsListOrgPoliciesRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerProjectsListOrgPoliciesSecurity)
    ], CloudresourcemanagerProjectsListOrgPoliciesRequest.prototype, "security", void 0);
    return CloudresourcemanagerProjectsListOrgPoliciesRequest;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsListOrgPoliciesRequest };
var CloudresourcemanagerProjectsListOrgPoliciesResponse = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsListOrgPoliciesResponse, _super);
    function CloudresourcemanagerProjectsListOrgPoliciesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListOrgPoliciesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListOrgPoliciesResponse)
    ], CloudresourcemanagerProjectsListOrgPoliciesResponse.prototype, "listOrgPoliciesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudresourcemanagerProjectsListOrgPoliciesResponse.prototype, "statusCode", void 0);
    return CloudresourcemanagerProjectsListOrgPoliciesResponse;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsListOrgPoliciesResponse };
