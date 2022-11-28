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
export var JobStatusStateEnum;
(function (JobStatusStateEnum) {
    JobStatusStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    JobStatusStateEnum["Pending"] = "PENDING";
    JobStatusStateEnum["SetupDone"] = "SETUP_DONE";
    JobStatusStateEnum["Running"] = "RUNNING";
    JobStatusStateEnum["CancelPending"] = "CANCEL_PENDING";
    JobStatusStateEnum["CancelStarted"] = "CANCEL_STARTED";
    JobStatusStateEnum["Cancelled"] = "CANCELLED";
    JobStatusStateEnum["Done"] = "DONE";
    JobStatusStateEnum["Error"] = "ERROR";
    JobStatusStateEnum["AttemptFailure"] = "ATTEMPT_FAILURE";
})(JobStatusStateEnum || (JobStatusStateEnum = {}));
export var JobStatusSubstateEnum;
(function (JobStatusSubstateEnum) {
    JobStatusSubstateEnum["Unspecified"] = "UNSPECIFIED";
    JobStatusSubstateEnum["Submitted"] = "SUBMITTED";
    JobStatusSubstateEnum["Queued"] = "QUEUED";
    JobStatusSubstateEnum["StaleStatus"] = "STALE_STATUS";
})(JobStatusSubstateEnum || (JobStatusSubstateEnum = {}));
// JobStatus
/**
 * Dataproc job status.
**/
var JobStatus = /** @class */ (function (_super) {
    __extends(JobStatus, _super);
    function JobStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=details" }),
        __metadata("design:type", String)
    ], JobStatus.prototype, "details", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], JobStatus.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stateStartTime" }),
        __metadata("design:type", String)
    ], JobStatus.prototype, "stateStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=substate" }),
        __metadata("design:type", String)
    ], JobStatus.prototype, "substate", void 0);
    return JobStatus;
}(SpeakeasyBase));
export { JobStatus };
