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
import { AcceleratorConfig } from "./acceleratorconfig";
import { DiskConfig } from "./diskconfig";
import { InstanceReference } from "./instancereference";
import { ManagedGroupConfig } from "./managedgroupconfig";
export var InstanceGroupConfigPreemptibilityEnum;
(function (InstanceGroupConfigPreemptibilityEnum) {
    InstanceGroupConfigPreemptibilityEnum["PreemptibilityUnspecified"] = "PREEMPTIBILITY_UNSPECIFIED";
    InstanceGroupConfigPreemptibilityEnum["NonPreemptible"] = "NON_PREEMPTIBLE";
    InstanceGroupConfigPreemptibilityEnum["Preemptible"] = "PREEMPTIBLE";
    InstanceGroupConfigPreemptibilityEnum["Spot"] = "SPOT";
})(InstanceGroupConfigPreemptibilityEnum || (InstanceGroupConfigPreemptibilityEnum = {}));
// InstanceGroupConfigInput
/**
 * The config settings for Compute Engine resources in an instance group, such as a master or worker group.
**/
var InstanceGroupConfigInput = /** @class */ (function (_super) {
    __extends(InstanceGroupConfigInput, _super);
    function InstanceGroupConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accelerators", elemType: AcceleratorConfig }),
        __metadata("design:type", Array)
    ], InstanceGroupConfigInput.prototype, "accelerators", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diskConfig" }),
        __metadata("design:type", DiskConfig)
    ], InstanceGroupConfigInput.prototype, "diskConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageUri" }),
        __metadata("design:type", String)
    ], InstanceGroupConfigInput.prototype, "imageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=machineTypeUri" }),
        __metadata("design:type", String)
    ], InstanceGroupConfigInput.prototype, "machineTypeUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minCpuPlatform" }),
        __metadata("design:type", String)
    ], InstanceGroupConfigInput.prototype, "minCpuPlatform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numInstances" }),
        __metadata("design:type", Number)
    ], InstanceGroupConfigInput.prototype, "numInstances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preemptibility" }),
        __metadata("design:type", String)
    ], InstanceGroupConfigInput.prototype, "preemptibility", void 0);
    return InstanceGroupConfigInput;
}(SpeakeasyBase));
export { InstanceGroupConfigInput };
// InstanceGroupConfig
/**
 * The config settings for Compute Engine resources in an instance group, such as a master or worker group.
**/
var InstanceGroupConfig = /** @class */ (function (_super) {
    __extends(InstanceGroupConfig, _super);
    function InstanceGroupConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accelerators", elemType: AcceleratorConfig }),
        __metadata("design:type", Array)
    ], InstanceGroupConfig.prototype, "accelerators", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diskConfig" }),
        __metadata("design:type", DiskConfig)
    ], InstanceGroupConfig.prototype, "diskConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageUri" }),
        __metadata("design:type", String)
    ], InstanceGroupConfig.prototype, "imageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceNames" }),
        __metadata("design:type", Array)
    ], InstanceGroupConfig.prototype, "instanceNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceReferences", elemType: InstanceReference }),
        __metadata("design:type", Array)
    ], InstanceGroupConfig.prototype, "instanceReferences", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isPreemptible" }),
        __metadata("design:type", Boolean)
    ], InstanceGroupConfig.prototype, "isPreemptible", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=machineTypeUri" }),
        __metadata("design:type", String)
    ], InstanceGroupConfig.prototype, "machineTypeUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=managedGroupConfig" }),
        __metadata("design:type", ManagedGroupConfig)
    ], InstanceGroupConfig.prototype, "managedGroupConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minCpuPlatform" }),
        __metadata("design:type", String)
    ], InstanceGroupConfig.prototype, "minCpuPlatform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numInstances" }),
        __metadata("design:type", Number)
    ], InstanceGroupConfig.prototype, "numInstances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preemptibility" }),
        __metadata("design:type", String)
    ], InstanceGroupConfig.prototype, "preemptibility", void 0);
    return InstanceGroupConfig;
}(SpeakeasyBase));
export { InstanceGroupConfig };
