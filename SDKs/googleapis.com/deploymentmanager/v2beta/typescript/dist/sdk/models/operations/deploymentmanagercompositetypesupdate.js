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
var DeploymentmanagerCompositeTypesUpdatePathParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesUpdatePathParams, _super);
    function DeploymentmanagerCompositeTypesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=compositeType" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesUpdatePathParams.prototype, "compositeType", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesUpdatePathParams.prototype, "project", void 0);
    return DeploymentmanagerCompositeTypesUpdatePathParams;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesUpdatePathParams };
var DeploymentmanagerCompositeTypesUpdateQueryParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesUpdateQueryParams, _super);
    function DeploymentmanagerCompositeTypesUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DeploymentmanagerCompositeTypesUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return DeploymentmanagerCompositeTypesUpdateQueryParams;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesUpdateQueryParams };
var DeploymentmanagerCompositeTypesUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesUpdateSecurityOption1, _super);
    function DeploymentmanagerCompositeTypesUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerCompositeTypesUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerCompositeTypesUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return DeploymentmanagerCompositeTypesUpdateSecurityOption1;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesUpdateSecurityOption1 };
var DeploymentmanagerCompositeTypesUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesUpdateSecurityOption2, _super);
    function DeploymentmanagerCompositeTypesUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerCompositeTypesUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerCompositeTypesUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return DeploymentmanagerCompositeTypesUpdateSecurityOption2;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesUpdateSecurityOption2 };
var DeploymentmanagerCompositeTypesUpdateSecurity = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesUpdateSecurity, _super);
    function DeploymentmanagerCompositeTypesUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerCompositeTypesUpdateSecurityOption1)
    ], DeploymentmanagerCompositeTypesUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerCompositeTypesUpdateSecurityOption2)
    ], DeploymentmanagerCompositeTypesUpdateSecurity.prototype, "option2", void 0);
    return DeploymentmanagerCompositeTypesUpdateSecurity;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesUpdateSecurity };
var DeploymentmanagerCompositeTypesUpdateRequest = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesUpdateRequest, _super);
    function DeploymentmanagerCompositeTypesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerCompositeTypesUpdatePathParams)
    ], DeploymentmanagerCompositeTypesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerCompositeTypesUpdateQueryParams)
    ], DeploymentmanagerCompositeTypesUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CompositeType)
    ], DeploymentmanagerCompositeTypesUpdateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerCompositeTypesUpdateSecurity)
    ], DeploymentmanagerCompositeTypesUpdateRequest.prototype, "security", void 0);
    return DeploymentmanagerCompositeTypesUpdateRequest;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesUpdateRequest };
var DeploymentmanagerCompositeTypesUpdateResponse = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesUpdateResponse, _super);
    function DeploymentmanagerCompositeTypesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], DeploymentmanagerCompositeTypesUpdateResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeploymentmanagerCompositeTypesUpdateResponse.prototype, "statusCode", void 0);
    return DeploymentmanagerCompositeTypesUpdateResponse;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesUpdateResponse };
