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
import { Trust } from "./trust";
export var DomainStateEnum;
(function (DomainStateEnum) {
    DomainStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    DomainStateEnum["Creating"] = "CREATING";
    DomainStateEnum["Ready"] = "READY";
    DomainStateEnum["Updating"] = "UPDATING";
    DomainStateEnum["Deleting"] = "DELETING";
    DomainStateEnum["Repairing"] = "REPAIRING";
    DomainStateEnum["PerformingMaintenance"] = "PERFORMING_MAINTENANCE";
    DomainStateEnum["Unavailable"] = "UNAVAILABLE";
})(DomainStateEnum || (DomainStateEnum = {}));
// Domain
/**
 * Represents a managed Microsoft Active Directory domain. If the domain is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
**/
var Domain = /** @class */ (function (_super) {
    __extends(Domain, _super);
    function Domain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admin" }),
        __metadata("design:type", String)
    ], Domain.prototype, "admin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auditLogsEnabled" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "auditLogsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizedNetworks" }),
        __metadata("design:type", Array)
    ], Domain.prototype, "authorizedNetworks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Domain.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fqdn" }),
        __metadata("design:type", String)
    ], Domain.prototype, "fqdn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Domain.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locations" }),
        __metadata("design:type", Array)
    ], Domain.prototype, "locations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Domain.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reservedIpRange" }),
        __metadata("design:type", String)
    ], Domain.prototype, "reservedIpRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Domain.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusMessage" }),
        __metadata("design:type", String)
    ], Domain.prototype, "statusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trusts", elemType: Trust }),
        __metadata("design:type", Array)
    ], Domain.prototype, "trusts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Domain.prototype, "updateTime", void 0);
    return Domain;
}(SpeakeasyBase));
export { Domain };
// DomainInput
/**
 * Represents a managed Microsoft Active Directory domain. If the domain is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
**/
var DomainInput = /** @class */ (function (_super) {
    __extends(DomainInput, _super);
    function DomainInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admin" }),
        __metadata("design:type", String)
    ], DomainInput.prototype, "admin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auditLogsEnabled" }),
        __metadata("design:type", Boolean)
    ], DomainInput.prototype, "auditLogsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizedNetworks" }),
        __metadata("design:type", Array)
    ], DomainInput.prototype, "authorizedNetworks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], DomainInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locations" }),
        __metadata("design:type", Array)
    ], DomainInput.prototype, "locations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DomainInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reservedIpRange" }),
        __metadata("design:type", String)
    ], DomainInput.prototype, "reservedIpRange", void 0);
    return DomainInput;
}(SpeakeasyBase));
export { DomainInput };
