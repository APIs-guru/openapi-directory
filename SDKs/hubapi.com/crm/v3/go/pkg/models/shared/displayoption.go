package shared

type DisplayOptionTypeEnum string

const (
	DisplayOptionTypeEnumDefault DisplayOptionTypeEnum = "DEFAULT"
	DisplayOptionTypeEnumSuccess DisplayOptionTypeEnum = "SUCCESS"
	DisplayOptionTypeEnumWarning DisplayOptionTypeEnum = "WARNING"
	DisplayOptionTypeEnumDanger  DisplayOptionTypeEnum = "DANGER"
	DisplayOptionTypeEnumInfo    DisplayOptionTypeEnum = "INFO"
)

// DisplayOption
// Option definition for STATUS dataTypes.
type DisplayOption struct {
	Label string                `json:"label"`
	Name  string                `json:"name"`
	Type  DisplayOptionTypeEnum `json:"type"`
}
