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
var CloudiotProjectsLocationsRegistriesDevicesGetPathParams = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesDevicesGetPathParams, _super);
    function CloudiotProjectsLocationsRegistriesDevicesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesGetPathParams.prototype, "name", void 0);
    return CloudiotProjectsLocationsRegistriesDevicesGetPathParams;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesDevicesGetPathParams };
var CloudiotProjectsLocationsRegistriesDevicesGetQueryParams = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesDevicesGetQueryParams, _super);
    function CloudiotProjectsLocationsRegistriesDevicesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fieldMask" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesGetQueryParams.prototype, "fieldMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudiotProjectsLocationsRegistriesDevicesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesGetQueryParams.prototype, "uploadProtocol", void 0);
    return CloudiotProjectsLocationsRegistriesDevicesGetQueryParams;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesDevicesGetQueryParams };
var CloudiotProjectsLocationsRegistriesDevicesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesDevicesGetSecurityOption1, _super);
    function CloudiotProjectsLocationsRegistriesDevicesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudiotProjectsLocationsRegistriesDevicesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudiotProjectsLocationsRegistriesDevicesGetSecurityOption1.prototype, "oauth2c", void 0);
    return CloudiotProjectsLocationsRegistriesDevicesGetSecurityOption1;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesDevicesGetSecurityOption1 };
var CloudiotProjectsLocationsRegistriesDevicesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesDevicesGetSecurityOption2, _super);
    function CloudiotProjectsLocationsRegistriesDevicesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudiotProjectsLocationsRegistriesDevicesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudiotProjectsLocationsRegistriesDevicesGetSecurityOption2.prototype, "oauth2c", void 0);
    return CloudiotProjectsLocationsRegistriesDevicesGetSecurityOption2;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesDevicesGetSecurityOption2 };
var CloudiotProjectsLocationsRegistriesDevicesGetSecurity = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesDevicesGetSecurity, _super);
    function CloudiotProjectsLocationsRegistriesDevicesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesDevicesGetSecurityOption1)
    ], CloudiotProjectsLocationsRegistriesDevicesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesDevicesGetSecurityOption2)
    ], CloudiotProjectsLocationsRegistriesDevicesGetSecurity.prototype, "option2", void 0);
    return CloudiotProjectsLocationsRegistriesDevicesGetSecurity;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesDevicesGetSecurity };
var CloudiotProjectsLocationsRegistriesDevicesGetRequest = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesDevicesGetRequest, _super);
    function CloudiotProjectsLocationsRegistriesDevicesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesDevicesGetPathParams)
    ], CloudiotProjectsLocationsRegistriesDevicesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesDevicesGetQueryParams)
    ], CloudiotProjectsLocationsRegistriesDevicesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesDevicesGetSecurity)
    ], CloudiotProjectsLocationsRegistriesDevicesGetRequest.prototype, "security", void 0);
    return CloudiotProjectsLocationsRegistriesDevicesGetRequest;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesDevicesGetRequest };
var CloudiotProjectsLocationsRegistriesDevicesGetResponse = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesDevicesGetResponse, _super);
    function CloudiotProjectsLocationsRegistriesDevicesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Device)
    ], CloudiotProjectsLocationsRegistriesDevicesGetResponse.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudiotProjectsLocationsRegistriesDevicesGetResponse.prototype, "statusCode", void 0);
    return CloudiotProjectsLocationsRegistriesDevicesGetResponse;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesDevicesGetResponse };
