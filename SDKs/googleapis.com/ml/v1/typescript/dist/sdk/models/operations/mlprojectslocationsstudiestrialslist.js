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
var MlProjectsLocationsStudiesTrialsListPathParams = /** @class */ (function (_super) {
    __extends(MlProjectsLocationsStudiesTrialsListPathParams, _super);
    function MlProjectsLocationsStudiesTrialsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsListPathParams.prototype, "parent", void 0);
    return MlProjectsLocationsStudiesTrialsListPathParams;
}(SpeakeasyBase));
export { MlProjectsLocationsStudiesTrialsListPathParams };
var MlProjectsLocationsStudiesTrialsListQueryParams = /** @class */ (function (_super) {
    __extends(MlProjectsLocationsStudiesTrialsListQueryParams, _super);
    function MlProjectsLocationsStudiesTrialsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MlProjectsLocationsStudiesTrialsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsListQueryParams.prototype, "uploadProtocol", void 0);
    return MlProjectsLocationsStudiesTrialsListQueryParams;
}(SpeakeasyBase));
export { MlProjectsLocationsStudiesTrialsListQueryParams };
var MlProjectsLocationsStudiesTrialsListSecurity = /** @class */ (function (_super) {
    __extends(MlProjectsLocationsStudiesTrialsListSecurity, _super);
    function MlProjectsLocationsStudiesTrialsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MlProjectsLocationsStudiesTrialsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MlProjectsLocationsStudiesTrialsListSecurity.prototype, "oauth2c", void 0);
    return MlProjectsLocationsStudiesTrialsListSecurity;
}(SpeakeasyBase));
export { MlProjectsLocationsStudiesTrialsListSecurity };
var MlProjectsLocationsStudiesTrialsListRequest = /** @class */ (function (_super) {
    __extends(MlProjectsLocationsStudiesTrialsListRequest, _super);
    function MlProjectsLocationsStudiesTrialsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MlProjectsLocationsStudiesTrialsListPathParams)
    ], MlProjectsLocationsStudiesTrialsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MlProjectsLocationsStudiesTrialsListQueryParams)
    ], MlProjectsLocationsStudiesTrialsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MlProjectsLocationsStudiesTrialsListSecurity)
    ], MlProjectsLocationsStudiesTrialsListRequest.prototype, "security", void 0);
    return MlProjectsLocationsStudiesTrialsListRequest;
}(SpeakeasyBase));
export { MlProjectsLocationsStudiesTrialsListRequest };
var MlProjectsLocationsStudiesTrialsListResponse = /** @class */ (function (_super) {
    __extends(MlProjectsLocationsStudiesTrialsListResponse, _super);
    function MlProjectsLocationsStudiesTrialsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MlProjectsLocationsStudiesTrialsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudMlV1ListTrialsResponse)
    ], MlProjectsLocationsStudiesTrialsListResponse.prototype, "googleCloudMlV1ListTrialsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MlProjectsLocationsStudiesTrialsListResponse.prototype, "statusCode", void 0);
    return MlProjectsLocationsStudiesTrialsListResponse;
}(SpeakeasyBase));
export { MlProjectsLocationsStudiesTrialsListResponse };
