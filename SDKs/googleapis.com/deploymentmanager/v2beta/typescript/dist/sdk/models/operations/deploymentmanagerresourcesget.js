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
var DeploymentmanagerResourcesGetPathParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerResourcesGetPathParams, _super);
    function DeploymentmanagerResourcesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deployment" }),
        __metadata("design:type", String)
    ], DeploymentmanagerResourcesGetPathParams.prototype, "deployment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DeploymentmanagerResourcesGetPathParams.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], DeploymentmanagerResourcesGetPathParams.prototype, "resource", void 0);
    return DeploymentmanagerResourcesGetPathParams;
}(SpeakeasyBase));
export { DeploymentmanagerResourcesGetPathParams };
var DeploymentmanagerResourcesGetQueryParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerResourcesGetQueryParams, _super);
    function DeploymentmanagerResourcesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DeploymentmanagerResourcesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerResourcesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DeploymentmanagerResourcesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DeploymentmanagerResourcesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DeploymentmanagerResourcesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DeploymentmanagerResourcesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerResourcesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DeploymentmanagerResourcesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DeploymentmanagerResourcesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DeploymentmanagerResourcesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DeploymentmanagerResourcesGetQueryParams.prototype, "uploadProtocol", void 0);
    return DeploymentmanagerResourcesGetQueryParams;
}(SpeakeasyBase));
export { DeploymentmanagerResourcesGetQueryParams };
var DeploymentmanagerResourcesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerResourcesGetSecurityOption1, _super);
    function DeploymentmanagerResourcesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerResourcesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerResourcesGetSecurityOption1.prototype, "oauth2c", void 0);
    return DeploymentmanagerResourcesGetSecurityOption1;
}(SpeakeasyBase));
export { DeploymentmanagerResourcesGetSecurityOption1 };
var DeploymentmanagerResourcesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerResourcesGetSecurityOption2, _super);
    function DeploymentmanagerResourcesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerResourcesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerResourcesGetSecurityOption2.prototype, "oauth2c", void 0);
    return DeploymentmanagerResourcesGetSecurityOption2;
}(SpeakeasyBase));
export { DeploymentmanagerResourcesGetSecurityOption2 };
var DeploymentmanagerResourcesGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerResourcesGetSecurityOption3, _super);
    function DeploymentmanagerResourcesGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerResourcesGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerResourcesGetSecurityOption3.prototype, "oauth2c", void 0);
    return DeploymentmanagerResourcesGetSecurityOption3;
}(SpeakeasyBase));
export { DeploymentmanagerResourcesGetSecurityOption3 };
var DeploymentmanagerResourcesGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerResourcesGetSecurityOption4, _super);
    function DeploymentmanagerResourcesGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerResourcesGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerResourcesGetSecurityOption4.prototype, "oauth2c", void 0);
    return DeploymentmanagerResourcesGetSecurityOption4;
}(SpeakeasyBase));
export { DeploymentmanagerResourcesGetSecurityOption4 };
var DeploymentmanagerResourcesGetSecurity = /** @class */ (function (_super) {
    __extends(DeploymentmanagerResourcesGetSecurity, _super);
    function DeploymentmanagerResourcesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerResourcesGetSecurityOption1)
    ], DeploymentmanagerResourcesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerResourcesGetSecurityOption2)
    ], DeploymentmanagerResourcesGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerResourcesGetSecurityOption3)
    ], DeploymentmanagerResourcesGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerResourcesGetSecurityOption4)
    ], DeploymentmanagerResourcesGetSecurity.prototype, "option4", void 0);
    return DeploymentmanagerResourcesGetSecurity;
}(SpeakeasyBase));
export { DeploymentmanagerResourcesGetSecurity };
var DeploymentmanagerResourcesGetRequest = /** @class */ (function (_super) {
    __extends(DeploymentmanagerResourcesGetRequest, _super);
    function DeploymentmanagerResourcesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerResourcesGetPathParams)
    ], DeploymentmanagerResourcesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerResourcesGetQueryParams)
    ], DeploymentmanagerResourcesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerResourcesGetSecurity)
    ], DeploymentmanagerResourcesGetRequest.prototype, "security", void 0);
    return DeploymentmanagerResourcesGetRequest;
}(SpeakeasyBase));
export { DeploymentmanagerResourcesGetRequest };
var DeploymentmanagerResourcesGetResponse = /** @class */ (function (_super) {
    __extends(DeploymentmanagerResourcesGetResponse, _super);
    function DeploymentmanagerResourcesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeploymentmanagerResourcesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Resource)
    ], DeploymentmanagerResourcesGetResponse.prototype, "resource", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeploymentmanagerResourcesGetResponse.prototype, "statusCode", void 0);
    return DeploymentmanagerResourcesGetResponse;
}(SpeakeasyBase));
export { DeploymentmanagerResourcesGetResponse };
