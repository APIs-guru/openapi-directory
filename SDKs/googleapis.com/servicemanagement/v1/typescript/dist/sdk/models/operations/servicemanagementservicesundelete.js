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
var ServicemanagementServicesUndeletePathParams = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesUndeletePathParams, _super);
    function ServicemanagementServicesUndeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceName" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesUndeletePathParams.prototype, "serviceName", void 0);
    return ServicemanagementServicesUndeletePathParams;
}(SpeakeasyBase));
export { ServicemanagementServicesUndeletePathParams };
var ServicemanagementServicesUndeleteQueryParams = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesUndeleteQueryParams, _super);
    function ServicemanagementServicesUndeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesUndeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesUndeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesUndeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesUndeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesUndeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesUndeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesUndeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicemanagementServicesUndeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesUndeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesUndeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesUndeleteQueryParams.prototype, "uploadProtocol", void 0);
    return ServicemanagementServicesUndeleteQueryParams;
}(SpeakeasyBase));
export { ServicemanagementServicesUndeleteQueryParams };
var ServicemanagementServicesUndeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesUndeleteSecurityOption1, _super);
    function ServicemanagementServicesUndeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesUndeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesUndeleteSecurityOption1.prototype, "oauth2c", void 0);
    return ServicemanagementServicesUndeleteSecurityOption1;
}(SpeakeasyBase));
export { ServicemanagementServicesUndeleteSecurityOption1 };
var ServicemanagementServicesUndeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesUndeleteSecurityOption2, _super);
    function ServicemanagementServicesUndeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesUndeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesUndeleteSecurityOption2.prototype, "oauth2c", void 0);
    return ServicemanagementServicesUndeleteSecurityOption2;
}(SpeakeasyBase));
export { ServicemanagementServicesUndeleteSecurityOption2 };
var ServicemanagementServicesUndeleteSecurity = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesUndeleteSecurity, _super);
    function ServicemanagementServicesUndeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesUndeleteSecurityOption1)
    ], ServicemanagementServicesUndeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesUndeleteSecurityOption2)
    ], ServicemanagementServicesUndeleteSecurity.prototype, "option2", void 0);
    return ServicemanagementServicesUndeleteSecurity;
}(SpeakeasyBase));
export { ServicemanagementServicesUndeleteSecurity };
var ServicemanagementServicesUndeleteRequest = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesUndeleteRequest, _super);
    function ServicemanagementServicesUndeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesUndeletePathParams)
    ], ServicemanagementServicesUndeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesUndeleteQueryParams)
    ], ServicemanagementServicesUndeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesUndeleteSecurity)
    ], ServicemanagementServicesUndeleteRequest.prototype, "security", void 0);
    return ServicemanagementServicesUndeleteRequest;
}(SpeakeasyBase));
export { ServicemanagementServicesUndeleteRequest };
var ServicemanagementServicesUndeleteResponse = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesUndeleteResponse, _super);
    function ServicemanagementServicesUndeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicemanagementServicesUndeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ServicemanagementServicesUndeleteResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicemanagementServicesUndeleteResponse.prototype, "statusCode", void 0);
    return ServicemanagementServicesUndeleteResponse;
}(SpeakeasyBase));
export { ServicemanagementServicesUndeleteResponse };
