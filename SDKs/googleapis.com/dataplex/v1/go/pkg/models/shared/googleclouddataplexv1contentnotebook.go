package shared

type GoogleCloudDataplexV1ContentNotebookKernelTypeEnum string

const (
	GoogleCloudDataplexV1ContentNotebookKernelTypeEnumKernelTypeUnspecified GoogleCloudDataplexV1ContentNotebookKernelTypeEnum = "KERNEL_TYPE_UNSPECIFIED"
	GoogleCloudDataplexV1ContentNotebookKernelTypeEnumPython3               GoogleCloudDataplexV1ContentNotebookKernelTypeEnum = "PYTHON3"
)

// GoogleCloudDataplexV1ContentNotebook
// Configuration for Notebook content.
type GoogleCloudDataplexV1ContentNotebook struct {
	KernelType *GoogleCloudDataplexV1ContentNotebookKernelTypeEnum `json:"kernelType,omitempty"`
}
