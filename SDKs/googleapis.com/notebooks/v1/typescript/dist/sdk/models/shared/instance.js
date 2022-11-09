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
import * as shared from "../shared";
import { AcceleratorConfig } from "./acceleratorconfig";
import { ContainerImage } from "./containerimage";
import { ReservationAffinity } from "./reservationaffinity";
import { ShieldedInstanceConfig } from "./shieldedinstanceconfig";
import { VmImage } from "./vmimage";
export var InstanceBootDiskTypeEnum;
(function (InstanceBootDiskTypeEnum) {
    InstanceBootDiskTypeEnum["DiskTypeUnspecified"] = "DISK_TYPE_UNSPECIFIED";
    InstanceBootDiskTypeEnum["PdStandard"] = "PD_STANDARD";
    InstanceBootDiskTypeEnum["PdSsd"] = "PD_SSD";
    InstanceBootDiskTypeEnum["PdBalanced"] = "PD_BALANCED";
    InstanceBootDiskTypeEnum["PdExtreme"] = "PD_EXTREME";
})(InstanceBootDiskTypeEnum || (InstanceBootDiskTypeEnum = {}));
export var InstanceDataDiskTypeEnum;
(function (InstanceDataDiskTypeEnum) {
    InstanceDataDiskTypeEnum["DiskTypeUnspecified"] = "DISK_TYPE_UNSPECIFIED";
    InstanceDataDiskTypeEnum["PdStandard"] = "PD_STANDARD";
    InstanceDataDiskTypeEnum["PdSsd"] = "PD_SSD";
    InstanceDataDiskTypeEnum["PdBalanced"] = "PD_BALANCED";
    InstanceDataDiskTypeEnum["PdExtreme"] = "PD_EXTREME";
})(InstanceDataDiskTypeEnum || (InstanceDataDiskTypeEnum = {}));
export var InstanceDiskEncryptionEnum;
(function (InstanceDiskEncryptionEnum) {
    InstanceDiskEncryptionEnum["DiskEncryptionUnspecified"] = "DISK_ENCRYPTION_UNSPECIFIED";
    InstanceDiskEncryptionEnum["Gmek"] = "GMEK";
    InstanceDiskEncryptionEnum["Cmek"] = "CMEK";
})(InstanceDiskEncryptionEnum || (InstanceDiskEncryptionEnum = {}));
export var InstanceNicTypeEnum;
(function (InstanceNicTypeEnum) {
    InstanceNicTypeEnum["UnspecifiedNicType"] = "UNSPECIFIED_NIC_TYPE";
    InstanceNicTypeEnum["VirtioNet"] = "VIRTIO_NET";
    InstanceNicTypeEnum["Gvnic"] = "GVNIC";
})(InstanceNicTypeEnum || (InstanceNicTypeEnum = {}));
export var InstanceStateEnum;
(function (InstanceStateEnum) {
    InstanceStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    InstanceStateEnum["Starting"] = "STARTING";
    InstanceStateEnum["Provisioning"] = "PROVISIONING";
    InstanceStateEnum["Active"] = "ACTIVE";
    InstanceStateEnum["Stopping"] = "STOPPING";
    InstanceStateEnum["Stopped"] = "STOPPED";
    InstanceStateEnum["Deleted"] = "DELETED";
    InstanceStateEnum["Upgrading"] = "UPGRADING";
    InstanceStateEnum["Initializing"] = "INITIALIZING";
    InstanceStateEnum["Registering"] = "REGISTERING";
    InstanceStateEnum["Suspending"] = "SUSPENDING";
    InstanceStateEnum["Suspended"] = "SUSPENDED";
})(InstanceStateEnum || (InstanceStateEnum = {}));
// Instance
/**
 * The definition of a notebook instance.
**/
var Instance = /** @class */ (function (_super) {
    __extends(Instance, _super);
    function Instance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=acceleratorConfig" }),
        __metadata("design:type", AcceleratorConfig)
    ], Instance.prototype, "acceleratorConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=bootDiskSizeGb" }),
        __metadata("design:type", String)
    ], Instance.prototype, "bootDiskSizeGb", void 0);
    __decorate([
        Metadata({ data: "json, name=bootDiskType" }),
        __metadata("design:type", String)
    ], Instance.prototype, "bootDiskType", void 0);
    __decorate([
        Metadata({ data: "json, name=canIpForward" }),
        __metadata("design:type", Boolean)
    ], Instance.prototype, "canIpForward", void 0);
    __decorate([
        Metadata({ data: "json, name=containerImage" }),
        __metadata("design:type", ContainerImage)
    ], Instance.prototype, "containerImage", void 0);
    __decorate([
        Metadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Instance.prototype, "createTime", void 0);
    __decorate([
        Metadata({ data: "json, name=creator" }),
        __metadata("design:type", String)
    ], Instance.prototype, "creator", void 0);
    __decorate([
        Metadata({ data: "json, name=customGpuDriverPath" }),
        __metadata("design:type", String)
    ], Instance.prototype, "customGpuDriverPath", void 0);
    __decorate([
        Metadata({ data: "json, name=dataDiskSizeGb" }),
        __metadata("design:type", String)
    ], Instance.prototype, "dataDiskSizeGb", void 0);
    __decorate([
        Metadata({ data: "json, name=dataDiskType" }),
        __metadata("design:type", String)
    ], Instance.prototype, "dataDiskType", void 0);
    __decorate([
        Metadata({ data: "json, name=diskEncryption" }),
        __metadata("design:type", String)
    ], Instance.prototype, "diskEncryption", void 0);
    __decorate([
        Metadata({ data: "json, name=disks", elemType: shared.Disk }),
        __metadata("design:type", Array)
    ], Instance.prototype, "disks", void 0);
    __decorate([
        Metadata({ data: "json, name=installGpuDriver" }),
        __metadata("design:type", Boolean)
    ], Instance.prototype, "installGpuDriver", void 0);
    __decorate([
        Metadata({ data: "json, name=instanceOwners" }),
        __metadata("design:type", Array)
    ], Instance.prototype, "instanceOwners", void 0);
    __decorate([
        Metadata({ data: "json, name=kmsKey" }),
        __metadata("design:type", String)
    ], Instance.prototype, "kmsKey", void 0);
    __decorate([
        Metadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Instance.prototype, "labels", void 0);
    __decorate([
        Metadata({ data: "json, name=machineType" }),
        __metadata("design:type", String)
    ], Instance.prototype, "machineType", void 0);
    __decorate([
        Metadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], Instance.prototype, "metadata", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Instance.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], Instance.prototype, "network", void 0);
    __decorate([
        Metadata({ data: "json, name=nicType" }),
        __metadata("design:type", String)
    ], Instance.prototype, "nicType", void 0);
    __decorate([
        Metadata({ data: "json, name=noProxyAccess" }),
        __metadata("design:type", Boolean)
    ], Instance.prototype, "noProxyAccess", void 0);
    __decorate([
        Metadata({ data: "json, name=noPublicIp" }),
        __metadata("design:type", Boolean)
    ], Instance.prototype, "noPublicIp", void 0);
    __decorate([
        Metadata({ data: "json, name=noRemoveDataDisk" }),
        __metadata("design:type", Boolean)
    ], Instance.prototype, "noRemoveDataDisk", void 0);
    __decorate([
        Metadata({ data: "json, name=postStartupScript" }),
        __metadata("design:type", String)
    ], Instance.prototype, "postStartupScript", void 0);
    __decorate([
        Metadata({ data: "json, name=proxyUri" }),
        __metadata("design:type", String)
    ], Instance.prototype, "proxyUri", void 0);
    __decorate([
        Metadata({ data: "json, name=reservationAffinity" }),
        __metadata("design:type", ReservationAffinity)
    ], Instance.prototype, "reservationAffinity", void 0);
    __decorate([
        Metadata({ data: "json, name=serviceAccount" }),
        __metadata("design:type", String)
    ], Instance.prototype, "serviceAccount", void 0);
    __decorate([
        Metadata({ data: "json, name=serviceAccountScopes" }),
        __metadata("design:type", Array)
    ], Instance.prototype, "serviceAccountScopes", void 0);
    __decorate([
        Metadata({ data: "json, name=shieldedInstanceConfig" }),
        __metadata("design:type", ShieldedInstanceConfig)
    ], Instance.prototype, "shieldedInstanceConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Instance.prototype, "state", void 0);
    __decorate([
        Metadata({ data: "json, name=subnet" }),
        __metadata("design:type", String)
    ], Instance.prototype, "subnet", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], Instance.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Instance.prototype, "updateTime", void 0);
    __decorate([
        Metadata({ data: "json, name=upgradeHistory", elemType: shared.UpgradeHistoryEntry }),
        __metadata("design:type", Array)
    ], Instance.prototype, "upgradeHistory", void 0);
    __decorate([
        Metadata({ data: "json, name=vmImage" }),
        __metadata("design:type", VmImage)
    ], Instance.prototype, "vmImage", void 0);
    return Instance;
}(SpeakeasyBase));
export { Instance };
