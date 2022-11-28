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
var DataflowProjectsLocationsJobsSnapshotsListPathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsSnapshotsListPathParams, _super);
    function DataflowProjectsLocationsJobsSnapshotsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsSnapshotsListPathParams.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsSnapshotsListPathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsSnapshotsListPathParams.prototype, "projectId", void 0);
    return DataflowProjectsLocationsJobsSnapshotsListPathParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsSnapshotsListPathParams };
var DataflowProjectsLocationsJobsSnapshotsListQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsSnapshotsListQueryParams, _super);
    function DataflowProjectsLocationsJobsSnapshotsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsSnapshotsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsSnapshotsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsSnapshotsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsSnapshotsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsSnapshotsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsSnapshotsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsSnapshotsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsLocationsJobsSnapshotsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsSnapshotsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsSnapshotsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsSnapshotsListQueryParams.prototype, "uploadProtocol", void 0);
    return DataflowProjectsLocationsJobsSnapshotsListQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsSnapshotsListQueryParams };
var DataflowProjectsLocationsJobsSnapshotsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsSnapshotsListSecurityOption1, _super);
    function DataflowProjectsLocationsJobsSnapshotsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsSnapshotsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsSnapshotsListSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsSnapshotsListSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsSnapshotsListSecurityOption1 };
var DataflowProjectsLocationsJobsSnapshotsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsSnapshotsListSecurityOption2, _super);
    function DataflowProjectsLocationsJobsSnapshotsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsSnapshotsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsSnapshotsListSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsSnapshotsListSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsSnapshotsListSecurityOption2 };
var DataflowProjectsLocationsJobsSnapshotsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsSnapshotsListSecurityOption3, _super);
    function DataflowProjectsLocationsJobsSnapshotsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsSnapshotsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsSnapshotsListSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsSnapshotsListSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsSnapshotsListSecurityOption3 };
var DataflowProjectsLocationsJobsSnapshotsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsSnapshotsListSecurityOption4, _super);
    function DataflowProjectsLocationsJobsSnapshotsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsSnapshotsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsSnapshotsListSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsSnapshotsListSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsSnapshotsListSecurityOption4 };
var DataflowProjectsLocationsJobsSnapshotsListSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsSnapshotsListSecurity, _super);
    function DataflowProjectsLocationsJobsSnapshotsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsSnapshotsListSecurityOption1)
    ], DataflowProjectsLocationsJobsSnapshotsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsSnapshotsListSecurityOption2)
    ], DataflowProjectsLocationsJobsSnapshotsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsSnapshotsListSecurityOption3)
    ], DataflowProjectsLocationsJobsSnapshotsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsSnapshotsListSecurityOption4)
    ], DataflowProjectsLocationsJobsSnapshotsListSecurity.prototype, "option4", void 0);
    return DataflowProjectsLocationsJobsSnapshotsListSecurity;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsSnapshotsListSecurity };
var DataflowProjectsLocationsJobsSnapshotsListRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsSnapshotsListRequest, _super);
    function DataflowProjectsLocationsJobsSnapshotsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsSnapshotsListPathParams)
    ], DataflowProjectsLocationsJobsSnapshotsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsSnapshotsListQueryParams)
    ], DataflowProjectsLocationsJobsSnapshotsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsSnapshotsListSecurity)
    ], DataflowProjectsLocationsJobsSnapshotsListRequest.prototype, "security", void 0);
    return DataflowProjectsLocationsJobsSnapshotsListRequest;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsSnapshotsListRequest };
var DataflowProjectsLocationsJobsSnapshotsListResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsSnapshotsListResponse, _super);
    function DataflowProjectsLocationsJobsSnapshotsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsSnapshotsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListSnapshotsResponse)
    ], DataflowProjectsLocationsJobsSnapshotsListResponse.prototype, "listSnapshotsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsLocationsJobsSnapshotsListResponse.prototype, "statusCode", void 0);
    return DataflowProjectsLocationsJobsSnapshotsListResponse;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsSnapshotsListResponse };
