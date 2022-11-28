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
var HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesPathParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesPathParams, _super);
    function HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dicomWebPath" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesPathParams.prototype, "dicomWebPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesPathParams.prototype, "parent", void 0);
    return HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesPathParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesPathParams };
var HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesQueryParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesQueryParams, _super);
    function HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesQueryParams.prototype, "uploadProtocol", void 0);
    return HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesQueryParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesQueryParams };
var HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesSecurity = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesSecurity, _super);
    function HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesSecurity.prototype, "oauth2c", void 0);
    return HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesSecurity;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesSecurity };
var HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesRequest = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesRequest, _super);
    function HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesPathParams)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesQueryParams)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.HttpBody)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesSecurity)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesRequest.prototype, "security", void 0);
    return HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesRequest;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesRequest };
var HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesResponse = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesResponse, _super);
    function HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HttpBody)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesResponse.prototype, "httpBody", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesResponse.prototype, "statusCode", void 0);
    return HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesResponse;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesResponse };
