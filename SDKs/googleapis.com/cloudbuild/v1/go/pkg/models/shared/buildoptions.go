package shared

type BuildOptionsLogStreamingOptionEnum string

const (
	BuildOptionsLogStreamingOptionEnumStreamDefault BuildOptionsLogStreamingOptionEnum = "STREAM_DEFAULT"
	BuildOptionsLogStreamingOptionEnumStreamOn      BuildOptionsLogStreamingOptionEnum = "STREAM_ON"
	BuildOptionsLogStreamingOptionEnumStreamOff     BuildOptionsLogStreamingOptionEnum = "STREAM_OFF"
)

type BuildOptionsLoggingEnum string

const (
	BuildOptionsLoggingEnumLoggingUnspecified BuildOptionsLoggingEnum = "LOGGING_UNSPECIFIED"
	BuildOptionsLoggingEnumLegacy             BuildOptionsLoggingEnum = "LEGACY"
	BuildOptionsLoggingEnumGcsOnly            BuildOptionsLoggingEnum = "GCS_ONLY"
	BuildOptionsLoggingEnumStackdriverOnly    BuildOptionsLoggingEnum = "STACKDRIVER_ONLY"
	BuildOptionsLoggingEnumCloudLoggingOnly   BuildOptionsLoggingEnum = "CLOUD_LOGGING_ONLY"
	BuildOptionsLoggingEnumNone               BuildOptionsLoggingEnum = "NONE"
)

type BuildOptionsMachineTypeEnum string

const (
	BuildOptionsMachineTypeEnumUnspecified BuildOptionsMachineTypeEnum = "UNSPECIFIED"
	BuildOptionsMachineTypeEnumN1Highcpu8  BuildOptionsMachineTypeEnum = "N1_HIGHCPU_8"
	BuildOptionsMachineTypeEnumN1Highcpu32 BuildOptionsMachineTypeEnum = "N1_HIGHCPU_32"
	BuildOptionsMachineTypeEnumE2Highcpu8  BuildOptionsMachineTypeEnum = "E2_HIGHCPU_8"
	BuildOptionsMachineTypeEnumE2Highcpu32 BuildOptionsMachineTypeEnum = "E2_HIGHCPU_32"
)

type BuildOptionsRequestedVerifyOptionEnum string

const (
	BuildOptionsRequestedVerifyOptionEnumNotVerified BuildOptionsRequestedVerifyOptionEnum = "NOT_VERIFIED"
	BuildOptionsRequestedVerifyOptionEnumVerified    BuildOptionsRequestedVerifyOptionEnum = "VERIFIED"
)

type BuildOptionsSourceProvenanceHashEnum string

const (
	BuildOptionsSourceProvenanceHashEnumNone   BuildOptionsSourceProvenanceHashEnum = "NONE"
	BuildOptionsSourceProvenanceHashEnumSha256 BuildOptionsSourceProvenanceHashEnum = "SHA256"
	BuildOptionsSourceProvenanceHashEnumMd5    BuildOptionsSourceProvenanceHashEnum = "MD5"
)

type BuildOptionsSubstitutionOptionEnum string

const (
	BuildOptionsSubstitutionOptionEnumMustMatch  BuildOptionsSubstitutionOptionEnum = "MUST_MATCH"
	BuildOptionsSubstitutionOptionEnumAllowLoose BuildOptionsSubstitutionOptionEnum = "ALLOW_LOOSE"
)

type BuildOptions struct {
	DiskSizeGb            *string                                `json:"diskSizeGb"`
	DynamicSubstitutions  *bool                                  `json:"dynamicSubstitutions"`
	Env                   []string                               `json:"env"`
	LogStreamingOption    *BuildOptionsLogStreamingOptionEnum    `json:"logStreamingOption"`
	Logging               *BuildOptionsLoggingEnum               `json:"logging"`
	MachineType           *BuildOptionsMachineTypeEnum           `json:"machineType"`
	Pool                  *PoolOption                            `json:"pool"`
	RequestedVerifyOption *BuildOptionsRequestedVerifyOptionEnum `json:"requestedVerifyOption"`
	SecretEnv             []string                               `json:"secretEnv"`
	SourceProvenanceHash  []BuildOptionsSourceProvenanceHashEnum `json:"sourceProvenanceHash"`
	SubstitutionOption    *BuildOptionsSubstitutionOptionEnum    `json:"substitutionOption"`
	Volumes               []Volume                               `json:"volumes"`
	WorkerPool            *string                                `json:"workerPool"`
}
