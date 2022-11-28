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
var PrivatecaProjectsLocationsReusableConfigsGetPathParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsReusableConfigsGetPathParams, _super);
    function PrivatecaProjectsLocationsReusableConfigsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsReusableConfigsGetPathParams.prototype, "name", void 0);
    return PrivatecaProjectsLocationsReusableConfigsGetPathParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsReusableConfigsGetPathParams };
var PrivatecaProjectsLocationsReusableConfigsGetQueryParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsReusableConfigsGetQueryParams, _super);
    function PrivatecaProjectsLocationsReusableConfigsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsReusableConfigsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsReusableConfigsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsReusableConfigsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsReusableConfigsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsReusableConfigsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsReusableConfigsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsReusableConfigsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PrivatecaProjectsLocationsReusableConfigsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsReusableConfigsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsReusableConfigsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsReusableConfigsGetQueryParams.prototype, "uploadProtocol", void 0);
    return PrivatecaProjectsLocationsReusableConfigsGetQueryParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsReusableConfigsGetQueryParams };
var PrivatecaProjectsLocationsReusableConfigsGetSecurity = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsReusableConfigsGetSecurity, _super);
    function PrivatecaProjectsLocationsReusableConfigsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PrivatecaProjectsLocationsReusableConfigsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PrivatecaProjectsLocationsReusableConfigsGetSecurity.prototype, "oauth2c", void 0);
    return PrivatecaProjectsLocationsReusableConfigsGetSecurity;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsReusableConfigsGetSecurity };
var PrivatecaProjectsLocationsReusableConfigsGetRequest = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsReusableConfigsGetRequest, _super);
    function PrivatecaProjectsLocationsReusableConfigsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsReusableConfigsGetPathParams)
    ], PrivatecaProjectsLocationsReusableConfigsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsReusableConfigsGetQueryParams)
    ], PrivatecaProjectsLocationsReusableConfigsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsReusableConfigsGetSecurity)
    ], PrivatecaProjectsLocationsReusableConfigsGetRequest.prototype, "security", void 0);
    return PrivatecaProjectsLocationsReusableConfigsGetRequest;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsReusableConfigsGetRequest };
var PrivatecaProjectsLocationsReusableConfigsGetResponse = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsReusableConfigsGetResponse, _super);
    function PrivatecaProjectsLocationsReusableConfigsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsReusableConfigsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ReusableConfig)
    ], PrivatecaProjectsLocationsReusableConfigsGetResponse.prototype, "reusableConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PrivatecaProjectsLocationsReusableConfigsGetResponse.prototype, "statusCode", void 0);
    return PrivatecaProjectsLocationsReusableConfigsGetResponse;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsReusableConfigsGetResponse };
