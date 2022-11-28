import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature } from "./googledevtoolsremotebuildexecutionadminv1alphafeaturepolicyfeature";


export enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum {
    LinuxIsolationUnspecified = "LINUX_ISOLATION_UNSPECIFIED",
    Gvisor = "GVISOR",
    Off = "OFF"
}

export enum GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVmVerificationEnum {
    VmVerificationUnspecified = "VM_VERIFICATION_UNSPECIFIED",
    VmVerificationGcpToken = "VM_VERIFICATION_GCP_TOKEN",
    VmVerificationOff = "VM_VERIFICATION_OFF"
}


// GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy
/** 
 * FeaturePolicy defines features allowed to be used on RBE instances, as well as instance-wide behavior changes that take effect without opt-in or opt-out at usage time.
**/
export class GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerImageSources" })
  containerImageSources?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;

  @SpeakeasyMetadata({ data: "json, name=dockerAddCapabilities" })
  dockerAddCapabilities?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;

  @SpeakeasyMetadata({ data: "json, name=dockerChrootPath" })
  dockerChrootPath?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;

  @SpeakeasyMetadata({ data: "json, name=dockerNetwork" })
  dockerNetwork?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;

  @SpeakeasyMetadata({ data: "json, name=dockerPrivileged" })
  dockerPrivileged?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;

  @SpeakeasyMetadata({ data: "json, name=dockerRunAsContainerProvidedUser" })
  dockerRunAsContainerProvidedUser?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;

  @SpeakeasyMetadata({ data: "json, name=dockerRunAsRoot" })
  dockerRunAsRoot?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;

  @SpeakeasyMetadata({ data: "json, name=dockerRuntime" })
  dockerRuntime?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;

  @SpeakeasyMetadata({ data: "json, name=dockerSiblingContainers" })
  dockerSiblingContainers?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature;

  @SpeakeasyMetadata({ data: "json, name=linuxIsolation" })
  linuxIsolation?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum;

  @SpeakeasyMetadata({ data: "json, name=vmVerification" })
  vmVerification?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVmVerificationEnum;
}
