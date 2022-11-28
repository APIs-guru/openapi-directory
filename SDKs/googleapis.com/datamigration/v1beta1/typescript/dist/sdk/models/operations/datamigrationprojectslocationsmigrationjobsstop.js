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
var DatamigrationProjectsLocationsMigrationJobsStopPathParams = /** @class */ (function (_super) {
    __extends(DatamigrationProjectsLocationsMigrationJobsStopPathParams, _super);
    function DatamigrationProjectsLocationsMigrationJobsStopPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsStopPathParams.prototype, "name", void 0);
    return DatamigrationProjectsLocationsMigrationJobsStopPathParams;
}(SpeakeasyBase));
export { DatamigrationProjectsLocationsMigrationJobsStopPathParams };
var DatamigrationProjectsLocationsMigrationJobsStopQueryParams = /** @class */ (function (_super) {
    __extends(DatamigrationProjectsLocationsMigrationJobsStopQueryParams, _super);
    function DatamigrationProjectsLocationsMigrationJobsStopQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsStopQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsStopQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsStopQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsStopQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsStopQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsStopQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsStopQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatamigrationProjectsLocationsMigrationJobsStopQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsStopQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsStopQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsStopQueryParams.prototype, "uploadProtocol", void 0);
    return DatamigrationProjectsLocationsMigrationJobsStopQueryParams;
}(SpeakeasyBase));
export { DatamigrationProjectsLocationsMigrationJobsStopQueryParams };
var DatamigrationProjectsLocationsMigrationJobsStopSecurity = /** @class */ (function (_super) {
    __extends(DatamigrationProjectsLocationsMigrationJobsStopSecurity, _super);
    function DatamigrationProjectsLocationsMigrationJobsStopSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatamigrationProjectsLocationsMigrationJobsStopSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatamigrationProjectsLocationsMigrationJobsStopSecurity.prototype, "oauth2c", void 0);
    return DatamigrationProjectsLocationsMigrationJobsStopSecurity;
}(SpeakeasyBase));
export { DatamigrationProjectsLocationsMigrationJobsStopSecurity };
var DatamigrationProjectsLocationsMigrationJobsStopRequest = /** @class */ (function (_super) {
    __extends(DatamigrationProjectsLocationsMigrationJobsStopRequest, _super);
    function DatamigrationProjectsLocationsMigrationJobsStopRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatamigrationProjectsLocationsMigrationJobsStopPathParams)
    ], DatamigrationProjectsLocationsMigrationJobsStopRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatamigrationProjectsLocationsMigrationJobsStopQueryParams)
    ], DatamigrationProjectsLocationsMigrationJobsStopRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], DatamigrationProjectsLocationsMigrationJobsStopRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatamigrationProjectsLocationsMigrationJobsStopSecurity)
    ], DatamigrationProjectsLocationsMigrationJobsStopRequest.prototype, "security", void 0);
    return DatamigrationProjectsLocationsMigrationJobsStopRequest;
}(SpeakeasyBase));
export { DatamigrationProjectsLocationsMigrationJobsStopRequest };
var DatamigrationProjectsLocationsMigrationJobsStopResponse = /** @class */ (function (_super) {
    __extends(DatamigrationProjectsLocationsMigrationJobsStopResponse, _super);
    function DatamigrationProjectsLocationsMigrationJobsStopResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsStopResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], DatamigrationProjectsLocationsMigrationJobsStopResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatamigrationProjectsLocationsMigrationJobsStopResponse.prototype, "statusCode", void 0);
    return DatamigrationProjectsLocationsMigrationJobsStopResponse;
}(SpeakeasyBase));
export { DatamigrationProjectsLocationsMigrationJobsStopResponse };
