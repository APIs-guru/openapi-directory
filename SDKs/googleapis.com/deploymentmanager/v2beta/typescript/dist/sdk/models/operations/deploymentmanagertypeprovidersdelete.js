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
var DeploymentmanagerTypeProvidersDeletePathParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersDeletePathParams, _super);
    function DeploymentmanagerTypeProvidersDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersDeletePathParams.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=typeProvider" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersDeletePathParams.prototype, "typeProvider", void 0);
    return DeploymentmanagerTypeProvidersDeletePathParams;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersDeletePathParams };
var DeploymentmanagerTypeProvidersDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersDeleteQueryParams, _super);
    function DeploymentmanagerTypeProvidersDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DeploymentmanagerTypeProvidersDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return DeploymentmanagerTypeProvidersDeleteQueryParams;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersDeleteQueryParams };
var DeploymentmanagerTypeProvidersDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersDeleteSecurityOption1, _super);
    function DeploymentmanagerTypeProvidersDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerTypeProvidersDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerTypeProvidersDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return DeploymentmanagerTypeProvidersDeleteSecurityOption1;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersDeleteSecurityOption1 };
var DeploymentmanagerTypeProvidersDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersDeleteSecurityOption2, _super);
    function DeploymentmanagerTypeProvidersDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerTypeProvidersDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerTypeProvidersDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return DeploymentmanagerTypeProvidersDeleteSecurityOption2;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersDeleteSecurityOption2 };
var DeploymentmanagerTypeProvidersDeleteSecurity = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersDeleteSecurity, _super);
    function DeploymentmanagerTypeProvidersDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerTypeProvidersDeleteSecurityOption1)
    ], DeploymentmanagerTypeProvidersDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerTypeProvidersDeleteSecurityOption2)
    ], DeploymentmanagerTypeProvidersDeleteSecurity.prototype, "option2", void 0);
    return DeploymentmanagerTypeProvidersDeleteSecurity;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersDeleteSecurity };
var DeploymentmanagerTypeProvidersDeleteRequest = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersDeleteRequest, _super);
    function DeploymentmanagerTypeProvidersDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerTypeProvidersDeletePathParams)
    ], DeploymentmanagerTypeProvidersDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerTypeProvidersDeleteQueryParams)
    ], DeploymentmanagerTypeProvidersDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerTypeProvidersDeleteSecurity)
    ], DeploymentmanagerTypeProvidersDeleteRequest.prototype, "security", void 0);
    return DeploymentmanagerTypeProvidersDeleteRequest;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersDeleteRequest };
var DeploymentmanagerTypeProvidersDeleteResponse = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersDeleteResponse, _super);
    function DeploymentmanagerTypeProvidersDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], DeploymentmanagerTypeProvidersDeleteResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeploymentmanagerTypeProvidersDeleteResponse.prototype, "statusCode", void 0);
    return DeploymentmanagerTypeProvidersDeleteResponse;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersDeleteResponse };
