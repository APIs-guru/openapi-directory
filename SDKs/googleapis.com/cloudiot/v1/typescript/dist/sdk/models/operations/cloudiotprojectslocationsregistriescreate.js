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
var CloudiotProjectsLocationsRegistriesCreatePathParams = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesCreatePathParams, _super);
    function CloudiotProjectsLocationsRegistriesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesCreatePathParams.prototype, "parent", void 0);
    return CloudiotProjectsLocationsRegistriesCreatePathParams;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesCreatePathParams };
var CloudiotProjectsLocationsRegistriesCreateQueryParams = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesCreateQueryParams, _super);
    function CloudiotProjectsLocationsRegistriesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudiotProjectsLocationsRegistriesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return CloudiotProjectsLocationsRegistriesCreateQueryParams;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesCreateQueryParams };
var CloudiotProjectsLocationsRegistriesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesCreateSecurityOption1, _super);
    function CloudiotProjectsLocationsRegistriesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudiotProjectsLocationsRegistriesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudiotProjectsLocationsRegistriesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return CloudiotProjectsLocationsRegistriesCreateSecurityOption1;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesCreateSecurityOption1 };
var CloudiotProjectsLocationsRegistriesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesCreateSecurityOption2, _super);
    function CloudiotProjectsLocationsRegistriesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudiotProjectsLocationsRegistriesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudiotProjectsLocationsRegistriesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return CloudiotProjectsLocationsRegistriesCreateSecurityOption2;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesCreateSecurityOption2 };
var CloudiotProjectsLocationsRegistriesCreateSecurity = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesCreateSecurity, _super);
    function CloudiotProjectsLocationsRegistriesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesCreateSecurityOption1)
    ], CloudiotProjectsLocationsRegistriesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesCreateSecurityOption2)
    ], CloudiotProjectsLocationsRegistriesCreateSecurity.prototype, "option2", void 0);
    return CloudiotProjectsLocationsRegistriesCreateSecurity;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesCreateSecurity };
var CloudiotProjectsLocationsRegistriesCreateRequest = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesCreateRequest, _super);
    function CloudiotProjectsLocationsRegistriesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesCreatePathParams)
    ], CloudiotProjectsLocationsRegistriesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesCreateQueryParams)
    ], CloudiotProjectsLocationsRegistriesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeviceRegistry)
    ], CloudiotProjectsLocationsRegistriesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesCreateSecurity)
    ], CloudiotProjectsLocationsRegistriesCreateRequest.prototype, "security", void 0);
    return CloudiotProjectsLocationsRegistriesCreateRequest;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesCreateRequest };
var CloudiotProjectsLocationsRegistriesCreateResponse = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesCreateResponse, _super);
    function CloudiotProjectsLocationsRegistriesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DeviceRegistry)
    ], CloudiotProjectsLocationsRegistriesCreateResponse.prototype, "deviceRegistry", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudiotProjectsLocationsRegistriesCreateResponse.prototype, "statusCode", void 0);
    return CloudiotProjectsLocationsRegistriesCreateResponse;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesCreateResponse };
