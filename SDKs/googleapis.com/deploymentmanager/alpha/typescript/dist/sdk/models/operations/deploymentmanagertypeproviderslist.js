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
var DeploymentmanagerTypeProvidersListPathParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersListPathParams, _super);
    function DeploymentmanagerTypeProvidersListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersListPathParams.prototype, "project", void 0);
    return DeploymentmanagerTypeProvidersListPathParams;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersListPathParams };
var DeploymentmanagerTypeProvidersListQueryParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersListQueryParams, _super);
    function DeploymentmanagerTypeProvidersListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DeploymentmanagerTypeProvidersListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DeploymentmanagerTypeProvidersListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersListQueryParams.prototype, "uploadProtocol", void 0);
    return DeploymentmanagerTypeProvidersListQueryParams;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersListQueryParams };
var DeploymentmanagerTypeProvidersListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersListSecurityOption1, _super);
    function DeploymentmanagerTypeProvidersListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerTypeProvidersListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerTypeProvidersListSecurityOption1.prototype, "oauth2c", void 0);
    return DeploymentmanagerTypeProvidersListSecurityOption1;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersListSecurityOption1 };
var DeploymentmanagerTypeProvidersListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersListSecurityOption2, _super);
    function DeploymentmanagerTypeProvidersListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerTypeProvidersListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerTypeProvidersListSecurityOption2.prototype, "oauth2c", void 0);
    return DeploymentmanagerTypeProvidersListSecurityOption2;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersListSecurityOption2 };
var DeploymentmanagerTypeProvidersListSecurityOption3 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersListSecurityOption3, _super);
    function DeploymentmanagerTypeProvidersListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerTypeProvidersListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerTypeProvidersListSecurityOption3.prototype, "oauth2c", void 0);
    return DeploymentmanagerTypeProvidersListSecurityOption3;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersListSecurityOption3 };
var DeploymentmanagerTypeProvidersListSecurityOption4 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersListSecurityOption4, _super);
    function DeploymentmanagerTypeProvidersListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerTypeProvidersListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerTypeProvidersListSecurityOption4.prototype, "oauth2c", void 0);
    return DeploymentmanagerTypeProvidersListSecurityOption4;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersListSecurityOption4 };
var DeploymentmanagerTypeProvidersListSecurity = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersListSecurity, _super);
    function DeploymentmanagerTypeProvidersListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerTypeProvidersListSecurityOption1)
    ], DeploymentmanagerTypeProvidersListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerTypeProvidersListSecurityOption2)
    ], DeploymentmanagerTypeProvidersListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerTypeProvidersListSecurityOption3)
    ], DeploymentmanagerTypeProvidersListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerTypeProvidersListSecurityOption4)
    ], DeploymentmanagerTypeProvidersListSecurity.prototype, "option4", void 0);
    return DeploymentmanagerTypeProvidersListSecurity;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersListSecurity };
var DeploymentmanagerTypeProvidersListRequest = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersListRequest, _super);
    function DeploymentmanagerTypeProvidersListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerTypeProvidersListPathParams)
    ], DeploymentmanagerTypeProvidersListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerTypeProvidersListQueryParams)
    ], DeploymentmanagerTypeProvidersListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerTypeProvidersListSecurity)
    ], DeploymentmanagerTypeProvidersListRequest.prototype, "security", void 0);
    return DeploymentmanagerTypeProvidersListRequest;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersListRequest };
var DeploymentmanagerTypeProvidersListResponse = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersListResponse, _super);
    function DeploymentmanagerTypeProvidersListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeploymentmanagerTypeProvidersListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TypeProvidersListResponse)
    ], DeploymentmanagerTypeProvidersListResponse.prototype, "typeProvidersListResponse", void 0);
    return DeploymentmanagerTypeProvidersListResponse;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersListResponse };
