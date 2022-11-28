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
import { DatabaseType } from "./databasetype";
import { DumpFlags } from "./dumpflags";
import { Status } from "./status";
import { ReverseSshConnectivity } from "./reversesshconnectivity";
import { VpcPeeringConnectivity } from "./vpcpeeringconnectivity";
export var MigrationJobStateEnum;
(function (MigrationJobStateEnum) {
    MigrationJobStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    MigrationJobStateEnum["Maintenance"] = "MAINTENANCE";
    MigrationJobStateEnum["Draft"] = "DRAFT";
    MigrationJobStateEnum["Creating"] = "CREATING";
    MigrationJobStateEnum["NotStarted"] = "NOT_STARTED";
    MigrationJobStateEnum["Running"] = "RUNNING";
    MigrationJobStateEnum["Failed"] = "FAILED";
    MigrationJobStateEnum["Completed"] = "COMPLETED";
    MigrationJobStateEnum["Deleting"] = "DELETING";
    MigrationJobStateEnum["Stopping"] = "STOPPING";
    MigrationJobStateEnum["Stopped"] = "STOPPED";
    MigrationJobStateEnum["Deleted"] = "DELETED";
    MigrationJobStateEnum["Updating"] = "UPDATING";
    MigrationJobStateEnum["Starting"] = "STARTING";
    MigrationJobStateEnum["Restarting"] = "RESTARTING";
    MigrationJobStateEnum["Resuming"] = "RESUMING";
})(MigrationJobStateEnum || (MigrationJobStateEnum = {}));
export var MigrationJobTypeEnum;
(function (MigrationJobTypeEnum) {
    MigrationJobTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    MigrationJobTypeEnum["OneTime"] = "ONE_TIME";
    MigrationJobTypeEnum["Continuous"] = "CONTINUOUS";
})(MigrationJobTypeEnum || (MigrationJobTypeEnum = {}));
export var MigrationJobPhaseEnum;
(function (MigrationJobPhaseEnum) {
    MigrationJobPhaseEnum["PhaseUnspecified"] = "PHASE_UNSPECIFIED";
    MigrationJobPhaseEnum["FullDump"] = "FULL_DUMP";
    MigrationJobPhaseEnum["Cdc"] = "CDC";
    MigrationJobPhaseEnum["PromoteInProgress"] = "PROMOTE_IN_PROGRESS";
    MigrationJobPhaseEnum["WaitingForSourceWritesToStop"] = "WAITING_FOR_SOURCE_WRITES_TO_STOP";
    MigrationJobPhaseEnum["PreparingTheDump"] = "PREPARING_THE_DUMP";
})(MigrationJobPhaseEnum || (MigrationJobPhaseEnum = {}));
// MigrationJobInput
/**
 * Represents a Database Migration Service migration job object.
**/
var MigrationJobInput = /** @class */ (function (_super) {
    __extends(MigrationJobInput, _super);
    function MigrationJobInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination" }),
        __metadata("design:type", String)
    ], MigrationJobInput.prototype, "destination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationDatabase" }),
        __metadata("design:type", DatabaseType)
    ], MigrationJobInput.prototype, "destinationDatabase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], MigrationJobInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dumpFlags" }),
        __metadata("design:type", DumpFlags)
    ], MigrationJobInput.prototype, "dumpFlags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dumpPath" }),
        __metadata("design:type", String)
    ], MigrationJobInput.prototype, "dumpPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", Status)
    ], MigrationJobInput.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], MigrationJobInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], MigrationJobInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reverseSshConnectivity" }),
        __metadata("design:type", ReverseSshConnectivity)
    ], MigrationJobInput.prototype, "reverseSshConnectivity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], MigrationJobInput.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceDatabase" }),
        __metadata("design:type", DatabaseType)
    ], MigrationJobInput.prototype, "sourceDatabase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], MigrationJobInput.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=staticIpConnectivity" }),
        __metadata("design:type", Map)
    ], MigrationJobInput.prototype, "staticIpConnectivity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], MigrationJobInput.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vpcPeeringConnectivity" }),
        __metadata("design:type", VpcPeeringConnectivity)
    ], MigrationJobInput.prototype, "vpcPeeringConnectivity", void 0);
    return MigrationJobInput;
}(SpeakeasyBase));
export { MigrationJobInput };
// MigrationJob
/**
 * Represents a Database Migration Service migration job object.
**/
var MigrationJob = /** @class */ (function (_super) {
    __extends(MigrationJob, _super);
    function MigrationJob() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], MigrationJob.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination" }),
        __metadata("design:type", String)
    ], MigrationJob.prototype, "destination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationDatabase" }),
        __metadata("design:type", DatabaseType)
    ], MigrationJob.prototype, "destinationDatabase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], MigrationJob.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dumpFlags" }),
        __metadata("design:type", DumpFlags)
    ], MigrationJob.prototype, "dumpFlags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dumpPath" }),
        __metadata("design:type", String)
    ], MigrationJob.prototype, "dumpPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration" }),
        __metadata("design:type", String)
    ], MigrationJob.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], MigrationJob.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", Status)
    ], MigrationJob.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], MigrationJob.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], MigrationJob.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phase" }),
        __metadata("design:type", String)
    ], MigrationJob.prototype, "phase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reverseSshConnectivity" }),
        __metadata("design:type", ReverseSshConnectivity)
    ], MigrationJob.prototype, "reverseSshConnectivity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], MigrationJob.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceDatabase" }),
        __metadata("design:type", DatabaseType)
    ], MigrationJob.prototype, "sourceDatabase", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], MigrationJob.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=staticIpConnectivity" }),
        __metadata("design:type", Map)
    ], MigrationJob.prototype, "staticIpConnectivity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], MigrationJob.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], MigrationJob.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vpcPeeringConnectivity" }),
        __metadata("design:type", VpcPeeringConnectivity)
    ], MigrationJob.prototype, "vpcPeeringConnectivity", void 0);
    return MigrationJob;
}(SpeakeasyBase));
export { MigrationJob };
