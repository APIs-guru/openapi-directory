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
var DeploymentmanagerDeploymentsListPathParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsListPathParams, _super);
    function DeploymentmanagerDeploymentsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsListPathParams.prototype, "project", void 0);
    return DeploymentmanagerDeploymentsListPathParams;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsListPathParams };
var DeploymentmanagerDeploymentsListQueryParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsListQueryParams, _super);
    function DeploymentmanagerDeploymentsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsListQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DeploymentmanagerDeploymentsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DeploymentmanagerDeploymentsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsListQueryParams.prototype, "uploadProtocol", void 0);
    return DeploymentmanagerDeploymentsListQueryParams;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsListQueryParams };
var DeploymentmanagerDeploymentsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsListSecurityOption1, _super);
    function DeploymentmanagerDeploymentsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerDeploymentsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerDeploymentsListSecurityOption1.prototype, "oauth2c", void 0);
    return DeploymentmanagerDeploymentsListSecurityOption1;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsListSecurityOption1 };
var DeploymentmanagerDeploymentsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsListSecurityOption2, _super);
    function DeploymentmanagerDeploymentsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerDeploymentsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerDeploymentsListSecurityOption2.prototype, "oauth2c", void 0);
    return DeploymentmanagerDeploymentsListSecurityOption2;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsListSecurityOption2 };
var DeploymentmanagerDeploymentsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsListSecurityOption3, _super);
    function DeploymentmanagerDeploymentsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerDeploymentsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerDeploymentsListSecurityOption3.prototype, "oauth2c", void 0);
    return DeploymentmanagerDeploymentsListSecurityOption3;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsListSecurityOption3 };
var DeploymentmanagerDeploymentsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsListSecurityOption4, _super);
    function DeploymentmanagerDeploymentsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerDeploymentsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerDeploymentsListSecurityOption4.prototype, "oauth2c", void 0);
    return DeploymentmanagerDeploymentsListSecurityOption4;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsListSecurityOption4 };
var DeploymentmanagerDeploymentsListSecurity = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsListSecurity, _super);
    function DeploymentmanagerDeploymentsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerDeploymentsListSecurityOption1)
    ], DeploymentmanagerDeploymentsListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerDeploymentsListSecurityOption2)
    ], DeploymentmanagerDeploymentsListSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerDeploymentsListSecurityOption3)
    ], DeploymentmanagerDeploymentsListSecurity.prototype, "option3", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerDeploymentsListSecurityOption4)
    ], DeploymentmanagerDeploymentsListSecurity.prototype, "option4", void 0);
    return DeploymentmanagerDeploymentsListSecurity;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsListSecurity };
var DeploymentmanagerDeploymentsListRequest = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsListRequest, _super);
    function DeploymentmanagerDeploymentsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerDeploymentsListPathParams)
    ], DeploymentmanagerDeploymentsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerDeploymentsListQueryParams)
    ], DeploymentmanagerDeploymentsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerDeploymentsListSecurity)
    ], DeploymentmanagerDeploymentsListRequest.prototype, "security", void 0);
    return DeploymentmanagerDeploymentsListRequest;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsListRequest };
var DeploymentmanagerDeploymentsListResponse = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsListResponse, _super);
    function DeploymentmanagerDeploymentsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DeploymentsListResponse)
    ], DeploymentmanagerDeploymentsListResponse.prototype, "deploymentsListResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeploymentmanagerDeploymentsListResponse.prototype, "statusCode", void 0);
    return DeploymentmanagerDeploymentsListResponse;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsListResponse };
