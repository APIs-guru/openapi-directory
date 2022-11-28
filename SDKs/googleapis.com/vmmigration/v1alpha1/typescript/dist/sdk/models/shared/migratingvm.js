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
import { AwsSourceVmDetails } from "./awssourcevmdetails";
import { ComputeEngineTargetDefaultsInput } from "./computeenginetargetdefaults";
import { TargetVmDetailsInput } from "./targetvmdetails";
import { ReplicationCycle } from "./replicationcycle";
import { Status } from "./status";
import { ReplicationSync } from "./replicationsync";
import { SchedulePolicy } from "./schedulepolicy";
import { ComputeEngineTargetDefaults } from "./computeenginetargetdefaults";
import { TargetVmDetails } from "./targetvmdetails";
import { CloneJob } from "./clonejob";
import { CutoverJob } from "./cutoverjob";
export var MigratingVmStateEnum;
(function (MigratingVmStateEnum) {
    MigratingVmStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    MigratingVmStateEnum["Pending"] = "PENDING";
    MigratingVmStateEnum["Ready"] = "READY";
    MigratingVmStateEnum["FirstSync"] = "FIRST_SYNC";
    MigratingVmStateEnum["Active"] = "ACTIVE";
    MigratingVmStateEnum["CuttingOver"] = "CUTTING_OVER";
    MigratingVmStateEnum["Cutover"] = "CUTOVER";
    MigratingVmStateEnum["FinalSync"] = "FINAL_SYNC";
    MigratingVmStateEnum["Paused"] = "PAUSED";
    MigratingVmStateEnum["Finalizing"] = "FINALIZING";
    MigratingVmStateEnum["Finalized"] = "FINALIZED";
    MigratingVmStateEnum["Error"] = "ERROR";
})(MigratingVmStateEnum || (MigratingVmStateEnum = {}));
// MigratingVmInput
/**
 * MigratingVm describes the VM that will be migrated from a Source environment and its replication state.
**/
var MigratingVmInput = /** @class */ (function (_super) {
    __extends(MigratingVmInput, _super);
    function MigratingVmInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awsSourceVmDetails" }),
        __metadata("design:type", AwsSourceVmDetails)
    ], MigratingVmInput.prototype, "awsSourceVmDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=computeEngineTargetDefaults" }),
        __metadata("design:type", ComputeEngineTargetDefaultsInput)
    ], MigratingVmInput.prototype, "computeEngineTargetDefaults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=computeEngineVmDefaults" }),
        __metadata("design:type", TargetVmDetailsInput)
    ], MigratingVmInput.prototype, "computeEngineVmDefaults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentSyncInfo" }),
        __metadata("design:type", ReplicationCycle)
    ], MigratingVmInput.prototype, "currentSyncInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], MigratingVmInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], MigratingVmInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", Status)
    ], MigratingVmInput.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], MigratingVmInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastSync" }),
        __metadata("design:type", ReplicationSync)
    ], MigratingVmInput.prototype, "lastSync", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policy" }),
        __metadata("design:type", SchedulePolicy)
    ], MigratingVmInput.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceVmId" }),
        __metadata("design:type", String)
    ], MigratingVmInput.prototype, "sourceVmId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetDefaults" }),
        __metadata("design:type", TargetVmDetailsInput)
    ], MigratingVmInput.prototype, "targetDefaults", void 0);
    return MigratingVmInput;
}(SpeakeasyBase));
export { MigratingVmInput };
// MigratingVm
/**
 * MigratingVm describes the VM that will be migrated from a Source environment and its replication state.
**/
var MigratingVm = /** @class */ (function (_super) {
    __extends(MigratingVm, _super);
    function MigratingVm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awsSourceVmDetails" }),
        __metadata("design:type", AwsSourceVmDetails)
    ], MigratingVm.prototype, "awsSourceVmDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=computeEngineTargetDefaults" }),
        __metadata("design:type", ComputeEngineTargetDefaults)
    ], MigratingVm.prototype, "computeEngineTargetDefaults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=computeEngineVmDefaults" }),
        __metadata("design:type", TargetVmDetails)
    ], MigratingVm.prototype, "computeEngineVmDefaults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], MigratingVm.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentSyncInfo" }),
        __metadata("design:type", ReplicationCycle)
    ], MigratingVm.prototype, "currentSyncInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], MigratingVm.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], MigratingVm.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", Status)
    ], MigratingVm.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group" }),
        __metadata("design:type", String)
    ], MigratingVm.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], MigratingVm.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastSync" }),
        __metadata("design:type", ReplicationSync)
    ], MigratingVm.prototype, "lastSync", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], MigratingVm.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policy" }),
        __metadata("design:type", SchedulePolicy)
    ], MigratingVm.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recentCloneJobs", elemType: CloneJob }),
        __metadata("design:type", Array)
    ], MigratingVm.prototype, "recentCloneJobs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recentCutoverJobs", elemType: CutoverJob }),
        __metadata("design:type", Array)
    ], MigratingVm.prototype, "recentCutoverJobs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceVmId" }),
        __metadata("design:type", String)
    ], MigratingVm.prototype, "sourceVmId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], MigratingVm.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stateTime" }),
        __metadata("design:type", String)
    ], MigratingVm.prototype, "stateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetDefaults" }),
        __metadata("design:type", TargetVmDetails)
    ], MigratingVm.prototype, "targetDefaults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], MigratingVm.prototype, "updateTime", void 0);
    return MigratingVm;
}(SpeakeasyBase));
export { MigratingVm };
