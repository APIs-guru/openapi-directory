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
var ServicemanagementServicesConfigsGetPathParams = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConfigsGetPathParams, _super);
    function ServicemanagementServicesConfigsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configId" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsGetPathParams.prototype, "configId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceName" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsGetPathParams.prototype, "serviceName", void 0);
    return ServicemanagementServicesConfigsGetPathParams;
}(SpeakeasyBase));
export { ServicemanagementServicesConfigsGetPathParams };
export var ServicemanagementServicesConfigsGetViewEnum;
(function (ServicemanagementServicesConfigsGetViewEnum) {
    ServicemanagementServicesConfigsGetViewEnum["Basic"] = "BASIC";
    ServicemanagementServicesConfigsGetViewEnum["Full"] = "FULL";
})(ServicemanagementServicesConfigsGetViewEnum || (ServicemanagementServicesConfigsGetViewEnum = {}));
var ServicemanagementServicesConfigsGetQueryParams = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConfigsGetQueryParams, _super);
    function ServicemanagementServicesConfigsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicemanagementServicesConfigsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsGetQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsGetQueryParams.prototype, "view", void 0);
    return ServicemanagementServicesConfigsGetQueryParams;
}(SpeakeasyBase));
export { ServicemanagementServicesConfigsGetQueryParams };
var ServicemanagementServicesConfigsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConfigsGetSecurityOption1, _super);
    function ServicemanagementServicesConfigsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesConfigsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesConfigsGetSecurityOption1.prototype, "oauth2c", void 0);
    return ServicemanagementServicesConfigsGetSecurityOption1;
}(SpeakeasyBase));
export { ServicemanagementServicesConfigsGetSecurityOption1 };
var ServicemanagementServicesConfigsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConfigsGetSecurityOption2, _super);
    function ServicemanagementServicesConfigsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesConfigsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesConfigsGetSecurityOption2.prototype, "oauth2c", void 0);
    return ServicemanagementServicesConfigsGetSecurityOption2;
}(SpeakeasyBase));
export { ServicemanagementServicesConfigsGetSecurityOption2 };
var ServicemanagementServicesConfigsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConfigsGetSecurityOption3, _super);
    function ServicemanagementServicesConfigsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesConfigsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesConfigsGetSecurityOption3.prototype, "oauth2c", void 0);
    return ServicemanagementServicesConfigsGetSecurityOption3;
}(SpeakeasyBase));
export { ServicemanagementServicesConfigsGetSecurityOption3 };
var ServicemanagementServicesConfigsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConfigsGetSecurityOption4, _super);
    function ServicemanagementServicesConfigsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesConfigsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesConfigsGetSecurityOption4.prototype, "oauth2c", void 0);
    return ServicemanagementServicesConfigsGetSecurityOption4;
}(SpeakeasyBase));
export { ServicemanagementServicesConfigsGetSecurityOption4 };
var ServicemanagementServicesConfigsGetSecurity = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConfigsGetSecurity, _super);
    function ServicemanagementServicesConfigsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesConfigsGetSecurityOption1)
    ], ServicemanagementServicesConfigsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesConfigsGetSecurityOption2)
    ], ServicemanagementServicesConfigsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesConfigsGetSecurityOption3)
    ], ServicemanagementServicesConfigsGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesConfigsGetSecurityOption4)
    ], ServicemanagementServicesConfigsGetSecurity.prototype, "option4", void 0);
    return ServicemanagementServicesConfigsGetSecurity;
}(SpeakeasyBase));
export { ServicemanagementServicesConfigsGetSecurity };
var ServicemanagementServicesConfigsGetRequest = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConfigsGetRequest, _super);
    function ServicemanagementServicesConfigsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesConfigsGetPathParams)
    ], ServicemanagementServicesConfigsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesConfigsGetQueryParams)
    ], ServicemanagementServicesConfigsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesConfigsGetSecurity)
    ], ServicemanagementServicesConfigsGetRequest.prototype, "security", void 0);
    return ServicemanagementServicesConfigsGetRequest;
}(SpeakeasyBase));
export { ServicemanagementServicesConfigsGetRequest };
var ServicemanagementServicesConfigsGetResponse = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConfigsGetResponse, _super);
    function ServicemanagementServicesConfigsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Service)
    ], ServicemanagementServicesConfigsGetResponse.prototype, "service", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicemanagementServicesConfigsGetResponse.prototype, "statusCode", void 0);
    return ServicemanagementServicesConfigsGetResponse;
}(SpeakeasyBase));
export { ServicemanagementServicesConfigsGetResponse };
