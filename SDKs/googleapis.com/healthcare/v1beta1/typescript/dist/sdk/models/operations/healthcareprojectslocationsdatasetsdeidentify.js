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
var HealthcareProjectsLocationsDatasetsDeidentifyPathParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsDeidentifyPathParams, _super);
    function HealthcareProjectsLocationsDatasetsDeidentifyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sourceDataset" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDeidentifyPathParams.prototype, "sourceDataset", void 0);
    return HealthcareProjectsLocationsDatasetsDeidentifyPathParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsDeidentifyPathParams };
var HealthcareProjectsLocationsDatasetsDeidentifyQueryParams = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsDeidentifyQueryParams, _super);
    function HealthcareProjectsLocationsDatasetsDeidentifyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDeidentifyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDeidentifyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDeidentifyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDeidentifyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDeidentifyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDeidentifyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDeidentifyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], HealthcareProjectsLocationsDatasetsDeidentifyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDeidentifyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDeidentifyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDeidentifyQueryParams.prototype, "uploadProtocol", void 0);
    return HealthcareProjectsLocationsDatasetsDeidentifyQueryParams;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsDeidentifyQueryParams };
var HealthcareProjectsLocationsDatasetsDeidentifySecurity = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsDeidentifySecurity, _super);
    function HealthcareProjectsLocationsDatasetsDeidentifySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], HealthcareProjectsLocationsDatasetsDeidentifySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], HealthcareProjectsLocationsDatasetsDeidentifySecurity.prototype, "oauth2c", void 0);
    return HealthcareProjectsLocationsDatasetsDeidentifySecurity;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsDeidentifySecurity };
var HealthcareProjectsLocationsDatasetsDeidentifyRequest = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsDeidentifyRequest, _super);
    function HealthcareProjectsLocationsDatasetsDeidentifyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsDeidentifyPathParams)
    ], HealthcareProjectsLocationsDatasetsDeidentifyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsDeidentifyQueryParams)
    ], HealthcareProjectsLocationsDatasetsDeidentifyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeidentifyDatasetRequest)
    ], HealthcareProjectsLocationsDatasetsDeidentifyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", HealthcareProjectsLocationsDatasetsDeidentifySecurity)
    ], HealthcareProjectsLocationsDatasetsDeidentifyRequest.prototype, "security", void 0);
    return HealthcareProjectsLocationsDatasetsDeidentifyRequest;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsDeidentifyRequest };
var HealthcareProjectsLocationsDatasetsDeidentifyResponse = /** @class */ (function (_super) {
    __extends(HealthcareProjectsLocationsDatasetsDeidentifyResponse, _super);
    function HealthcareProjectsLocationsDatasetsDeidentifyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], HealthcareProjectsLocationsDatasetsDeidentifyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], HealthcareProjectsLocationsDatasetsDeidentifyResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], HealthcareProjectsLocationsDatasetsDeidentifyResponse.prototype, "statusCode", void 0);
    return HealthcareProjectsLocationsDatasetsDeidentifyResponse;
}(SpeakeasyBase));
export { HealthcareProjectsLocationsDatasetsDeidentifyResponse };
