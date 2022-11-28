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
var HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundlePathParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundlePathParams, _super);
    function HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundlePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundlePathParams.prototype, "parent", void 0);
    return HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundlePathParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundlePathParams };
var HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleQueryParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleQueryParams, _super);
    function HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleQueryParams.prototype, "uploadProtocol", void 0);
    return HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleQueryParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleQueryParams };
var HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleSecurity = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleSecurity, _super);
    function HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleSecurity.prototype, "oauth2c", void 0);
    return HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleSecurity;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleSecurity };
var HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleRequest = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleRequest, _super);
    function HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundlePathParams)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleQueryParams)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.HttpBody)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleSecurity)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleRequest.prototype, "security", void 0);
    return HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleRequest;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleRequest };
var HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleResponse = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleResponse, _super);
    function HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HttpBody)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleResponse.prototype, "httpBody", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleResponse.prototype, "statusCode", void 0);
    return HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleResponse;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleResponse };
