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
var DataflowProjectsJobsSnapshotPathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsSnapshotPathParams, _super);
    function DataflowProjectsJobsSnapshotPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsSnapshotPathParams.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsSnapshotPathParams.prototype, "projectId", void 0);
    return DataflowProjectsJobsSnapshotPathParams;
}(SpeakeasyBase));
export { DataflowProjectsJobsSnapshotPathParams };
var DataflowProjectsJobsSnapshotQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsSnapshotQueryParams, _super);
    function DataflowProjectsJobsSnapshotQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsSnapshotQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsSnapshotQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsSnapshotQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsSnapshotQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsSnapshotQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsSnapshotQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsSnapshotQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsJobsSnapshotQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsSnapshotQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsSnapshotQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsSnapshotQueryParams.prototype, "uploadProtocol", void 0);
    return DataflowProjectsJobsSnapshotQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsJobsSnapshotQueryParams };
var DataflowProjectsJobsSnapshotSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsSnapshotSecurityOption1, _super);
    function DataflowProjectsJobsSnapshotSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsSnapshotSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsSnapshotSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsSnapshotSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsJobsSnapshotSecurityOption1 };
var DataflowProjectsJobsSnapshotSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsSnapshotSecurityOption2, _super);
    function DataflowProjectsJobsSnapshotSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsSnapshotSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsSnapshotSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsSnapshotSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsJobsSnapshotSecurityOption2 };
var DataflowProjectsJobsSnapshotSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsSnapshotSecurityOption3, _super);
    function DataflowProjectsJobsSnapshotSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsSnapshotSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsSnapshotSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsSnapshotSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsJobsSnapshotSecurityOption3 };
var DataflowProjectsJobsSnapshotSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsSnapshotSecurityOption4, _super);
    function DataflowProjectsJobsSnapshotSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsSnapshotSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsSnapshotSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsSnapshotSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsJobsSnapshotSecurityOption4 };
var DataflowProjectsJobsSnapshotSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsSnapshotSecurity, _super);
    function DataflowProjectsJobsSnapshotSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsSnapshotSecurityOption1)
    ], DataflowProjectsJobsSnapshotSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsSnapshotSecurityOption2)
    ], DataflowProjectsJobsSnapshotSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsSnapshotSecurityOption3)
    ], DataflowProjectsJobsSnapshotSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsSnapshotSecurityOption4)
    ], DataflowProjectsJobsSnapshotSecurity.prototype, "option4", void 0);
    return DataflowProjectsJobsSnapshotSecurity;
}(SpeakeasyBase));
export { DataflowProjectsJobsSnapshotSecurity };
var DataflowProjectsJobsSnapshotRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsSnapshotRequest, _super);
    function DataflowProjectsJobsSnapshotRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsJobsSnapshotPathParams)
    ], DataflowProjectsJobsSnapshotRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsJobsSnapshotQueryParams)
    ], DataflowProjectsJobsSnapshotRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SnapshotJobRequest)
    ], DataflowProjectsJobsSnapshotRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsJobsSnapshotSecurity)
    ], DataflowProjectsJobsSnapshotRequest.prototype, "security", void 0);
    return DataflowProjectsJobsSnapshotRequest;
}(SpeakeasyBase));
export { DataflowProjectsJobsSnapshotRequest };
var DataflowProjectsJobsSnapshotResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsSnapshotResponse, _super);
    function DataflowProjectsJobsSnapshotResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsJobsSnapshotResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Snapshot)
    ], DataflowProjectsJobsSnapshotResponse.prototype, "snapshot", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsJobsSnapshotResponse.prototype, "statusCode", void 0);
    return DataflowProjectsJobsSnapshotResponse;
}(SpeakeasyBase));
export { DataflowProjectsJobsSnapshotResponse };
