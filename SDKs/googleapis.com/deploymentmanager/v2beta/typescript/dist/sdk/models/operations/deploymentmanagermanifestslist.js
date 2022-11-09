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
var DeploymentmanagerManifestsListPathParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerManifestsListPathParams, _super);
    function DeploymentmanagerManifestsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=deployment" }),
        __metadata("design:type", String)
    ], DeploymentmanagerManifestsListPathParams.prototype, "deployment", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DeploymentmanagerManifestsListPathParams.prototype, "project", void 0);
    return DeploymentmanagerManifestsListPathParams;
}(SpeakeasyBase));
export { DeploymentmanagerManifestsListPathParams };
var DeploymentmanagerManifestsListQueryParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerManifestsListQueryParams, _super);
    function DeploymentmanagerManifestsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DeploymentmanagerManifestsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerManifestsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DeploymentmanagerManifestsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DeploymentmanagerManifestsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DeploymentmanagerManifestsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DeploymentmanagerManifestsListQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DeploymentmanagerManifestsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DeploymentmanagerManifestsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerManifestsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], DeploymentmanagerManifestsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DeploymentmanagerManifestsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DeploymentmanagerManifestsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DeploymentmanagerManifestsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DeploymentmanagerManifestsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DeploymentmanagerManifestsListQueryParams.prototype, "uploadProtocol", void 0);
    return DeploymentmanagerManifestsListQueryParams;
}(SpeakeasyBase));
export { DeploymentmanagerManifestsListQueryParams };
var DeploymentmanagerManifestsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerManifestsListSecurityOption1, _super);
    function DeploymentmanagerManifestsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerManifestsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerManifestsListSecurityOption1.prototype, "oauth2c", void 0);
    return DeploymentmanagerManifestsListSecurityOption1;
}(SpeakeasyBase));
export { DeploymentmanagerManifestsListSecurityOption1 };
var DeploymentmanagerManifestsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerManifestsListSecurityOption2, _super);
    function DeploymentmanagerManifestsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerManifestsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerManifestsListSecurityOption2.prototype, "oauth2c", void 0);
    return DeploymentmanagerManifestsListSecurityOption2;
}(SpeakeasyBase));
export { DeploymentmanagerManifestsListSecurityOption2 };
var DeploymentmanagerManifestsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerManifestsListSecurityOption3, _super);
    function DeploymentmanagerManifestsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerManifestsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerManifestsListSecurityOption3.prototype, "oauth2c", void 0);
    return DeploymentmanagerManifestsListSecurityOption3;
}(SpeakeasyBase));
export { DeploymentmanagerManifestsListSecurityOption3 };
var DeploymentmanagerManifestsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerManifestsListSecurityOption4, _super);
    function DeploymentmanagerManifestsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerManifestsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerManifestsListSecurityOption4.prototype, "oauth2c", void 0);
    return DeploymentmanagerManifestsListSecurityOption4;
}(SpeakeasyBase));
export { DeploymentmanagerManifestsListSecurityOption4 };
var DeploymentmanagerManifestsListSecurity = /** @class */ (function (_super) {
    __extends(DeploymentmanagerManifestsListSecurity, _super);
    function DeploymentmanagerManifestsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerManifestsListSecurityOption1)
    ], DeploymentmanagerManifestsListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerManifestsListSecurityOption2)
    ], DeploymentmanagerManifestsListSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerManifestsListSecurityOption3)
    ], DeploymentmanagerManifestsListSecurity.prototype, "option3", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerManifestsListSecurityOption4)
    ], DeploymentmanagerManifestsListSecurity.prototype, "option4", void 0);
    return DeploymentmanagerManifestsListSecurity;
}(SpeakeasyBase));
export { DeploymentmanagerManifestsListSecurity };
var DeploymentmanagerManifestsListRequest = /** @class */ (function (_super) {
    __extends(DeploymentmanagerManifestsListRequest, _super);
    function DeploymentmanagerManifestsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerManifestsListPathParams)
    ], DeploymentmanagerManifestsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerManifestsListQueryParams)
    ], DeploymentmanagerManifestsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerManifestsListSecurity)
    ], DeploymentmanagerManifestsListRequest.prototype, "security", void 0);
    return DeploymentmanagerManifestsListRequest;
}(SpeakeasyBase));
export { DeploymentmanagerManifestsListRequest };
var DeploymentmanagerManifestsListResponse = /** @class */ (function (_super) {
    __extends(DeploymentmanagerManifestsListResponse, _super);
    function DeploymentmanagerManifestsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeploymentmanagerManifestsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ManifestsListResponse)
    ], DeploymentmanagerManifestsListResponse.prototype, "manifestsListResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeploymentmanagerManifestsListResponse.prototype, "statusCode", void 0);
    return DeploymentmanagerManifestsListResponse;
}(SpeakeasyBase));
export { DeploymentmanagerManifestsListResponse };
