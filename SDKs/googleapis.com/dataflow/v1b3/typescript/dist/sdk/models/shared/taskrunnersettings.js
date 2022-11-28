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
import { WorkerSettings } from "./workersettings";
// TaskRunnerSettings
/**
 * Taskrunner configuration settings.
**/
var TaskRunnerSettings = /** @class */ (function (_super) {
    __extends(TaskRunnerSettings, _super);
    function TaskRunnerSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alsologtostderr" }),
        __metadata("design:type", Boolean)
    ], TaskRunnerSettings.prototype, "alsologtostderr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=baseTaskDir" }),
        __metadata("design:type", String)
    ], TaskRunnerSettings.prototype, "baseTaskDir", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=baseUrl" }),
        __metadata("design:type", String)
    ], TaskRunnerSettings.prototype, "baseUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commandlinesFileName" }),
        __metadata("design:type", String)
    ], TaskRunnerSettings.prototype, "commandlinesFileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=continueOnException" }),
        __metadata("design:type", Boolean)
    ], TaskRunnerSettings.prototype, "continueOnException", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataflowApiVersion" }),
        __metadata("design:type", String)
    ], TaskRunnerSettings.prototype, "dataflowApiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=harnessCommand" }),
        __metadata("design:type", String)
    ], TaskRunnerSettings.prototype, "harnessCommand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageHint" }),
        __metadata("design:type", String)
    ], TaskRunnerSettings.prototype, "languageHint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logDir" }),
        __metadata("design:type", String)
    ], TaskRunnerSettings.prototype, "logDir", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logToSerialconsole" }),
        __metadata("design:type", Boolean)
    ], TaskRunnerSettings.prototype, "logToSerialconsole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logUploadLocation" }),
        __metadata("design:type", String)
    ], TaskRunnerSettings.prototype, "logUploadLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauthScopes" }),
        __metadata("design:type", Array)
    ], TaskRunnerSettings.prototype, "oauthScopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parallelWorkerSettings" }),
        __metadata("design:type", WorkerSettings)
    ], TaskRunnerSettings.prototype, "parallelWorkerSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=streamingWorkerMainClass" }),
        __metadata("design:type", String)
    ], TaskRunnerSettings.prototype, "streamingWorkerMainClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskGroup" }),
        __metadata("design:type", String)
    ], TaskRunnerSettings.prototype, "taskGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskUser" }),
        __metadata("design:type", String)
    ], TaskRunnerSettings.prototype, "taskUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tempStoragePrefix" }),
        __metadata("design:type", String)
    ], TaskRunnerSettings.prototype, "tempStoragePrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmId" }),
        __metadata("design:type", String)
    ], TaskRunnerSettings.prototype, "vmId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workflowFileName" }),
        __metadata("design:type", String)
    ], TaskRunnerSettings.prototype, "workflowFileName", void 0);
    return TaskRunnerSettings;
}(SpeakeasyBase));
export { TaskRunnerSettings };
