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
var HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingPathParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingPathParams, _super);
    function HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingPathParams.prototype, "name", void 0);
    return HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingPathParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingPathParams };
var HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingQueryParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingQueryParams, _super);
    function HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=_count" }),
        __metadata("design:type", Number)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingQueryParams.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=_page_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=_since" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingQueryParams.prototype, "since", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=_type" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingQueryParams.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingQueryParams.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingQueryParams.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingQueryParams.prototype, "uploadProtocol", void 0);
    return HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingQueryParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingQueryParams };
var HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingSecurity = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingSecurity, _super);
    function HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingSecurity.prototype, "oauth2c", void 0);
    return HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingSecurity;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingSecurity };
var HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingRequest = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingRequest, _super);
    function HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingPathParams)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingQueryParams)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingSecurity)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingRequest.prototype, "security", void 0);
    return HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingRequest;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingRequest };
var HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingResponse = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingResponse, _super);
    function HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HttpBody)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingResponse.prototype, "httpBody", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingResponse.prototype, "statusCode", void 0);
    return HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingResponse;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingResponse };
