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
var HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchPathParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchPathParams, _super);
    function HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchPathParams.prototype, "name", void 0);
    return HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchPathParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchPathParams };
var HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchQueryParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchQueryParams, _super);
    function HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchQueryParams.prototype, "uploadProtocol", void 0);
    return HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchQueryParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchQueryParams };
var HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchSecurity = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchSecurity, _super);
    function HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchSecurity.prototype, "oauth2c", void 0);
    return HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchSecurity;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchSecurity };
var HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchRequest = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchRequest, _super);
    function HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchPathParams)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchQueryParams)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.MessageInput)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchSecurity)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchRequest.prototype, "security", void 0);
    return HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchRequest;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchRequest };
var HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchResponse = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchResponse, _super);
    function HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Message)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchResponse.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchResponse.prototype, "statusCode", void 0);
    return HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchResponse;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchResponse };
