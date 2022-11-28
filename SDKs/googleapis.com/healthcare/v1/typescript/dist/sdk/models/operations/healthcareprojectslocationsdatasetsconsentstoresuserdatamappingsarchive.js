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
var HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchivePathParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchivePathParams, _super);
    function HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchivePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchivePathParams.prototype, "name", void 0);
    return HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchivePathParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchivePathParams };
var HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveQueryParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveQueryParams, _super);
    function HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveQueryParams.prototype, "uploadProtocol", void 0);
    return HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveQueryParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveQueryParams };
var HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveSecurity = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveSecurity, _super);
    function HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveSecurity.prototype, "oauth2c", void 0);
    return HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveSecurity;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveSecurity };
var HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveRequest = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveRequest, _super);
    function HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchivePathParams)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveQueryParams)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveSecurity)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveRequest.prototype, "security", void 0);
    return HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveRequest;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveRequest };
var HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveResponse = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveResponse, _super);
    function HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveResponse.prototype, "archiveUserDataMappingResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveResponse.prototype, "statusCode", void 0);
    return HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveResponse;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveResponse };
