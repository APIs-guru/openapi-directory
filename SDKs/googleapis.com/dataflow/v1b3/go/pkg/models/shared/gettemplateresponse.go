package shared

type GetTemplateResponseTemplateTypeEnum string

const (
	GetTemplateResponseTemplateTypeEnumUnknown GetTemplateResponseTemplateTypeEnum = "UNKNOWN"
	GetTemplateResponseTemplateTypeEnumLegacy  GetTemplateResponseTemplateTypeEnum = "LEGACY"
	GetTemplateResponseTemplateTypeEnumFlex    GetTemplateResponseTemplateTypeEnum = "FLEX"
)

type GetTemplateResponse struct {
	Metadata        *TemplateMetadata                    `json:"metadata,omitempty"`
	RuntimeMetadata *RuntimeMetadata                     `json:"runtimeMetadata,omitempty"`
	Status          *Status                              `json:"status,omitempty"`
	TemplateType    *GetTemplateResponseTemplateTypeEnum `json:"templateType,omitempty"`
}
