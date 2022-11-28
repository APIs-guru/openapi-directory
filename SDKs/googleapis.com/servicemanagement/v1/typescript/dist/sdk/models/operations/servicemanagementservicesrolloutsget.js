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
var ServicemanagementServicesRolloutsGetPathParams = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesRolloutsGetPathParams, _super);
    function ServicemanagementServicesRolloutsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rolloutId" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesRolloutsGetPathParams.prototype, "rolloutId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceName" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesRolloutsGetPathParams.prototype, "serviceName", void 0);
    return ServicemanagementServicesRolloutsGetPathParams;
}(SpeakeasyBase));
export { ServicemanagementServicesRolloutsGetPathParams };
var ServicemanagementServicesRolloutsGetQueryParams = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesRolloutsGetQueryParams, _super);
    function ServicemanagementServicesRolloutsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesRolloutsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesRolloutsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesRolloutsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesRolloutsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesRolloutsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesRolloutsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesRolloutsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicemanagementServicesRolloutsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesRolloutsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesRolloutsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesRolloutsGetQueryParams.prototype, "uploadProtocol", void 0);
    return ServicemanagementServicesRolloutsGetQueryParams;
}(SpeakeasyBase));
export { ServicemanagementServicesRolloutsGetQueryParams };
var ServicemanagementServicesRolloutsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesRolloutsGetSecurityOption1, _super);
    function ServicemanagementServicesRolloutsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesRolloutsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesRolloutsGetSecurityOption1.prototype, "oauth2c", void 0);
    return ServicemanagementServicesRolloutsGetSecurityOption1;
}(SpeakeasyBase));
export { ServicemanagementServicesRolloutsGetSecurityOption1 };
var ServicemanagementServicesRolloutsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesRolloutsGetSecurityOption2, _super);
    function ServicemanagementServicesRolloutsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesRolloutsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesRolloutsGetSecurityOption2.prototype, "oauth2c", void 0);
    return ServicemanagementServicesRolloutsGetSecurityOption2;
}(SpeakeasyBase));
export { ServicemanagementServicesRolloutsGetSecurityOption2 };
var ServicemanagementServicesRolloutsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesRolloutsGetSecurityOption3, _super);
    function ServicemanagementServicesRolloutsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesRolloutsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesRolloutsGetSecurityOption3.prototype, "oauth2c", void 0);
    return ServicemanagementServicesRolloutsGetSecurityOption3;
}(SpeakeasyBase));
export { ServicemanagementServicesRolloutsGetSecurityOption3 };
var ServicemanagementServicesRolloutsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesRolloutsGetSecurityOption4, _super);
    function ServicemanagementServicesRolloutsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesRolloutsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesRolloutsGetSecurityOption4.prototype, "oauth2c", void 0);
    return ServicemanagementServicesRolloutsGetSecurityOption4;
}(SpeakeasyBase));
export { ServicemanagementServicesRolloutsGetSecurityOption4 };
var ServicemanagementServicesRolloutsGetSecurity = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesRolloutsGetSecurity, _super);
    function ServicemanagementServicesRolloutsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesRolloutsGetSecurityOption1)
    ], ServicemanagementServicesRolloutsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesRolloutsGetSecurityOption2)
    ], ServicemanagementServicesRolloutsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesRolloutsGetSecurityOption3)
    ], ServicemanagementServicesRolloutsGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesRolloutsGetSecurityOption4)
    ], ServicemanagementServicesRolloutsGetSecurity.prototype, "option4", void 0);
    return ServicemanagementServicesRolloutsGetSecurity;
}(SpeakeasyBase));
export { ServicemanagementServicesRolloutsGetSecurity };
var ServicemanagementServicesRolloutsGetRequest = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesRolloutsGetRequest, _super);
    function ServicemanagementServicesRolloutsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesRolloutsGetPathParams)
    ], ServicemanagementServicesRolloutsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesRolloutsGetQueryParams)
    ], ServicemanagementServicesRolloutsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesRolloutsGetSecurity)
    ], ServicemanagementServicesRolloutsGetRequest.prototype, "security", void 0);
    return ServicemanagementServicesRolloutsGetRequest;
}(SpeakeasyBase));
export { ServicemanagementServicesRolloutsGetRequest };
var ServicemanagementServicesRolloutsGetResponse = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesRolloutsGetResponse, _super);
    function ServicemanagementServicesRolloutsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicemanagementServicesRolloutsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Rollout)
    ], ServicemanagementServicesRolloutsGetResponse.prototype, "rollout", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicemanagementServicesRolloutsGetResponse.prototype, "statusCode", void 0);
    return ServicemanagementServicesRolloutsGetResponse;
}(SpeakeasyBase));
export { ServicemanagementServicesRolloutsGetResponse };
