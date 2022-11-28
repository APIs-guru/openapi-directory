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
var HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreatePathParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreatePathParams, _super);
    function HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreatePathParams.prototype, "parent", void 0);
    return HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreatePathParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreatePathParams };
var HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateQueryParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateQueryParams, _super);
    function HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateQueryParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateQueryParams };
var HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateSecurity = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateSecurity, _super);
    function HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateSecurity.prototype, "oauth2c", void 0);
    return HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateSecurity;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateSecurity };
var HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateRequest = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateRequest, _super);
    function HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreatePathParams)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateQueryParams)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ConsentArtifact)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateSecurity)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateRequest.prototype, "security", void 0);
    return HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateRequest;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateRequest };
var HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateResponse = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateResponse, _super);
    function HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ConsentArtifact)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateResponse.prototype, "consentArtifact", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateResponse.prototype, "statusCode", void 0);
    return HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateResponse;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateResponse };
