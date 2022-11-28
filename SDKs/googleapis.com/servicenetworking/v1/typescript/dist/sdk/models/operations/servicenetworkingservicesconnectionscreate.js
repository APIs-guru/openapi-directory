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
var ServicenetworkingServicesConnectionsCreatePathParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesConnectionsCreatePathParams, _super);
    function ServicenetworkingServicesConnectionsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesConnectionsCreatePathParams.prototype, "parent", void 0);
    return ServicenetworkingServicesConnectionsCreatePathParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesConnectionsCreatePathParams };
var ServicenetworkingServicesConnectionsCreateQueryParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesConnectionsCreateQueryParams, _super);
    function ServicenetworkingServicesConnectionsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesConnectionsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesConnectionsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesConnectionsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesConnectionsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesConnectionsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesConnectionsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesConnectionsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicenetworkingServicesConnectionsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesConnectionsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesConnectionsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesConnectionsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ServicenetworkingServicesConnectionsCreateQueryParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesConnectionsCreateQueryParams };
var ServicenetworkingServicesConnectionsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesConnectionsCreateSecurityOption1, _super);
    function ServicenetworkingServicesConnectionsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesConnectionsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesConnectionsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesConnectionsCreateSecurityOption1;
}(SpeakeasyBase));
export { ServicenetworkingServicesConnectionsCreateSecurityOption1 };
var ServicenetworkingServicesConnectionsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesConnectionsCreateSecurityOption2, _super);
    function ServicenetworkingServicesConnectionsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesConnectionsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesConnectionsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesConnectionsCreateSecurityOption2;
}(SpeakeasyBase));
export { ServicenetworkingServicesConnectionsCreateSecurityOption2 };
var ServicenetworkingServicesConnectionsCreateSecurity = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesConnectionsCreateSecurity, _super);
    function ServicenetworkingServicesConnectionsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesConnectionsCreateSecurityOption1)
    ], ServicenetworkingServicesConnectionsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesConnectionsCreateSecurityOption2)
    ], ServicenetworkingServicesConnectionsCreateSecurity.prototype, "option2", void 0);
    return ServicenetworkingServicesConnectionsCreateSecurity;
}(SpeakeasyBase));
export { ServicenetworkingServicesConnectionsCreateSecurity };
var ServicenetworkingServicesConnectionsCreateRequest = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesConnectionsCreateRequest, _super);
    function ServicenetworkingServicesConnectionsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesConnectionsCreatePathParams)
    ], ServicenetworkingServicesConnectionsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesConnectionsCreateQueryParams)
    ], ServicenetworkingServicesConnectionsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ConnectionInput)
    ], ServicenetworkingServicesConnectionsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesConnectionsCreateSecurity)
    ], ServicenetworkingServicesConnectionsCreateRequest.prototype, "security", void 0);
    return ServicenetworkingServicesConnectionsCreateRequest;
}(SpeakeasyBase));
export { ServicenetworkingServicesConnectionsCreateRequest };
var ServicenetworkingServicesConnectionsCreateResponse = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesConnectionsCreateResponse, _super);
    function ServicenetworkingServicesConnectionsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicenetworkingServicesConnectionsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ServicenetworkingServicesConnectionsCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicenetworkingServicesConnectionsCreateResponse.prototype, "statusCode", void 0);
    return ServicenetworkingServicesConnectionsCreateResponse;
}(SpeakeasyBase));
export { ServicenetworkingServicesConnectionsCreateResponse };
