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
import { StatusCondition } from "./statuscondition";
import { Status } from "./status";
import { OperationProgress } from "./operationprogress";
export var OperationOperationTypeEnum;
(function (OperationOperationTypeEnum) {
    OperationOperationTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    OperationOperationTypeEnum["CreateCluster"] = "CREATE_CLUSTER";
    OperationOperationTypeEnum["DeleteCluster"] = "DELETE_CLUSTER";
    OperationOperationTypeEnum["UpgradeMaster"] = "UPGRADE_MASTER";
    OperationOperationTypeEnum["UpgradeNodes"] = "UPGRADE_NODES";
    OperationOperationTypeEnum["RepairCluster"] = "REPAIR_CLUSTER";
    OperationOperationTypeEnum["UpdateCluster"] = "UPDATE_CLUSTER";
    OperationOperationTypeEnum["CreateNodePool"] = "CREATE_NODE_POOL";
    OperationOperationTypeEnum["DeleteNodePool"] = "DELETE_NODE_POOL";
    OperationOperationTypeEnum["SetNodePoolManagement"] = "SET_NODE_POOL_MANAGEMENT";
    OperationOperationTypeEnum["AutoRepairNodes"] = "AUTO_REPAIR_NODES";
    OperationOperationTypeEnum["AutoUpgradeNodes"] = "AUTO_UPGRADE_NODES";
    OperationOperationTypeEnum["SetLabels"] = "SET_LABELS";
    OperationOperationTypeEnum["SetMasterAuth"] = "SET_MASTER_AUTH";
    OperationOperationTypeEnum["SetNodePoolSize"] = "SET_NODE_POOL_SIZE";
    OperationOperationTypeEnum["SetNetworkPolicy"] = "SET_NETWORK_POLICY";
    OperationOperationTypeEnum["SetMaintenancePolicy"] = "SET_MAINTENANCE_POLICY";
})(OperationOperationTypeEnum || (OperationOperationTypeEnum = {}));
export var OperationStatusEnum;
(function (OperationStatusEnum) {
    OperationStatusEnum["StatusUnspecified"] = "STATUS_UNSPECIFIED";
    OperationStatusEnum["Pending"] = "PENDING";
    OperationStatusEnum["Running"] = "RUNNING";
    OperationStatusEnum["Done"] = "DONE";
    OperationStatusEnum["Aborting"] = "ABORTING";
})(OperationStatusEnum || (OperationStatusEnum = {}));
// Operation
/**
 * This operation resource represents operations that may have happened or are happening on the cluster. All fields are output only.
**/
var Operation = /** @class */ (function (_super) {
    __extends(Operation, _super);
    function Operation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clusterConditions", elemType: StatusCondition }),
        __metadata("design:type", Array)
    ], Operation.prototype, "clusterConditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], Operation.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], Operation.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", Status)
    ], Operation.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], Operation.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Operation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodepoolConditions", elemType: StatusCondition }),
        __metadata("design:type", Array)
    ], Operation.prototype, "nodepoolConditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operationType" }),
        __metadata("design:type", String)
    ], Operation.prototype, "operationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", OperationProgress)
    ], Operation.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], Operation.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], Operation.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Operation.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusMessage" }),
        __metadata("design:type", String)
    ], Operation.prototype, "statusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetLink" }),
        __metadata("design:type", String)
    ], Operation.prototype, "targetLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zone" }),
        __metadata("design:type", String)
    ], Operation.prototype, "zone", void 0);
    return Operation;
}(SpeakeasyBase));
export { Operation };
