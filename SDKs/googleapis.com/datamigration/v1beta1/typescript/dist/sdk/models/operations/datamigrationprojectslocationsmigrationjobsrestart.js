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
var DatamigrationProjectsLocationsMigrationJobsRestartPathParams = /** @class */ (function (_super) {
    __extends(DatamigrationProjectsLocationsMigrationJobsRestartPathParams, _super);
    function DatamigrationProjectsLocationsMigrationJobsRestartPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsRestartPathParams.prototype, "name", void 0);
    return DatamigrationProjectsLocationsMigrationJobsRestartPathParams;
}(SpeakeasyBase));
export { DatamigrationProjectsLocationsMigrationJobsRestartPathParams };
var DatamigrationProjectsLocationsMigrationJobsRestartQueryParams = /** @class */ (function (_super) {
    __extends(DatamigrationProjectsLocationsMigrationJobsRestartQueryParams, _super);
    function DatamigrationProjectsLocationsMigrationJobsRestartQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsRestartQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsRestartQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsRestartQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsRestartQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsRestartQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsRestartQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsRestartQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatamigrationProjectsLocationsMigrationJobsRestartQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsRestartQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsRestartQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsRestartQueryParams.prototype, "uploadProtocol", void 0);
    return DatamigrationProjectsLocationsMigrationJobsRestartQueryParams;
}(SpeakeasyBase));
export { DatamigrationProjectsLocationsMigrationJobsRestartQueryParams };
var DatamigrationProjectsLocationsMigrationJobsRestartSecurity = /** @class */ (function (_super) {
    __extends(DatamigrationProjectsLocationsMigrationJobsRestartSecurity, _super);
    function DatamigrationProjectsLocationsMigrationJobsRestartSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatamigrationProjectsLocationsMigrationJobsRestartSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatamigrationProjectsLocationsMigrationJobsRestartSecurity.prototype, "oauth2c", void 0);
    return DatamigrationProjectsLocationsMigrationJobsRestartSecurity;
}(SpeakeasyBase));
export { DatamigrationProjectsLocationsMigrationJobsRestartSecurity };
var DatamigrationProjectsLocationsMigrationJobsRestartRequest = /** @class */ (function (_super) {
    __extends(DatamigrationProjectsLocationsMigrationJobsRestartRequest, _super);
    function DatamigrationProjectsLocationsMigrationJobsRestartRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatamigrationProjectsLocationsMigrationJobsRestartPathParams)
    ], DatamigrationProjectsLocationsMigrationJobsRestartRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatamigrationProjectsLocationsMigrationJobsRestartQueryParams)
    ], DatamigrationProjectsLocationsMigrationJobsRestartRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], DatamigrationProjectsLocationsMigrationJobsRestartRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatamigrationProjectsLocationsMigrationJobsRestartSecurity)
    ], DatamigrationProjectsLocationsMigrationJobsRestartRequest.prototype, "security", void 0);
    return DatamigrationProjectsLocationsMigrationJobsRestartRequest;
}(SpeakeasyBase));
export { DatamigrationProjectsLocationsMigrationJobsRestartRequest };
var DatamigrationProjectsLocationsMigrationJobsRestartResponse = /** @class */ (function (_super) {
    __extends(DatamigrationProjectsLocationsMigrationJobsRestartResponse, _super);
    function DatamigrationProjectsLocationsMigrationJobsRestartResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsRestartResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], DatamigrationProjectsLocationsMigrationJobsRestartResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatamigrationProjectsLocationsMigrationJobsRestartResponse.prototype, "statusCode", void 0);
    return DatamigrationProjectsLocationsMigrationJobsRestartResponse;
}(SpeakeasyBase));
export { DatamigrationProjectsLocationsMigrationJobsRestartResponse };
