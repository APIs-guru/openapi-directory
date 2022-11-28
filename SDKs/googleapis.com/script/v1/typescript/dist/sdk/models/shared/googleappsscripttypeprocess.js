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
export var GoogleAppsScriptTypeProcessProcessStatusEnum;
(function (GoogleAppsScriptTypeProcessProcessStatusEnum) {
    GoogleAppsScriptTypeProcessProcessStatusEnum["ProcessStatusUnspecified"] = "PROCESS_STATUS_UNSPECIFIED";
    GoogleAppsScriptTypeProcessProcessStatusEnum["Running"] = "RUNNING";
    GoogleAppsScriptTypeProcessProcessStatusEnum["Paused"] = "PAUSED";
    GoogleAppsScriptTypeProcessProcessStatusEnum["Completed"] = "COMPLETED";
    GoogleAppsScriptTypeProcessProcessStatusEnum["Canceled"] = "CANCELED";
    GoogleAppsScriptTypeProcessProcessStatusEnum["Failed"] = "FAILED";
    GoogleAppsScriptTypeProcessProcessStatusEnum["TimedOut"] = "TIMED_OUT";
    GoogleAppsScriptTypeProcessProcessStatusEnum["Unknown"] = "UNKNOWN";
    GoogleAppsScriptTypeProcessProcessStatusEnum["Delayed"] = "DELAYED";
})(GoogleAppsScriptTypeProcessProcessStatusEnum || (GoogleAppsScriptTypeProcessProcessStatusEnum = {}));
export var GoogleAppsScriptTypeProcessProcessTypeEnum;
(function (GoogleAppsScriptTypeProcessProcessTypeEnum) {
    GoogleAppsScriptTypeProcessProcessTypeEnum["ProcessTypeUnspecified"] = "PROCESS_TYPE_UNSPECIFIED";
    GoogleAppsScriptTypeProcessProcessTypeEnum["AddOn"] = "ADD_ON";
    GoogleAppsScriptTypeProcessProcessTypeEnum["ExecutionApi"] = "EXECUTION_API";
    GoogleAppsScriptTypeProcessProcessTypeEnum["TimeDriven"] = "TIME_DRIVEN";
    GoogleAppsScriptTypeProcessProcessTypeEnum["Trigger"] = "TRIGGER";
    GoogleAppsScriptTypeProcessProcessTypeEnum["Webapp"] = "WEBAPP";
    GoogleAppsScriptTypeProcessProcessTypeEnum["Editor"] = "EDITOR";
    GoogleAppsScriptTypeProcessProcessTypeEnum["SimpleTrigger"] = "SIMPLE_TRIGGER";
    GoogleAppsScriptTypeProcessProcessTypeEnum["Menu"] = "MENU";
    GoogleAppsScriptTypeProcessProcessTypeEnum["BatchTask"] = "BATCH_TASK";
})(GoogleAppsScriptTypeProcessProcessTypeEnum || (GoogleAppsScriptTypeProcessProcessTypeEnum = {}));
export var GoogleAppsScriptTypeProcessUserAccessLevelEnum;
(function (GoogleAppsScriptTypeProcessUserAccessLevelEnum) {
    GoogleAppsScriptTypeProcessUserAccessLevelEnum["UserAccessLevelUnspecified"] = "USER_ACCESS_LEVEL_UNSPECIFIED";
    GoogleAppsScriptTypeProcessUserAccessLevelEnum["None"] = "NONE";
    GoogleAppsScriptTypeProcessUserAccessLevelEnum["Read"] = "READ";
    GoogleAppsScriptTypeProcessUserAccessLevelEnum["Write"] = "WRITE";
    GoogleAppsScriptTypeProcessUserAccessLevelEnum["Owner"] = "OWNER";
})(GoogleAppsScriptTypeProcessUserAccessLevelEnum || (GoogleAppsScriptTypeProcessUserAccessLevelEnum = {}));
// GoogleAppsScriptTypeProcess
/**
 * Representation of a single script process execution that was started from the script editor, a trigger, an application, or using the Apps Script API. This is distinct from the `Operation` resource, which only represents executions started via the Apps Script API.
**/
var GoogleAppsScriptTypeProcess = /** @class */ (function (_super) {
    __extends(GoogleAppsScriptTypeProcess, _super);
    function GoogleAppsScriptTypeProcess() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration" }),
        __metadata("design:type", String)
    ], GoogleAppsScriptTypeProcess.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=functionName" }),
        __metadata("design:type", String)
    ], GoogleAppsScriptTypeProcess.prototype, "functionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=processStatus" }),
        __metadata("design:type", String)
    ], GoogleAppsScriptTypeProcess.prototype, "processStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=processType" }),
        __metadata("design:type", String)
    ], GoogleAppsScriptTypeProcess.prototype, "processType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectName" }),
        __metadata("design:type", String)
    ], GoogleAppsScriptTypeProcess.prototype, "projectName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], GoogleAppsScriptTypeProcess.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userAccessLevel" }),
        __metadata("design:type", String)
    ], GoogleAppsScriptTypeProcess.prototype, "userAccessLevel", void 0);
    return GoogleAppsScriptTypeProcess;
}(SpeakeasyBase));
export { GoogleAppsScriptTypeProcess };
