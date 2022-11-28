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
var HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedPathParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedPathParams, _super);
    function HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dicomWebPath" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedPathParams.prototype, "dicomWebPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedPathParams.prototype, "parent", void 0);
    return HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedPathParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedPathParams };
var HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedQueryParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedQueryParams, _super);
    function HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedQueryParams.prototype, "uploadProtocol", void 0);
    return HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedQueryParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedQueryParams };
var HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedSecurity = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedSecurity, _super);
    function HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedSecurity.prototype, "oauth2c", void 0);
    return HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedSecurity;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedSecurity };
var HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedRequest = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedRequest, _super);
    function HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedPathParams)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedQueryParams)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedSecurity)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedRequest.prototype, "security", void 0);
    return HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedRequest;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedRequest };
var HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedResponse = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedResponse, _super);
    function HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HttpBody)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedResponse.prototype, "httpBody", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedResponse.prototype, "statusCode", void 0);
    return HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedResponse;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedResponse };
