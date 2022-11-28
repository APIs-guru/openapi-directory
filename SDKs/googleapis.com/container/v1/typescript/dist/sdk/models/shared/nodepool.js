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
import { NodePoolAutoscaling } from "./nodepoolautoscaling";
import { StatusCondition } from "./statuscondition";
import { NodeConfig } from "./nodeconfig";
import { NodeManagement } from "./nodemanagement";
import { MaxPodsConstraint } from "./maxpodsconstraint";
import { NodeNetworkConfig } from "./nodenetworkconfig";
import { PlacementPolicy } from "./placementpolicy";
import { UpdateInfo } from "./updateinfo";
import { UpgradeSettings } from "./upgradesettings";
export var NodePoolStatusEnum;
(function (NodePoolStatusEnum) {
    NodePoolStatusEnum["StatusUnspecified"] = "STATUS_UNSPECIFIED";
    NodePoolStatusEnum["Provisioning"] = "PROVISIONING";
    NodePoolStatusEnum["Running"] = "RUNNING";
    NodePoolStatusEnum["RunningWithError"] = "RUNNING_WITH_ERROR";
    NodePoolStatusEnum["Reconciling"] = "RECONCILING";
    NodePoolStatusEnum["Stopping"] = "STOPPING";
    NodePoolStatusEnum["Error"] = "ERROR";
})(NodePoolStatusEnum || (NodePoolStatusEnum = {}));
// NodePool
/**
 * NodePool contains the name and configuration for a cluster's node pool. Node pools are a set of nodes (i.e. VM's), with a common configuration and specification, under the control of the cluster master. They may have a set of Kubernetes labels applied to them, which may be used to reference them during pod scheduling. They may also be resized up or down, to accommodate the workload.
**/
var NodePool = /** @class */ (function (_super) {
    __extends(NodePool, _super);
    function NodePool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoscaling" }),
        __metadata("design:type", NodePoolAutoscaling)
    ], NodePool.prototype, "autoscaling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conditions", elemType: StatusCondition }),
        __metadata("design:type", Array)
    ], NodePool.prototype, "conditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=config" }),
        __metadata("design:type", NodeConfig)
    ], NodePool.prototype, "config", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=initialNodeCount" }),
        __metadata("design:type", Number)
    ], NodePool.prototype, "initialNodeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceGroupUrls" }),
        __metadata("design:type", Array)
    ], NodePool.prototype, "instanceGroupUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locations" }),
        __metadata("design:type", Array)
    ], NodePool.prototype, "locations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=management" }),
        __metadata("design:type", NodeManagement)
    ], NodePool.prototype, "management", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxPodsConstraint" }),
        __metadata("design:type", MaxPodsConstraint)
    ], NodePool.prototype, "maxPodsConstraint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NodePool.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkConfig" }),
        __metadata("design:type", NodeNetworkConfig)
    ], NodePool.prototype, "networkConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placementPolicy" }),
        __metadata("design:type", PlacementPolicy)
    ], NodePool.prototype, "placementPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=podIpv4CidrSize" }),
        __metadata("design:type", Number)
    ], NodePool.prototype, "podIpv4CidrSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], NodePool.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], NodePool.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusMessage" }),
        __metadata("design:type", String)
    ], NodePool.prototype, "statusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateInfo" }),
        __metadata("design:type", UpdateInfo)
    ], NodePool.prototype, "updateInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upgradeSettings" }),
        __metadata("design:type", UpgradeSettings)
    ], NodePool.prototype, "upgradeSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], NodePool.prototype, "version", void 0);
    return NodePool;
}(SpeakeasyBase));
export { NodePool };
