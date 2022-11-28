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
var HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListPathParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListPathParams, _super);
    function HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListPathParams.prototype, "parent", void 0);
    return HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListPathParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListPathParams };
var HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListQueryParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListQueryParams, _super);
    function HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListQueryParams.prototype, "uploadProtocol", void 0);
    return HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListQueryParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListQueryParams };
var HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListSecurity = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListSecurity, _super);
    function HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListSecurity.prototype, "oauth2c", void 0);
    return HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListSecurity;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListSecurity };
var HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListRequest = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListRequest, _super);
    function HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListPathParams)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListQueryParams)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListSecurity)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListRequest.prototype, "security", void 0);
    return HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListRequest;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListRequest };
var HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListResponse = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListResponse, _super);
    function HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListUserDataMappingsResponse)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListResponse.prototype, "listUserDataMappingsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListResponse.prototype, "statusCode", void 0);
    return HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListResponse;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListResponse };
