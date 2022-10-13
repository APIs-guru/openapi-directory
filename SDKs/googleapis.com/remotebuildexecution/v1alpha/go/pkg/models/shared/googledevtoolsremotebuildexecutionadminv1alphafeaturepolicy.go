package shared

type GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum string

const (
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnumLinuxIsolationUnspecified GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum = "LINUX_ISOLATION_UNSPECIFIED"
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnumGvisor                    GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum = "GVISOR"
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnumOff                       GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum = "OFF"
)

type GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVMVerificationEnum string

const (
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVMVerificationEnumVMVerificationUnspecified GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVMVerificationEnum = "VM_VERIFICATION_UNSPECIFIED"
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVMVerificationEnumVMVerificationGcpToken    GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVMVerificationEnum = "VM_VERIFICATION_GCP_TOKEN"
	GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVMVerificationEnumVMVerificationOff         GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVMVerificationEnum = "VM_VERIFICATION_OFF"
)

type GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy struct {
	ContainerImageSources            *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature            `json:"containerImageSources"`
	DockerAddCapabilities            *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature            `json:"dockerAddCapabilities"`
	DockerChrootPath                 *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature            `json:"dockerChrootPath"`
	DockerNetwork                    *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature            `json:"dockerNetwork"`
	DockerPrivileged                 *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature            `json:"dockerPrivileged"`
	DockerRunAsContainerProvidedUser *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature            `json:"dockerRunAsContainerProvidedUser"`
	DockerRunAsRoot                  *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature            `json:"dockerRunAsRoot"`
	DockerRuntime                    *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature            `json:"dockerRuntime"`
	DockerSiblingContainers          *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature            `json:"dockerSiblingContainers"`
	LinuxIsolation                   *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum `json:"linuxIsolation"`
	VMVerification                   *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVMVerificationEnum `json:"vmVerification"`
}
