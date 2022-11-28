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
import { PatchInstanceFilter } from "./patchinstancefilter";
import { OneTimeSchedule } from "./onetimeschedule";
import { PatchConfig } from "./patchconfig";
import { RecurringSchedule } from "./recurringschedule";
import { PatchRollout } from "./patchrollout";
import { RecurringScheduleInput } from "./recurringschedule";
export var PatchDeploymentStateEnum;
(function (PatchDeploymentStateEnum) {
    PatchDeploymentStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    PatchDeploymentStateEnum["Active"] = "ACTIVE";
    PatchDeploymentStateEnum["Paused"] = "PAUSED";
})(PatchDeploymentStateEnum || (PatchDeploymentStateEnum = {}));
// PatchDeployment
/**
 * Patch deployments are configurations that individual patch jobs use to complete a patch. These configurations include instance filter, package repository settings, and a schedule. For more information about creating and managing patch deployments, see [Scheduling patch jobs](https://cloud.google.com/compute/docs/os-patch-management/schedule-patch-jobs).
**/
var PatchDeployment = /** @class */ (function (_super) {
    __extends(PatchDeployment, _super);
    function PatchDeployment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], PatchDeployment.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PatchDeployment.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration" }),
        __metadata("design:type", String)
    ], PatchDeployment.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceFilter" }),
        __metadata("design:type", PatchInstanceFilter)
    ], PatchDeployment.prototype, "instanceFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastExecuteTime" }),
        __metadata("design:type", String)
    ], PatchDeployment.prototype, "lastExecuteTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PatchDeployment.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oneTimeSchedule" }),
        __metadata("design:type", OneTimeSchedule)
    ], PatchDeployment.prototype, "oneTimeSchedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=patchConfig" }),
        __metadata("design:type", PatchConfig)
    ], PatchDeployment.prototype, "patchConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recurringSchedule" }),
        __metadata("design:type", RecurringSchedule)
    ], PatchDeployment.prototype, "recurringSchedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rollout" }),
        __metadata("design:type", PatchRollout)
    ], PatchDeployment.prototype, "rollout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], PatchDeployment.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], PatchDeployment.prototype, "updateTime", void 0);
    return PatchDeployment;
}(SpeakeasyBase));
export { PatchDeployment };
// PatchDeploymentInput
/**
 * Patch deployments are configurations that individual patch jobs use to complete a patch. These configurations include instance filter, package repository settings, and a schedule. For more information about creating and managing patch deployments, see [Scheduling patch jobs](https://cloud.google.com/compute/docs/os-patch-management/schedule-patch-jobs).
**/
var PatchDeploymentInput = /** @class */ (function (_super) {
    __extends(PatchDeploymentInput, _super);
    function PatchDeploymentInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PatchDeploymentInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration" }),
        __metadata("design:type", String)
    ], PatchDeploymentInput.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceFilter" }),
        __metadata("design:type", PatchInstanceFilter)
    ], PatchDeploymentInput.prototype, "instanceFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PatchDeploymentInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oneTimeSchedule" }),
        __metadata("design:type", OneTimeSchedule)
    ], PatchDeploymentInput.prototype, "oneTimeSchedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=patchConfig" }),
        __metadata("design:type", PatchConfig)
    ], PatchDeploymentInput.prototype, "patchConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recurringSchedule" }),
        __metadata("design:type", RecurringScheduleInput)
    ], PatchDeploymentInput.prototype, "recurringSchedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rollout" }),
        __metadata("design:type", PatchRollout)
    ], PatchDeploymentInput.prototype, "rollout", void 0);
    return PatchDeploymentInput;
}(SpeakeasyBase));
export { PatchDeploymentInput };
