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
var ServicemanagementServicesGetConfigPathParams = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesGetConfigPathParams, _super);
    function ServicemanagementServicesGetConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceName" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesGetConfigPathParams.prototype, "serviceName", void 0);
    return ServicemanagementServicesGetConfigPathParams;
}(SpeakeasyBase));
export { ServicemanagementServicesGetConfigPathParams };
export var ServicemanagementServicesGetConfigViewEnum;
(function (ServicemanagementServicesGetConfigViewEnum) {
    ServicemanagementServicesGetConfigViewEnum["Basic"] = "BASIC";
    ServicemanagementServicesGetConfigViewEnum["Full"] = "FULL";
})(ServicemanagementServicesGetConfigViewEnum || (ServicemanagementServicesGetConfigViewEnum = {}));
var ServicemanagementServicesGetConfigQueryParams = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesGetConfigQueryParams, _super);
    function ServicemanagementServicesGetConfigQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesGetConfigQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesGetConfigQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesGetConfigQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesGetConfigQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=configId" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesGetConfigQueryParams.prototype, "configId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesGetConfigQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesGetConfigQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesGetConfigQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicemanagementServicesGetConfigQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesGetConfigQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesGetConfigQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesGetConfigQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesGetConfigQueryParams.prototype, "view", void 0);
    return ServicemanagementServicesGetConfigQueryParams;
}(SpeakeasyBase));
export { ServicemanagementServicesGetConfigQueryParams };
var ServicemanagementServicesGetConfigSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesGetConfigSecurityOption1, _super);
    function ServicemanagementServicesGetConfigSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesGetConfigSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesGetConfigSecurityOption1.prototype, "oauth2c", void 0);
    return ServicemanagementServicesGetConfigSecurityOption1;
}(SpeakeasyBase));
export { ServicemanagementServicesGetConfigSecurityOption1 };
var ServicemanagementServicesGetConfigSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesGetConfigSecurityOption2, _super);
    function ServicemanagementServicesGetConfigSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesGetConfigSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesGetConfigSecurityOption2.prototype, "oauth2c", void 0);
    return ServicemanagementServicesGetConfigSecurityOption2;
}(SpeakeasyBase));
export { ServicemanagementServicesGetConfigSecurityOption2 };
var ServicemanagementServicesGetConfigSecurityOption3 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesGetConfigSecurityOption3, _super);
    function ServicemanagementServicesGetConfigSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesGetConfigSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesGetConfigSecurityOption3.prototype, "oauth2c", void 0);
    return ServicemanagementServicesGetConfigSecurityOption3;
}(SpeakeasyBase));
export { ServicemanagementServicesGetConfigSecurityOption3 };
var ServicemanagementServicesGetConfigSecurityOption4 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesGetConfigSecurityOption4, _super);
    function ServicemanagementServicesGetConfigSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesGetConfigSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesGetConfigSecurityOption4.prototype, "oauth2c", void 0);
    return ServicemanagementServicesGetConfigSecurityOption4;
}(SpeakeasyBase));
export { ServicemanagementServicesGetConfigSecurityOption4 };
var ServicemanagementServicesGetConfigSecurity = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesGetConfigSecurity, _super);
    function ServicemanagementServicesGetConfigSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesGetConfigSecurityOption1)
    ], ServicemanagementServicesGetConfigSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesGetConfigSecurityOption2)
    ], ServicemanagementServicesGetConfigSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesGetConfigSecurityOption3)
    ], ServicemanagementServicesGetConfigSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesGetConfigSecurityOption4)
    ], ServicemanagementServicesGetConfigSecurity.prototype, "option4", void 0);
    return ServicemanagementServicesGetConfigSecurity;
}(SpeakeasyBase));
export { ServicemanagementServicesGetConfigSecurity };
var ServicemanagementServicesGetConfigRequest = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesGetConfigRequest, _super);
    function ServicemanagementServicesGetConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesGetConfigPathParams)
    ], ServicemanagementServicesGetConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesGetConfigQueryParams)
    ], ServicemanagementServicesGetConfigRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesGetConfigSecurity)
    ], ServicemanagementServicesGetConfigRequest.prototype, "security", void 0);
    return ServicemanagementServicesGetConfigRequest;
}(SpeakeasyBase));
export { ServicemanagementServicesGetConfigRequest };
var ServicemanagementServicesGetConfigResponse = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesGetConfigResponse, _super);
    function ServicemanagementServicesGetConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicemanagementServicesGetConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Service)
    ], ServicemanagementServicesGetConfigResponse.prototype, "service", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicemanagementServicesGetConfigResponse.prototype, "statusCode", void 0);
    return ServicemanagementServicesGetConfigResponse;
}(SpeakeasyBase));
export { ServicemanagementServicesGetConfigResponse };
