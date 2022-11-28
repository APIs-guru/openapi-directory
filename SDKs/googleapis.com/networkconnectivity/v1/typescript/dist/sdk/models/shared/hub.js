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
import { RoutingVpcInput } from "./routingvpc";
import { RoutingVpc } from "./routingvpc";
export var HubStateEnum;
(function (HubStateEnum) {
    HubStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    HubStateEnum["Creating"] = "CREATING";
    HubStateEnum["Active"] = "ACTIVE";
    HubStateEnum["Deleting"] = "DELETING";
    HubStateEnum["Updating"] = "UPDATING";
})(HubStateEnum || (HubStateEnum = {}));
// HubInput
/**
 * A Network Connectivity Center hub is a collection of spokes. A single hub can contain spokes from multiple regions. However, if any of a hub's spokes use the data transfer feature, the resources associated with those spokes must all reside in the same VPC network. Spokes that do not use data transfer can be associated with any VPC network in your project.
**/
var HubInput = /** @class */ (function (_super) {
    __extends(HubInput, _super);
    function HubInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], HubInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], HubInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], HubInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routingVpcs", elemType: RoutingVpcInput }),
        __metadata("design:type", Array)
    ], HubInput.prototype, "routingVpcs", void 0);
    return HubInput;
}(SpeakeasyBase));
export { HubInput };
// Hub
/**
 * A Network Connectivity Center hub is a collection of spokes. A single hub can contain spokes from multiple regions. However, if any of a hub's spokes use the data transfer feature, the resources associated with those spokes must all reside in the same VPC network. Spokes that do not use data transfer can be associated with any VPC network in your project.
**/
var Hub = /** @class */ (function (_super) {
    __extends(Hub, _super);
    function Hub() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Hub.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Hub.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Hub.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Hub.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routingVpcs", elemType: RoutingVpc }),
        __metadata("design:type", Array)
    ], Hub.prototype, "routingVpcs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Hub.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uniqueId" }),
        __metadata("design:type", String)
    ], Hub.prototype, "uniqueId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Hub.prototype, "updateTime", void 0);
    return Hub;
}(SpeakeasyBase));
export { Hub };
