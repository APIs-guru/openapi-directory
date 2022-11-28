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
var RunProjectsLocationsServicesRevisionsGetPathParams = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsServicesRevisionsGetPathParams, _super);
    function RunProjectsLocationsServicesRevisionsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesRevisionsGetPathParams.prototype, "name", void 0);
    return RunProjectsLocationsServicesRevisionsGetPathParams;
}(SpeakeasyBase));
export { RunProjectsLocationsServicesRevisionsGetPathParams };
var RunProjectsLocationsServicesRevisionsGetQueryParams = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsServicesRevisionsGetQueryParams, _super);
    function RunProjectsLocationsServicesRevisionsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesRevisionsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesRevisionsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesRevisionsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesRevisionsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesRevisionsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesRevisionsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesRevisionsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RunProjectsLocationsServicesRevisionsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesRevisionsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesRevisionsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesRevisionsGetQueryParams.prototype, "uploadProtocol", void 0);
    return RunProjectsLocationsServicesRevisionsGetQueryParams;
}(SpeakeasyBase));
export { RunProjectsLocationsServicesRevisionsGetQueryParams };
var RunProjectsLocationsServicesRevisionsGetSecurity = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsServicesRevisionsGetSecurity, _super);
    function RunProjectsLocationsServicesRevisionsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RunProjectsLocationsServicesRevisionsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RunProjectsLocationsServicesRevisionsGetSecurity.prototype, "oauth2c", void 0);
    return RunProjectsLocationsServicesRevisionsGetSecurity;
}(SpeakeasyBase));
export { RunProjectsLocationsServicesRevisionsGetSecurity };
var RunProjectsLocationsServicesRevisionsGetRequest = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsServicesRevisionsGetRequest, _super);
    function RunProjectsLocationsServicesRevisionsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunProjectsLocationsServicesRevisionsGetPathParams)
    ], RunProjectsLocationsServicesRevisionsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunProjectsLocationsServicesRevisionsGetQueryParams)
    ], RunProjectsLocationsServicesRevisionsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunProjectsLocationsServicesRevisionsGetSecurity)
    ], RunProjectsLocationsServicesRevisionsGetRequest.prototype, "security", void 0);
    return RunProjectsLocationsServicesRevisionsGetRequest;
}(SpeakeasyBase));
export { RunProjectsLocationsServicesRevisionsGetRequest };
var RunProjectsLocationsServicesRevisionsGetResponse = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsServicesRevisionsGetResponse, _super);
    function RunProjectsLocationsServicesRevisionsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RunProjectsLocationsServicesRevisionsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudRunV2Revision)
    ], RunProjectsLocationsServicesRevisionsGetResponse.prototype, "googleCloudRunV2Revision", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RunProjectsLocationsServicesRevisionsGetResponse.prototype, "statusCode", void 0);
    return RunProjectsLocationsServicesRevisionsGetResponse;
}(SpeakeasyBase));
export { RunProjectsLocationsServicesRevisionsGetResponse };
