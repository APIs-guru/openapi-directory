package shared

type DomainTypeEnum string

const (
	DomainTypeEnumClassification  DomainTypeEnum = "Classification"
	DomainTypeEnumObjectDetection DomainTypeEnum = "ObjectDetection"
)

type Domain struct {
	Enabled    *bool           `json:"enabled,omitempty"`
	Exportable *bool           `json:"exportable,omitempty"`
	ID         *string         `json:"id,omitempty"`
	Name       *string         `json:"name,omitempty"`
	Type       *DomainTypeEnum `json:"type,omitempty"`
}
