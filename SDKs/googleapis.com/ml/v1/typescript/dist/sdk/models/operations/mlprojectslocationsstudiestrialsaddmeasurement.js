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
var MlProjectsLocationsStudiesTrialsAddMeasurementPathParams = /** @class */ (function (_super) {
    __extends(MlProjectsLocationsStudiesTrialsAddMeasurementPathParams, _super);
    function MlProjectsLocationsStudiesTrialsAddMeasurementPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsAddMeasurementPathParams.prototype, "name", void 0);
    return MlProjectsLocationsStudiesTrialsAddMeasurementPathParams;
}(SpeakeasyBase));
export { MlProjectsLocationsStudiesTrialsAddMeasurementPathParams };
var MlProjectsLocationsStudiesTrialsAddMeasurementQueryParams = /** @class */ (function (_super) {
    __extends(MlProjectsLocationsStudiesTrialsAddMeasurementQueryParams, _super);
    function MlProjectsLocationsStudiesTrialsAddMeasurementQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsAddMeasurementQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsAddMeasurementQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsAddMeasurementQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsAddMeasurementQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsAddMeasurementQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsAddMeasurementQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsAddMeasurementQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MlProjectsLocationsStudiesTrialsAddMeasurementQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsAddMeasurementQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsAddMeasurementQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsAddMeasurementQueryParams.prototype, "uploadProtocol", void 0);
    return MlProjectsLocationsStudiesTrialsAddMeasurementQueryParams;
}(SpeakeasyBase));
export { MlProjectsLocationsStudiesTrialsAddMeasurementQueryParams };
var MlProjectsLocationsStudiesTrialsAddMeasurementSecurity = /** @class */ (function (_super) {
    __extends(MlProjectsLocationsStudiesTrialsAddMeasurementSecurity, _super);
    function MlProjectsLocationsStudiesTrialsAddMeasurementSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MlProjectsLocationsStudiesTrialsAddMeasurementSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MlProjectsLocationsStudiesTrialsAddMeasurementSecurity.prototype, "oauth2c", void 0);
    return MlProjectsLocationsStudiesTrialsAddMeasurementSecurity;
}(SpeakeasyBase));
export { MlProjectsLocationsStudiesTrialsAddMeasurementSecurity };
var MlProjectsLocationsStudiesTrialsAddMeasurementRequest = /** @class */ (function (_super) {
    __extends(MlProjectsLocationsStudiesTrialsAddMeasurementRequest, _super);
    function MlProjectsLocationsStudiesTrialsAddMeasurementRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MlProjectsLocationsStudiesTrialsAddMeasurementPathParams)
    ], MlProjectsLocationsStudiesTrialsAddMeasurementRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MlProjectsLocationsStudiesTrialsAddMeasurementQueryParams)
    ], MlProjectsLocationsStudiesTrialsAddMeasurementRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudMlV1AddTrialMeasurementRequest)
    ], MlProjectsLocationsStudiesTrialsAddMeasurementRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MlProjectsLocationsStudiesTrialsAddMeasurementSecurity)
    ], MlProjectsLocationsStudiesTrialsAddMeasurementRequest.prototype, "security", void 0);
    return MlProjectsLocationsStudiesTrialsAddMeasurementRequest;
}(SpeakeasyBase));
export { MlProjectsLocationsStudiesTrialsAddMeasurementRequest };
var MlProjectsLocationsStudiesTrialsAddMeasurementResponse = /** @class */ (function (_super) {
    __extends(MlProjectsLocationsStudiesTrialsAddMeasurementResponse, _super);
    function MlProjectsLocationsStudiesTrialsAddMeasurementResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsAddMeasurementResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudMlV1Trial)
    ], MlProjectsLocationsStudiesTrialsAddMeasurementResponse.prototype, "googleCloudMlV1Trial", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MlProjectsLocationsStudiesTrialsAddMeasurementResponse.prototype, "statusCode", void 0);
    return MlProjectsLocationsStudiesTrialsAddMeasurementResponse;
}(SpeakeasyBase));
export { MlProjectsLocationsStudiesTrialsAddMeasurementResponse };
