package shared

type GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum string

const (
	GoogleCloudDatalabelingV1beta1InstructionDataTypeEnumDataTypeUnspecified GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum = "DATA_TYPE_UNSPECIFIED"
	GoogleCloudDatalabelingV1beta1InstructionDataTypeEnumImage               GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum = "IMAGE"
	GoogleCloudDatalabelingV1beta1InstructionDataTypeEnumVideo               GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum = "VIDEO"
	GoogleCloudDatalabelingV1beta1InstructionDataTypeEnumText                GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum = "TEXT"
	GoogleCloudDatalabelingV1beta1InstructionDataTypeEnumGeneralData         GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum = "GENERAL_DATA"
)

type GoogleCloudDatalabelingV1beta1Instruction struct {
	BlockingResources []string                                               `json:"blockingResources"`
	CreateTime        *string                                                `json:"createTime"`
	CsvInstruction    *GoogleCloudDatalabelingV1beta1CsvInstruction          `json:"csvInstruction"`
	DataType          *GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum `json:"dataType"`
	Description       *string                                                `json:"description"`
	DisplayName       *string                                                `json:"displayName"`
	Name              *string                                                `json:"name"`
	PdfInstruction    *GoogleCloudDatalabelingV1beta1PdfInstruction          `json:"pdfInstruction"`
	UpdateTime        *string                                                `json:"updateTime"`
}
