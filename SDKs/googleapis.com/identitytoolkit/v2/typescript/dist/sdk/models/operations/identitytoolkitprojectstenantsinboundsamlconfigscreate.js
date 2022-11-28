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
var IdentitytoolkitProjectsTenantsInboundSamlConfigsCreatePathParams = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsInboundSamlConfigsCreatePathParams, _super);
    function IdentitytoolkitProjectsTenantsInboundSamlConfigsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsInboundSamlConfigsCreatePathParams.prototype, "parent", void 0);
    return IdentitytoolkitProjectsTenantsInboundSamlConfigsCreatePathParams;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsInboundSamlConfigsCreatePathParams };
var IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateQueryParams = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateQueryParams, _super);
    function IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inboundSamlConfigId" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateQueryParams.prototype, "inboundSamlConfigId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateQueryParams;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateQueryParams };
var IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption1, _super);
    function IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption1;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption1 };
var IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption2, _super);
    function IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption2;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption2 };
var IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurity = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurity, _super);
    function IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption1)
    ], IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurityOption2)
    ], IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurity.prototype, "option2", void 0);
    return IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurity;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurity };
var IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateRequest = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateRequest, _super);
    function IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitProjectsTenantsInboundSamlConfigsCreatePathParams)
    ], IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateQueryParams)
    ], IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput)
    ], IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurity)
    ], IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateRequest.prototype, "security", void 0);
    return IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateRequest;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateRequest };
var IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateResponse = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateResponse, _super);
    function IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig)
    ], IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateResponse.prototype, "googleCloudIdentitytoolkitAdminV2InboundSamlConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateResponse.prototype, "statusCode", void 0);
    return IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateResponse;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateResponse };
