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
var DeploymentmanagerCompositeTypesListPathParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesListPathParams, _super);
    function DeploymentmanagerCompositeTypesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesListPathParams.prototype, "project", void 0);
    return DeploymentmanagerCompositeTypesListPathParams;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesListPathParams };
var DeploymentmanagerCompositeTypesListQueryParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesListQueryParams, _super);
    function DeploymentmanagerCompositeTypesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DeploymentmanagerCompositeTypesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DeploymentmanagerCompositeTypesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesListQueryParams.prototype, "uploadProtocol", void 0);
    return DeploymentmanagerCompositeTypesListQueryParams;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesListQueryParams };
var DeploymentmanagerCompositeTypesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesListSecurityOption1, _super);
    function DeploymentmanagerCompositeTypesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerCompositeTypesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerCompositeTypesListSecurityOption1.prototype, "oauth2c", void 0);
    return DeploymentmanagerCompositeTypesListSecurityOption1;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesListSecurityOption1 };
var DeploymentmanagerCompositeTypesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesListSecurityOption2, _super);
    function DeploymentmanagerCompositeTypesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerCompositeTypesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerCompositeTypesListSecurityOption2.prototype, "oauth2c", void 0);
    return DeploymentmanagerCompositeTypesListSecurityOption2;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesListSecurityOption2 };
var DeploymentmanagerCompositeTypesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesListSecurityOption3, _super);
    function DeploymentmanagerCompositeTypesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerCompositeTypesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerCompositeTypesListSecurityOption3.prototype, "oauth2c", void 0);
    return DeploymentmanagerCompositeTypesListSecurityOption3;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesListSecurityOption3 };
var DeploymentmanagerCompositeTypesListSecurityOption4 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesListSecurityOption4, _super);
    function DeploymentmanagerCompositeTypesListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerCompositeTypesListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerCompositeTypesListSecurityOption4.prototype, "oauth2c", void 0);
    return DeploymentmanagerCompositeTypesListSecurityOption4;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesListSecurityOption4 };
var DeploymentmanagerCompositeTypesListSecurity = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesListSecurity, _super);
    function DeploymentmanagerCompositeTypesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerCompositeTypesListSecurityOption1)
    ], DeploymentmanagerCompositeTypesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerCompositeTypesListSecurityOption2)
    ], DeploymentmanagerCompositeTypesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerCompositeTypesListSecurityOption3)
    ], DeploymentmanagerCompositeTypesListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerCompositeTypesListSecurityOption4)
    ], DeploymentmanagerCompositeTypesListSecurity.prototype, "option4", void 0);
    return DeploymentmanagerCompositeTypesListSecurity;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesListSecurity };
var DeploymentmanagerCompositeTypesListRequest = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesListRequest, _super);
    function DeploymentmanagerCompositeTypesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerCompositeTypesListPathParams)
    ], DeploymentmanagerCompositeTypesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerCompositeTypesListQueryParams)
    ], DeploymentmanagerCompositeTypesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerCompositeTypesListSecurity)
    ], DeploymentmanagerCompositeTypesListRequest.prototype, "security", void 0);
    return DeploymentmanagerCompositeTypesListRequest;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesListRequest };
var DeploymentmanagerCompositeTypesListResponse = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesListResponse, _super);
    function DeploymentmanagerCompositeTypesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CompositeTypesListResponse)
    ], DeploymentmanagerCompositeTypesListResponse.prototype, "compositeTypesListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeploymentmanagerCompositeTypesListResponse.prototype, "statusCode", void 0);
    return DeploymentmanagerCompositeTypesListResponse;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesListResponse };
