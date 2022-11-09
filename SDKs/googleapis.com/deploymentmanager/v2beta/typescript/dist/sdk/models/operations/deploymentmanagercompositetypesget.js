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
var DeploymentmanagerCompositeTypesGetPathParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesGetPathParams, _super);
    function DeploymentmanagerCompositeTypesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=compositeType" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesGetPathParams.prototype, "compositeType", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesGetPathParams.prototype, "project", void 0);
    return DeploymentmanagerCompositeTypesGetPathParams;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesGetPathParams };
var DeploymentmanagerCompositeTypesGetQueryParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesGetQueryParams, _super);
    function DeploymentmanagerCompositeTypesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DeploymentmanagerCompositeTypesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesGetQueryParams.prototype, "uploadProtocol", void 0);
    return DeploymentmanagerCompositeTypesGetQueryParams;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesGetQueryParams };
var DeploymentmanagerCompositeTypesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesGetSecurityOption1, _super);
    function DeploymentmanagerCompositeTypesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerCompositeTypesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerCompositeTypesGetSecurityOption1.prototype, "oauth2c", void 0);
    return DeploymentmanagerCompositeTypesGetSecurityOption1;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesGetSecurityOption1 };
var DeploymentmanagerCompositeTypesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesGetSecurityOption2, _super);
    function DeploymentmanagerCompositeTypesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerCompositeTypesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerCompositeTypesGetSecurityOption2.prototype, "oauth2c", void 0);
    return DeploymentmanagerCompositeTypesGetSecurityOption2;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesGetSecurityOption2 };
var DeploymentmanagerCompositeTypesGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesGetSecurityOption3, _super);
    function DeploymentmanagerCompositeTypesGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerCompositeTypesGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerCompositeTypesGetSecurityOption3.prototype, "oauth2c", void 0);
    return DeploymentmanagerCompositeTypesGetSecurityOption3;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesGetSecurityOption3 };
var DeploymentmanagerCompositeTypesGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesGetSecurityOption4, _super);
    function DeploymentmanagerCompositeTypesGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerCompositeTypesGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerCompositeTypesGetSecurityOption4.prototype, "oauth2c", void 0);
    return DeploymentmanagerCompositeTypesGetSecurityOption4;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesGetSecurityOption4 };
var DeploymentmanagerCompositeTypesGetSecurity = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesGetSecurity, _super);
    function DeploymentmanagerCompositeTypesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerCompositeTypesGetSecurityOption1)
    ], DeploymentmanagerCompositeTypesGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerCompositeTypesGetSecurityOption2)
    ], DeploymentmanagerCompositeTypesGetSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerCompositeTypesGetSecurityOption3)
    ], DeploymentmanagerCompositeTypesGetSecurity.prototype, "option3", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerCompositeTypesGetSecurityOption4)
    ], DeploymentmanagerCompositeTypesGetSecurity.prototype, "option4", void 0);
    return DeploymentmanagerCompositeTypesGetSecurity;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesGetSecurity };
var DeploymentmanagerCompositeTypesGetRequest = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesGetRequest, _super);
    function DeploymentmanagerCompositeTypesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerCompositeTypesGetPathParams)
    ], DeploymentmanagerCompositeTypesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerCompositeTypesGetQueryParams)
    ], DeploymentmanagerCompositeTypesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerCompositeTypesGetSecurity)
    ], DeploymentmanagerCompositeTypesGetRequest.prototype, "security", void 0);
    return DeploymentmanagerCompositeTypesGetRequest;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesGetRequest };
var DeploymentmanagerCompositeTypesGetResponse = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesGetResponse, _super);
    function DeploymentmanagerCompositeTypesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CompositeType)
    ], DeploymentmanagerCompositeTypesGetResponse.prototype, "compositeType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeploymentmanagerCompositeTypesGetResponse.prototype, "statusCode", void 0);
    return DeploymentmanagerCompositeTypesGetResponse;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesGetResponse };
