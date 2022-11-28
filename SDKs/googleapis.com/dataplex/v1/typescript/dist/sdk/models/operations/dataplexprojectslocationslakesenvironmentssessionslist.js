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
var DataplexProjectsLocationsLakesEnvironmentsSessionsListPathParams = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesEnvironmentsSessionsListPathParams, _super);
    function DataplexProjectsLocationsLakesEnvironmentsSessionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesEnvironmentsSessionsListPathParams.prototype, "parent", void 0);
    return DataplexProjectsLocationsLakesEnvironmentsSessionsListPathParams;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesEnvironmentsSessionsListPathParams };
var DataplexProjectsLocationsLakesEnvironmentsSessionsListQueryParams = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesEnvironmentsSessionsListQueryParams, _super);
    function DataplexProjectsLocationsLakesEnvironmentsSessionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesEnvironmentsSessionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesEnvironmentsSessionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesEnvironmentsSessionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesEnvironmentsSessionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesEnvironmentsSessionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesEnvironmentsSessionsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesEnvironmentsSessionsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesEnvironmentsSessionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DataplexProjectsLocationsLakesEnvironmentsSessionsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesEnvironmentsSessionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataplexProjectsLocationsLakesEnvironmentsSessionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesEnvironmentsSessionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesEnvironmentsSessionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesEnvironmentsSessionsListQueryParams.prototype, "uploadProtocol", void 0);
    return DataplexProjectsLocationsLakesEnvironmentsSessionsListQueryParams;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesEnvironmentsSessionsListQueryParams };
var DataplexProjectsLocationsLakesEnvironmentsSessionsListSecurity = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesEnvironmentsSessionsListSecurity, _super);
    function DataplexProjectsLocationsLakesEnvironmentsSessionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataplexProjectsLocationsLakesEnvironmentsSessionsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataplexProjectsLocationsLakesEnvironmentsSessionsListSecurity.prototype, "oauth2c", void 0);
    return DataplexProjectsLocationsLakesEnvironmentsSessionsListSecurity;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesEnvironmentsSessionsListSecurity };
var DataplexProjectsLocationsLakesEnvironmentsSessionsListRequest = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesEnvironmentsSessionsListRequest, _super);
    function DataplexProjectsLocationsLakesEnvironmentsSessionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataplexProjectsLocationsLakesEnvironmentsSessionsListPathParams)
    ], DataplexProjectsLocationsLakesEnvironmentsSessionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataplexProjectsLocationsLakesEnvironmentsSessionsListQueryParams)
    ], DataplexProjectsLocationsLakesEnvironmentsSessionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataplexProjectsLocationsLakesEnvironmentsSessionsListSecurity)
    ], DataplexProjectsLocationsLakesEnvironmentsSessionsListRequest.prototype, "security", void 0);
    return DataplexProjectsLocationsLakesEnvironmentsSessionsListRequest;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesEnvironmentsSessionsListRequest };
var DataplexProjectsLocationsLakesEnvironmentsSessionsListResponse = /** @class */ (function (_super) {
    __extends(DataplexProjectsLocationsLakesEnvironmentsSessionsListResponse, _super);
    function DataplexProjectsLocationsLakesEnvironmentsSessionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataplexProjectsLocationsLakesEnvironmentsSessionsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDataplexV1ListSessionsResponse)
    ], DataplexProjectsLocationsLakesEnvironmentsSessionsListResponse.prototype, "googleCloudDataplexV1ListSessionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataplexProjectsLocationsLakesEnvironmentsSessionsListResponse.prototype, "statusCode", void 0);
    return DataplexProjectsLocationsLakesEnvironmentsSessionsListResponse;
}(SpeakeasyBase));
export { DataplexProjectsLocationsLakesEnvironmentsSessionsListResponse };
