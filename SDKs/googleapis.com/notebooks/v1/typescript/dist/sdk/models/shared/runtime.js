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
import { RuntimeAccessConfigInput } from "./runtimeaccessconfig";
import { RuntimeSoftwareConfigInput } from "./runtimesoftwareconfig";
import { VirtualMachineInput } from "./virtualmachine";
import { RuntimeAccessConfig } from "./runtimeaccessconfig";
import { RuntimeMetrics } from "./runtimemetrics";
import { RuntimeSoftwareConfig } from "./runtimesoftwareconfig";
import { VirtualMachine } from "./virtualmachine";
export var RuntimeHealthStateEnum;
(function (RuntimeHealthStateEnum) {
    RuntimeHealthStateEnum["HealthStateUnspecified"] = "HEALTH_STATE_UNSPECIFIED";
    RuntimeHealthStateEnum["Healthy"] = "HEALTHY";
    RuntimeHealthStateEnum["Unhealthy"] = "UNHEALTHY";
    RuntimeHealthStateEnum["AgentNotInstalled"] = "AGENT_NOT_INSTALLED";
    RuntimeHealthStateEnum["AgentNotRunning"] = "AGENT_NOT_RUNNING";
})(RuntimeHealthStateEnum || (RuntimeHealthStateEnum = {}));
export var RuntimeStateEnum;
(function (RuntimeStateEnum) {
    RuntimeStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    RuntimeStateEnum["Starting"] = "STARTING";
    RuntimeStateEnum["Provisioning"] = "PROVISIONING";
    RuntimeStateEnum["Active"] = "ACTIVE";
    RuntimeStateEnum["Stopping"] = "STOPPING";
    RuntimeStateEnum["Stopped"] = "STOPPED";
    RuntimeStateEnum["Deleting"] = "DELETING";
    RuntimeStateEnum["Upgrading"] = "UPGRADING";
    RuntimeStateEnum["Initializing"] = "INITIALIZING";
})(RuntimeStateEnum || (RuntimeStateEnum = {}));
// RuntimeInput
/**
 * The definition of a Runtime for a managed notebook instance.
**/
var RuntimeInput = /** @class */ (function (_super) {
    __extends(RuntimeInput, _super);
    function RuntimeInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessConfig" }),
        __metadata("design:type", RuntimeAccessConfigInput)
    ], RuntimeInput.prototype, "accessConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=softwareConfig" }),
        __metadata("design:type", RuntimeSoftwareConfigInput)
    ], RuntimeInput.prototype, "softwareConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=virtualMachine" }),
        __metadata("design:type", VirtualMachineInput)
    ], RuntimeInput.prototype, "virtualMachine", void 0);
    return RuntimeInput;
}(SpeakeasyBase));
export { RuntimeInput };
// Runtime
/**
 * The definition of a Runtime for a managed notebook instance.
**/
var Runtime = /** @class */ (function (_super) {
    __extends(Runtime, _super);
    function Runtime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessConfig" }),
        __metadata("design:type", RuntimeAccessConfig)
    ], Runtime.prototype, "accessConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Runtime.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=healthState" }),
        __metadata("design:type", String)
    ], Runtime.prototype, "healthState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metrics" }),
        __metadata("design:type", RuntimeMetrics)
    ], Runtime.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Runtime.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=softwareConfig" }),
        __metadata("design:type", RuntimeSoftwareConfig)
    ], Runtime.prototype, "softwareConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Runtime.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Runtime.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=virtualMachine" }),
        __metadata("design:type", VirtualMachine)
    ], Runtime.prototype, "virtualMachine", void 0);
    return Runtime;
}(SpeakeasyBase));
export { Runtime };
