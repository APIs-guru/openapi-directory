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
export var ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum;
(function (ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum) {
    ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum["ProcessStatusUnspecified"] = "PROCESS_STATUS_UNSPECIFIED";
    ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum["Running"] = "RUNNING";
    ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum["Paused"] = "PAUSED";
    ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum["Completed"] = "COMPLETED";
    ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum["Canceled"] = "CANCELED";
    ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum["Failed"] = "FAILED";
    ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum["TimedOut"] = "TIMED_OUT";
    ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum["Unknown"] = "UNKNOWN";
    ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum["Delayed"] = "DELAYED";
})(ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum || (ScriptProcessesListScriptProcessesScriptProcessFilterStatusesEnum = {}));
export var ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum;
(function (ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum) {
    ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum["ProcessTypeUnspecified"] = "PROCESS_TYPE_UNSPECIFIED";
    ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum["AddOn"] = "ADD_ON";
    ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum["ExecutionApi"] = "EXECUTION_API";
    ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum["TimeDriven"] = "TIME_DRIVEN";
    ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum["Trigger"] = "TRIGGER";
    ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum["Webapp"] = "WEBAPP";
    ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum["Editor"] = "EDITOR";
    ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum["SimpleTrigger"] = "SIMPLE_TRIGGER";
    ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum["Menu"] = "MENU";
    ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum["BatchTask"] = "BATCH_TASK";
})(ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum || (ScriptProcessesListScriptProcessesScriptProcessFilterTypesEnum = {}));
export var ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnum;
(function (ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnum) {
    ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnum["UserAccessLevelUnspecified"] = "USER_ACCESS_LEVEL_UNSPECIFIED";
    ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnum["None"] = "NONE";
    ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnum["Read"] = "READ";
    ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnum["Write"] = "WRITE";
    ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnum["Owner"] = "OWNER";
})(ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnum || (ScriptProcessesListScriptProcessesScriptProcessFilterUserAccessLevelsEnum = {}));
var ScriptProcessesListScriptProcessesQueryParams = /** @class */ (function (_super) {
    __extends(ScriptProcessesListScriptProcessesQueryParams, _super);
    function ScriptProcessesListScriptProcessesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ScriptProcessesListScriptProcessesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ScriptProcessesListScriptProcessesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ScriptProcessesListScriptProcessesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ScriptProcessesListScriptProcessesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ScriptProcessesListScriptProcessesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ScriptProcessesListScriptProcessesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ScriptProcessesListScriptProcessesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ScriptProcessesListScriptProcessesQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ScriptProcessesListScriptProcessesQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ScriptProcessesListScriptProcessesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ScriptProcessesListScriptProcessesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scriptId" }),
        __metadata("design:type", String)
    ], ScriptProcessesListScriptProcessesQueryParams.prototype, "scriptId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scriptProcessFilter.deploymentId" }),
        __metadata("design:type", String)
    ], ScriptProcessesListScriptProcessesQueryParams.prototype, "scriptProcessFilterDeploymentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scriptProcessFilter.endTime" }),
        __metadata("design:type", String)
    ], ScriptProcessesListScriptProcessesQueryParams.prototype, "scriptProcessFilterEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scriptProcessFilter.functionName" }),
        __metadata("design:type", String)
    ], ScriptProcessesListScriptProcessesQueryParams.prototype, "scriptProcessFilterFunctionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scriptProcessFilter.startTime" }),
        __metadata("design:type", String)
    ], ScriptProcessesListScriptProcessesQueryParams.prototype, "scriptProcessFilterStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scriptProcessFilter.statuses" }),
        __metadata("design:type", Array)
    ], ScriptProcessesListScriptProcessesQueryParams.prototype, "scriptProcessFilterStatuses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scriptProcessFilter.types" }),
        __metadata("design:type", Array)
    ], ScriptProcessesListScriptProcessesQueryParams.prototype, "scriptProcessFilterTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scriptProcessFilter.userAccessLevels" }),
        __metadata("design:type", Array)
    ], ScriptProcessesListScriptProcessesQueryParams.prototype, "scriptProcessFilterUserAccessLevels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ScriptProcessesListScriptProcessesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ScriptProcessesListScriptProcessesQueryParams.prototype, "uploadProtocol", void 0);
    return ScriptProcessesListScriptProcessesQueryParams;
}(SpeakeasyBase));
export { ScriptProcessesListScriptProcessesQueryParams };
var ScriptProcessesListScriptProcessesSecurity = /** @class */ (function (_super) {
    __extends(ScriptProcessesListScriptProcessesSecurity, _super);
    function ScriptProcessesListScriptProcessesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ScriptProcessesListScriptProcessesSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ScriptProcessesListScriptProcessesSecurity.prototype, "oauth2c", void 0);
    return ScriptProcessesListScriptProcessesSecurity;
}(SpeakeasyBase));
export { ScriptProcessesListScriptProcessesSecurity };
var ScriptProcessesListScriptProcessesRequest = /** @class */ (function (_super) {
    __extends(ScriptProcessesListScriptProcessesRequest, _super);
    function ScriptProcessesListScriptProcessesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ScriptProcessesListScriptProcessesQueryParams)
    ], ScriptProcessesListScriptProcessesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ScriptProcessesListScriptProcessesSecurity)
    ], ScriptProcessesListScriptProcessesRequest.prototype, "security", void 0);
    return ScriptProcessesListScriptProcessesRequest;
}(SpeakeasyBase));
export { ScriptProcessesListScriptProcessesRequest };
var ScriptProcessesListScriptProcessesResponse = /** @class */ (function (_super) {
    __extends(ScriptProcessesListScriptProcessesResponse, _super);
    function ScriptProcessesListScriptProcessesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ScriptProcessesListScriptProcessesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListScriptProcessesResponse)
    ], ScriptProcessesListScriptProcessesResponse.prototype, "listScriptProcessesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ScriptProcessesListScriptProcessesResponse.prototype, "statusCode", void 0);
    return ScriptProcessesListScriptProcessesResponse;
}(SpeakeasyBase));
export { ScriptProcessesListScriptProcessesResponse };
