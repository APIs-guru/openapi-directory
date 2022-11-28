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
var DataflowProjectsLocationsJobsSnapshotPathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsSnapshotPathParams, _super);
    function DataflowProjectsLocationsJobsSnapshotPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsSnapshotPathParams.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsSnapshotPathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsSnapshotPathParams.prototype, "projectId", void 0);
    return DataflowProjectsLocationsJobsSnapshotPathParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsSnapshotPathParams };
var DataflowProjectsLocationsJobsSnapshotQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsSnapshotQueryParams, _super);
    function DataflowProjectsLocationsJobsSnapshotQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsSnapshotQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsSnapshotQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsSnapshotQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsSnapshotQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsSnapshotQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsSnapshotQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsSnapshotQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsLocationsJobsSnapshotQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsSnapshotQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsSnapshotQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsSnapshotQueryParams.prototype, "uploadProtocol", void 0);
    return DataflowProjectsLocationsJobsSnapshotQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsSnapshotQueryParams };
var DataflowProjectsLocationsJobsSnapshotSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsSnapshotSecurityOption1, _super);
    function DataflowProjectsLocationsJobsSnapshotSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsSnapshotSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsSnapshotSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsSnapshotSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsSnapshotSecurityOption1 };
var DataflowProjectsLocationsJobsSnapshotSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsSnapshotSecurityOption2, _super);
    function DataflowProjectsLocationsJobsSnapshotSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsSnapshotSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsSnapshotSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsSnapshotSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsSnapshotSecurityOption2 };
var DataflowProjectsLocationsJobsSnapshotSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsSnapshotSecurityOption3, _super);
    function DataflowProjectsLocationsJobsSnapshotSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsSnapshotSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsSnapshotSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsSnapshotSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsSnapshotSecurityOption3 };
var DataflowProjectsLocationsJobsSnapshotSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsSnapshotSecurityOption4, _super);
    function DataflowProjectsLocationsJobsSnapshotSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsSnapshotSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsSnapshotSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsSnapshotSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsSnapshotSecurityOption4 };
var DataflowProjectsLocationsJobsSnapshotSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsSnapshotSecurity, _super);
    function DataflowProjectsLocationsJobsSnapshotSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsSnapshotSecurityOption1)
    ], DataflowProjectsLocationsJobsSnapshotSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsSnapshotSecurityOption2)
    ], DataflowProjectsLocationsJobsSnapshotSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsSnapshotSecurityOption3)
    ], DataflowProjectsLocationsJobsSnapshotSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsSnapshotSecurityOption4)
    ], DataflowProjectsLocationsJobsSnapshotSecurity.prototype, "option4", void 0);
    return DataflowProjectsLocationsJobsSnapshotSecurity;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsSnapshotSecurity };
var DataflowProjectsLocationsJobsSnapshotRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsSnapshotRequest, _super);
    function DataflowProjectsLocationsJobsSnapshotRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsSnapshotPathParams)
    ], DataflowProjectsLocationsJobsSnapshotRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsSnapshotQueryParams)
    ], DataflowProjectsLocationsJobsSnapshotRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SnapshotJobRequest)
    ], DataflowProjectsLocationsJobsSnapshotRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsSnapshotSecurity)
    ], DataflowProjectsLocationsJobsSnapshotRequest.prototype, "security", void 0);
    return DataflowProjectsLocationsJobsSnapshotRequest;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsSnapshotRequest };
var DataflowProjectsLocationsJobsSnapshotResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsSnapshotResponse, _super);
    function DataflowProjectsLocationsJobsSnapshotResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsSnapshotResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Snapshot)
    ], DataflowProjectsLocationsJobsSnapshotResponse.prototype, "snapshot", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsLocationsJobsSnapshotResponse.prototype, "statusCode", void 0);
    return DataflowProjectsLocationsJobsSnapshotResponse;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsSnapshotResponse };
