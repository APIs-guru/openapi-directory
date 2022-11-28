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
var DeploymentmanagerTypeProvidersListTypesPathParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersListTypesPathParams, _super);
    function DeploymentmanagerTypeProvidersListTypesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersListTypesPathParams.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=typeProvider" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersListTypesPathParams.prototype, "typeProvider", void 0);
    return DeploymentmanagerTypeProvidersListTypesPathParams;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersListTypesPathParams };
var DeploymentmanagerTypeProvidersListTypesQueryParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersListTypesQueryParams, _super);
    function DeploymentmanagerTypeProvidersListTypesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersListTypesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersListTypesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersListTypesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersListTypesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersListTypesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersListTypesQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersListTypesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DeploymentmanagerTypeProvidersListTypesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersListTypesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersListTypesQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersListTypesQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DeploymentmanagerTypeProvidersListTypesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersListTypesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersListTypesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersListTypesQueryParams.prototype, "uploadProtocol", void 0);
    return DeploymentmanagerTypeProvidersListTypesQueryParams;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersListTypesQueryParams };
var DeploymentmanagerTypeProvidersListTypesSecurityOption1 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersListTypesSecurityOption1, _super);
    function DeploymentmanagerTypeProvidersListTypesSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerTypeProvidersListTypesSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerTypeProvidersListTypesSecurityOption1.prototype, "oauth2c", void 0);
    return DeploymentmanagerTypeProvidersListTypesSecurityOption1;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersListTypesSecurityOption1 };
var DeploymentmanagerTypeProvidersListTypesSecurityOption2 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersListTypesSecurityOption2, _super);
    function DeploymentmanagerTypeProvidersListTypesSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerTypeProvidersListTypesSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerTypeProvidersListTypesSecurityOption2.prototype, "oauth2c", void 0);
    return DeploymentmanagerTypeProvidersListTypesSecurityOption2;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersListTypesSecurityOption2 };
var DeploymentmanagerTypeProvidersListTypesSecurityOption3 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersListTypesSecurityOption3, _super);
    function DeploymentmanagerTypeProvidersListTypesSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerTypeProvidersListTypesSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerTypeProvidersListTypesSecurityOption3.prototype, "oauth2c", void 0);
    return DeploymentmanagerTypeProvidersListTypesSecurityOption3;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersListTypesSecurityOption3 };
var DeploymentmanagerTypeProvidersListTypesSecurityOption4 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersListTypesSecurityOption4, _super);
    function DeploymentmanagerTypeProvidersListTypesSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerTypeProvidersListTypesSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerTypeProvidersListTypesSecurityOption4.prototype, "oauth2c", void 0);
    return DeploymentmanagerTypeProvidersListTypesSecurityOption4;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersListTypesSecurityOption4 };
var DeploymentmanagerTypeProvidersListTypesSecurity = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersListTypesSecurity, _super);
    function DeploymentmanagerTypeProvidersListTypesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerTypeProvidersListTypesSecurityOption1)
    ], DeploymentmanagerTypeProvidersListTypesSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerTypeProvidersListTypesSecurityOption2)
    ], DeploymentmanagerTypeProvidersListTypesSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerTypeProvidersListTypesSecurityOption3)
    ], DeploymentmanagerTypeProvidersListTypesSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerTypeProvidersListTypesSecurityOption4)
    ], DeploymentmanagerTypeProvidersListTypesSecurity.prototype, "option4", void 0);
    return DeploymentmanagerTypeProvidersListTypesSecurity;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersListTypesSecurity };
var DeploymentmanagerTypeProvidersListTypesRequest = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersListTypesRequest, _super);
    function DeploymentmanagerTypeProvidersListTypesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerTypeProvidersListTypesPathParams)
    ], DeploymentmanagerTypeProvidersListTypesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerTypeProvidersListTypesQueryParams)
    ], DeploymentmanagerTypeProvidersListTypesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerTypeProvidersListTypesSecurity)
    ], DeploymentmanagerTypeProvidersListTypesRequest.prototype, "security", void 0);
    return DeploymentmanagerTypeProvidersListTypesRequest;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersListTypesRequest };
var DeploymentmanagerTypeProvidersListTypesResponse = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersListTypesResponse, _super);
    function DeploymentmanagerTypeProvidersListTypesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersListTypesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeploymentmanagerTypeProvidersListTypesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TypeProvidersListTypesResponse)
    ], DeploymentmanagerTypeProvidersListTypesResponse.prototype, "typeProvidersListTypesResponse", void 0);
    return DeploymentmanagerTypeProvidersListTypesResponse;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersListTypesResponse };
