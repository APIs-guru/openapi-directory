package shared




type ExecutionTemplateJobTypeEnum string

const (
    ExecutionTemplateJobTypeEnumJobTypeUnspecified ExecutionTemplateJobTypeEnum = "JOB_TYPE_UNSPECIFIED"
ExecutionTemplateJobTypeEnumVertexAi ExecutionTemplateJobTypeEnum = "VERTEX_AI"
ExecutionTemplateJobTypeEnumDataproc ExecutionTemplateJobTypeEnum = "DATAPROC"
)



type ExecutionTemplateScaleTierEnum string

const (
    ExecutionTemplateScaleTierEnumScaleTierUnspecified ExecutionTemplateScaleTierEnum = "SCALE_TIER_UNSPECIFIED"
ExecutionTemplateScaleTierEnumBasic ExecutionTemplateScaleTierEnum = "BASIC"
ExecutionTemplateScaleTierEnumStandard1 ExecutionTemplateScaleTierEnum = "STANDARD_1"
ExecutionTemplateScaleTierEnumPremium1 ExecutionTemplateScaleTierEnum = "PREMIUM_1"
ExecutionTemplateScaleTierEnumBasicGpu ExecutionTemplateScaleTierEnum = "BASIC_GPU"
ExecutionTemplateScaleTierEnumBasicTpu ExecutionTemplateScaleTierEnum = "BASIC_TPU"
ExecutionTemplateScaleTierEnumCustom ExecutionTemplateScaleTierEnum = "CUSTOM"
)


type ExecutionTemplate struct {
    AcceleratorConfig *SchedulerAcceleratorConfig `json:"acceleratorConfig,omitempty"`
    ContainerImageURI *string `json:"containerImageUri,omitempty"`
    DataprocParameters *DataprocParameters `json:"dataprocParameters,omitempty"`
    InputNotebookFile *string `json:"inputNotebookFile,omitempty"`
    JobType *ExecutionTemplateJobTypeEnum `json:"jobType,omitempty"`
    KernelSpec *string `json:"kernelSpec,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    MasterType *string `json:"masterType,omitempty"`
    OutputNotebookFolder *string `json:"outputNotebookFolder,omitempty"`
    Parameters *string `json:"parameters,omitempty"`
    ParamsYamlFile *string `json:"paramsYamlFile,omitempty"`
    ScaleTier *ExecutionTemplateScaleTierEnum `json:"scaleTier,omitempty"`
    ServiceAccount *string `json:"serviceAccount,omitempty"`
    Tensorboard *string `json:"tensorboard,omitempty"`
    VertexAiParameters *VertexAiParameters `json:"vertexAiParameters,omitempty"`
    
}

