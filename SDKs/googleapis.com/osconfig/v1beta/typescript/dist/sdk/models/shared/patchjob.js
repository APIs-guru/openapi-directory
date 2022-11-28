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
import { PatchJobInstanceDetailsSummary } from "./patchjobinstancedetailssummary";
import { PatchInstanceFilter } from "./patchinstancefilter";
import { PatchConfig } from "./patchconfig";
import { PatchRollout } from "./patchrollout";
export var PatchJobStateEnum;
(function (PatchJobStateEnum) {
    PatchJobStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    PatchJobStateEnum["Started"] = "STARTED";
    PatchJobStateEnum["InstanceLookup"] = "INSTANCE_LOOKUP";
    PatchJobStateEnum["Patching"] = "PATCHING";
    PatchJobStateEnum["Succeeded"] = "SUCCEEDED";
    PatchJobStateEnum["CompletedWithErrors"] = "COMPLETED_WITH_ERRORS";
    PatchJobStateEnum["Canceled"] = "CANCELED";
    PatchJobStateEnum["TimedOut"] = "TIMED_OUT";
})(PatchJobStateEnum || (PatchJobStateEnum = {}));
// PatchJob
/**
 * A high level representation of a patch job that is either in progress or has completed. Instance details are not included in the job. To paginate through instance details, use `ListPatchJobInstanceDetails`. For more information about patch jobs, see [Creating patch jobs](https://cloud.google.com/compute/docs/os-patch-management/create-patch-job).
**/
var PatchJob = /** @class */ (function (_super) {
    __extends(PatchJob, _super);
    function PatchJob() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], PatchJob.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PatchJob.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], PatchJob.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dryRun" }),
        __metadata("design:type", Boolean)
    ], PatchJob.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration" }),
        __metadata("design:type", String)
    ], PatchJob.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessage" }),
        __metadata("design:type", String)
    ], PatchJob.prototype, "errorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceDetailsSummary" }),
        __metadata("design:type", PatchJobInstanceDetailsSummary)
    ], PatchJob.prototype, "instanceDetailsSummary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceFilter" }),
        __metadata("design:type", PatchInstanceFilter)
    ], PatchJob.prototype, "instanceFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PatchJob.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=patchConfig" }),
        __metadata("design:type", PatchConfig)
    ], PatchJob.prototype, "patchConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=patchDeployment" }),
        __metadata("design:type", String)
    ], PatchJob.prototype, "patchDeployment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percentComplete" }),
        __metadata("design:type", Number)
    ], PatchJob.prototype, "percentComplete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rollout" }),
        __metadata("design:type", PatchRollout)
    ], PatchJob.prototype, "rollout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], PatchJob.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], PatchJob.prototype, "updateTime", void 0);
    return PatchJob;
}(SpeakeasyBase));
export { PatchJob };
