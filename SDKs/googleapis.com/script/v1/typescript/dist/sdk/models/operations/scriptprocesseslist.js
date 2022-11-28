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
export var ScriptProcessesListUserProcessFilterStatusesEnum;
(function (ScriptProcessesListUserProcessFilterStatusesEnum) {
    ScriptProcessesListUserProcessFilterStatusesEnum["ProcessStatusUnspecified"] = "PROCESS_STATUS_UNSPECIFIED";
    ScriptProcessesListUserProcessFilterStatusesEnum["Running"] = "RUNNING";
    ScriptProcessesListUserProcessFilterStatusesEnum["Paused"] = "PAUSED";
    ScriptProcessesListUserProcessFilterStatusesEnum["Completed"] = "COMPLETED";
    ScriptProcessesListUserProcessFilterStatusesEnum["Canceled"] = "CANCELED";
    ScriptProcessesListUserProcessFilterStatusesEnum["Failed"] = "FAILED";
    ScriptProcessesListUserProcessFilterStatusesEnum["TimedOut"] = "TIMED_OUT";
    ScriptProcessesListUserProcessFilterStatusesEnum["Unknown"] = "UNKNOWN";
    ScriptProcessesListUserProcessFilterStatusesEnum["Delayed"] = "DELAYED";
})(ScriptProcessesListUserProcessFilterStatusesEnum || (ScriptProcessesListUserProcessFilterStatusesEnum = {}));
export var ScriptProcessesListUserProcessFilterTypesEnum;
(function (ScriptProcessesListUserProcessFilterTypesEnum) {
    ScriptProcessesListUserProcessFilterTypesEnum["ProcessTypeUnspecified"] = "PROCESS_TYPE_UNSPECIFIED";
    ScriptProcessesListUserProcessFilterTypesEnum["AddOn"] = "ADD_ON";
    ScriptProcessesListUserProcessFilterTypesEnum["ExecutionApi"] = "EXECUTION_API";
    ScriptProcessesListUserProcessFilterTypesEnum["TimeDriven"] = "TIME_DRIVEN";
    ScriptProcessesListUserProcessFilterTypesEnum["Trigger"] = "TRIGGER";
    ScriptProcessesListUserProcessFilterTypesEnum["Webapp"] = "WEBAPP";
    ScriptProcessesListUserProcessFilterTypesEnum["Editor"] = "EDITOR";
    ScriptProcessesListUserProcessFilterTypesEnum["SimpleTrigger"] = "SIMPLE_TRIGGER";
    ScriptProcessesListUserProcessFilterTypesEnum["Menu"] = "MENU";
    ScriptProcessesListUserProcessFilterTypesEnum["BatchTask"] = "BATCH_TASK";
})(ScriptProcessesListUserProcessFilterTypesEnum || (ScriptProcessesListUserProcessFilterTypesEnum = {}));
export var ScriptProcessesListUserProcessFilterUserAccessLevelsEnum;
(function (ScriptProcessesListUserProcessFilterUserAccessLevelsEnum) {
    ScriptProcessesListUserProcessFilterUserAccessLevelsEnum["UserAccessLevelUnspecified"] = "USER_ACCESS_LEVEL_UNSPECIFIED";
    ScriptProcessesListUserProcessFilterUserAccessLevelsEnum["None"] = "NONE";
    ScriptProcessesListUserProcessFilterUserAccessLevelsEnum["Read"] = "READ";
    ScriptProcessesListUserProcessFilterUserAccessLevelsEnum["Write"] = "WRITE";
    ScriptProcessesListUserProcessFilterUserAccessLevelsEnum["Owner"] = "OWNER";
})(ScriptProcessesListUserProcessFilterUserAccessLevelsEnum || (ScriptProcessesListUserProcessFilterUserAccessLevelsEnum = {}));
var ScriptProcessesListQueryParams = /** @class */ (function (_super) {
    __extends(ScriptProcessesListQueryParams, _super);
    function ScriptProcessesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ScriptProcessesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ScriptProcessesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ScriptProcessesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ScriptProcessesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ScriptProcessesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ScriptProcessesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ScriptProcessesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ScriptProcessesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ScriptProcessesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ScriptProcessesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ScriptProcessesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ScriptProcessesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ScriptProcessesListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProcessFilter.deploymentId" }),
        __metadata("design:type", String)
    ], ScriptProcessesListQueryParams.prototype, "userProcessFilterDeploymentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProcessFilter.endTime" }),
        __metadata("design:type", String)
    ], ScriptProcessesListQueryParams.prototype, "userProcessFilterEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProcessFilter.functionName" }),
        __metadata("design:type", String)
    ], ScriptProcessesListQueryParams.prototype, "userProcessFilterFunctionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProcessFilter.projectName" }),
        __metadata("design:type", String)
    ], ScriptProcessesListQueryParams.prototype, "userProcessFilterProjectName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProcessFilter.scriptId" }),
        __metadata("design:type", String)
    ], ScriptProcessesListQueryParams.prototype, "userProcessFilterScriptId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProcessFilter.startTime" }),
        __metadata("design:type", String)
    ], ScriptProcessesListQueryParams.prototype, "userProcessFilterStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProcessFilter.statuses" }),
        __metadata("design:type", Array)
    ], ScriptProcessesListQueryParams.prototype, "userProcessFilterStatuses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProcessFilter.types" }),
        __metadata("design:type", Array)
    ], ScriptProcessesListQueryParams.prototype, "userProcessFilterTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProcessFilter.userAccessLevels" }),
        __metadata("design:type", Array)
    ], ScriptProcessesListQueryParams.prototype, "userProcessFilterUserAccessLevels", void 0);
    return ScriptProcessesListQueryParams;
}(SpeakeasyBase));
export { ScriptProcessesListQueryParams };
var ScriptProcessesListSecurity = /** @class */ (function (_super) {
    __extends(ScriptProcessesListSecurity, _super);
    function ScriptProcessesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ScriptProcessesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ScriptProcessesListSecurity.prototype, "oauth2c", void 0);
    return ScriptProcessesListSecurity;
}(SpeakeasyBase));
export { ScriptProcessesListSecurity };
var ScriptProcessesListRequest = /** @class */ (function (_super) {
    __extends(ScriptProcessesListRequest, _super);
    function ScriptProcessesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ScriptProcessesListQueryParams)
    ], ScriptProcessesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ScriptProcessesListSecurity)
    ], ScriptProcessesListRequest.prototype, "security", void 0);
    return ScriptProcessesListRequest;
}(SpeakeasyBase));
export { ScriptProcessesListRequest };
var ScriptProcessesListResponse = /** @class */ (function (_super) {
    __extends(ScriptProcessesListResponse, _super);
    function ScriptProcessesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ScriptProcessesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListUserProcessesResponse)
    ], ScriptProcessesListResponse.prototype, "listUserProcessesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ScriptProcessesListResponse.prototype, "statusCode", void 0);
    return ScriptProcessesListResponse;
}(SpeakeasyBase));
export { ScriptProcessesListResponse };
