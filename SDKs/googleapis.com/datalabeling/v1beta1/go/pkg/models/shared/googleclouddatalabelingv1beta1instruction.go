package shared

type GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum string

const (
	GoogleCloudDatalabelingV1beta1InstructionDataTypeEnumDataTypeUnspecified GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum = "DATA_TYPE_UNSPECIFIED"
	GoogleCloudDatalabelingV1beta1InstructionDataTypeEnumImage               GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum = "IMAGE"
	GoogleCloudDatalabelingV1beta1InstructionDataTypeEnumVideo               GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum = "VIDEO"
	GoogleCloudDatalabelingV1beta1InstructionDataTypeEnumText                GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum = "TEXT"
	GoogleCloudDatalabelingV1beta1InstructionDataTypeEnumGeneralData         GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum = "GENERAL_DATA"
)

// GoogleCloudDatalabelingV1beta1Instruction
// Instruction of how to perform the labeling task for human operators. Currently only PDF instruction is supported.
type GoogleCloudDatalabelingV1beta1Instruction struct {
	BlockingResources []string                                               `json:"blockingResources,omitempty"`
	CreateTime        *string                                                `json:"createTime,omitempty"`
	CsvInstruction    *GoogleCloudDatalabelingV1beta1CsvInstruction          `json:"csvInstruction,omitempty"`
	DataType          *GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum `json:"dataType,omitempty"`
	Description       *string                                                `json:"description,omitempty"`
	DisplayName       *string                                                `json:"displayName,omitempty"`
	Name              *string                                                `json:"name,omitempty"`
	PdfInstruction    *GoogleCloudDatalabelingV1beta1PdfInstruction          `json:"pdfInstruction,omitempty"`
	UpdateTime        *string                                                `json:"updateTime,omitempty"`
}
