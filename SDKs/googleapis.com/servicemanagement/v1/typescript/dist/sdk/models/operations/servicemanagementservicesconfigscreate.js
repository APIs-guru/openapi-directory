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
var ServicemanagementServicesConfigsCreatePathParams = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConfigsCreatePathParams, _super);
    function ServicemanagementServicesConfigsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceName" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsCreatePathParams.prototype, "serviceName", void 0);
    return ServicemanagementServicesConfigsCreatePathParams;
}(SpeakeasyBase));
export { ServicemanagementServicesConfigsCreatePathParams };
var ServicemanagementServicesConfigsCreateQueryParams = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConfigsCreateQueryParams, _super);
    function ServicemanagementServicesConfigsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicemanagementServicesConfigsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ServicemanagementServicesConfigsCreateQueryParams;
}(SpeakeasyBase));
export { ServicemanagementServicesConfigsCreateQueryParams };
var ServicemanagementServicesConfigsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConfigsCreateSecurityOption1, _super);
    function ServicemanagementServicesConfigsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesConfigsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesConfigsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return ServicemanagementServicesConfigsCreateSecurityOption1;
}(SpeakeasyBase));
export { ServicemanagementServicesConfigsCreateSecurityOption1 };
var ServicemanagementServicesConfigsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConfigsCreateSecurityOption2, _super);
    function ServicemanagementServicesConfigsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesConfigsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesConfigsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return ServicemanagementServicesConfigsCreateSecurityOption2;
}(SpeakeasyBase));
export { ServicemanagementServicesConfigsCreateSecurityOption2 };
var ServicemanagementServicesConfigsCreateSecurity = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConfigsCreateSecurity, _super);
    function ServicemanagementServicesConfigsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesConfigsCreateSecurityOption1)
    ], ServicemanagementServicesConfigsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesConfigsCreateSecurityOption2)
    ], ServicemanagementServicesConfigsCreateSecurity.prototype, "option2", void 0);
    return ServicemanagementServicesConfigsCreateSecurity;
}(SpeakeasyBase));
export { ServicemanagementServicesConfigsCreateSecurity };
var ServicemanagementServicesConfigsCreateRequest = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConfigsCreateRequest, _super);
    function ServicemanagementServicesConfigsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesConfigsCreatePathParams)
    ], ServicemanagementServicesConfigsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesConfigsCreateQueryParams)
    ], ServicemanagementServicesConfigsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Service)
    ], ServicemanagementServicesConfigsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesConfigsCreateSecurity)
    ], ServicemanagementServicesConfigsCreateRequest.prototype, "security", void 0);
    return ServicemanagementServicesConfigsCreateRequest;
}(SpeakeasyBase));
export { ServicemanagementServicesConfigsCreateRequest };
var ServicemanagementServicesConfigsCreateResponse = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConfigsCreateResponse, _super);
    function ServicemanagementServicesConfigsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Service)
    ], ServicemanagementServicesConfigsCreateResponse.prototype, "service", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicemanagementServicesConfigsCreateResponse.prototype, "statusCode", void 0);
    return ServicemanagementServicesConfigsCreateResponse;
}(SpeakeasyBase));
export { ServicemanagementServicesConfigsCreateResponse };
