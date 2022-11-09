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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AppEngineHttpTarget } from "./appenginehttptarget";
import { HttpTarget } from "./httptarget";
import { PubsubTarget } from "./pubsubtarget";
import { RetryConfig } from "./retryconfig";
import { Status } from "./status";
export var JobStateEnum;
(function (JobStateEnum) {
    JobStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    JobStateEnum["Enabled"] = "ENABLED";
    JobStateEnum["Paused"] = "PAUSED";
    JobStateEnum["Disabled"] = "DISABLED";
    JobStateEnum["UpdateFailed"] = "UPDATE_FAILED";
})(JobStateEnum || (JobStateEnum = {}));
// Job
/**
 * Configuration for a job. The maximum allowed size for a job is 1MB.
**/
var Job = /** @class */ (function (_super) {
    __extends(Job, _super);
    function Job() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=appEngineHttpTarget" }),
        __metadata("design:type", AppEngineHttpTarget)
    ], Job.prototype, "appEngineHttpTarget", void 0);
    __decorate([
        Metadata({ data: "json, name=attemptDeadline" }),
        __metadata("design:type", String)
    ], Job.prototype, "attemptDeadline", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Job.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=httpTarget" }),
        __metadata("design:type", HttpTarget)
    ], Job.prototype, "httpTarget", void 0);
    __decorate([
        Metadata({ data: "json, name=lastAttemptTime" }),
        __metadata("design:type", String)
    ], Job.prototype, "lastAttemptTime", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Job.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=pubsubTarget" }),
        __metadata("design:type", PubsubTarget)
    ], Job.prototype, "pubsubTarget", void 0);
    __decorate([
        Metadata({ data: "json, name=retryConfig" }),
        __metadata("design:type", RetryConfig)
    ], Job.prototype, "retryConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=schedule" }),
        __metadata("design:type", String)
    ], Job.prototype, "schedule", void 0);
    __decorate([
        Metadata({ data: "json, name=scheduleTime" }),
        __metadata("design:type", String)
    ], Job.prototype, "scheduleTime", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Job.prototype, "state", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", Status)
    ], Job.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=timeZone" }),
        __metadata("design:type", String)
    ], Job.prototype, "timeZone", void 0);
    __decorate([
        Metadata({ data: "json, name=userUpdateTime" }),
        __metadata("design:type", String)
    ], Job.prototype, "userUpdateTime", void 0);
    return Job;
}(SpeakeasyBase));
export { Job };
