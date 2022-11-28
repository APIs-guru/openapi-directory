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
var ServicecontrolServicesCheckPathParams = /** @class */ (function (_super) {
    __extends(ServicecontrolServicesCheckPathParams, _super);
    function ServicecontrolServicesCheckPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceName" }),
        __metadata("design:type", String)
    ], ServicecontrolServicesCheckPathParams.prototype, "serviceName", void 0);
    return ServicecontrolServicesCheckPathParams;
}(SpeakeasyBase));
export { ServicecontrolServicesCheckPathParams };
var ServicecontrolServicesCheckQueryParams = /** @class */ (function (_super) {
    __extends(ServicecontrolServicesCheckQueryParams, _super);
    function ServicecontrolServicesCheckQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicecontrolServicesCheckQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicecontrolServicesCheckQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicecontrolServicesCheckQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicecontrolServicesCheckQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicecontrolServicesCheckQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicecontrolServicesCheckQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicecontrolServicesCheckQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicecontrolServicesCheckQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicecontrolServicesCheckQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicecontrolServicesCheckQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicecontrolServicesCheckQueryParams.prototype, "uploadProtocol", void 0);
    return ServicecontrolServicesCheckQueryParams;
}(SpeakeasyBase));
export { ServicecontrolServicesCheckQueryParams };
var ServicecontrolServicesCheckSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicecontrolServicesCheckSecurityOption1, _super);
    function ServicecontrolServicesCheckSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicecontrolServicesCheckSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicecontrolServicesCheckSecurityOption1.prototype, "oauth2c", void 0);
    return ServicecontrolServicesCheckSecurityOption1;
}(SpeakeasyBase));
export { ServicecontrolServicesCheckSecurityOption1 };
var ServicecontrolServicesCheckSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicecontrolServicesCheckSecurityOption2, _super);
    function ServicecontrolServicesCheckSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicecontrolServicesCheckSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicecontrolServicesCheckSecurityOption2.prototype, "oauth2c", void 0);
    return ServicecontrolServicesCheckSecurityOption2;
}(SpeakeasyBase));
export { ServicecontrolServicesCheckSecurityOption2 };
var ServicecontrolServicesCheckSecurity = /** @class */ (function (_super) {
    __extends(ServicecontrolServicesCheckSecurity, _super);
    function ServicecontrolServicesCheckSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicecontrolServicesCheckSecurityOption1)
    ], ServicecontrolServicesCheckSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicecontrolServicesCheckSecurityOption2)
    ], ServicecontrolServicesCheckSecurity.prototype, "option2", void 0);
    return ServicecontrolServicesCheckSecurity;
}(SpeakeasyBase));
export { ServicecontrolServicesCheckSecurity };
var ServicecontrolServicesCheckRequest = /** @class */ (function (_super) {
    __extends(ServicecontrolServicesCheckRequest, _super);
    function ServicecontrolServicesCheckRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicecontrolServicesCheckPathParams)
    ], ServicecontrolServicesCheckRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicecontrolServicesCheckQueryParams)
    ], ServicecontrolServicesCheckRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CheckRequest)
    ], ServicecontrolServicesCheckRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicecontrolServicesCheckSecurity)
    ], ServicecontrolServicesCheckRequest.prototype, "security", void 0);
    return ServicecontrolServicesCheckRequest;
}(SpeakeasyBase));
export { ServicecontrolServicesCheckRequest };
var ServicecontrolServicesCheckResponse = /** @class */ (function (_super) {
    __extends(ServicecontrolServicesCheckResponse, _super);
    function ServicecontrolServicesCheckResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CheckResponse)
    ], ServicecontrolServicesCheckResponse.prototype, "checkResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicecontrolServicesCheckResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicecontrolServicesCheckResponse.prototype, "statusCode", void 0);
    return ServicecontrolServicesCheckResponse;
}(SpeakeasyBase));
export { ServicecontrolServicesCheckResponse };
