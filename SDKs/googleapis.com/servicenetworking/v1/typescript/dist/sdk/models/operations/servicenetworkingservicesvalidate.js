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
var ServicenetworkingServicesValidatePathParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesValidatePathParams, _super);
    function ServicenetworkingServicesValidatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesValidatePathParams.prototype, "parent", void 0);
    return ServicenetworkingServicesValidatePathParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesValidatePathParams };
var ServicenetworkingServicesValidateQueryParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesValidateQueryParams, _super);
    function ServicenetworkingServicesValidateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesValidateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesValidateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesValidateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesValidateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesValidateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesValidateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesValidateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicenetworkingServicesValidateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesValidateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesValidateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesValidateQueryParams.prototype, "uploadProtocol", void 0);
    return ServicenetworkingServicesValidateQueryParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesValidateQueryParams };
var ServicenetworkingServicesValidateSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesValidateSecurityOption1, _super);
    function ServicenetworkingServicesValidateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesValidateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesValidateSecurityOption1.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesValidateSecurityOption1;
}(SpeakeasyBase));
export { ServicenetworkingServicesValidateSecurityOption1 };
var ServicenetworkingServicesValidateSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesValidateSecurityOption2, _super);
    function ServicenetworkingServicesValidateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesValidateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesValidateSecurityOption2.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesValidateSecurityOption2;
}(SpeakeasyBase));
export { ServicenetworkingServicesValidateSecurityOption2 };
var ServicenetworkingServicesValidateSecurity = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesValidateSecurity, _super);
    function ServicenetworkingServicesValidateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesValidateSecurityOption1)
    ], ServicenetworkingServicesValidateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesValidateSecurityOption2)
    ], ServicenetworkingServicesValidateSecurity.prototype, "option2", void 0);
    return ServicenetworkingServicesValidateSecurity;
}(SpeakeasyBase));
export { ServicenetworkingServicesValidateSecurity };
var ServicenetworkingServicesValidateRequest = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesValidateRequest, _super);
    function ServicenetworkingServicesValidateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesValidatePathParams)
    ], ServicenetworkingServicesValidateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesValidateQueryParams)
    ], ServicenetworkingServicesValidateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ValidateConsumerConfigRequest)
    ], ServicenetworkingServicesValidateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesValidateSecurity)
    ], ServicenetworkingServicesValidateRequest.prototype, "security", void 0);
    return ServicenetworkingServicesValidateRequest;
}(SpeakeasyBase));
export { ServicenetworkingServicesValidateRequest };
var ServicenetworkingServicesValidateResponse = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesValidateResponse, _super);
    function ServicenetworkingServicesValidateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicenetworkingServicesValidateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicenetworkingServicesValidateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidateConsumerConfigResponse)
    ], ServicenetworkingServicesValidateResponse.prototype, "validateConsumerConfigResponse", void 0);
    return ServicenetworkingServicesValidateResponse;
}(SpeakeasyBase));
export { ServicenetworkingServicesValidateResponse };
