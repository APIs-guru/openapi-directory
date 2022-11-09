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
var CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsPathParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsPathParams, _super);
    function CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsPathParams.prototype, "resource", void 0);
    return CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsPathParams;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsPathParams };
var CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsQueryParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsQueryParams, _super);
    function CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsQueryParams.prototype, "uploadProtocol", void 0);
    return CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsQueryParams;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsQueryParams };
var CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurityOption1, _super);
    function CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurityOption1.prototype, "oauth2c", void 0);
    return CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurityOption1;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurityOption1 };
var CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurityOption2, _super);
    function CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurityOption2.prototype, "oauth2c", void 0);
    return CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurityOption2;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurityOption2 };
var CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurity = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurity, _super);
    function CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurityOption1)
    ], CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurityOption2)
    ], CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurity.prototype, "option2", void 0);
    return CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurity;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurity };
var CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsRequest = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsRequest, _super);
    function CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsPathParams)
    ], CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsQueryParams)
    ], CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListAvailableOrgPolicyConstraintsRequest)
    ], CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsSecurity)
    ], CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsRequest.prototype, "security", void 0);
    return CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsRequest;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsRequest };
var CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsResponse = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsResponse, _super);
    function CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListAvailableOrgPolicyConstraintsResponse)
    ], CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsResponse.prototype, "listAvailableOrgPolicyConstraintsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsResponse.prototype, "statusCode", void 0);
    return CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsResponse;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsListAvailableOrgPolicyConstraintsResponse };
