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
var DeploymentmanagerOperationsListPathParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerOperationsListPathParams, _super);
    function DeploymentmanagerOperationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsListPathParams.prototype, "project", void 0);
    return DeploymentmanagerOperationsListPathParams;
}(SpeakeasyBase));
export { DeploymentmanagerOperationsListPathParams };
var DeploymentmanagerOperationsListQueryParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerOperationsListQueryParams, _super);
    function DeploymentmanagerOperationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsListQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DeploymentmanagerOperationsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DeploymentmanagerOperationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsListQueryParams.prototype, "uploadProtocol", void 0);
    return DeploymentmanagerOperationsListQueryParams;
}(SpeakeasyBase));
export { DeploymentmanagerOperationsListQueryParams };
var DeploymentmanagerOperationsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerOperationsListSecurityOption1, _super);
    function DeploymentmanagerOperationsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerOperationsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerOperationsListSecurityOption1.prototype, "oauth2c", void 0);
    return DeploymentmanagerOperationsListSecurityOption1;
}(SpeakeasyBase));
export { DeploymentmanagerOperationsListSecurityOption1 };
var DeploymentmanagerOperationsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerOperationsListSecurityOption2, _super);
    function DeploymentmanagerOperationsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerOperationsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerOperationsListSecurityOption2.prototype, "oauth2c", void 0);
    return DeploymentmanagerOperationsListSecurityOption2;
}(SpeakeasyBase));
export { DeploymentmanagerOperationsListSecurityOption2 };
var DeploymentmanagerOperationsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerOperationsListSecurityOption3, _super);
    function DeploymentmanagerOperationsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerOperationsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerOperationsListSecurityOption3.prototype, "oauth2c", void 0);
    return DeploymentmanagerOperationsListSecurityOption3;
}(SpeakeasyBase));
export { DeploymentmanagerOperationsListSecurityOption3 };
var DeploymentmanagerOperationsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerOperationsListSecurityOption4, _super);
    function DeploymentmanagerOperationsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerOperationsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerOperationsListSecurityOption4.prototype, "oauth2c", void 0);
    return DeploymentmanagerOperationsListSecurityOption4;
}(SpeakeasyBase));
export { DeploymentmanagerOperationsListSecurityOption4 };
var DeploymentmanagerOperationsListSecurity = /** @class */ (function (_super) {
    __extends(DeploymentmanagerOperationsListSecurity, _super);
    function DeploymentmanagerOperationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerOperationsListSecurityOption1)
    ], DeploymentmanagerOperationsListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerOperationsListSecurityOption2)
    ], DeploymentmanagerOperationsListSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerOperationsListSecurityOption3)
    ], DeploymentmanagerOperationsListSecurity.prototype, "option3", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerOperationsListSecurityOption4)
    ], DeploymentmanagerOperationsListSecurity.prototype, "option4", void 0);
    return DeploymentmanagerOperationsListSecurity;
}(SpeakeasyBase));
export { DeploymentmanagerOperationsListSecurity };
var DeploymentmanagerOperationsListRequest = /** @class */ (function (_super) {
    __extends(DeploymentmanagerOperationsListRequest, _super);
    function DeploymentmanagerOperationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerOperationsListPathParams)
    ], DeploymentmanagerOperationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerOperationsListQueryParams)
    ], DeploymentmanagerOperationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerOperationsListSecurity)
    ], DeploymentmanagerOperationsListRequest.prototype, "security", void 0);
    return DeploymentmanagerOperationsListRequest;
}(SpeakeasyBase));
export { DeploymentmanagerOperationsListRequest };
var DeploymentmanagerOperationsListResponse = /** @class */ (function (_super) {
    __extends(DeploymentmanagerOperationsListResponse, _super);
    function DeploymentmanagerOperationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.OperationsListResponse)
    ], DeploymentmanagerOperationsListResponse.prototype, "operationsListResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeploymentmanagerOperationsListResponse.prototype, "statusCode", void 0);
    return DeploymentmanagerOperationsListResponse;
}(SpeakeasyBase));
export { DeploymentmanagerOperationsListResponse };
