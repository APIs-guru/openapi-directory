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
var HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreatePathParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreatePathParams, _super);
    function HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreatePathParams.prototype, "parent", void 0);
    return HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreatePathParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreatePathParams };
var HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateQueryParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateQueryParams, _super);
    function HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateQueryParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateQueryParams };
var HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateSecurity = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateSecurity, _super);
    function HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateSecurity.prototype, "oauth2c", void 0);
    return HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateSecurity;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateSecurity };
var HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateRequest = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateRequest, _super);
    function HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreatePathParams)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateQueryParams)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UserDataMappingInput)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateSecurity)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateRequest.prototype, "security", void 0);
    return HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateRequest;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateRequest };
var HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateResponse = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateResponse, _super);
    function HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UserDataMapping)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateResponse.prototype, "userDataMapping", void 0);
    return HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateResponse;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateResponse };
