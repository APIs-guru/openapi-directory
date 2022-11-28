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
var ServicemanagementServicesConfigsSubmitPathParams = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConfigsSubmitPathParams, _super);
    function ServicemanagementServicesConfigsSubmitPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceName" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsSubmitPathParams.prototype, "serviceName", void 0);
    return ServicemanagementServicesConfigsSubmitPathParams;
}(SpeakeasyBase));
export { ServicemanagementServicesConfigsSubmitPathParams };
var ServicemanagementServicesConfigsSubmitQueryParams = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConfigsSubmitQueryParams, _super);
    function ServicemanagementServicesConfigsSubmitQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsSubmitQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsSubmitQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsSubmitQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsSubmitQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsSubmitQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsSubmitQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsSubmitQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicemanagementServicesConfigsSubmitQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsSubmitQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsSubmitQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsSubmitQueryParams.prototype, "uploadProtocol", void 0);
    return ServicemanagementServicesConfigsSubmitQueryParams;
}(SpeakeasyBase));
export { ServicemanagementServicesConfigsSubmitQueryParams };
var ServicemanagementServicesConfigsSubmitSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConfigsSubmitSecurityOption1, _super);
    function ServicemanagementServicesConfigsSubmitSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesConfigsSubmitSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesConfigsSubmitSecurityOption1.prototype, "oauth2c", void 0);
    return ServicemanagementServicesConfigsSubmitSecurityOption1;
}(SpeakeasyBase));
export { ServicemanagementServicesConfigsSubmitSecurityOption1 };
var ServicemanagementServicesConfigsSubmitSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConfigsSubmitSecurityOption2, _super);
    function ServicemanagementServicesConfigsSubmitSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesConfigsSubmitSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesConfigsSubmitSecurityOption2.prototype, "oauth2c", void 0);
    return ServicemanagementServicesConfigsSubmitSecurityOption2;
}(SpeakeasyBase));
export { ServicemanagementServicesConfigsSubmitSecurityOption2 };
var ServicemanagementServicesConfigsSubmitSecurity = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConfigsSubmitSecurity, _super);
    function ServicemanagementServicesConfigsSubmitSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesConfigsSubmitSecurityOption1)
    ], ServicemanagementServicesConfigsSubmitSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesConfigsSubmitSecurityOption2)
    ], ServicemanagementServicesConfigsSubmitSecurity.prototype, "option2", void 0);
    return ServicemanagementServicesConfigsSubmitSecurity;
}(SpeakeasyBase));
export { ServicemanagementServicesConfigsSubmitSecurity };
var ServicemanagementServicesConfigsSubmitRequest = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConfigsSubmitRequest, _super);
    function ServicemanagementServicesConfigsSubmitRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesConfigsSubmitPathParams)
    ], ServicemanagementServicesConfigsSubmitRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesConfigsSubmitQueryParams)
    ], ServicemanagementServicesConfigsSubmitRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SubmitConfigSourceRequest)
    ], ServicemanagementServicesConfigsSubmitRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesConfigsSubmitSecurity)
    ], ServicemanagementServicesConfigsSubmitRequest.prototype, "security", void 0);
    return ServicemanagementServicesConfigsSubmitRequest;
}(SpeakeasyBase));
export { ServicemanagementServicesConfigsSubmitRequest };
var ServicemanagementServicesConfigsSubmitResponse = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesConfigsSubmitResponse, _super);
    function ServicemanagementServicesConfigsSubmitResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicemanagementServicesConfigsSubmitResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ServicemanagementServicesConfigsSubmitResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicemanagementServicesConfigsSubmitResponse.prototype, "statusCode", void 0);
    return ServicemanagementServicesConfigsSubmitResponse;
}(SpeakeasyBase));
export { ServicemanagementServicesConfigsSubmitResponse };
