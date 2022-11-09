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
var DeploymentmanagerDeploymentsCancelPreviewPathParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsCancelPreviewPathParams, _super);
    function DeploymentmanagerDeploymentsCancelPreviewPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=deployment" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsCancelPreviewPathParams.prototype, "deployment", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsCancelPreviewPathParams.prototype, "project", void 0);
    return DeploymentmanagerDeploymentsCancelPreviewPathParams;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsCancelPreviewPathParams };
var DeploymentmanagerDeploymentsCancelPreviewQueryParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsCancelPreviewQueryParams, _super);
    function DeploymentmanagerDeploymentsCancelPreviewQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsCancelPreviewQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsCancelPreviewQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsCancelPreviewQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsCancelPreviewQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsCancelPreviewQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsCancelPreviewQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsCancelPreviewQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DeploymentmanagerDeploymentsCancelPreviewQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsCancelPreviewQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsCancelPreviewQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsCancelPreviewQueryParams.prototype, "uploadProtocol", void 0);
    return DeploymentmanagerDeploymentsCancelPreviewQueryParams;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsCancelPreviewQueryParams };
var DeploymentmanagerDeploymentsCancelPreviewSecurityOption1 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsCancelPreviewSecurityOption1, _super);
    function DeploymentmanagerDeploymentsCancelPreviewSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerDeploymentsCancelPreviewSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerDeploymentsCancelPreviewSecurityOption1.prototype, "oauth2c", void 0);
    return DeploymentmanagerDeploymentsCancelPreviewSecurityOption1;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsCancelPreviewSecurityOption1 };
var DeploymentmanagerDeploymentsCancelPreviewSecurityOption2 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsCancelPreviewSecurityOption2, _super);
    function DeploymentmanagerDeploymentsCancelPreviewSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerDeploymentsCancelPreviewSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerDeploymentsCancelPreviewSecurityOption2.prototype, "oauth2c", void 0);
    return DeploymentmanagerDeploymentsCancelPreviewSecurityOption2;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsCancelPreviewSecurityOption2 };
var DeploymentmanagerDeploymentsCancelPreviewSecurity = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsCancelPreviewSecurity, _super);
    function DeploymentmanagerDeploymentsCancelPreviewSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerDeploymentsCancelPreviewSecurityOption1)
    ], DeploymentmanagerDeploymentsCancelPreviewSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerDeploymentsCancelPreviewSecurityOption2)
    ], DeploymentmanagerDeploymentsCancelPreviewSecurity.prototype, "option2", void 0);
    return DeploymentmanagerDeploymentsCancelPreviewSecurity;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsCancelPreviewSecurity };
var DeploymentmanagerDeploymentsCancelPreviewRequest = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsCancelPreviewRequest, _super);
    function DeploymentmanagerDeploymentsCancelPreviewRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerDeploymentsCancelPreviewPathParams)
    ], DeploymentmanagerDeploymentsCancelPreviewRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerDeploymentsCancelPreviewQueryParams)
    ], DeploymentmanagerDeploymentsCancelPreviewRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeploymentsCancelPreviewRequest)
    ], DeploymentmanagerDeploymentsCancelPreviewRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerDeploymentsCancelPreviewSecurity)
    ], DeploymentmanagerDeploymentsCancelPreviewRequest.prototype, "security", void 0);
    return DeploymentmanagerDeploymentsCancelPreviewRequest;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsCancelPreviewRequest };
var DeploymentmanagerDeploymentsCancelPreviewResponse = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsCancelPreviewResponse, _super);
    function DeploymentmanagerDeploymentsCancelPreviewResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsCancelPreviewResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], DeploymentmanagerDeploymentsCancelPreviewResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeploymentmanagerDeploymentsCancelPreviewResponse.prototype, "statusCode", void 0);
    return DeploymentmanagerDeploymentsCancelPreviewResponse;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsCancelPreviewResponse };
