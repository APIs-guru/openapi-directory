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
import { GuestAccelerator } from "./guestaccelerator";
import { Usage } from "./usage";
import { MachineType } from "./machinetype";
import { PersistentDisk } from "./persistentdisk";
// ComputeVmWorkload
/**
 * Specificies usage of a set of identical compute VM instances.
**/
var ComputeVmWorkload = /** @class */ (function (_super) {
    __extends(ComputeVmWorkload, _super);
    function ComputeVmWorkload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableConfidentialCompute" }),
        __metadata("design:type", Boolean)
    ], ComputeVmWorkload.prototype, "enableConfidentialCompute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=guestAccelerator" }),
        __metadata("design:type", GuestAccelerator)
    ], ComputeVmWorkload.prototype, "guestAccelerator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instancesRunning" }),
        __metadata("design:type", Usage)
    ], ComputeVmWorkload.prototype, "instancesRunning", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=licenses" }),
        __metadata("design:type", Array)
    ], ComputeVmWorkload.prototype, "licenses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=machineType" }),
        __metadata("design:type", MachineType)
    ], ComputeVmWorkload.prototype, "machineType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=persistentDisks", elemType: PersistentDisk }),
        __metadata("design:type", Array)
    ], ComputeVmWorkload.prototype, "persistentDisks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preemptible" }),
        __metadata("design:type", Boolean)
    ], ComputeVmWorkload.prototype, "preemptible", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], ComputeVmWorkload.prototype, "region", void 0);
    return ComputeVmWorkload;
}(SpeakeasyBase));
export { ComputeVmWorkload };
