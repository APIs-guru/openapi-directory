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
import { NestedProvider } from "./nestedprovider";
import { NestedTenant } from "./nestedtenant";
import { CircuitCircuitTermination } from "./circuitcircuittermination";
import { NestedCircuitType } from "./nestedcircuittype";
export var CircuitStatusLabelEnum;
(function (CircuitStatusLabelEnum) {
    CircuitStatusLabelEnum["Planned"] = "Planned";
    CircuitStatusLabelEnum["Provisioning"] = "Provisioning";
    CircuitStatusLabelEnum["Active"] = "Active";
    CircuitStatusLabelEnum["Offline"] = "Offline";
    CircuitStatusLabelEnum["Deprovisioning"] = "Deprovisioning";
    CircuitStatusLabelEnum["Decommissioned"] = "Decommissioned";
})(CircuitStatusLabelEnum || (CircuitStatusLabelEnum = {}));
export var CircuitStatusValueEnum;
(function (CircuitStatusValueEnum) {
    CircuitStatusValueEnum["Planned"] = "planned";
    CircuitStatusValueEnum["Provisioning"] = "provisioning";
    CircuitStatusValueEnum["Active"] = "active";
    CircuitStatusValueEnum["Offline"] = "offline";
    CircuitStatusValueEnum["Deprovisioning"] = "deprovisioning";
    CircuitStatusValueEnum["Decommissioned"] = "decommissioned";
})(CircuitStatusValueEnum || (CircuitStatusValueEnum = {}));
var CircuitStatus = /** @class */ (function (_super) {
    __extends(CircuitStatus, _super);
    function CircuitStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], CircuitStatus.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], CircuitStatus.prototype, "value", void 0);
    return CircuitStatus;
}(SpeakeasyBase));
export { CircuitStatus };
var Circuit = /** @class */ (function (_super) {
    __extends(Circuit, _super);
    function Circuit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cid" }),
        __metadata("design:type", String)
    ], Circuit.prototype, "cid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], Circuit.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commit_rate" }),
        __metadata("design:type", Number)
    ], Circuit.prototype, "commitRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], Circuit.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_fields" }),
        __metadata("design:type", Map)
    ], Circuit.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Circuit.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Circuit.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=install_date" }),
        __metadata("design:type", Date)
    ], Circuit.prototype, "installDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_updated" }),
        __metadata("design:type", Date)
    ], Circuit.prototype, "lastUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provider" }),
        __metadata("design:type", NestedProvider)
    ], Circuit.prototype, "provider", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", CircuitStatus)
    ], Circuit.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], Circuit.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tenant" }),
        __metadata("design:type", NestedTenant)
    ], Circuit.prototype, "tenant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=termination_a" }),
        __metadata("design:type", CircuitCircuitTermination)
    ], Circuit.prototype, "terminationA", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=termination_z" }),
        __metadata("design:type", CircuitCircuitTermination)
    ], Circuit.prototype, "terminationZ", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", NestedCircuitType)
    ], Circuit.prototype, "type", void 0);
    return Circuit;
}(SpeakeasyBase));
export { Circuit };
