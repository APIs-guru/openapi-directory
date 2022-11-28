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
import { ClusterConfigInput } from "./clusterconfig";
import { ClusterMetrics } from "./clustermetrics";
import { VirtualClusterConfig } from "./virtualclusterconfig";
import { ClusterConfig } from "./clusterconfig";
import { ClusterStatus } from "./clusterstatus";
// ClusterInput
/**
 * Describes the identifying information, config, and status of a Dataproc cluster
**/
var ClusterInput = /** @class */ (function (_super) {
    __extends(ClusterInput, _super);
    function ClusterInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clusterName" }),
        __metadata("design:type", String)
    ], ClusterInput.prototype, "clusterName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=config" }),
        __metadata("design:type", ClusterConfigInput)
    ], ClusterInput.prototype, "config", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], ClusterInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metrics" }),
        __metadata("design:type", ClusterMetrics)
    ], ClusterInput.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectId" }),
        __metadata("design:type", String)
    ], ClusterInput.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=virtualClusterConfig" }),
        __metadata("design:type", VirtualClusterConfig)
    ], ClusterInput.prototype, "virtualClusterConfig", void 0);
    return ClusterInput;
}(SpeakeasyBase));
export { ClusterInput };
// Cluster
/**
 * Describes the identifying information, config, and status of a Dataproc cluster
**/
var Cluster = /** @class */ (function (_super) {
    __extends(Cluster, _super);
    function Cluster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clusterName" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "clusterName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clusterUuid" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "clusterUuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=config" }),
        __metadata("design:type", ClusterConfig)
    ], Cluster.prototype, "config", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Cluster.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metrics" }),
        __metadata("design:type", ClusterMetrics)
    ], Cluster.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectId" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", ClusterStatus)
    ], Cluster.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statusHistory", elemType: ClusterStatus }),
        __metadata("design:type", Array)
    ], Cluster.prototype, "statusHistory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=virtualClusterConfig" }),
        __metadata("design:type", VirtualClusterConfig)
    ], Cluster.prototype, "virtualClusterConfig", void 0);
    return Cluster;
}(SpeakeasyBase));
export { Cluster };
