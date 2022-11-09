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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SchedulingConfig } from "./schedulingconfig";
export var NodeApiVersionEnum;
(function (NodeApiVersionEnum) {
    NodeApiVersionEnum["ApiVersionUnspecified"] = "API_VERSION_UNSPECIFIED";
    NodeApiVersionEnum["V1Alpha1"] = "V1_ALPHA1";
    NodeApiVersionEnum["V1"] = "V1";
    NodeApiVersionEnum["V2Alpha1"] = "V2_ALPHA1";
})(NodeApiVersionEnum || (NodeApiVersionEnum = {}));
export var NodeHealthEnum;
(function (NodeHealthEnum) {
    NodeHealthEnum["HealthUnspecified"] = "HEALTH_UNSPECIFIED";
    NodeHealthEnum["Healthy"] = "HEALTHY";
    NodeHealthEnum["DeprecatedUnhealthy"] = "DEPRECATED_UNHEALTHY";
    NodeHealthEnum["Timeout"] = "TIMEOUT";
    NodeHealthEnum["UnhealthyTensorflow"] = "UNHEALTHY_TENSORFLOW";
    NodeHealthEnum["UnhealthyMaintenance"] = "UNHEALTHY_MAINTENANCE";
})(NodeHealthEnum || (NodeHealthEnum = {}));
export var NodeStateEnum;
(function (NodeStateEnum) {
    NodeStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    NodeStateEnum["Creating"] = "CREATING";
    NodeStateEnum["Ready"] = "READY";
    NodeStateEnum["Restarting"] = "RESTARTING";
    NodeStateEnum["Reimaging"] = "REIMAGING";
    NodeStateEnum["Deleting"] = "DELETING";
    NodeStateEnum["Repairing"] = "REPAIRING";
    NodeStateEnum["Stopped"] = "STOPPED";
    NodeStateEnum["Stopping"] = "STOPPING";
    NodeStateEnum["Starting"] = "STARTING";
    NodeStateEnum["Preempted"] = "PREEMPTED";
    NodeStateEnum["Terminated"] = "TERMINATED";
    NodeStateEnum["Hiding"] = "HIDING";
    NodeStateEnum["Hidden"] = "HIDDEN";
    NodeStateEnum["Unhiding"] = "UNHIDING";
})(NodeStateEnum || (NodeStateEnum = {}));
// Node
/**
 * A TPU instance.
**/
var Node = /** @class */ (function (_super) {
    __extends(Node, _super);
    function Node() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=acceleratorType" }),
        __metadata("design:type", String)
    ], Node.prototype, "acceleratorType", void 0);
    __decorate([
        Metadata({ data: "json, name=apiVersion" }),
        __metadata("design:type", String)
    ], Node.prototype, "apiVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=cidrBlock" }),
        __metadata("design:type", String)
    ], Node.prototype, "cidrBlock", void 0);
    __decorate([
        Metadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Node.prototype, "createTime", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Node.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=health" }),
        __metadata("design:type", String)
    ], Node.prototype, "health", void 0);
    __decorate([
        Metadata({ data: "json, name=healthDescription" }),
        __metadata("design:type", String)
    ], Node.prototype, "healthDescription", void 0);
    __decorate([
        Metadata({ data: "json, name=ipAddress" }),
        __metadata("design:type", String)
    ], Node.prototype, "ipAddress", void 0);
    __decorate([
        Metadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Node.prototype, "labels", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Node.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], Node.prototype, "network", void 0);
    __decorate([
        Metadata({ data: "json, name=networkEndpoints", elemType: shared.NetworkEndpoint }),
        __metadata("design:type", Array)
    ], Node.prototype, "networkEndpoints", void 0);
    __decorate([
        Metadata({ data: "json, name=port" }),
        __metadata("design:type", String)
    ], Node.prototype, "port", void 0);
    __decorate([
        Metadata({ data: "json, name=schedulingConfig" }),
        __metadata("design:type", SchedulingConfig)
    ], Node.prototype, "schedulingConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=serviceAccount" }),
        __metadata("design:type", String)
    ], Node.prototype, "serviceAccount", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Node.prototype, "state", void 0);
    __decorate([
        Metadata({ data: "json, name=symptoms", elemType: shared.Symptom }),
        __metadata("design:type", Array)
    ], Node.prototype, "symptoms", void 0);
    __decorate([
        Metadata({ data: "json, name=tensorflowVersion" }),
        __metadata("design:type", String)
    ], Node.prototype, "tensorflowVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=useServiceNetworking" }),
        __metadata("design:type", Boolean)
    ], Node.prototype, "useServiceNetworking", void 0);
    return Node;
}(SpeakeasyBase));
export { Node };
