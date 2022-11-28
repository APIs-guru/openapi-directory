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
var DeploymentmanagerTypeProvidersInsertPathParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersInsertPathParams, _super);
    function DeploymentmanagerTypeProvidersInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersInsertPathParams.prototype, "project", void 0);
    return DeploymentmanagerTypeProvidersInsertPathParams;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersInsertPathParams };
var DeploymentmanagerTypeProvidersInsertQueryParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersInsertQueryParams, _super);
    function DeploymentmanagerTypeProvidersInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersInsertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersInsertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersInsertQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DeploymentmanagerTypeProvidersInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersInsertQueryParams.prototype, "uploadProtocol", void 0);
    return DeploymentmanagerTypeProvidersInsertQueryParams;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersInsertQueryParams };
var DeploymentmanagerTypeProvidersInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersInsertSecurityOption1, _super);
    function DeploymentmanagerTypeProvidersInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerTypeProvidersInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerTypeProvidersInsertSecurityOption1.prototype, "oauth2c", void 0);
    return DeploymentmanagerTypeProvidersInsertSecurityOption1;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersInsertSecurityOption1 };
var DeploymentmanagerTypeProvidersInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersInsertSecurityOption2, _super);
    function DeploymentmanagerTypeProvidersInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerTypeProvidersInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerTypeProvidersInsertSecurityOption2.prototype, "oauth2c", void 0);
    return DeploymentmanagerTypeProvidersInsertSecurityOption2;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersInsertSecurityOption2 };
var DeploymentmanagerTypeProvidersInsertSecurity = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersInsertSecurity, _super);
    function DeploymentmanagerTypeProvidersInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerTypeProvidersInsertSecurityOption1)
    ], DeploymentmanagerTypeProvidersInsertSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerTypeProvidersInsertSecurityOption2)
    ], DeploymentmanagerTypeProvidersInsertSecurity.prototype, "option2", void 0);
    return DeploymentmanagerTypeProvidersInsertSecurity;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersInsertSecurity };
var DeploymentmanagerTypeProvidersInsertRequest = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersInsertRequest, _super);
    function DeploymentmanagerTypeProvidersInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerTypeProvidersInsertPathParams)
    ], DeploymentmanagerTypeProvidersInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerTypeProvidersInsertQueryParams)
    ], DeploymentmanagerTypeProvidersInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TypeProvider)
    ], DeploymentmanagerTypeProvidersInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerTypeProvidersInsertSecurity)
    ], DeploymentmanagerTypeProvidersInsertRequest.prototype, "security", void 0);
    return DeploymentmanagerTypeProvidersInsertRequest;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersInsertRequest };
var DeploymentmanagerTypeProvidersInsertResponse = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersInsertResponse, _super);
    function DeploymentmanagerTypeProvidersInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], DeploymentmanagerTypeProvidersInsertResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeploymentmanagerTypeProvidersInsertResponse.prototype, "statusCode", void 0);
    return DeploymentmanagerTypeProvidersInsertResponse;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersInsertResponse };
