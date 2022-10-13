package shared

type GetTemplateResponseTemplateTypeEnum string

const (
	GetTemplateResponseTemplateTypeEnumUnknown GetTemplateResponseTemplateTypeEnum = "UNKNOWN"
	GetTemplateResponseTemplateTypeEnumLegacy  GetTemplateResponseTemplateTypeEnum = "LEGACY"
	GetTemplateResponseTemplateTypeEnumFlex    GetTemplateResponseTemplateTypeEnum = "FLEX"
)

type GetTemplateResponse struct {
	Metadata        *TemplateMetadata                    `json:"metadata"`
	RuntimeMetadata *RuntimeMetadata                     `json:"runtimeMetadata"`
	Status          *Status                              `json:"status"`
	TemplateType    *GetTemplateResponseTemplateTypeEnum `json:"templateType"`
}
