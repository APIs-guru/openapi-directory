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
var DeploymentmanagerCompositeTypesInsertPathParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesInsertPathParams, _super);
    function DeploymentmanagerCompositeTypesInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesInsertPathParams.prototype, "project", void 0);
    return DeploymentmanagerCompositeTypesInsertPathParams;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesInsertPathParams };
var DeploymentmanagerCompositeTypesInsertQueryParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesInsertQueryParams, _super);
    function DeploymentmanagerCompositeTypesInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesInsertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesInsertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesInsertQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesInsertQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DeploymentmanagerCompositeTypesInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesInsertQueryParams.prototype, "uploadProtocol", void 0);
    return DeploymentmanagerCompositeTypesInsertQueryParams;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesInsertQueryParams };
var DeploymentmanagerCompositeTypesInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesInsertSecurityOption1, _super);
    function DeploymentmanagerCompositeTypesInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerCompositeTypesInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerCompositeTypesInsertSecurityOption1.prototype, "oauth2c", void 0);
    return DeploymentmanagerCompositeTypesInsertSecurityOption1;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesInsertSecurityOption1 };
var DeploymentmanagerCompositeTypesInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesInsertSecurityOption2, _super);
    function DeploymentmanagerCompositeTypesInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerCompositeTypesInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerCompositeTypesInsertSecurityOption2.prototype, "oauth2c", void 0);
    return DeploymentmanagerCompositeTypesInsertSecurityOption2;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesInsertSecurityOption2 };
var DeploymentmanagerCompositeTypesInsertSecurity = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesInsertSecurity, _super);
    function DeploymentmanagerCompositeTypesInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerCompositeTypesInsertSecurityOption1)
    ], DeploymentmanagerCompositeTypesInsertSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerCompositeTypesInsertSecurityOption2)
    ], DeploymentmanagerCompositeTypesInsertSecurity.prototype, "option2", void 0);
    return DeploymentmanagerCompositeTypesInsertSecurity;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesInsertSecurity };
var DeploymentmanagerCompositeTypesInsertRequest = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesInsertRequest, _super);
    function DeploymentmanagerCompositeTypesInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerCompositeTypesInsertPathParams)
    ], DeploymentmanagerCompositeTypesInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerCompositeTypesInsertQueryParams)
    ], DeploymentmanagerCompositeTypesInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CompositeType)
    ], DeploymentmanagerCompositeTypesInsertRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerCompositeTypesInsertSecurity)
    ], DeploymentmanagerCompositeTypesInsertRequest.prototype, "security", void 0);
    return DeploymentmanagerCompositeTypesInsertRequest;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesInsertRequest };
var DeploymentmanagerCompositeTypesInsertResponse = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesInsertResponse, _super);
    function DeploymentmanagerCompositeTypesInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesInsertResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], DeploymentmanagerCompositeTypesInsertResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeploymentmanagerCompositeTypesInsertResponse.prototype, "statusCode", void 0);
    return DeploymentmanagerCompositeTypesInsertResponse;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesInsertResponse };
