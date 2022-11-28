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
var ServiceusageServicesGenerateServiceIdentityPathParams = /** @class */ (function (_super) {
    __extends(ServiceusageServicesGenerateServiceIdentityPathParams, _super);
    function ServiceusageServicesGenerateServiceIdentityPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ServiceusageServicesGenerateServiceIdentityPathParams.prototype, "parent", void 0);
    return ServiceusageServicesGenerateServiceIdentityPathParams;
}(SpeakeasyBase));
export { ServiceusageServicesGenerateServiceIdentityPathParams };
var ServiceusageServicesGenerateServiceIdentityQueryParams = /** @class */ (function (_super) {
    __extends(ServiceusageServicesGenerateServiceIdentityQueryParams, _super);
    function ServiceusageServicesGenerateServiceIdentityQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServiceusageServicesGenerateServiceIdentityQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServiceusageServicesGenerateServiceIdentityQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServiceusageServicesGenerateServiceIdentityQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServiceusageServicesGenerateServiceIdentityQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServiceusageServicesGenerateServiceIdentityQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServiceusageServicesGenerateServiceIdentityQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServiceusageServicesGenerateServiceIdentityQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServiceusageServicesGenerateServiceIdentityQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServiceusageServicesGenerateServiceIdentityQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServiceusageServicesGenerateServiceIdentityQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServiceusageServicesGenerateServiceIdentityQueryParams.prototype, "uploadProtocol", void 0);
    return ServiceusageServicesGenerateServiceIdentityQueryParams;
}(SpeakeasyBase));
export { ServiceusageServicesGenerateServiceIdentityQueryParams };
var ServiceusageServicesGenerateServiceIdentitySecurityOption1 = /** @class */ (function (_super) {
    __extends(ServiceusageServicesGenerateServiceIdentitySecurityOption1, _super);
    function ServiceusageServicesGenerateServiceIdentitySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServiceusageServicesGenerateServiceIdentitySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServiceusageServicesGenerateServiceIdentitySecurityOption1.prototype, "oauth2c", void 0);
    return ServiceusageServicesGenerateServiceIdentitySecurityOption1;
}(SpeakeasyBase));
export { ServiceusageServicesGenerateServiceIdentitySecurityOption1 };
var ServiceusageServicesGenerateServiceIdentitySecurityOption2 = /** @class */ (function (_super) {
    __extends(ServiceusageServicesGenerateServiceIdentitySecurityOption2, _super);
    function ServiceusageServicesGenerateServiceIdentitySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServiceusageServicesGenerateServiceIdentitySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServiceusageServicesGenerateServiceIdentitySecurityOption2.prototype, "oauth2c", void 0);
    return ServiceusageServicesGenerateServiceIdentitySecurityOption2;
}(SpeakeasyBase));
export { ServiceusageServicesGenerateServiceIdentitySecurityOption2 };
var ServiceusageServicesGenerateServiceIdentitySecurity = /** @class */ (function (_super) {
    __extends(ServiceusageServicesGenerateServiceIdentitySecurity, _super);
    function ServiceusageServicesGenerateServiceIdentitySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServiceusageServicesGenerateServiceIdentitySecurityOption1)
    ], ServiceusageServicesGenerateServiceIdentitySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServiceusageServicesGenerateServiceIdentitySecurityOption2)
    ], ServiceusageServicesGenerateServiceIdentitySecurity.prototype, "option2", void 0);
    return ServiceusageServicesGenerateServiceIdentitySecurity;
}(SpeakeasyBase));
export { ServiceusageServicesGenerateServiceIdentitySecurity };
var ServiceusageServicesGenerateServiceIdentityRequest = /** @class */ (function (_super) {
    __extends(ServiceusageServicesGenerateServiceIdentityRequest, _super);
    function ServiceusageServicesGenerateServiceIdentityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageServicesGenerateServiceIdentityPathParams)
    ], ServiceusageServicesGenerateServiceIdentityRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageServicesGenerateServiceIdentityQueryParams)
    ], ServiceusageServicesGenerateServiceIdentityRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageServicesGenerateServiceIdentitySecurity)
    ], ServiceusageServicesGenerateServiceIdentityRequest.prototype, "security", void 0);
    return ServiceusageServicesGenerateServiceIdentityRequest;
}(SpeakeasyBase));
export { ServiceusageServicesGenerateServiceIdentityRequest };
var ServiceusageServicesGenerateServiceIdentityResponse = /** @class */ (function (_super) {
    __extends(ServiceusageServicesGenerateServiceIdentityResponse, _super);
    function ServiceusageServicesGenerateServiceIdentityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServiceusageServicesGenerateServiceIdentityResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ServiceusageServicesGenerateServiceIdentityResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServiceusageServicesGenerateServiceIdentityResponse.prototype, "statusCode", void 0);
    return ServiceusageServicesGenerateServiceIdentityResponse;
}(SpeakeasyBase));
export { ServiceusageServicesGenerateServiceIdentityResponse };
