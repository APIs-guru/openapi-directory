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
import { NestedCluster } from "./nestedcluster";
import { NestedPlatform } from "./nestedplatform";
import { VirtualMachineIpAddress } from "./virtualmachineipaddress";
import { NestedDeviceRole } from "./nesteddevicerole";
import { NestedSite } from "./nestedsite";
import { NestedTenant } from "./nestedtenant";
var VirtualMachineStatus = /** @class */ (function (_super) {
    __extends(VirtualMachineStatus, _super);
    function VirtualMachineStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], VirtualMachineStatus.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Number)
    ], VirtualMachineStatus.prototype, "value", void 0);
    return VirtualMachineStatus;
}(SpeakeasyBase));
export { VirtualMachineStatus };
var VirtualMachine = /** @class */ (function (_super) {
    __extends(VirtualMachine, _super);
    function VirtualMachine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cluster" }),
        __metadata("design:type", NestedCluster)
    ], VirtualMachine.prototype, "cluster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], VirtualMachine.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], VirtualMachine.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_fields" }),
        __metadata("design:type", Map)
    ], VirtualMachine.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disk" }),
        __metadata("design:type", Number)
    ], VirtualMachine.prototype, "disk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], VirtualMachine.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_updated" }),
        __metadata("design:type", Date)
    ], VirtualMachine.prototype, "lastUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=local_context_data" }),
        __metadata("design:type", String)
    ], VirtualMachine.prototype, "localContextData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memory" }),
        __metadata("design:type", Number)
    ], VirtualMachine.prototype, "memory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], VirtualMachine.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platform" }),
        __metadata("design:type", NestedPlatform)
    ], VirtualMachine.prototype, "platform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_ip" }),
        __metadata("design:type", VirtualMachineIpAddress)
    ], VirtualMachine.prototype, "primaryIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_ip4" }),
        __metadata("design:type", VirtualMachineIpAddress)
    ], VirtualMachine.prototype, "primaryIp4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_ip6" }),
        __metadata("design:type", VirtualMachineIpAddress)
    ], VirtualMachine.prototype, "primaryIp6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role" }),
        __metadata("design:type", NestedDeviceRole)
    ], VirtualMachine.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site" }),
        __metadata("design:type", NestedSite)
    ], VirtualMachine.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", VirtualMachineStatus)
    ], VirtualMachine.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], VirtualMachine.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tenant" }),
        __metadata("design:type", NestedTenant)
    ], VirtualMachine.prototype, "tenant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vcpus" }),
        __metadata("design:type", Number)
    ], VirtualMachine.prototype, "vcpus", void 0);
    return VirtualMachine;
}(SpeakeasyBase));
export { VirtualMachine };
