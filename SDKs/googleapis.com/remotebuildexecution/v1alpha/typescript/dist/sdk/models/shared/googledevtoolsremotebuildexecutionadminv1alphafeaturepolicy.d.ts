import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature } from "./googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature";
export declare enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum {
    LinuxIsolationUnspecified = "LINUX_ISOLATION_UNSPECIFIED",
    Gvisor = "GVISOR",
    Off = "OFF"
}
export declare enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVmVerificationEnum {
    VmVerificationUnspecified = "VM_VERIFICATION_UNSPECIFIED",
    VmVerificationGcpToken = "VM_VERIFICATION_GCP_TOKEN",
    VmVerificationOff = "VM_VERIFICATION_OFF"
}
/**
 * FeaturePolicy defines features allowed to be used on RBE instances, as well as instance-wide behavior changes that take effect without opt-in or opt-out at usage time.
**/
export declare class GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy extends SpeakeasyBase {
    containerImageSources?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;
    dockerAddCapabilities?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;
    dockerChrootPath?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;
    dockerNetwork?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;
    dockerPrivileged?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;
    dockerRunAsContainerProvidedUser?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;
    dockerRunAsRoot?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;
    dockerRuntime?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;
    dockerSiblingContainers?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;
    linuxIsolation?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum;
    vmVerification?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVmVerificationEnum;
}
