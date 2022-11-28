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
var RunProjectsLocationsJobsExecutionsListPathParams = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsJobsExecutionsListPathParams, _super);
    function RunProjectsLocationsJobsExecutionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsJobsExecutionsListPathParams.prototype, "parent", void 0);
    return RunProjectsLocationsJobsExecutionsListPathParams;
}(SpeakeasyBase));
export { RunProjectsLocationsJobsExecutionsListPathParams };
var RunProjectsLocationsJobsExecutionsListQueryParams = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsJobsExecutionsListQueryParams, _super);
    function RunProjectsLocationsJobsExecutionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsJobsExecutionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsJobsExecutionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsJobsExecutionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsJobsExecutionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsJobsExecutionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsJobsExecutionsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsJobsExecutionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], RunProjectsLocationsJobsExecutionsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsJobsExecutionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RunProjectsLocationsJobsExecutionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsJobsExecutionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showDeleted" }),
        __metadata("design:type", Boolean)
    ], RunProjectsLocationsJobsExecutionsListQueryParams.prototype, "showDeleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsJobsExecutionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RunProjectsLocationsJobsExecutionsListQueryParams.prototype, "uploadProtocol", void 0);
    return RunProjectsLocationsJobsExecutionsListQueryParams;
}(SpeakeasyBase));
export { RunProjectsLocationsJobsExecutionsListQueryParams };
var RunProjectsLocationsJobsExecutionsListSecurity = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsJobsExecutionsListSecurity, _super);
    function RunProjectsLocationsJobsExecutionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RunProjectsLocationsJobsExecutionsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RunProjectsLocationsJobsExecutionsListSecurity.prototype, "oauth2c", void 0);
    return RunProjectsLocationsJobsExecutionsListSecurity;
}(SpeakeasyBase));
export { RunProjectsLocationsJobsExecutionsListSecurity };
var RunProjectsLocationsJobsExecutionsListRequest = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsJobsExecutionsListRequest, _super);
    function RunProjectsLocationsJobsExecutionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunProjectsLocationsJobsExecutionsListPathParams)
    ], RunProjectsLocationsJobsExecutionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunProjectsLocationsJobsExecutionsListQueryParams)
    ], RunProjectsLocationsJobsExecutionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunProjectsLocationsJobsExecutionsListSecurity)
    ], RunProjectsLocationsJobsExecutionsListRequest.prototype, "security", void 0);
    return RunProjectsLocationsJobsExecutionsListRequest;
}(SpeakeasyBase));
export { RunProjectsLocationsJobsExecutionsListRequest };
var RunProjectsLocationsJobsExecutionsListResponse = /** @class */ (function (_super) {
    __extends(RunProjectsLocationsJobsExecutionsListResponse, _super);
    function RunProjectsLocationsJobsExecutionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RunProjectsLocationsJobsExecutionsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudRunV2ListExecutionsResponse)
    ], RunProjectsLocationsJobsExecutionsListResponse.prototype, "googleCloudRunV2ListExecutionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RunProjectsLocationsJobsExecutionsListResponse.prototype, "statusCode", void 0);
    return RunProjectsLocationsJobsExecutionsListResponse;
}(SpeakeasyBase));
export { RunProjectsLocationsJobsExecutionsListResponse };
