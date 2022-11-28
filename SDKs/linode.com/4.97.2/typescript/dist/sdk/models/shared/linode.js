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
var LinodeAlerts = /** @class */ (function (_super) {
    __extends(LinodeAlerts, _super);
    function LinodeAlerts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cpu" }),
        __metadata("design:type", Number)
    ], LinodeAlerts.prototype, "cpu", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=io" }),
        __metadata("design:type", Number)
    ], LinodeAlerts.prototype, "io", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_in" }),
        __metadata("design:type", Number)
    ], LinodeAlerts.prototype, "networkIn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_out" }),
        __metadata("design:type", Number)
    ], LinodeAlerts.prototype, "networkOut", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transfer_quota" }),
        __metadata("design:type", Number)
    ], LinodeAlerts.prototype, "transferQuota", void 0);
    return LinodeAlerts;
}(SpeakeasyBase));
export { LinodeAlerts };
export var LinodeBackupsScheduleDayEnum;
(function (LinodeBackupsScheduleDayEnum) {
    LinodeBackupsScheduleDayEnum["Scheduling"] = "Scheduling";
    LinodeBackupsScheduleDayEnum["Sunday"] = "Sunday";
    LinodeBackupsScheduleDayEnum["Monday"] = "Monday";
    LinodeBackupsScheduleDayEnum["Tuesday"] = "Tuesday";
    LinodeBackupsScheduleDayEnum["Wednesday"] = "Wednesday";
    LinodeBackupsScheduleDayEnum["Thursday"] = "Thursday";
    LinodeBackupsScheduleDayEnum["Friday"] = "Friday";
    LinodeBackupsScheduleDayEnum["Saturday"] = "Saturday";
})(LinodeBackupsScheduleDayEnum || (LinodeBackupsScheduleDayEnum = {}));
export var LinodeBackupsScheduleWindowEnum;
(function (LinodeBackupsScheduleWindowEnum) {
    LinodeBackupsScheduleWindowEnum["Scheduling"] = "Scheduling";
    LinodeBackupsScheduleWindowEnum["W0"] = "W0";
    LinodeBackupsScheduleWindowEnum["W2"] = "W2";
    LinodeBackupsScheduleWindowEnum["W4"] = "W4";
    LinodeBackupsScheduleWindowEnum["W6"] = "W6";
    LinodeBackupsScheduleWindowEnum["W8"] = "W8";
    LinodeBackupsScheduleWindowEnum["W10"] = "W10";
    LinodeBackupsScheduleWindowEnum["W12"] = "W12";
    LinodeBackupsScheduleWindowEnum["W14"] = "W14";
    LinodeBackupsScheduleWindowEnum["W16"] = "W16";
    LinodeBackupsScheduleWindowEnum["W18"] = "W18";
    LinodeBackupsScheduleWindowEnum["W20"] = "W20";
    LinodeBackupsScheduleWindowEnum["W22"] = "W22";
})(LinodeBackupsScheduleWindowEnum || (LinodeBackupsScheduleWindowEnum = {}));
var LinodeBackupsSchedule = /** @class */ (function (_super) {
    __extends(LinodeBackupsSchedule, _super);
    function LinodeBackupsSchedule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=day" }),
        __metadata("design:type", String)
    ], LinodeBackupsSchedule.prototype, "day", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=window" }),
        __metadata("design:type", String)
    ], LinodeBackupsSchedule.prototype, "window", void 0);
    return LinodeBackupsSchedule;
}(SpeakeasyBase));
export { LinodeBackupsSchedule };
// LinodeBackups
/**
 * Information about this Linode's backups status. For information about available backups, see [/linode/instances/{linodeId}/backups](/docs/api/linode-instances/#backups-list).
 *
**/
var LinodeBackups = /** @class */ (function (_super) {
    __extends(LinodeBackups, _super);
    function LinodeBackups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], LinodeBackups.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_successful" }),
        __metadata("design:type", Date)
    ], LinodeBackups.prototype, "lastSuccessful", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule" }),
        __metadata("design:type", LinodeBackupsSchedule)
    ], LinodeBackups.prototype, "schedule", void 0);
    return LinodeBackups;
}(SpeakeasyBase));
export { LinodeBackups };
export var LinodeHypervisorEnum;
(function (LinodeHypervisorEnum) {
    LinodeHypervisorEnum["Kvm"] = "kvm";
})(LinodeHypervisorEnum || (LinodeHypervisorEnum = {}));
// LinodeSpecs
/**
 * Information about the resources available to this Linode.
**/
var LinodeSpecs = /** @class */ (function (_super) {
    __extends(LinodeSpecs, _super);
    function LinodeSpecs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disk" }),
        __metadata("design:type", Number)
    ], LinodeSpecs.prototype, "disk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memory" }),
        __metadata("design:type", Number)
    ], LinodeSpecs.prototype, "memory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transfer" }),
        __metadata("design:type", Number)
    ], LinodeSpecs.prototype, "transfer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vcpus" }),
        __metadata("design:type", Number)
    ], LinodeSpecs.prototype, "vcpus", void 0);
    return LinodeSpecs;
}(SpeakeasyBase));
export { LinodeSpecs };
export var LinodeStatusEnum;
(function (LinodeStatusEnum) {
    LinodeStatusEnum["Running"] = "running";
    LinodeStatusEnum["Offline"] = "offline";
    LinodeStatusEnum["Booting"] = "booting";
    LinodeStatusEnum["Rebooting"] = "rebooting";
    LinodeStatusEnum["ShuttingDown"] = "shutting_down";
    LinodeStatusEnum["Provisioning"] = "provisioning";
    LinodeStatusEnum["Deleting"] = "deleting";
    LinodeStatusEnum["Migrating"] = "migrating";
    LinodeStatusEnum["Rebuilding"] = "rebuilding";
    LinodeStatusEnum["Cloning"] = "cloning";
    LinodeStatusEnum["Restoring"] = "restoring";
    LinodeStatusEnum["Stopped"] = "stopped";
})(LinodeStatusEnum || (LinodeStatusEnum = {}));
// LinodeBackupsInput
/**
 * Information about this Linode's backups status. For information about available backups, see [/linode/instances/{linodeId}/backups](/docs/api/linode-instances/#backups-list).
 *
**/
var LinodeBackupsInput = /** @class */ (function (_super) {
    __extends(LinodeBackupsInput, _super);
    function LinodeBackupsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule" }),
        __metadata("design:type", LinodeBackupsSchedule)
    ], LinodeBackupsInput.prototype, "schedule", void 0);
    return LinodeBackupsInput;
}(SpeakeasyBase));
export { LinodeBackupsInput };
var Linode = /** @class */ (function (_super) {
    __extends(Linode, _super);
    function Linode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alerts" }),
        __metadata("design:type", LinodeAlerts)
    ], Linode.prototype, "alerts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backups" }),
        __metadata("design:type", LinodeBackups)
    ], Linode.prototype, "backups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], Linode.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group" }),
        __metadata("design:type", String)
    ], Linode.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hypervisor" }),
        __metadata("design:type", String)
    ], Linode.prototype, "hypervisor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Linode.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", Map)
    ], Linode.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipv4" }),
        __metadata("design:type", Array)
    ], Linode.prototype, "ipv4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipv6" }),
        __metadata("design:type", String)
    ], Linode.prototype, "ipv6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], Linode.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], Linode.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=specs" }),
        __metadata("design:type", LinodeSpecs)
    ], Linode.prototype, "specs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Linode.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], Linode.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Linode.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", Date)
    ], Linode.prototype, "updated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchdog_enabled" }),
        __metadata("design:type", Boolean)
    ], Linode.prototype, "watchdogEnabled", void 0);
    return Linode;
}(SpeakeasyBase));
export { Linode };
var LinodeInput = /** @class */ (function (_super) {
    __extends(LinodeInput, _super);
    function LinodeInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alerts" }),
        __metadata("design:type", LinodeAlerts)
    ], LinodeInput.prototype, "alerts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backups" }),
        __metadata("design:type", LinodeBackupsInput)
    ], LinodeInput.prototype, "backups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group" }),
        __metadata("design:type", String)
    ], LinodeInput.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], LinodeInput.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], LinodeInput.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=watchdog_enabled" }),
        __metadata("design:type", Boolean)
    ], LinodeInput.prototype, "watchdogEnabled", void 0);
    return LinodeInput;
}(SpeakeasyBase));
export { LinodeInput };
