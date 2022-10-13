package shared

type ExecutionTemplateJobTypeEnum string

const (
	ExecutionTemplateJobTypeEnumJobTypeUnspecified ExecutionTemplateJobTypeEnum = "JOB_TYPE_UNSPECIFIED"
	ExecutionTemplateJobTypeEnumVertexAi           ExecutionTemplateJobTypeEnum = "VERTEX_AI"
	ExecutionTemplateJobTypeEnumDataproc           ExecutionTemplateJobTypeEnum = "DATAPROC"
)

type ExecutionTemplateScaleTierEnum string

const (
	ExecutionTemplateScaleTierEnumScaleTierUnspecified ExecutionTemplateScaleTierEnum = "SCALE_TIER_UNSPECIFIED"
	ExecutionTemplateScaleTierEnumBasic                ExecutionTemplateScaleTierEnum = "BASIC"
	ExecutionTemplateScaleTierEnumStandard1            ExecutionTemplateScaleTierEnum = "STANDARD_1"
	ExecutionTemplateScaleTierEnumPremium1             ExecutionTemplateScaleTierEnum = "PREMIUM_1"
	ExecutionTemplateScaleTierEnumBasicGpu             ExecutionTemplateScaleTierEnum = "BASIC_GPU"
	ExecutionTemplateScaleTierEnumBasicTpu             ExecutionTemplateScaleTierEnum = "BASIC_TPU"
	ExecutionTemplateScaleTierEnumCustom               ExecutionTemplateScaleTierEnum = "CUSTOM"
)

type ExecutionTemplate struct {
	AcceleratorConfig    *SchedulerAcceleratorConfig     `json:"acceleratorConfig"`
	ContainerImageURI    *string                         `json:"containerImageUri"`
	DataprocParameters   *DataprocParameters             `json:"dataprocParameters"`
	InputNotebookFile    *string                         `json:"inputNotebookFile"`
	JobType              *ExecutionTemplateJobTypeEnum   `json:"jobType"`
	KernelSpec           *string                         `json:"kernelSpec"`
	Labels               map[string]string               `json:"labels"`
	MasterType           *string                         `json:"masterType"`
	OutputNotebookFolder *string                         `json:"outputNotebookFolder"`
	Parameters           *string                         `json:"parameters"`
	ParamsYamlFile       *string                         `json:"paramsYamlFile"`
	ScaleTier            *ExecutionTemplateScaleTierEnum `json:"scaleTier"`
	ServiceAccount       *string                         `json:"serviceAccount"`
	Tensorboard          *string                         `json:"tensorboard"`
	VertexAiParameters   *VertexAiParameters             `json:"vertexAiParameters"`
}
