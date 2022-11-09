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
var DeploymentmanagerTypeProvidersGetPathParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersGetPathParams, _super);
    function DeploymentmanagerTypeProvidersGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersGetPathParams.prototype, "project", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=typeProvider" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersGetPathParams.prototype, "typeProvider", void 0);
    return DeploymentmanagerTypeProvidersGetPathParams;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersGetPathParams };
var DeploymentmanagerTypeProvidersGetQueryParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersGetQueryParams, _super);
    function DeploymentmanagerTypeProvidersGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DeploymentmanagerTypeProvidersGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersGetQueryParams.prototype, "uploadProtocol", void 0);
    return DeploymentmanagerTypeProvidersGetQueryParams;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersGetQueryParams };
var DeploymentmanagerTypeProvidersGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersGetSecurityOption1, _super);
    function DeploymentmanagerTypeProvidersGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerTypeProvidersGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerTypeProvidersGetSecurityOption1.prototype, "oauth2c", void 0);
    return DeploymentmanagerTypeProvidersGetSecurityOption1;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersGetSecurityOption1 };
var DeploymentmanagerTypeProvidersGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersGetSecurityOption2, _super);
    function DeploymentmanagerTypeProvidersGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerTypeProvidersGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerTypeProvidersGetSecurityOption2.prototype, "oauth2c", void 0);
    return DeploymentmanagerTypeProvidersGetSecurityOption2;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersGetSecurityOption2 };
var DeploymentmanagerTypeProvidersGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersGetSecurityOption3, _super);
    function DeploymentmanagerTypeProvidersGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerTypeProvidersGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerTypeProvidersGetSecurityOption3.prototype, "oauth2c", void 0);
    return DeploymentmanagerTypeProvidersGetSecurityOption3;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersGetSecurityOption3 };
var DeploymentmanagerTypeProvidersGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersGetSecurityOption4, _super);
    function DeploymentmanagerTypeProvidersGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerTypeProvidersGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerTypeProvidersGetSecurityOption4.prototype, "oauth2c", void 0);
    return DeploymentmanagerTypeProvidersGetSecurityOption4;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersGetSecurityOption4 };
var DeploymentmanagerTypeProvidersGetSecurity = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersGetSecurity, _super);
    function DeploymentmanagerTypeProvidersGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerTypeProvidersGetSecurityOption1)
    ], DeploymentmanagerTypeProvidersGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerTypeProvidersGetSecurityOption2)
    ], DeploymentmanagerTypeProvidersGetSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerTypeProvidersGetSecurityOption3)
    ], DeploymentmanagerTypeProvidersGetSecurity.prototype, "option3", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerTypeProvidersGetSecurityOption4)
    ], DeploymentmanagerTypeProvidersGetSecurity.prototype, "option4", void 0);
    return DeploymentmanagerTypeProvidersGetSecurity;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersGetSecurity };
var DeploymentmanagerTypeProvidersGetRequest = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersGetRequest, _super);
    function DeploymentmanagerTypeProvidersGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerTypeProvidersGetPathParams)
    ], DeploymentmanagerTypeProvidersGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerTypeProvidersGetQueryParams)
    ], DeploymentmanagerTypeProvidersGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerTypeProvidersGetSecurity)
    ], DeploymentmanagerTypeProvidersGetRequest.prototype, "security", void 0);
    return DeploymentmanagerTypeProvidersGetRequest;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersGetRequest };
var DeploymentmanagerTypeProvidersGetResponse = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersGetResponse, _super);
    function DeploymentmanagerTypeProvidersGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeploymentmanagerTypeProvidersGetResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TypeProvider)
    ], DeploymentmanagerTypeProvidersGetResponse.prototype, "typeProvider", void 0);
    return DeploymentmanagerTypeProvidersGetResponse;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersGetResponse };
