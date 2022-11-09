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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var CloudiotProjectsLocationsRegistriesDevicesCreatePathParams = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesDevicesCreatePathParams, _super);
    function CloudiotProjectsLocationsRegistriesDevicesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesCreatePathParams.prototype, "parent", void 0);
    return CloudiotProjectsLocationsRegistriesDevicesCreatePathParams;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesDevicesCreatePathParams };
var CloudiotProjectsLocationsRegistriesDevicesCreateQueryParams = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesDevicesCreateQueryParams, _super);
    function CloudiotProjectsLocationsRegistriesDevicesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudiotProjectsLocationsRegistriesDevicesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return CloudiotProjectsLocationsRegistriesDevicesCreateQueryParams;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesDevicesCreateQueryParams };
var CloudiotProjectsLocationsRegistriesDevicesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesDevicesCreateSecurityOption1, _super);
    function CloudiotProjectsLocationsRegistriesDevicesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudiotProjectsLocationsRegistriesDevicesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudiotProjectsLocationsRegistriesDevicesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return CloudiotProjectsLocationsRegistriesDevicesCreateSecurityOption1;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesDevicesCreateSecurityOption1 };
var CloudiotProjectsLocationsRegistriesDevicesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesDevicesCreateSecurityOption2, _super);
    function CloudiotProjectsLocationsRegistriesDevicesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudiotProjectsLocationsRegistriesDevicesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudiotProjectsLocationsRegistriesDevicesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return CloudiotProjectsLocationsRegistriesDevicesCreateSecurityOption2;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesDevicesCreateSecurityOption2 };
var CloudiotProjectsLocationsRegistriesDevicesCreateSecurity = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesDevicesCreateSecurity, _super);
    function CloudiotProjectsLocationsRegistriesDevicesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesDevicesCreateSecurityOption1)
    ], CloudiotProjectsLocationsRegistriesDevicesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesDevicesCreateSecurityOption2)
    ], CloudiotProjectsLocationsRegistriesDevicesCreateSecurity.prototype, "option2", void 0);
    return CloudiotProjectsLocationsRegistriesDevicesCreateSecurity;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesDevicesCreateSecurity };
var CloudiotProjectsLocationsRegistriesDevicesCreateRequest = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesDevicesCreateRequest, _super);
    function CloudiotProjectsLocationsRegistriesDevicesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesDevicesCreatePathParams)
    ], CloudiotProjectsLocationsRegistriesDevicesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesDevicesCreateQueryParams)
    ], CloudiotProjectsLocationsRegistriesDevicesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Device)
    ], CloudiotProjectsLocationsRegistriesDevicesCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesDevicesCreateSecurity)
    ], CloudiotProjectsLocationsRegistriesDevicesCreateRequest.prototype, "security", void 0);
    return CloudiotProjectsLocationsRegistriesDevicesCreateRequest;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesDevicesCreateRequest };
var CloudiotProjectsLocationsRegistriesDevicesCreateResponse = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesDevicesCreateResponse, _super);
    function CloudiotProjectsLocationsRegistriesDevicesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Device)
    ], CloudiotProjectsLocationsRegistriesDevicesCreateResponse.prototype, "device", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudiotProjectsLocationsRegistriesDevicesCreateResponse.prototype, "statusCode", void 0);
    return CloudiotProjectsLocationsRegistriesDevicesCreateResponse;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesDevicesCreateResponse };
