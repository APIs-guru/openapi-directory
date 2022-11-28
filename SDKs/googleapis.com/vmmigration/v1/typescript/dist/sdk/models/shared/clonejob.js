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
import { ComputeEngineTargetDetails } from "./computeenginetargetdetails";
import { Status } from "./status";
import { CloneStep } from "./clonestep";
export var CloneJobStateEnum;
(function (CloneJobStateEnum) {
    CloneJobStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    CloneJobStateEnum["Pending"] = "PENDING";
    CloneJobStateEnum["Active"] = "ACTIVE";
    CloneJobStateEnum["Failed"] = "FAILED";
    CloneJobStateEnum["Succeeded"] = "SUCCEEDED";
    CloneJobStateEnum["Cancelled"] = "CANCELLED";
    CloneJobStateEnum["Cancelling"] = "CANCELLING";
    CloneJobStateEnum["AdaptingOs"] = "ADAPTING_OS";
})(CloneJobStateEnum || (CloneJobStateEnum = {}));
// CloneJob
/**
 * CloneJob describes the process of creating a clone of a MigratingVM to the requested target based on the latest successful uploaded snapshots. While the migration cycles of a MigratingVm take place, it is possible to verify the uploaded VM can be started in the cloud, by creating a clone. The clone can be created without any downtime, and it is created using the latest snapshots which are already in the cloud. The cloneJob is only responsible for its work, not its products, which means once it is finished, it will never touch the instance it created. It will only delete it in case of the CloneJob being cancelled or upon failure to clone.
**/
var CloneJob = /** @class */ (function (_super) {
    __extends(CloneJob, _super);
    function CloneJob() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=computeEngineTargetDetails" }),
        __metadata("design:type", ComputeEngineTargetDetails)
    ], CloneJob.prototype, "computeEngineTargetDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], CloneJob.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], CloneJob.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", Status)
    ], CloneJob.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CloneJob.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], CloneJob.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stateTime" }),
        __metadata("design:type", String)
    ], CloneJob.prototype, "stateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=steps", elemType: CloneStep }),
        __metadata("design:type", Array)
    ], CloneJob.prototype, "steps", void 0);
    return CloneJob;
}(SpeakeasyBase));
export { CloneJob };
// CloneJobInput
/**
 * CloneJob describes the process of creating a clone of a MigratingVM to the requested target based on the latest successful uploaded snapshots. While the migration cycles of a MigratingVm take place, it is possible to verify the uploaded VM can be started in the cloud, by creating a clone. The clone can be created without any downtime, and it is created using the latest snapshots which are already in the cloud. The cloneJob is only responsible for its work, not its products, which means once it is finished, it will never touch the instance it created. It will only delete it in case of the CloneJob being cancelled or upon failure to clone.
**/
var CloneJobInput = /** @class */ (function (_super) {
    __extends(CloneJobInput, _super);
    function CloneJobInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=computeEngineTargetDetails" }),
        __metadata("design:type", ComputeEngineTargetDetails)
    ], CloneJobInput.prototype, "computeEngineTargetDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", Status)
    ], CloneJobInput.prototype, "error", void 0);
    return CloneJobInput;
}(SpeakeasyBase));
export { CloneJobInput };
