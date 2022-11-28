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
import { ConfidentialNodes } from "./confidentialnodes";
import { FastSocket } from "./fastsocket";
import { GcfsConfig } from "./gcfsconfig";
import { VirtualNic } from "./virtualnic";
import { NodeKubeletConfig } from "./nodekubeletconfig";
import { NodeLabels } from "./nodelabels";
import { LinuxNodeConfig } from "./linuxnodeconfig";
import { NodePoolLoggingConfig } from "./nodepoolloggingconfig";
import { NodeNetworkConfig } from "./nodenetworkconfig";
import { ResourceLabels } from "./resourcelabels";
import { NetworkTags } from "./networktags";
import { NodeTaints } from "./nodetaints";
import { UpgradeSettings } from "./upgradesettings";
import { WorkloadMetadataConfig } from "./workloadmetadataconfig";
// UpdateNodePoolRequest
/**
 * SetNodePoolVersionRequest updates the version of a node pool.
**/
var UpdateNodePoolRequest = /** @class */ (function (_super) {
    __extends(UpdateNodePoolRequest, _super);
    function UpdateNodePoolRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clusterId" }),
        __metadata("design:type", String)
    ], UpdateNodePoolRequest.prototype, "clusterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=confidentialNodes" }),
        __metadata("design:type", ConfidentialNodes)
    ], UpdateNodePoolRequest.prototype, "confidentialNodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fastSocket" }),
        __metadata("design:type", FastSocket)
    ], UpdateNodePoolRequest.prototype, "fastSocket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gcfsConfig" }),
        __metadata("design:type", GcfsConfig)
    ], UpdateNodePoolRequest.prototype, "gcfsConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gvnic" }),
        __metadata("design:type", VirtualNic)
    ], UpdateNodePoolRequest.prototype, "gvnic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageType" }),
        __metadata("design:type", String)
    ], UpdateNodePoolRequest.prototype, "imageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kubeletConfig" }),
        __metadata("design:type", NodeKubeletConfig)
    ], UpdateNodePoolRequest.prototype, "kubeletConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", NodeLabels)
    ], UpdateNodePoolRequest.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linuxNodeConfig" }),
        __metadata("design:type", LinuxNodeConfig)
    ], UpdateNodePoolRequest.prototype, "linuxNodeConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locations" }),
        __metadata("design:type", Array)
    ], UpdateNodePoolRequest.prototype, "locations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loggingConfig" }),
        __metadata("design:type", NodePoolLoggingConfig)
    ], UpdateNodePoolRequest.prototype, "loggingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateNodePoolRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeNetworkConfig" }),
        __metadata("design:type", NodeNetworkConfig)
    ], UpdateNodePoolRequest.prototype, "nodeNetworkConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodePoolId" }),
        __metadata("design:type", String)
    ], UpdateNodePoolRequest.prototype, "nodePoolId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeVersion" }),
        __metadata("design:type", String)
    ], UpdateNodePoolRequest.prototype, "nodeVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectId" }),
        __metadata("design:type", String)
    ], UpdateNodePoolRequest.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceLabels" }),
        __metadata("design:type", ResourceLabels)
    ], UpdateNodePoolRequest.prototype, "resourceLabels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", NetworkTags)
    ], UpdateNodePoolRequest.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taints" }),
        __metadata("design:type", NodeTaints)
    ], UpdateNodePoolRequest.prototype, "taints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upgradeSettings" }),
        __metadata("design:type", UpgradeSettings)
    ], UpdateNodePoolRequest.prototype, "upgradeSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workloadMetadataConfig" }),
        __metadata("design:type", WorkloadMetadataConfig)
    ], UpdateNodePoolRequest.prototype, "workloadMetadataConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zone" }),
        __metadata("design:type", String)
    ], UpdateNodePoolRequest.prototype, "zone", void 0);
    return UpdateNodePoolRequest;
}(SpeakeasyBase));
export { UpdateNodePoolRequest };
