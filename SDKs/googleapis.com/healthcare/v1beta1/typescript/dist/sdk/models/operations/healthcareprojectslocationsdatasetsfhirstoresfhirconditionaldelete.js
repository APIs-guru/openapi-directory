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
var HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeletePathParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeletePathParams, _super);
    function HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeletePathParams.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeletePathParams.prototype, "type", void 0);
    return HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeletePathParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeletePathParams };
var HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteQueryParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteQueryParams, _super);
    function HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteQueryParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteQueryParams };
var HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteSecurity = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteSecurity, _super);
    function HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteSecurity.prototype, "oauth2c", void 0);
    return HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteSecurity;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteSecurity };
var HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteRequest = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteRequest, _super);
    function HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeletePathParams)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteQueryParams)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteSecurity)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteRequest.prototype, "security", void 0);
    return HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteRequest;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteRequest };
var HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteResponse = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteResponse, _super);
    function HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteResponse.prototype, "statusCode", void 0);
    return HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteResponse;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteResponse };
