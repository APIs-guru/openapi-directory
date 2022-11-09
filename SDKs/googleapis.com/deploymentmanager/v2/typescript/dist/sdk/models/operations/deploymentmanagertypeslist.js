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
var DeploymentmanagerTypesListPathParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypesListPathParams, _super);
    function DeploymentmanagerTypesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypesListPathParams.prototype, "project", void 0);
    return DeploymentmanagerTypesListPathParams;
}(SpeakeasyBase));
export { DeploymentmanagerTypesListPathParams };
var DeploymentmanagerTypesListQueryParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypesListQueryParams, _super);
    function DeploymentmanagerTypesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypesListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypesListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypesListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypesListQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypesListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DeploymentmanagerTypesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypesListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DeploymentmanagerTypesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypesListQueryParams.prototype, "uploadProtocol", void 0);
    return DeploymentmanagerTypesListQueryParams;
}(SpeakeasyBase));
export { DeploymentmanagerTypesListQueryParams };
var DeploymentmanagerTypesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypesListSecurityOption1, _super);
    function DeploymentmanagerTypesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerTypesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerTypesListSecurityOption1.prototype, "oauth2c", void 0);
    return DeploymentmanagerTypesListSecurityOption1;
}(SpeakeasyBase));
export { DeploymentmanagerTypesListSecurityOption1 };
var DeploymentmanagerTypesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypesListSecurityOption2, _super);
    function DeploymentmanagerTypesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerTypesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerTypesListSecurityOption2.prototype, "oauth2c", void 0);
    return DeploymentmanagerTypesListSecurityOption2;
}(SpeakeasyBase));
export { DeploymentmanagerTypesListSecurityOption2 };
var DeploymentmanagerTypesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypesListSecurityOption3, _super);
    function DeploymentmanagerTypesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerTypesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerTypesListSecurityOption3.prototype, "oauth2c", void 0);
    return DeploymentmanagerTypesListSecurityOption3;
}(SpeakeasyBase));
export { DeploymentmanagerTypesListSecurityOption3 };
var DeploymentmanagerTypesListSecurityOption4 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypesListSecurityOption4, _super);
    function DeploymentmanagerTypesListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerTypesListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerTypesListSecurityOption4.prototype, "oauth2c", void 0);
    return DeploymentmanagerTypesListSecurityOption4;
}(SpeakeasyBase));
export { DeploymentmanagerTypesListSecurityOption4 };
var DeploymentmanagerTypesListSecurity = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypesListSecurity, _super);
    function DeploymentmanagerTypesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerTypesListSecurityOption1)
    ], DeploymentmanagerTypesListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerTypesListSecurityOption2)
    ], DeploymentmanagerTypesListSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerTypesListSecurityOption3)
    ], DeploymentmanagerTypesListSecurity.prototype, "option3", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerTypesListSecurityOption4)
    ], DeploymentmanagerTypesListSecurity.prototype, "option4", void 0);
    return DeploymentmanagerTypesListSecurity;
}(SpeakeasyBase));
export { DeploymentmanagerTypesListSecurity };
var DeploymentmanagerTypesListRequest = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypesListRequest, _super);
    function DeploymentmanagerTypesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerTypesListPathParams)
    ], DeploymentmanagerTypesListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerTypesListQueryParams)
    ], DeploymentmanagerTypesListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerTypesListSecurity)
    ], DeploymentmanagerTypesListRequest.prototype, "security", void 0);
    return DeploymentmanagerTypesListRequest;
}(SpeakeasyBase));
export { DeploymentmanagerTypesListRequest };
var DeploymentmanagerTypesListResponse = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypesListResponse, _super);
    function DeploymentmanagerTypesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeploymentmanagerTypesListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeploymentmanagerTypesListResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TypesListResponse)
    ], DeploymentmanagerTypesListResponse.prototype, "typesListResponse", void 0);
    return DeploymentmanagerTypesListResponse;
}(SpeakeasyBase));
export { DeploymentmanagerTypesListResponse };
