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
var DeploymentmanagerResourcesListPathParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerResourcesListPathParams, _super);
    function DeploymentmanagerResourcesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=deployment" }),
        __metadata("design:type", String)
    ], DeploymentmanagerResourcesListPathParams.prototype, "deployment", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DeploymentmanagerResourcesListPathParams.prototype, "project", void 0);
    return DeploymentmanagerResourcesListPathParams;
}(SpeakeasyBase));
export { DeploymentmanagerResourcesListPathParams };
var DeploymentmanagerResourcesListQueryParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerResourcesListQueryParams, _super);
    function DeploymentmanagerResourcesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DeploymentmanagerResourcesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerResourcesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DeploymentmanagerResourcesListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DeploymentmanagerResourcesListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DeploymentmanagerResourcesListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DeploymentmanagerResourcesListQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DeploymentmanagerResourcesListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DeploymentmanagerResourcesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerResourcesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], DeploymentmanagerResourcesListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DeploymentmanagerResourcesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DeploymentmanagerResourcesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DeploymentmanagerResourcesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DeploymentmanagerResourcesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DeploymentmanagerResourcesListQueryParams.prototype, "uploadProtocol", void 0);
    return DeploymentmanagerResourcesListQueryParams;
}(SpeakeasyBase));
export { DeploymentmanagerResourcesListQueryParams };
var DeploymentmanagerResourcesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerResourcesListSecurityOption1, _super);
    function DeploymentmanagerResourcesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerResourcesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerResourcesListSecurityOption1.prototype, "oauth2c", void 0);
    return DeploymentmanagerResourcesListSecurityOption1;
}(SpeakeasyBase));
export { DeploymentmanagerResourcesListSecurityOption1 };
var DeploymentmanagerResourcesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerResourcesListSecurityOption2, _super);
    function DeploymentmanagerResourcesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerResourcesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerResourcesListSecurityOption2.prototype, "oauth2c", void 0);
    return DeploymentmanagerResourcesListSecurityOption2;
}(SpeakeasyBase));
export { DeploymentmanagerResourcesListSecurityOption2 };
var DeploymentmanagerResourcesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerResourcesListSecurityOption3, _super);
    function DeploymentmanagerResourcesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerResourcesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerResourcesListSecurityOption3.prototype, "oauth2c", void 0);
    return DeploymentmanagerResourcesListSecurityOption3;
}(SpeakeasyBase));
export { DeploymentmanagerResourcesListSecurityOption3 };
var DeploymentmanagerResourcesListSecurityOption4 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerResourcesListSecurityOption4, _super);
    function DeploymentmanagerResourcesListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerResourcesListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerResourcesListSecurityOption4.prototype, "oauth2c", void 0);
    return DeploymentmanagerResourcesListSecurityOption4;
}(SpeakeasyBase));
export { DeploymentmanagerResourcesListSecurityOption4 };
var DeploymentmanagerResourcesListSecurity = /** @class */ (function (_super) {
    __extends(DeploymentmanagerResourcesListSecurity, _super);
    function DeploymentmanagerResourcesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerResourcesListSecurityOption1)
    ], DeploymentmanagerResourcesListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerResourcesListSecurityOption2)
    ], DeploymentmanagerResourcesListSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerResourcesListSecurityOption3)
    ], DeploymentmanagerResourcesListSecurity.prototype, "option3", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerResourcesListSecurityOption4)
    ], DeploymentmanagerResourcesListSecurity.prototype, "option4", void 0);
    return DeploymentmanagerResourcesListSecurity;
}(SpeakeasyBase));
export { DeploymentmanagerResourcesListSecurity };
var DeploymentmanagerResourcesListRequest = /** @class */ (function (_super) {
    __extends(DeploymentmanagerResourcesListRequest, _super);
    function DeploymentmanagerResourcesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerResourcesListPathParams)
    ], DeploymentmanagerResourcesListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerResourcesListQueryParams)
    ], DeploymentmanagerResourcesListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerResourcesListSecurity)
    ], DeploymentmanagerResourcesListRequest.prototype, "security", void 0);
    return DeploymentmanagerResourcesListRequest;
}(SpeakeasyBase));
export { DeploymentmanagerResourcesListRequest };
var DeploymentmanagerResourcesListResponse = /** @class */ (function (_super) {
    __extends(DeploymentmanagerResourcesListResponse, _super);
    function DeploymentmanagerResourcesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeploymentmanagerResourcesListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ResourcesListResponse)
    ], DeploymentmanagerResourcesListResponse.prototype, "resourcesListResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeploymentmanagerResourcesListResponse.prototype, "statusCode", void 0);
    return DeploymentmanagerResourcesListResponse;
}(SpeakeasyBase));
export { DeploymentmanagerResourcesListResponse };
