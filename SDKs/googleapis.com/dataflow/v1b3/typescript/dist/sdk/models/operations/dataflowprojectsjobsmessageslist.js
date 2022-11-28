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
var DataflowProjectsJobsMessagesListPathParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsMessagesListPathParams, _super);
    function DataflowProjectsJobsMessagesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsMessagesListPathParams.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsMessagesListPathParams.prototype, "projectId", void 0);
    return DataflowProjectsJobsMessagesListPathParams;
}(SpeakeasyBase));
export { DataflowProjectsJobsMessagesListPathParams };
export var DataflowProjectsJobsMessagesListMinimumImportanceEnum;
(function (DataflowProjectsJobsMessagesListMinimumImportanceEnum) {
    DataflowProjectsJobsMessagesListMinimumImportanceEnum["JobMessageImportanceUnknown"] = "JOB_MESSAGE_IMPORTANCE_UNKNOWN";
    DataflowProjectsJobsMessagesListMinimumImportanceEnum["JobMessageDebug"] = "JOB_MESSAGE_DEBUG";
    DataflowProjectsJobsMessagesListMinimumImportanceEnum["JobMessageDetailed"] = "JOB_MESSAGE_DETAILED";
    DataflowProjectsJobsMessagesListMinimumImportanceEnum["JobMessageBasic"] = "JOB_MESSAGE_BASIC";
    DataflowProjectsJobsMessagesListMinimumImportanceEnum["JobMessageWarning"] = "JOB_MESSAGE_WARNING";
    DataflowProjectsJobsMessagesListMinimumImportanceEnum["JobMessageError"] = "JOB_MESSAGE_ERROR";
})(DataflowProjectsJobsMessagesListMinimumImportanceEnum || (DataflowProjectsJobsMessagesListMinimumImportanceEnum = {}));
var DataflowProjectsJobsMessagesListQueryParams = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsMessagesListQueryParams, _super);
    function DataflowProjectsJobsMessagesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsMessagesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsMessagesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsMessagesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsMessagesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endTime" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsMessagesListQueryParams.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsMessagesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsMessagesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsMessagesListQueryParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minimumImportance" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsMessagesListQueryParams.prototype, "minimumImportance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsMessagesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DataflowProjectsJobsMessagesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsMessagesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DataflowProjectsJobsMessagesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsMessagesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTime" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsMessagesListQueryParams.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsMessagesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DataflowProjectsJobsMessagesListQueryParams.prototype, "uploadProtocol", void 0);
    return DataflowProjectsJobsMessagesListQueryParams;
}(SpeakeasyBase));
export { DataflowProjectsJobsMessagesListQueryParams };
var DataflowProjectsJobsMessagesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsMessagesListSecurityOption1, _super);
    function DataflowProjectsJobsMessagesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsMessagesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsMessagesListSecurityOption1.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsMessagesListSecurityOption1;
}(SpeakeasyBase));
export { DataflowProjectsJobsMessagesListSecurityOption1 };
var DataflowProjectsJobsMessagesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsMessagesListSecurityOption2, _super);
    function DataflowProjectsJobsMessagesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsMessagesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsMessagesListSecurityOption2.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsMessagesListSecurityOption2;
}(SpeakeasyBase));
export { DataflowProjectsJobsMessagesListSecurityOption2 };
var DataflowProjectsJobsMessagesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsMessagesListSecurityOption3, _super);
    function DataflowProjectsJobsMessagesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsMessagesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsMessagesListSecurityOption3.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsMessagesListSecurityOption3;
}(SpeakeasyBase));
export { DataflowProjectsJobsMessagesListSecurityOption3 };
var DataflowProjectsJobsMessagesListSecurityOption4 = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsMessagesListSecurityOption4, _super);
    function DataflowProjectsJobsMessagesListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DataflowProjectsJobsMessagesListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DataflowProjectsJobsMessagesListSecurityOption4.prototype, "oauth2c", void 0);
    return DataflowProjectsJobsMessagesListSecurityOption4;
}(SpeakeasyBase));
export { DataflowProjectsJobsMessagesListSecurityOption4 };
var DataflowProjectsJobsMessagesListSecurity = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsMessagesListSecurity, _super);
    function DataflowProjectsJobsMessagesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsMessagesListSecurityOption1)
    ], DataflowProjectsJobsMessagesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsMessagesListSecurityOption2)
    ], DataflowProjectsJobsMessagesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsMessagesListSecurityOption3)
    ], DataflowProjectsJobsMessagesListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DataflowProjectsJobsMessagesListSecurityOption4)
    ], DataflowProjectsJobsMessagesListSecurity.prototype, "option4", void 0);
    return DataflowProjectsJobsMessagesListSecurity;
}(SpeakeasyBase));
export { DataflowProjectsJobsMessagesListSecurity };
var DataflowProjectsJobsMessagesListRequest = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsMessagesListRequest, _super);
    function DataflowProjectsJobsMessagesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsJobsMessagesListPathParams)
    ], DataflowProjectsJobsMessagesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsJobsMessagesListQueryParams)
    ], DataflowProjectsJobsMessagesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DataflowProjectsJobsMessagesListSecurity)
    ], DataflowProjectsJobsMessagesListRequest.prototype, "security", void 0);
    return DataflowProjectsJobsMessagesListRequest;
}(SpeakeasyBase));
export { DataflowProjectsJobsMessagesListRequest };
var DataflowProjectsJobsMessagesListResponse = /** @class */ (function (_super) {
    __extends(DataflowProjectsJobsMessagesListResponse, _super);
    function DataflowProjectsJobsMessagesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DataflowProjectsJobsMessagesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListJobMessagesResponse)
    ], DataflowProjectsJobsMessagesListResponse.prototype, "listJobMessagesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DataflowProjectsJobsMessagesListResponse.prototype, "statusCode", void 0);
    return DataflowProjectsJobsMessagesListResponse;
}(SpeakeasyBase));
export { DataflowProjectsJobsMessagesListResponse };
