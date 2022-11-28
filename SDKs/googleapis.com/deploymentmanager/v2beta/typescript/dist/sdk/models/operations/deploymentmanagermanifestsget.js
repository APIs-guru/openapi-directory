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
var DeploymentmanagerManifestsGetPathParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerManifestsGetPathParams, _super);
    function DeploymentmanagerManifestsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deployment" }),
        __metadata("design:type", String)
    ], DeploymentmanagerManifestsGetPathParams.prototype, "deployment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=manifest" }),
        __metadata("design:type", String)
    ], DeploymentmanagerManifestsGetPathParams.prototype, "manifest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DeploymentmanagerManifestsGetPathParams.prototype, "project", void 0);
    return DeploymentmanagerManifestsGetPathParams;
}(SpeakeasyBase));
export { DeploymentmanagerManifestsGetPathParams };
var DeploymentmanagerManifestsGetQueryParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerManifestsGetQueryParams, _super);
    function DeploymentmanagerManifestsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DeploymentmanagerManifestsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerManifestsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DeploymentmanagerManifestsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DeploymentmanagerManifestsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DeploymentmanagerManifestsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DeploymentmanagerManifestsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerManifestsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DeploymentmanagerManifestsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DeploymentmanagerManifestsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DeploymentmanagerManifestsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DeploymentmanagerManifestsGetQueryParams.prototype, "uploadProtocol", void 0);
    return DeploymentmanagerManifestsGetQueryParams;
}(SpeakeasyBase));
export { DeploymentmanagerManifestsGetQueryParams };
var DeploymentmanagerManifestsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerManifestsGetSecurityOption1, _super);
    function DeploymentmanagerManifestsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerManifestsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerManifestsGetSecurityOption1.prototype, "oauth2c", void 0);
    return DeploymentmanagerManifestsGetSecurityOption1;
}(SpeakeasyBase));
export { DeploymentmanagerManifestsGetSecurityOption1 };
var DeploymentmanagerManifestsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerManifestsGetSecurityOption2, _super);
    function DeploymentmanagerManifestsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerManifestsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerManifestsGetSecurityOption2.prototype, "oauth2c", void 0);
    return DeploymentmanagerManifestsGetSecurityOption2;
}(SpeakeasyBase));
export { DeploymentmanagerManifestsGetSecurityOption2 };
var DeploymentmanagerManifestsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerManifestsGetSecurityOption3, _super);
    function DeploymentmanagerManifestsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerManifestsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerManifestsGetSecurityOption3.prototype, "oauth2c", void 0);
    return DeploymentmanagerManifestsGetSecurityOption3;
}(SpeakeasyBase));
export { DeploymentmanagerManifestsGetSecurityOption3 };
var DeploymentmanagerManifestsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerManifestsGetSecurityOption4, _super);
    function DeploymentmanagerManifestsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerManifestsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerManifestsGetSecurityOption4.prototype, "oauth2c", void 0);
    return DeploymentmanagerManifestsGetSecurityOption4;
}(SpeakeasyBase));
export { DeploymentmanagerManifestsGetSecurityOption4 };
var DeploymentmanagerManifestsGetSecurity = /** @class */ (function (_super) {
    __extends(DeploymentmanagerManifestsGetSecurity, _super);
    function DeploymentmanagerManifestsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerManifestsGetSecurityOption1)
    ], DeploymentmanagerManifestsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerManifestsGetSecurityOption2)
    ], DeploymentmanagerManifestsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerManifestsGetSecurityOption3)
    ], DeploymentmanagerManifestsGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerManifestsGetSecurityOption4)
    ], DeploymentmanagerManifestsGetSecurity.prototype, "option4", void 0);
    return DeploymentmanagerManifestsGetSecurity;
}(SpeakeasyBase));
export { DeploymentmanagerManifestsGetSecurity };
var DeploymentmanagerManifestsGetRequest = /** @class */ (function (_super) {
    __extends(DeploymentmanagerManifestsGetRequest, _super);
    function DeploymentmanagerManifestsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerManifestsGetPathParams)
    ], DeploymentmanagerManifestsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerManifestsGetQueryParams)
    ], DeploymentmanagerManifestsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerManifestsGetSecurity)
    ], DeploymentmanagerManifestsGetRequest.prototype, "security", void 0);
    return DeploymentmanagerManifestsGetRequest;
}(SpeakeasyBase));
export { DeploymentmanagerManifestsGetRequest };
var DeploymentmanagerManifestsGetResponse = /** @class */ (function (_super) {
    __extends(DeploymentmanagerManifestsGetResponse, _super);
    function DeploymentmanagerManifestsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeploymentmanagerManifestsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Manifest)
    ], DeploymentmanagerManifestsGetResponse.prototype, "manifest", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeploymentmanagerManifestsGetResponse.prototype, "statusCode", void 0);
    return DeploymentmanagerManifestsGetResponse;
}(SpeakeasyBase));
export { DeploymentmanagerManifestsGetResponse };
