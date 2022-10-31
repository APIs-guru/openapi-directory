package shared




type BuildOptionsLogStreamingOptionEnum string

const (
    BuildOptionsLogStreamingOptionEnumStreamDefault BuildOptionsLogStreamingOptionEnum = "STREAM_DEFAULT"
BuildOptionsLogStreamingOptionEnumStreamOn BuildOptionsLogStreamingOptionEnum = "STREAM_ON"
BuildOptionsLogStreamingOptionEnumStreamOff BuildOptionsLogStreamingOptionEnum = "STREAM_OFF"
)



type BuildOptionsLoggingEnum string

const (
    BuildOptionsLoggingEnumLoggingUnspecified BuildOptionsLoggingEnum = "LOGGING_UNSPECIFIED"
BuildOptionsLoggingEnumLegacy BuildOptionsLoggingEnum = "LEGACY"
BuildOptionsLoggingEnumGcsOnly BuildOptionsLoggingEnum = "GCS_ONLY"
BuildOptionsLoggingEnumStackdriverOnly BuildOptionsLoggingEnum = "STACKDRIVER_ONLY"
BuildOptionsLoggingEnumCloudLoggingOnly BuildOptionsLoggingEnum = "CLOUD_LOGGING_ONLY"
BuildOptionsLoggingEnumNone BuildOptionsLoggingEnum = "NONE"
)



type BuildOptionsMachineTypeEnum string

const (
    BuildOptionsMachineTypeEnumUnspecified BuildOptionsMachineTypeEnum = "UNSPECIFIED"
BuildOptionsMachineTypeEnumN1Highcpu8 BuildOptionsMachineTypeEnum = "N1_HIGHCPU_8"
BuildOptionsMachineTypeEnumN1Highcpu32 BuildOptionsMachineTypeEnum = "N1_HIGHCPU_32"
BuildOptionsMachineTypeEnumE2Highcpu8 BuildOptionsMachineTypeEnum = "E2_HIGHCPU_8"
BuildOptionsMachineTypeEnumE2Highcpu32 BuildOptionsMachineTypeEnum = "E2_HIGHCPU_32"
)



type BuildOptionsRequestedVerifyOptionEnum string

const (
    BuildOptionsRequestedVerifyOptionEnumNotVerified BuildOptionsRequestedVerifyOptionEnum = "NOT_VERIFIED"
BuildOptionsRequestedVerifyOptionEnumVerified BuildOptionsRequestedVerifyOptionEnum = "VERIFIED"
)



type BuildOptionsSourceProvenanceHashEnum string

const (
    BuildOptionsSourceProvenanceHashEnumNone BuildOptionsSourceProvenanceHashEnum = "NONE"
BuildOptionsSourceProvenanceHashEnumSha256 BuildOptionsSourceProvenanceHashEnum = "SHA256"
BuildOptionsSourceProvenanceHashEnumMd5 BuildOptionsSourceProvenanceHashEnum = "MD5"
)



type BuildOptionsSubstitutionOptionEnum string

const (
    BuildOptionsSubstitutionOptionEnumMustMatch BuildOptionsSubstitutionOptionEnum = "MUST_MATCH"
BuildOptionsSubstitutionOptionEnumAllowLoose BuildOptionsSubstitutionOptionEnum = "ALLOW_LOOSE"
)


type BuildOptions struct {
    DiskSizeGb *string `json:"diskSizeGb,omitempty"`
    DynamicSubstitutions *bool `json:"dynamicSubstitutions,omitempty"`
    Env []string `json:"env,omitempty"`
    LogStreamingOption *BuildOptionsLogStreamingOptionEnum `json:"logStreamingOption,omitempty"`
    Logging *BuildOptionsLoggingEnum `json:"logging,omitempty"`
    MachineType *BuildOptionsMachineTypeEnum `json:"machineType,omitempty"`
    Pool *PoolOption `json:"pool,omitempty"`
    RequestedVerifyOption *BuildOptionsRequestedVerifyOptionEnum `json:"requestedVerifyOption,omitempty"`
    SecretEnv []string `json:"secretEnv,omitempty"`
    SourceProvenanceHash []BuildOptionsSourceProvenanceHashEnum `json:"sourceProvenanceHash,omitempty"`
    SubstitutionOption *BuildOptionsSubstitutionOptionEnum `json:"substitutionOption,omitempty"`
    Volumes []Volume `json:"volumes,omitempty"`
    WorkerPool *string `json:"workerPool,omitempty"`
    
}

