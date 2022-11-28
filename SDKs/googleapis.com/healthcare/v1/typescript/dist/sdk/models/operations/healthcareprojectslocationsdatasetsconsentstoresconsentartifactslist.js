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
var HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListPathParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListPathParams, _super);
    function HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListPathParams.prototype, "parent", void 0);
    return HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListPathParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListPathParams };
var HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListQueryParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListQueryParams, _super);
    function HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListQueryParams.prototype, "uploadProtocol", void 0);
    return HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListQueryParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListQueryParams };
var HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListSecurity = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListSecurity, _super);
    function HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListSecurity.prototype, "oauth2c", void 0);
    return HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListSecurity;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListSecurity };
var HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListRequest = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListRequest, _super);
    function HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListPathParams)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListQueryParams)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListSecurity)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListRequest.prototype, "security", void 0);
    return HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListRequest;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListRequest };
var HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListResponse = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListResponse, _super);
    function HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListConsentArtifactsResponse)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListResponse.prototype, "listConsentArtifactsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListResponse.prototype, "statusCode", void 0);
    return HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListResponse;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListResponse };
