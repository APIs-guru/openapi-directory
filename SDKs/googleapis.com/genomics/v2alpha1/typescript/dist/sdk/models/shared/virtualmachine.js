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
import { Accelerator } from "./accelerator";
import { Disk } from "./disk";
import { Network } from "./network";
import { ServiceAccount } from "./serviceaccount";
import { Volume } from "./volume";
// VirtualMachine
/**
 * Carries information about a Compute Engine VM resource.
**/
var VirtualMachine = /** @class */ (function (_super) {
    __extends(VirtualMachine, _super);
    function VirtualMachine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accelerators", elemType: Accelerator }),
        __metadata("design:type", Array)
    ], VirtualMachine.prototype, "accelerators", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bootDiskSizeGb" }),
        __metadata("design:type", Number)
    ], VirtualMachine.prototype, "bootDiskSizeGb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bootImage" }),
        __metadata("design:type", String)
    ], VirtualMachine.prototype, "bootImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cpuPlatform" }),
        __metadata("design:type", String)
    ], VirtualMachine.prototype, "cpuPlatform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disks", elemType: Disk }),
        __metadata("design:type", Array)
    ], VirtualMachine.prototype, "disks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dockerCacheImages" }),
        __metadata("design:type", Array)
    ], VirtualMachine.prototype, "dockerCacheImages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableStackdriverMonitoring" }),
        __metadata("design:type", Boolean)
    ], VirtualMachine.prototype, "enableStackdriverMonitoring", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], VirtualMachine.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=machineType" }),
        __metadata("design:type", String)
    ], VirtualMachine.prototype, "machineType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", Network)
    ], VirtualMachine.prototype, "network", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nvidiaDriverVersion" }),
        __metadata("design:type", String)
    ], VirtualMachine.prototype, "nvidiaDriverVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preemptible" }),
        __metadata("design:type", Boolean)
    ], VirtualMachine.prototype, "preemptible", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reservation" }),
        __metadata("design:type", String)
    ], VirtualMachine.prototype, "reservation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccount" }),
        __metadata("design:type", ServiceAccount)
    ], VirtualMachine.prototype, "serviceAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumes", elemType: Volume }),
        __metadata("design:type", Array)
    ], VirtualMachine.prototype, "volumes", void 0);
    return VirtualMachine;
}(SpeakeasyBase));
export { VirtualMachine };
