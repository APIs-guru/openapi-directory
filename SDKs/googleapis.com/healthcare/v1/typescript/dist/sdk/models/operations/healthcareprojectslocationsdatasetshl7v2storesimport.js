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
var HealthcareProjectsLocationsDatasetsHl7V2StoresImportPathParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsHl7V2StoresImportPathParams, _super);
    function HealthcareProjectsLocationsDatasetsHl7V2StoresImportPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresImportPathParams.prototype, "name", void 0);
    return HealthcareProjectsLocationsDatasetsHl7V2StoresImportPathParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsHl7V2StoresImportPathParams };
var HealthcareProjectsLocationsDatasetsHl7V2StoresImportQueryParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsHl7V2StoresImportQueryParams, _super);
    function HealthcareProjectsLocationsDatasetsHl7V2StoresImportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresImportQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresImportQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresImportQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresImportQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresImportQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresImportQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresImportQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresImportQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresImportQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresImportQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresImportQueryParams.prototype, "uploadProtocol", void 0);
    return HealthcareProjectsLocationsDatasetsHl7V2StoresImportQueryParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsHl7V2StoresImportQueryParams };
var HealthcareProjectsLocationsDatasetsHl7V2StoresImportSecurity = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsHl7V2StoresImportSecurity, _super);
    function HealthcareProjectsLocationsDatasetsHl7V2StoresImportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresImportSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresImportSecurity.prototype, "oauth2c", void 0);
    return HealthcareProjectsLocationsDatasetsHl7V2StoresImportSecurity;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsHl7V2StoresImportSecurity };
var HealthcareProjectsLocationsDatasetsHl7V2StoresImportRequest = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsHl7V2StoresImportRequest, _super);
    function HealthcareProjectsLocationsDatasetsHl7V2StoresImportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsHl7V2StoresImportPathParams)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresImportRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsHl7V2StoresImportQueryParams)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresImportRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ImportMessagesRequest)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresImportRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsHl7V2StoresImportSecurity)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresImportRequest.prototype, "security", void 0);
    return HealthcareProjectsLocationsDatasetsHl7V2StoresImportRequest;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsHl7V2StoresImportRequest };
var HealthcareProjectsLocationsDatasetsHl7V2StoresImportResponse = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsHl7V2StoresImportResponse, _super);
    function HealthcareProjectsLocationsDatasetsHl7V2StoresImportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresImportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresImportResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresImportResponse.prototype, "statusCode", void 0);
    return HealthcareProjectsLocationsDatasetsHl7V2StoresImportResponse;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsHl7V2StoresImportResponse };
