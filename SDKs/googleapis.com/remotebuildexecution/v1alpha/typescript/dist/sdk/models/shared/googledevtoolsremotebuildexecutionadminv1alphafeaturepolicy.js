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
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature } from "./googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature";
export var GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum;
(function (GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum) {
    GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum["LinuxIsolationUnspecified"] = "LINUX_ISOLATION_UNSPECIFIED";
    GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum["Gvisor"] = "GVISOR";
    GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum["Off"] = "OFF";
})(GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum || (GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum = {}));
export var GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVmVerificationEnum;
(function (GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVmVerificationEnum) {
    GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVmVerificationEnum["VmVerificationUnspecified"] = "VM_VERIFICATION_UNSPECIFIED";
    GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVmVerificationEnum["VmVerificationGcpToken"] = "VM_VERIFICATION_GCP_TOKEN";
    GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVmVerificationEnum["VmVerificationOff"] = "VM_VERIFICATION_OFF";
})(GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVmVerificationEnum || (GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVmVerificationEnum = {}));
// GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy
/**
 * FeaturePolicy defines features allowed to be used on RBE instances, as well as instance-wide behavior changes that take effect without opt-in or opt-out at usage time.
**/
var GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy = /** @class */ (function (_super) {
    __extends(GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy, _super);
    function GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containerImageSources" }),
        __metadata("design:type", GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature)
    ], GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy.prototype, "containerImageSources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dockerAddCapabilities" }),
        __metadata("design:type", GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature)
    ], GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy.prototype, "dockerAddCapabilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dockerChrootPath" }),
        __metadata("design:type", GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature)
    ], GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy.prototype, "dockerChrootPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dockerNetwork" }),
        __metadata("design:type", GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature)
    ], GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy.prototype, "dockerNetwork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dockerPrivileged" }),
        __metadata("design:type", GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature)
    ], GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy.prototype, "dockerPrivileged", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dockerRunAsContainerProvidedUser" }),
        __metadata("design:type", GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature)
    ], GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy.prototype, "dockerRunAsContainerProvidedUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dockerRunAsRoot" }),
        __metadata("design:type", GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature)
    ], GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy.prototype, "dockerRunAsRoot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dockerRuntime" }),
        __metadata("design:type", GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature)
    ], GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy.prototype, "dockerRuntime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dockerSiblingContainers" }),
        __metadata("design:type", GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature)
    ], GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy.prototype, "dockerSiblingContainers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linuxIsolation" }),
        __metadata("design:type", String)
    ], GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy.prototype, "linuxIsolation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmVerification" }),
        __metadata("design:type", String)
    ], GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy.prototype, "vmVerification", void 0);
    return GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy;
}(SpeakeasyBase));
export { GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy };
