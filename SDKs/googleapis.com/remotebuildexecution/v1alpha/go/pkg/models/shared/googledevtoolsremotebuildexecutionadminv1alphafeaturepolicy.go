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

// GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy
// FeaturePolicy defines features allowed to be used on RBE instances, as well as instance-wide behavior changes that take effect without opt-in or opt-out at usage time.
type GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy struct {
	ContainerImageSources            *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature            `json:"containerImageSources,omitempty"`
	DockerAddCapabilities            *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature            `json:"dockerAddCapabilities,omitempty"`
	DockerChrootPath                 *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature            `json:"dockerChrootPath,omitempty"`
	DockerNetwork                    *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature            `json:"dockerNetwork,omitempty"`
	DockerPrivileged                 *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature            `json:"dockerPrivileged,omitempty"`
	DockerRunAsContainerProvidedUser *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature            `json:"dockerRunAsContainerProvidedUser,omitempty"`
	DockerRunAsRoot                  *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature            `json:"dockerRunAsRoot,omitempty"`
	DockerRuntime                    *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature            `json:"dockerRuntime,omitempty"`
	DockerSiblingContainers          *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature            `json:"dockerSiblingContainers,omitempty"`
	LinuxIsolation                   *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyLinuxIsolationEnum `json:"linuxIsolation,omitempty"`
	VMVerification                   *GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyVMVerificationEnum `json:"vmVerification,omitempty"`
}
