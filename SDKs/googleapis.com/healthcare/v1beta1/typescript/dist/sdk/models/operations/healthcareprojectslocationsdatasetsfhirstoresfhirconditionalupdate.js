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
var HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdatePathParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdatePathParams, _super);
    function HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdatePathParams.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdatePathParams.prototype, "type", void 0);
    return HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdatePathParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdatePathParams };
var HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateQueryParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateQueryParams, _super);
    function HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateQueryParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateQueryParams };
var HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateSecurity = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateSecurity, _super);
    function HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateSecurity.prototype, "oauth2c", void 0);
    return HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateSecurity;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateSecurity };
var HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateRequest = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateRequest, _super);
    function HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdatePathParams)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateQueryParams)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.HttpBody)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateSecurity)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateRequest.prototype, "security", void 0);
    return HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateRequest;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateRequest };
var HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateResponse = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateResponse, _super);
    function HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HttpBody)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateResponse.prototype, "httpBody", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateResponse.prototype, "statusCode", void 0);
    return HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateResponse;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateResponse };
