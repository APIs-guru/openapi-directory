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
var DataflowProjectsLocationsJobsListPathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsListPathParams, _super);
    function DataflowProjectsLocationsJobsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsListPathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsListPathParams.prototype, "projectId", void 0);
    return DataflowProjectsLocationsJobsListPathParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsListPathParams };
export var DataflowProjectsLocationsJobsListFilterEnum;
(function (DataflowProjectsLocationsJobsListFilterEnum) {
    DataflowProjectsLocationsJobsListFilterEnum["Unknown"] = "UNKNOWN";
    DataflowProjectsLocationsJobsListFilterEnum["All"] = "ALL";
    DataflowProjectsLocationsJobsListFilterEnum["Terminated"] = "TERMINATED";
    DataflowProjectsLocationsJobsListFilterEnum["Active"] = "ACTIVE";
})(DataflowProjectsLocationsJobsListFilterEnum || (DataflowProjectsLocationsJobsListFilterEnum = {}));
export var DataflowProjectsLocationsJobsListViewEnum;
(function (DataflowProjectsLocationsJobsListViewEnum) {
    DataflowProjectsLocationsJobsListViewEnum["JobViewUnknown"] = "JOB_VIEW_UNKNOWN";
    DataflowProjectsLocationsJobsListViewEnum["JobViewSummary"] = "JOB_VIEW_SUMMARY";
    DataflowProjectsLocationsJobsListViewEnum["JobViewAll"] = "JOB_VIEW_ALL";
    DataflowProjectsLocationsJobsListViewEnum["JobViewDescription"] = "JOB_VIEW_DESCRIPTION";
})(DataflowProjectsLocationsJobsListViewEnum || (DataflowProjectsLocationsJobsListViewEnum = {}));
var DataflowProjectsLocationsJobsListQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsListQueryParams, _super);
    function DataflowProjectsLocationsJobsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsListQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DataflowProjectsLocationsJobsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsLocationsJobsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsListQueryParams.prototype, "view", void 0);
    return DataflowProjectsLocationsJobsListQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsListQueryParams };
var DataflowProjectsLocationsJobsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsListSecurityOption1, _super);
    function DataflowProjectsLocationsJobsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsListSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsListSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsListSecurityOption1 };
var DataflowProjectsLocationsJobsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsListSecurityOption2, _super);
    function DataflowProjectsLocationsJobsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsListSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsListSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsListSecurityOption2 };
var DataflowProjectsLocationsJobsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsListSecurityOption3, _super);
    function DataflowProjectsLocationsJobsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsListSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsListSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsListSecurityOption3 };
var DataflowProjectsLocationsJobsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsListSecurityOption4, _super);
    function DataflowProjectsLocationsJobsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsListSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsListSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsListSecurityOption4 };
var DataflowProjectsLocationsJobsListSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsListSecurity, _super);
    function DataflowProjectsLocationsJobsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsListSecurityOption1)
    ], DataflowProjectsLocationsJobsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsListSecurityOption2)
    ], DataflowProjectsLocationsJobsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsListSecurityOption3)
    ], DataflowProjectsLocationsJobsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsListSecurityOption4)
    ], DataflowProjectsLocationsJobsListSecurity.prototype, "option4", void 0);
    return DataflowProjectsLocationsJobsListSecurity;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsListSecurity };
var DataflowProjectsLocationsJobsListRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsListRequest, _super);
    function DataflowProjectsLocationsJobsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsListPathParams)
    ], DataflowProjectsLocationsJobsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsListQueryParams)
    ], DataflowProjectsLocationsJobsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsListSecurity)
    ], DataflowProjectsLocationsJobsListRequest.prototype, "security", void 0);
    return DataflowProjectsLocationsJobsListRequest;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsListRequest };
var DataflowProjectsLocationsJobsListResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsListResponse, _super);
    function DataflowProjectsLocationsJobsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListJobsResponse)
    ], DataflowProjectsLocationsJobsListResponse.prototype, "listJobsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsLocationsJobsListResponse.prototype, "statusCode", void 0);
    return DataflowProjectsLocationsJobsListResponse;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsListResponse };
