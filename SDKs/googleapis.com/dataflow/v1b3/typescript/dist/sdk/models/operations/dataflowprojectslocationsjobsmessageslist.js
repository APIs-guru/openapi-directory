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
var DataflowProjectsLocationsJobsMessagesListPathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsMessagesListPathParams, _super);
    function DataflowProjectsLocationsJobsMessagesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsMessagesListPathParams.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsMessagesListPathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsMessagesListPathParams.prototype, "projectId", void 0);
    return DataflowProjectsLocationsJobsMessagesListPathParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsMessagesListPathParams };
export var DataflowProjectsLocationsJobsMessagesListMinimumImportanceEnum;
(function (DataflowProjectsLocationsJobsMessagesListMinimumImportanceEnum) {
    DataflowProjectsLocationsJobsMessagesListMinimumImportanceEnum["JobMessageImportanceUnknown"] = "JOB_MESSAGE_IMPORTANCE_UNKNOWN";
    DataflowProjectsLocationsJobsMessagesListMinimumImportanceEnum["JobMessageDebug"] = "JOB_MESSAGE_DEBUG";
    DataflowProjectsLocationsJobsMessagesListMinimumImportanceEnum["JobMessageDetailed"] = "JOB_MESSAGE_DETAILED";
    DataflowProjectsLocationsJobsMessagesListMinimumImportanceEnum["JobMessageBasic"] = "JOB_MESSAGE_BASIC";
    DataflowProjectsLocationsJobsMessagesListMinimumImportanceEnum["JobMessageWarning"] = "JOB_MESSAGE_WARNING";
    DataflowProjectsLocationsJobsMessagesListMinimumImportanceEnum["JobMessageError"] = "JOB_MESSAGE_ERROR";
})(DataflowProjectsLocationsJobsMessagesListMinimumImportanceEnum || (DataflowProjectsLocationsJobsMessagesListMinimumImportanceEnum = {}));
var DataflowProjectsLocationsJobsMessagesListQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsMessagesListQueryParams, _super);
    function DataflowProjectsLocationsJobsMessagesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsMessagesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsMessagesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsMessagesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsMessagesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endTime" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsMessagesListQueryParams.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsMessagesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsMessagesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minimumImportance" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsMessagesListQueryParams.prototype, "minimumImportance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsMessagesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DataflowProjectsLocationsJobsMessagesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsMessagesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsLocationsJobsMessagesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsMessagesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTime" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsMessagesListQueryParams.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsMessagesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsMessagesListQueryParams.prototype, "uploadProtocol", void 0);
    return DataflowProjectsLocationsJobsMessagesListQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsMessagesListQueryParams };
var DataflowProjectsLocationsJobsMessagesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsMessagesListSecurityOption1, _super);
    function DataflowProjectsLocationsJobsMessagesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsMessagesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsMessagesListSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsMessagesListSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsMessagesListSecurityOption1 };
var DataflowProjectsLocationsJobsMessagesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsMessagesListSecurityOption2, _super);
    function DataflowProjectsLocationsJobsMessagesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsMessagesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsMessagesListSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsMessagesListSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsMessagesListSecurityOption2 };
var DataflowProjectsLocationsJobsMessagesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsMessagesListSecurityOption3, _super);
    function DataflowProjectsLocationsJobsMessagesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsMessagesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsMessagesListSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsMessagesListSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsMessagesListSecurityOption3 };
var DataflowProjectsLocationsJobsMessagesListSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsMessagesListSecurityOption4, _super);
    function DataflowProjectsLocationsJobsMessagesListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsLocationsJobsMessagesListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsLocationsJobsMessagesListSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsLocationsJobsMessagesListSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsMessagesListSecurityOption4 };
var DataflowProjectsLocationsJobsMessagesListSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsMessagesListSecurity, _super);
    function DataflowProjectsLocationsJobsMessagesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsMessagesListSecurityOption1)
    ], DataflowProjectsLocationsJobsMessagesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsMessagesListSecurityOption2)
    ], DataflowProjectsLocationsJobsMessagesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsMessagesListSecurityOption3)
    ], DataflowProjectsLocationsJobsMessagesListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsLocationsJobsMessagesListSecurityOption4)
    ], DataflowProjectsLocationsJobsMessagesListSecurity.prototype, "option4", void 0);
    return DataflowProjectsLocationsJobsMessagesListSecurity;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsMessagesListSecurity };
var DataflowProjectsLocationsJobsMessagesListRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsMessagesListRequest, _super);
    function DataflowProjectsLocationsJobsMessagesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsMessagesListPathParams)
    ], DataflowProjectsLocationsJobsMessagesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsMessagesListQueryParams)
    ], DataflowProjectsLocationsJobsMessagesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsLocationsJobsMessagesListSecurity)
    ], DataflowProjectsLocationsJobsMessagesListRequest.prototype, "security", void 0);
    return DataflowProjectsLocationsJobsMessagesListRequest;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsMessagesListRequest };
var DataflowProjectsLocationsJobsMessagesListResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsLocationsJobsMessagesListResponse, _super);
    function DataflowProjectsLocationsJobsMessagesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsLocationsJobsMessagesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListJobMessagesResponse)
    ], DataflowProjectsLocationsJobsMessagesListResponse.prototype, "listJobMessagesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsLocationsJobsMessagesListResponse.prototype, "statusCode", void 0);
    return DataflowProjectsLocationsJobsMessagesListResponse;
}(SpeakeasyBase));
export { DataflowProjectsLocationsJobsMessagesListResponse };
