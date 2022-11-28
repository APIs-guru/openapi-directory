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
var CloudiotProjectsLocationsRegistriesDevicesStatesListPathParams = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesDevicesStatesListPathParams, _super);
    function CloudiotProjectsLocationsRegistriesDevicesStatesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesStatesListPathParams.prototype, "name", void 0);
    return CloudiotProjectsLocationsRegistriesDevicesStatesListPathParams;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesDevicesStatesListPathParams };
var CloudiotProjectsLocationsRegistriesDevicesStatesListQueryParams = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesDevicesStatesListQueryParams, _super);
    function CloudiotProjectsLocationsRegistriesDevicesStatesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesStatesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesStatesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesStatesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesStatesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesStatesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesStatesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numStates" }),
        __metadata("design:type", Number)
    ], CloudiotProjectsLocationsRegistriesDevicesStatesListQueryParams.prototype, "numStates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesStatesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudiotProjectsLocationsRegistriesDevicesStatesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesStatesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesStatesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesStatesListQueryParams.prototype, "uploadProtocol", void 0);
    return CloudiotProjectsLocationsRegistriesDevicesStatesListQueryParams;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesDevicesStatesListQueryParams };
var CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption1, _super);
    function CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption1.prototype, "oauth2c", void 0);
    return CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption1;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption1 };
var CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption2, _super);
    function CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption2.prototype, "oauth2c", void 0);
    return CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption2;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption2 };
var CloudiotProjectsLocationsRegistriesDevicesStatesListSecurity = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesDevicesStatesListSecurity, _super);
    function CloudiotProjectsLocationsRegistriesDevicesStatesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption1)
    ], CloudiotProjectsLocationsRegistriesDevicesStatesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesDevicesStatesListSecurityOption2)
    ], CloudiotProjectsLocationsRegistriesDevicesStatesListSecurity.prototype, "option2", void 0);
    return CloudiotProjectsLocationsRegistriesDevicesStatesListSecurity;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesDevicesStatesListSecurity };
var CloudiotProjectsLocationsRegistriesDevicesStatesListRequest = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesDevicesStatesListRequest, _super);
    function CloudiotProjectsLocationsRegistriesDevicesStatesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesDevicesStatesListPathParams)
    ], CloudiotProjectsLocationsRegistriesDevicesStatesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesDevicesStatesListQueryParams)
    ], CloudiotProjectsLocationsRegistriesDevicesStatesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesDevicesStatesListSecurity)
    ], CloudiotProjectsLocationsRegistriesDevicesStatesListRequest.prototype, "security", void 0);
    return CloudiotProjectsLocationsRegistriesDevicesStatesListRequest;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesDevicesStatesListRequest };
var CloudiotProjectsLocationsRegistriesDevicesStatesListResponse = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesDevicesStatesListResponse, _super);
    function CloudiotProjectsLocationsRegistriesDevicesStatesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesStatesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListDeviceStatesResponse)
    ], CloudiotProjectsLocationsRegistriesDevicesStatesListResponse.prototype, "listDeviceStatesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudiotProjectsLocationsRegistriesDevicesStatesListResponse.prototype, "statusCode", void 0);
    return CloudiotProjectsLocationsRegistriesDevicesStatesListResponse;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesDevicesStatesListResponse };
