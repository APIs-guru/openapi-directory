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
var ServicemanagementServicesConsumersTestIamPermissionsPathParams = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConsumersTestIamPermissionsPathParams, _super);
    function ServicemanagementServicesConsumersTestIamPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConsumersTestIamPermissionsPathParams.prototype, "resource", void 0);
    return ServicemanagementServicesConsumersTestIamPermissionsPathParams;
}(SpeakeasyBase));
export { ServicemanagementServicesConsumersTestIamPermissionsPathParams };
var ServicemanagementServicesConsumersTestIamPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConsumersTestIamPermissionsQueryParams, _super);
    function ServicemanagementServicesConsumersTestIamPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConsumersTestIamPermissionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConsumersTestIamPermissionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConsumersTestIamPermissionsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConsumersTestIamPermissionsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConsumersTestIamPermissionsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConsumersTestIamPermissionsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConsumersTestIamPermissionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicemanagementServicesConsumersTestIamPermissionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConsumersTestIamPermissionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConsumersTestIamPermissionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConsumersTestIamPermissionsQueryParams.prototype, "uploadProtocol", void 0);
    return ServicemanagementServicesConsumersTestIamPermissionsQueryParams;
}(SpeakeasyBase));
export { ServicemanagementServicesConsumersTestIamPermissionsQueryParams };
var ServicemanagementServicesConsumersTestIamPermissionsSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConsumersTestIamPermissionsSecurityOption1, _super);
    function ServicemanagementServicesConsumersTestIamPermissionsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesConsumersTestIamPermissionsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesConsumersTestIamPermissionsSecurityOption1.prototype, "oauth2c", void 0);
    return ServicemanagementServicesConsumersTestIamPermissionsSecurityOption1;
}(SpeakeasyBase));
export { ServicemanagementServicesConsumersTestIamPermissionsSecurityOption1 };
var ServicemanagementServicesConsumersTestIamPermissionsSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConsumersTestIamPermissionsSecurityOption2, _super);
    function ServicemanagementServicesConsumersTestIamPermissionsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesConsumersTestIamPermissionsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesConsumersTestIamPermissionsSecurityOption2.prototype, "oauth2c", void 0);
    return ServicemanagementServicesConsumersTestIamPermissionsSecurityOption2;
}(SpeakeasyBase));
export { ServicemanagementServicesConsumersTestIamPermissionsSecurityOption2 };
var ServicemanagementServicesConsumersTestIamPermissionsSecurityOption3 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConsumersTestIamPermissionsSecurityOption3, _super);
    function ServicemanagementServicesConsumersTestIamPermissionsSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesConsumersTestIamPermissionsSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesConsumersTestIamPermissionsSecurityOption3.prototype, "oauth2c", void 0);
    return ServicemanagementServicesConsumersTestIamPermissionsSecurityOption3;
}(SpeakeasyBase));
export { ServicemanagementServicesConsumersTestIamPermissionsSecurityOption3 };
var ServicemanagementServicesConsumersTestIamPermissionsSecurityOption4 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConsumersTestIamPermissionsSecurityOption4, _super);
    function ServicemanagementServicesConsumersTestIamPermissionsSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesConsumersTestIamPermissionsSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesConsumersTestIamPermissionsSecurityOption4.prototype, "oauth2c", void 0);
    return ServicemanagementServicesConsumersTestIamPermissionsSecurityOption4;
}(SpeakeasyBase));
export { ServicemanagementServicesConsumersTestIamPermissionsSecurityOption4 };
var ServicemanagementServicesConsumersTestIamPermissionsSecurity = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConsumersTestIamPermissionsSecurity, _super);
    function ServicemanagementServicesConsumersTestIamPermissionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesConsumersTestIamPermissionsSecurityOption1)
    ], ServicemanagementServicesConsumersTestIamPermissionsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesConsumersTestIamPermissionsSecurityOption2)
    ], ServicemanagementServicesConsumersTestIamPermissionsSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesConsumersTestIamPermissionsSecurityOption3)
    ], ServicemanagementServicesConsumersTestIamPermissionsSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesConsumersTestIamPermissionsSecurityOption4)
    ], ServicemanagementServicesConsumersTestIamPermissionsSecurity.prototype, "option4", void 0);
    return ServicemanagementServicesConsumersTestIamPermissionsSecurity;
}(SpeakeasyBase));
export { ServicemanagementServicesConsumersTestIamPermissionsSecurity };
var ServicemanagementServicesConsumersTestIamPermissionsRequest = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConsumersTestIamPermissionsRequest, _super);
    function ServicemanagementServicesConsumersTestIamPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesConsumersTestIamPermissionsPathParams)
    ], ServicemanagementServicesConsumersTestIamPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesConsumersTestIamPermissionsQueryParams)
    ], ServicemanagementServicesConsumersTestIamPermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TestIamPermissionsRequest)
    ], ServicemanagementServicesConsumersTestIamPermissionsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesConsumersTestIamPermissionsSecurity)
    ], ServicemanagementServicesConsumersTestIamPermissionsRequest.prototype, "security", void 0);
    return ServicemanagementServicesConsumersTestIamPermissionsRequest;
}(SpeakeasyBase));
export { ServicemanagementServicesConsumersTestIamPermissionsRequest };
var ServicemanagementServicesConsumersTestIamPermissionsResponse = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConsumersTestIamPermissionsResponse, _super);
    function ServicemanagementServicesConsumersTestIamPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicemanagementServicesConsumersTestIamPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicemanagementServicesConsumersTestIamPermissionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TestIamPermissionsResponse)
    ], ServicemanagementServicesConsumersTestIamPermissionsResponse.prototype, "testIamPermissionsResponse", void 0);
    return ServicemanagementServicesConsumersTestIamPermissionsResponse;
}(SpeakeasyBase));
export { ServicemanagementServicesConsumersTestIamPermissionsResponse };
