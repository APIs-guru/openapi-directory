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
import { Error } from "./error";
export var BackfillJobStateEnum;
(function (BackfillJobStateEnum) {
    BackfillJobStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    BackfillJobStateEnum["NotStarted"] = "NOT_STARTED";
    BackfillJobStateEnum["Pending"] = "PENDING";
    BackfillJobStateEnum["Active"] = "ACTIVE";
    BackfillJobStateEnum["Stopped"] = "STOPPED";
    BackfillJobStateEnum["Failed"] = "FAILED";
    BackfillJobStateEnum["Completed"] = "COMPLETED";
    BackfillJobStateEnum["Unsupported"] = "UNSUPPORTED";
})(BackfillJobStateEnum || (BackfillJobStateEnum = {}));
export var BackfillJobTriggerEnum;
(function (BackfillJobTriggerEnum) {
    BackfillJobTriggerEnum["TriggerUnspecified"] = "TRIGGER_UNSPECIFIED";
    BackfillJobTriggerEnum["Automatic"] = "AUTOMATIC";
    BackfillJobTriggerEnum["Manual"] = "MANUAL";
})(BackfillJobTriggerEnum || (BackfillJobTriggerEnum = {}));
// BackfillJob
/**
 * Represents a backfill job on a specific stream object.
**/
var BackfillJob = /** @class */ (function (_super) {
    __extends(BackfillJob, _super);
    function BackfillJob() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: Error }),
        __metadata("design:type", Array)
    ], BackfillJob.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastEndTime" }),
        __metadata("design:type", String)
    ], BackfillJob.prototype, "lastEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastStartTime" }),
        __metadata("design:type", String)
    ], BackfillJob.prototype, "lastStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], BackfillJob.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trigger" }),
        __metadata("design:type", String)
    ], BackfillJob.prototype, "trigger", void 0);
    return BackfillJob;
}(SpeakeasyBase));
export { BackfillJob };
