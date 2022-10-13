package shared

type ProjectSettingsClassificationTypeEnum string

const (
	ProjectSettingsClassificationTypeEnumMulticlass ProjectSettingsClassificationTypeEnum = "Multiclass"
	ProjectSettingsClassificationTypeEnumMultilabel ProjectSettingsClassificationTypeEnum = "Multilabel"
)

type ProjectSettings struct {
	ClassificationType *ProjectSettingsClassificationTypeEnum `json:"classificationType" form:"name=classificationType"`
	DomainID           *string                                `json:"domainId" form:"name=domainId"`
}
