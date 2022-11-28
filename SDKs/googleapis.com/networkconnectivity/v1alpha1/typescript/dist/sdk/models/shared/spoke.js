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
import { RouterApplianceInstance } from "./routerapplianceinstance";
export var SpokeStateEnum;
(function (SpokeStateEnum) {
    SpokeStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    SpokeStateEnum["Creating"] = "CREATING";
    SpokeStateEnum["Active"] = "ACTIVE";
    SpokeStateEnum["Deleting"] = "DELETING";
    SpokeStateEnum["Updating"] = "UPDATING";
})(SpokeStateEnum || (SpokeStateEnum = {}));
// SpokeInput
/**
 * A Spoke is an abstraction of a network attachment being attached to a Hub. A Spoke can be underlying a VPN tunnel, a VLAN (interconnect) attachment, a Router appliance, etc.
**/
var SpokeInput = /** @class */ (function (_super) {
    __extends(SpokeInput, _super);
    function SpokeInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], SpokeInput.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], SpokeInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hub" }),
        __metadata("design:type", String)
    ], SpokeInput.prototype, "hub", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], SpokeInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkedInterconnectAttachments" }),
        __metadata("design:type", Array)
    ], SpokeInput.prototype, "linkedInterconnectAttachments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkedRouterApplianceInstances", elemType: RouterApplianceInstance }),
        __metadata("design:type", Array)
    ], SpokeInput.prototype, "linkedRouterApplianceInstances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkedVpnTunnels" }),
        __metadata("design:type", Array)
    ], SpokeInput.prototype, "linkedVpnTunnels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SpokeInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], SpokeInput.prototype, "updateTime", void 0);
    return SpokeInput;
}(SpeakeasyBase));
export { SpokeInput };
// Spoke
/**
 * A Spoke is an abstraction of a network attachment being attached to a Hub. A Spoke can be underlying a VPN tunnel, a VLAN (interconnect) attachment, a Router appliance, etc.
**/
var Spoke = /** @class */ (function (_super) {
    __extends(Spoke, _super);
    function Spoke() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Spoke.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Spoke.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hub" }),
        __metadata("design:type", String)
    ], Spoke.prototype, "hub", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Spoke.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkedInterconnectAttachments" }),
        __metadata("design:type", Array)
    ], Spoke.prototype, "linkedInterconnectAttachments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkedRouterApplianceInstances", elemType: RouterApplianceInstance }),
        __metadata("design:type", Array)
    ], Spoke.prototype, "linkedRouterApplianceInstances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkedVpnTunnels" }),
        __metadata("design:type", Array)
    ], Spoke.prototype, "linkedVpnTunnels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Spoke.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Spoke.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uniqueId" }),
        __metadata("design:type", String)
    ], Spoke.prototype, "uniqueId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Spoke.prototype, "updateTime", void 0);
    return Spoke;
}(SpeakeasyBase));
export { Spoke };
