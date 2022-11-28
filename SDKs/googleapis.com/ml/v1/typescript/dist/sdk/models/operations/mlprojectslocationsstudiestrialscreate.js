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
var MlProjectsLocationsStudiesTrialsCreatePathParams = /** @class */ (function (_super) {
    __extends(MlProjectsLocationsStudiesTrialsCreatePathParams, _super);
    function MlProjectsLocationsStudiesTrialsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsCreatePathParams.prototype, "parent", void 0);
    return MlProjectsLocationsStudiesTrialsCreatePathParams;
}(SpeakeasyBase));
export { MlProjectsLocationsStudiesTrialsCreatePathParams };
var MlProjectsLocationsStudiesTrialsCreateQueryParams = /** @class */ (function (_super) {
    __extends(MlProjectsLocationsStudiesTrialsCreateQueryParams, _super);
    function MlProjectsLocationsStudiesTrialsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MlProjectsLocationsStudiesTrialsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return MlProjectsLocationsStudiesTrialsCreateQueryParams;
}(SpeakeasyBase));
export { MlProjectsLocationsStudiesTrialsCreateQueryParams };
var MlProjectsLocationsStudiesTrialsCreateSecurity = /** @class */ (function (_super) {
    __extends(MlProjectsLocationsStudiesTrialsCreateSecurity, _super);
    function MlProjectsLocationsStudiesTrialsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MlProjectsLocationsStudiesTrialsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MlProjectsLocationsStudiesTrialsCreateSecurity.prototype, "oauth2c", void 0);
    return MlProjectsLocationsStudiesTrialsCreateSecurity;
}(SpeakeasyBase));
export { MlProjectsLocationsStudiesTrialsCreateSecurity };
var MlProjectsLocationsStudiesTrialsCreateRequest = /** @class */ (function (_super) {
    __extends(MlProjectsLocationsStudiesTrialsCreateRequest, _super);
    function MlProjectsLocationsStudiesTrialsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MlProjectsLocationsStudiesTrialsCreatePathParams)
    ], MlProjectsLocationsStudiesTrialsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MlProjectsLocationsStudiesTrialsCreateQueryParams)
    ], MlProjectsLocationsStudiesTrialsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudMlV1TrialInput)
    ], MlProjectsLocationsStudiesTrialsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MlProjectsLocationsStudiesTrialsCreateSecurity)
    ], MlProjectsLocationsStudiesTrialsCreateRequest.prototype, "security", void 0);
    return MlProjectsLocationsStudiesTrialsCreateRequest;
}(SpeakeasyBase));
export { MlProjectsLocationsStudiesTrialsCreateRequest };
var MlProjectsLocationsStudiesTrialsCreateResponse = /** @class */ (function (_super) {
    __extends(MlProjectsLocationsStudiesTrialsCreateResponse, _super);
    function MlProjectsLocationsStudiesTrialsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudMlV1Trial)
    ], MlProjectsLocationsStudiesTrialsCreateResponse.prototype, "googleCloudMlV1Trial", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MlProjectsLocationsStudiesTrialsCreateResponse.prototype, "statusCode", void 0);
    return MlProjectsLocationsStudiesTrialsCreateResponse;
}(SpeakeasyBase));
export { MlProjectsLocationsStudiesTrialsCreateResponse };
