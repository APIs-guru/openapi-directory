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
var DeploymentmanagerTypeProvidersUpdatePathParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersUpdatePathParams, _super);
    function DeploymentmanagerTypeProvidersUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersUpdatePathParams.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=typeProvider" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersUpdatePathParams.prototype, "typeProvider", void 0);
    return DeploymentmanagerTypeProvidersUpdatePathParams;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersUpdatePathParams };
var DeploymentmanagerTypeProvidersUpdateQueryParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersUpdateQueryParams, _super);
    function DeploymentmanagerTypeProvidersUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DeploymentmanagerTypeProvidersUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return DeploymentmanagerTypeProvidersUpdateQueryParams;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersUpdateQueryParams };
var DeploymentmanagerTypeProvidersUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersUpdateSecurityOption1, _super);
    function DeploymentmanagerTypeProvidersUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerTypeProvidersUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerTypeProvidersUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return DeploymentmanagerTypeProvidersUpdateSecurityOption1;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersUpdateSecurityOption1 };
var DeploymentmanagerTypeProvidersUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersUpdateSecurityOption2, _super);
    function DeploymentmanagerTypeProvidersUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerTypeProvidersUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerTypeProvidersUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return DeploymentmanagerTypeProvidersUpdateSecurityOption2;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersUpdateSecurityOption2 };
var DeploymentmanagerTypeProvidersUpdateSecurity = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersUpdateSecurity, _super);
    function DeploymentmanagerTypeProvidersUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerTypeProvidersUpdateSecurityOption1)
    ], DeploymentmanagerTypeProvidersUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerTypeProvidersUpdateSecurityOption2)
    ], DeploymentmanagerTypeProvidersUpdateSecurity.prototype, "option2", void 0);
    return DeploymentmanagerTypeProvidersUpdateSecurity;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersUpdateSecurity };
var DeploymentmanagerTypeProvidersUpdateRequest = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersUpdateRequest, _super);
    function DeploymentmanagerTypeProvidersUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerTypeProvidersUpdatePathParams)
    ], DeploymentmanagerTypeProvidersUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerTypeProvidersUpdateQueryParams)
    ], DeploymentmanagerTypeProvidersUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TypeProvider)
    ], DeploymentmanagerTypeProvidersUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerTypeProvidersUpdateSecurity)
    ], DeploymentmanagerTypeProvidersUpdateRequest.prototype, "security", void 0);
    return DeploymentmanagerTypeProvidersUpdateRequest;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersUpdateRequest };
var DeploymentmanagerTypeProvidersUpdateResponse = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersUpdateResponse, _super);
    function DeploymentmanagerTypeProvidersUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], DeploymentmanagerTypeProvidersUpdateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeploymentmanagerTypeProvidersUpdateResponse.prototype, "statusCode", void 0);
    return DeploymentmanagerTypeProvidersUpdateResponse;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersUpdateResponse };
