package shared

type DomainTypeEnum string

const (
	DomainTypeEnumClassification  DomainTypeEnum = "Classification"
	DomainTypeEnumObjectDetection DomainTypeEnum = "ObjectDetection"
)

type Domain struct {
	Enabled    *bool           `json:"enabled"`
	Exportable *bool           `json:"exportable"`
	ID         *string         `json:"id"`
	Name       *string         `json:"name"`
	Type       *DomainTypeEnum `json:"type"`
}
