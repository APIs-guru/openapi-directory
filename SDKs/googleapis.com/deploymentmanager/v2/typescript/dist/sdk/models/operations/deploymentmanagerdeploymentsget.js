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
var DeploymentmanagerDeploymentsGetPathParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsGetPathParams, _super);
    function DeploymentmanagerDeploymentsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deployment" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsGetPathParams.prototype, "deployment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsGetPathParams.prototype, "project", void 0);
    return DeploymentmanagerDeploymentsGetPathParams;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsGetPathParams };
var DeploymentmanagerDeploymentsGetQueryParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsGetQueryParams, _super);
    function DeploymentmanagerDeploymentsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DeploymentmanagerDeploymentsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsGetQueryParams.prototype, "uploadProtocol", void 0);
    return DeploymentmanagerDeploymentsGetQueryParams;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsGetQueryParams };
var DeploymentmanagerDeploymentsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsGetSecurityOption1, _super);
    function DeploymentmanagerDeploymentsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerDeploymentsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerDeploymentsGetSecurityOption1.prototype, "oauth2c", void 0);
    return DeploymentmanagerDeploymentsGetSecurityOption1;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsGetSecurityOption1 };
var DeploymentmanagerDeploymentsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsGetSecurityOption2, _super);
    function DeploymentmanagerDeploymentsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerDeploymentsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerDeploymentsGetSecurityOption2.prototype, "oauth2c", void 0);
    return DeploymentmanagerDeploymentsGetSecurityOption2;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsGetSecurityOption2 };
var DeploymentmanagerDeploymentsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsGetSecurityOption3, _super);
    function DeploymentmanagerDeploymentsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerDeploymentsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerDeploymentsGetSecurityOption3.prototype, "oauth2c", void 0);
    return DeploymentmanagerDeploymentsGetSecurityOption3;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsGetSecurityOption3 };
var DeploymentmanagerDeploymentsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsGetSecurityOption4, _super);
    function DeploymentmanagerDeploymentsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerDeploymentsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerDeploymentsGetSecurityOption4.prototype, "oauth2c", void 0);
    return DeploymentmanagerDeploymentsGetSecurityOption4;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsGetSecurityOption4 };
var DeploymentmanagerDeploymentsGetSecurity = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsGetSecurity, _super);
    function DeploymentmanagerDeploymentsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerDeploymentsGetSecurityOption1)
    ], DeploymentmanagerDeploymentsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerDeploymentsGetSecurityOption2)
    ], DeploymentmanagerDeploymentsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerDeploymentsGetSecurityOption3)
    ], DeploymentmanagerDeploymentsGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerDeploymentsGetSecurityOption4)
    ], DeploymentmanagerDeploymentsGetSecurity.prototype, "option4", void 0);
    return DeploymentmanagerDeploymentsGetSecurity;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsGetSecurity };
var DeploymentmanagerDeploymentsGetRequest = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsGetRequest, _super);
    function DeploymentmanagerDeploymentsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerDeploymentsGetPathParams)
    ], DeploymentmanagerDeploymentsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerDeploymentsGetQueryParams)
    ], DeploymentmanagerDeploymentsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerDeploymentsGetSecurity)
    ], DeploymentmanagerDeploymentsGetRequest.prototype, "security", void 0);
    return DeploymentmanagerDeploymentsGetRequest;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsGetRequest };
var DeploymentmanagerDeploymentsGetResponse = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsGetResponse, _super);
    function DeploymentmanagerDeploymentsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Deployment)
    ], DeploymentmanagerDeploymentsGetResponse.prototype, "deployment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeploymentmanagerDeploymentsGetResponse.prototype, "statusCode", void 0);
    return DeploymentmanagerDeploymentsGetResponse;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsGetResponse };
