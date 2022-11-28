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
import { ApplianceCluster } from "./appliancecluster";
import { EdgeCluster } from "./edgecluster";
import { GkeCluster } from "./gkecluster";
import { KubernetesMetadata } from "./kubernetesmetadata";
import { KubernetesResource } from "./kubernetesresource";
import { MultiCloudCluster } from "./multicloudcluster";
import { OnPremCluster } from "./onpremcluster";
import { GkeClusterInput } from "./gkecluster";
import { KubernetesResourceInput } from "./kubernetesresource";
import { MultiCloudClusterInput } from "./multicloudcluster";
import { OnPremClusterInput } from "./onpremcluster";
// MembershipEndpoint
/**
 * MembershipEndpoint contains information needed to contact a Kubernetes API, endpoint and any additional Kubernetes metadata.
**/
var MembershipEndpoint = /** @class */ (function (_super) {
    __extends(MembershipEndpoint, _super);
    function MembershipEndpoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applianceCluster" }),
        __metadata("design:type", ApplianceCluster)
    ], MembershipEndpoint.prototype, "applianceCluster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=edgeCluster" }),
        __metadata("design:type", EdgeCluster)
    ], MembershipEndpoint.prototype, "edgeCluster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gkeCluster" }),
        __metadata("design:type", GkeCluster)
    ], MembershipEndpoint.prototype, "gkeCluster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kubernetesMetadata" }),
        __metadata("design:type", KubernetesMetadata)
    ], MembershipEndpoint.prototype, "kubernetesMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kubernetesResource" }),
        __metadata("design:type", KubernetesResource)
    ], MembershipEndpoint.prototype, "kubernetesResource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multiCloudCluster" }),
        __metadata("design:type", MultiCloudCluster)
    ], MembershipEndpoint.prototype, "multiCloudCluster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onPremCluster" }),
        __metadata("design:type", OnPremCluster)
    ], MembershipEndpoint.prototype, "onPremCluster", void 0);
    return MembershipEndpoint;
}(SpeakeasyBase));
export { MembershipEndpoint };
// MembershipEndpointInput
/**
 * MembershipEndpoint contains information needed to contact a Kubernetes API, endpoint and any additional Kubernetes metadata.
**/
var MembershipEndpointInput = /** @class */ (function (_super) {
    __extends(MembershipEndpointInput, _super);
    function MembershipEndpointInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applianceCluster" }),
        __metadata("design:type", ApplianceCluster)
    ], MembershipEndpointInput.prototype, "applianceCluster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=edgeCluster" }),
        __metadata("design:type", EdgeCluster)
    ], MembershipEndpointInput.prototype, "edgeCluster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gkeCluster" }),
        __metadata("design:type", GkeClusterInput)
    ], MembershipEndpointInput.prototype, "gkeCluster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kubernetesResource" }),
        __metadata("design:type", KubernetesResourceInput)
    ], MembershipEndpointInput.prototype, "kubernetesResource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multiCloudCluster" }),
        __metadata("design:type", MultiCloudClusterInput)
    ], MembershipEndpointInput.prototype, "multiCloudCluster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onPremCluster" }),
        __metadata("design:type", OnPremClusterInput)
    ], MembershipEndpointInput.prototype, "onPremCluster", void 0);
    return MembershipEndpointInput;
}(SpeakeasyBase));
export { MembershipEndpointInput };
