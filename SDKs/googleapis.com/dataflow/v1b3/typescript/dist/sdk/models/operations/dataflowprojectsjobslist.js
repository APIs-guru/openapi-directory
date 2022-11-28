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
var DataflowProjectsJobsListPathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsListPathParams, _super);
    function DataflowProjectsJobsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsListPathParams.prototype, "projectId", void 0);
    return DataflowProjectsJobsListPathParams;
}(SpeakeasyBase));
export { DataflowProjectsJobsListPathParams };
export var DataflowProjectsJobsListFilterEnum;
(function (DataflowProjectsJobsListFilterEnum) {
    DataflowProjectsJobsListFilterEnum["Unknown"] = "UNKNOWN";
    DataflowProjectsJobsListFilterEnum["All"] = "ALL";
    DataflowProjectsJobsListFilterEnum["Terminated"] = "TERMINATED";
    DataflowProjectsJobsListFilterEnum["Active"] = "ACTIVE";
})(DataflowProjectsJobsListFilterEnum || (DataflowProjectsJobsListFilterEnum = {}));
export var DataflowProjectsJobsListViewEnum;
(function (DataflowProjectsJobsListViewEnum) {
    DataflowProjectsJobsListViewEnum["JobViewUnknown"] = "JOB_VIEW_UNKNOWN";
    DataflowProjectsJobsListViewEnum["JobViewSummary"] = "JOB_VIEW_SUMMARY";
    DataflowProjectsJobsListViewEnum["JobViewAll"] = "JOB_VIEW_ALL";
    DataflowProjectsJobsListViewEnum["JobViewDescription"] = "JOB_VIEW_DESCRIPTION";
})(DataflowProjectsJobsListViewEnum || (DataflowProjectsJobsListViewEnum = {}));
var DataflowProjectsJobsListQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsListQueryParams, _super);
    function DataflowProjectsJobsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsListQueryParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsListQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DataflowProjectsJobsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsJobsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsListQueryParams.prototype, "view", void 0);
    return DataflowProjectsJobsListQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsJobsListQueryParams };
var DataflowProjectsJobsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsListSecurityOption1, _super);
    function DataflowProjectsJobsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsListSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsListSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsJobsListSecurityOption1 };
var DataflowProjectsJobsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsListSecurityOption2, _super);
    function DataflowProjectsJobsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsListSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsListSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsJobsListSecurityOption2 };
var DataflowProjectsJobsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsListSecurityOption3, _super);
    function DataflowProjectsJobsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsListSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsListSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsJobsListSecurityOption3 };
var DataflowProjectsJobsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsListSecurityOption4, _super);
    function DataflowProjectsJobsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsListSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsListSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsJobsListSecurityOption4 };
var DataflowProjectsJobsListSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsListSecurity, _super);
    function DataflowProjectsJobsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsListSecurityOption1)
    ], DataflowProjectsJobsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsListSecurityOption2)
    ], DataflowProjectsJobsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsListSecurityOption3)
    ], DataflowProjectsJobsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsListSecurityOption4)
    ], DataflowProjectsJobsListSecurity.prototype, "option4", void 0);
    return DataflowProjectsJobsListSecurity;
}(SpeakeasyBase));
export { DataflowProjectsJobsListSecurity };
var DataflowProjectsJobsListRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsListRequest, _super);
    function DataflowProjectsJobsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsJobsListPathParams)
    ], DataflowProjectsJobsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsJobsListQueryParams)
    ], DataflowProjectsJobsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsJobsListSecurity)
    ], DataflowProjectsJobsListRequest.prototype, "security", void 0);
    return DataflowProjectsJobsListRequest;
}(SpeakeasyBase));
export { DataflowProjectsJobsListRequest };
var DataflowProjectsJobsListResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsListResponse, _super);
    function DataflowProjectsJobsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsJobsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListJobsResponse)
    ], DataflowProjectsJobsListResponse.prototype, "listJobsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsJobsListResponse.prototype, "statusCode", void 0);
    return DataflowProjectsJobsListResponse;
}(SpeakeasyBase));
export { DataflowProjectsJobsListResponse };
