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
var ServicemanagementServicesGetPathParams = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesGetPathParams, _super);
    function ServicemanagementServicesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceName" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesGetPathParams.prototype, "serviceName", void 0);
    return ServicemanagementServicesGetPathParams;
}(SpeakeasyBase));
export { ServicemanagementServicesGetPathParams };
var ServicemanagementServicesGetQueryParams = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesGetQueryParams, _super);
    function ServicemanagementServicesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicemanagementServicesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesGetQueryParams.prototype, "uploadProtocol", void 0);
    return ServicemanagementServicesGetQueryParams;
}(SpeakeasyBase));
export { ServicemanagementServicesGetQueryParams };
var ServicemanagementServicesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesGetSecurityOption1, _super);
    function ServicemanagementServicesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesGetSecurityOption1.prototype, "oauth2c", void 0);
    return ServicemanagementServicesGetSecurityOption1;
}(SpeakeasyBase));
export { ServicemanagementServicesGetSecurityOption1 };
var ServicemanagementServicesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesGetSecurityOption2, _super);
    function ServicemanagementServicesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesGetSecurityOption2.prototype, "oauth2c", void 0);
    return ServicemanagementServicesGetSecurityOption2;
}(SpeakeasyBase));
export { ServicemanagementServicesGetSecurityOption2 };
var ServicemanagementServicesGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesGetSecurityOption3, _super);
    function ServicemanagementServicesGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesGetSecurityOption3.prototype, "oauth2c", void 0);
    return ServicemanagementServicesGetSecurityOption3;
}(SpeakeasyBase));
export { ServicemanagementServicesGetSecurityOption3 };
var ServicemanagementServicesGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesGetSecurityOption4, _super);
    function ServicemanagementServicesGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesGetSecurityOption4.prototype, "oauth2c", void 0);
    return ServicemanagementServicesGetSecurityOption4;
}(SpeakeasyBase));
export { ServicemanagementServicesGetSecurityOption4 };
var ServicemanagementServicesGetSecurity = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesGetSecurity, _super);
    function ServicemanagementServicesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesGetSecurityOption1)
    ], ServicemanagementServicesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesGetSecurityOption2)
    ], ServicemanagementServicesGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesGetSecurityOption3)
    ], ServicemanagementServicesGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesGetSecurityOption4)
    ], ServicemanagementServicesGetSecurity.prototype, "option4", void 0);
    return ServicemanagementServicesGetSecurity;
}(SpeakeasyBase));
export { ServicemanagementServicesGetSecurity };
var ServicemanagementServicesGetRequest = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesGetRequest, _super);
    function ServicemanagementServicesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesGetPathParams)
    ], ServicemanagementServicesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesGetQueryParams)
    ], ServicemanagementServicesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesGetSecurity)
    ], ServicemanagementServicesGetRequest.prototype, "security", void 0);
    return ServicemanagementServicesGetRequest;
}(SpeakeasyBase));
export { ServicemanagementServicesGetRequest };
var ServicemanagementServicesGetResponse = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesGetResponse, _super);
    function ServicemanagementServicesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicemanagementServicesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ManagedService)
    ], ServicemanagementServicesGetResponse.prototype, "managedService", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicemanagementServicesGetResponse.prototype, "statusCode", void 0);
    return ServicemanagementServicesGetResponse;
}(SpeakeasyBase));
export { ServicemanagementServicesGetResponse };
