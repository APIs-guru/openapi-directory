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
import { NestedVlan } from "./nestedvlan";
import { NestedVirtualMachine } from "./nestedvirtualmachine";
export var VirtualMachineInterfaceModeLabelEnum;
(function (VirtualMachineInterfaceModeLabelEnum) {
    VirtualMachineInterfaceModeLabelEnum["Access"] = "Access";
    VirtualMachineInterfaceModeLabelEnum["Tagged"] = "Tagged";
    VirtualMachineInterfaceModeLabelEnum["TaggedAll"] = "Tagged (All)";
})(VirtualMachineInterfaceModeLabelEnum || (VirtualMachineInterfaceModeLabelEnum = {}));
export var VirtualMachineInterfaceModeValueEnum;
(function (VirtualMachineInterfaceModeValueEnum) {
    VirtualMachineInterfaceModeValueEnum["Access"] = "access";
    VirtualMachineInterfaceModeValueEnum["Tagged"] = "tagged";
    VirtualMachineInterfaceModeValueEnum["TaggedAll"] = "tagged-all";
})(VirtualMachineInterfaceModeValueEnum || (VirtualMachineInterfaceModeValueEnum = {}));
var VirtualMachineInterfaceMode = /** @class */ (function (_super) {
    __extends(VirtualMachineInterfaceMode, _super);
    function VirtualMachineInterfaceMode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], VirtualMachineInterfaceMode.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], VirtualMachineInterfaceMode.prototype, "value", void 0);
    return VirtualMachineInterfaceMode;
}(SpeakeasyBase));
export { VirtualMachineInterfaceMode };
export var VirtualMachineInterfaceTypeLabelEnum;
(function (VirtualMachineInterfaceTypeLabelEnum) {
    VirtualMachineInterfaceTypeLabelEnum["Virtual"] = "Virtual";
})(VirtualMachineInterfaceTypeLabelEnum || (VirtualMachineInterfaceTypeLabelEnum = {}));
export var VirtualMachineInterfaceTypeValueEnum;
(function (VirtualMachineInterfaceTypeValueEnum) {
    VirtualMachineInterfaceTypeValueEnum["Virtual"] = "virtual";
})(VirtualMachineInterfaceTypeValueEnum || (VirtualMachineInterfaceTypeValueEnum = {}));
var VirtualMachineInterfaceType = /** @class */ (function (_super) {
    __extends(VirtualMachineInterfaceType, _super);
    function VirtualMachineInterfaceType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], VirtualMachineInterfaceType.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], VirtualMachineInterfaceType.prototype, "value", void 0);
    return VirtualMachineInterfaceType;
}(SpeakeasyBase));
export { VirtualMachineInterfaceType };
var VirtualMachineInterface = /** @class */ (function (_super) {
    __extends(VirtualMachineInterface, _super);
    function VirtualMachineInterface() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], VirtualMachineInterface.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], VirtualMachineInterface.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], VirtualMachineInterface.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mac_address" }),
        __metadata("design:type", String)
    ], VirtualMachineInterface.prototype, "macAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mode" }),
        __metadata("design:type", VirtualMachineInterfaceMode)
    ], VirtualMachineInterface.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mtu" }),
        __metadata("design:type", Number)
    ], VirtualMachineInterface.prototype, "mtu", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], VirtualMachineInterface.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagged_vlans", elemType: NestedVlan }),
        __metadata("design:type", Array)
    ], VirtualMachineInterface.prototype, "taggedVlans", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], VirtualMachineInterface.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", VirtualMachineInterfaceType)
    ], VirtualMachineInterface.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=untagged_vlan" }),
        __metadata("design:type", NestedVlan)
    ], VirtualMachineInterface.prototype, "untaggedVlan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=virtual_machine" }),
        __metadata("design:type", NestedVirtualMachine)
    ], VirtualMachineInterface.prototype, "virtualMachine", void 0);
    return VirtualMachineInterface;
}(SpeakeasyBase));
export { VirtualMachineInterface };
