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
import { ResourceOptions } from "./resourceoptions";
import { ResourceManifest } from "./resourcemanifest";
// KubernetesResourceInput
/**
 * KubernetesResource contains the YAML manifests and configuration for Membership Kubernetes resources in the cluster. After CreateMembership or UpdateMembership, these resources should be re-applied in the cluster.
**/
var KubernetesResourceInput = /** @class */ (function (_super) {
    __extends(KubernetesResourceInput, _super);
    function KubernetesResourceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=membershipCrManifest" }),
        __metadata("design:type", String)
    ], KubernetesResourceInput.prototype, "membershipCrManifest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceOptions" }),
        __metadata("design:type", ResourceOptions)
    ], KubernetesResourceInput.prototype, "resourceOptions", void 0);
    return KubernetesResourceInput;
}(SpeakeasyBase));
export { KubernetesResourceInput };
// KubernetesResource
/**
 * KubernetesResource contains the YAML manifests and configuration for Membership Kubernetes resources in the cluster. After CreateMembership or UpdateMembership, these resources should be re-applied in the cluster.
**/
var KubernetesResource = /** @class */ (function (_super) {
    __extends(KubernetesResource, _super);
    function KubernetesResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectResources", elemType: ResourceManifest }),
        __metadata("design:type", Array)
    ], KubernetesResource.prototype, "connectResources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=membershipCrManifest" }),
        __metadata("design:type", String)
    ], KubernetesResource.prototype, "membershipCrManifest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=membershipResources", elemType: ResourceManifest }),
        __metadata("design:type", Array)
    ], KubernetesResource.prototype, "membershipResources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceOptions" }),
        __metadata("design:type", ResourceOptions)
    ], KubernetesResource.prototype, "resourceOptions", void 0);
    return KubernetesResource;
}(SpeakeasyBase));
export { KubernetesResource };
