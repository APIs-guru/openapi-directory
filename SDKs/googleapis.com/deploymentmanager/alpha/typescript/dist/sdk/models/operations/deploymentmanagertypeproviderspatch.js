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
var DeploymentmanagerTypeProvidersPatchPathParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersPatchPathParams, _super);
    function DeploymentmanagerTypeProvidersPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersPatchPathParams.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=typeProvider" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersPatchPathParams.prototype, "typeProvider", void 0);
    return DeploymentmanagerTypeProvidersPatchPathParams;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersPatchPathParams };
var DeploymentmanagerTypeProvidersPatchQueryParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersPatchQueryParams, _super);
    function DeploymentmanagerTypeProvidersPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DeploymentmanagerTypeProvidersPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersPatchQueryParams.prototype, "uploadProtocol", void 0);
    return DeploymentmanagerTypeProvidersPatchQueryParams;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersPatchQueryParams };
var DeploymentmanagerTypeProvidersPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersPatchSecurityOption1, _super);
    function DeploymentmanagerTypeProvidersPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerTypeProvidersPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerTypeProvidersPatchSecurityOption1.prototype, "oauth2c", void 0);
    return DeploymentmanagerTypeProvidersPatchSecurityOption1;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersPatchSecurityOption1 };
var DeploymentmanagerTypeProvidersPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersPatchSecurityOption2, _super);
    function DeploymentmanagerTypeProvidersPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerTypeProvidersPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerTypeProvidersPatchSecurityOption2.prototype, "oauth2c", void 0);
    return DeploymentmanagerTypeProvidersPatchSecurityOption2;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersPatchSecurityOption2 };
var DeploymentmanagerTypeProvidersPatchSecurity = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersPatchSecurity, _super);
    function DeploymentmanagerTypeProvidersPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerTypeProvidersPatchSecurityOption1)
    ], DeploymentmanagerTypeProvidersPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerTypeProvidersPatchSecurityOption2)
    ], DeploymentmanagerTypeProvidersPatchSecurity.prototype, "option2", void 0);
    return DeploymentmanagerTypeProvidersPatchSecurity;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersPatchSecurity };
var DeploymentmanagerTypeProvidersPatchRequest = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersPatchRequest, _super);
    function DeploymentmanagerTypeProvidersPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerTypeProvidersPatchPathParams)
    ], DeploymentmanagerTypeProvidersPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerTypeProvidersPatchQueryParams)
    ], DeploymentmanagerTypeProvidersPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TypeProvider)
    ], DeploymentmanagerTypeProvidersPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerTypeProvidersPatchSecurity)
    ], DeploymentmanagerTypeProvidersPatchRequest.prototype, "security", void 0);
    return DeploymentmanagerTypeProvidersPatchRequest;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersPatchRequest };
var DeploymentmanagerTypeProvidersPatchResponse = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersPatchResponse, _super);
    function DeploymentmanagerTypeProvidersPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], DeploymentmanagerTypeProvidersPatchResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeploymentmanagerTypeProvidersPatchResponse.prototype, "statusCode", void 0);
    return DeploymentmanagerTypeProvidersPatchResponse;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersPatchResponse };
