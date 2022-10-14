package shared

type TargetWindowTargetWindowOptionEnum string

const (
	TargetWindowTargetWindowOptionEnumNewWindow     TargetWindowTargetWindowOptionEnum = "NEW_WINDOW"
	TargetWindowTargetWindowOptionEnumCurrentWindow TargetWindowTargetWindowOptionEnum = "CURRENT_WINDOW"
	TargetWindowTargetWindowOptionEnumCustom        TargetWindowTargetWindowOptionEnum = "CUSTOM"
)

type TargetWindow struct {
	CustomHTML         *string                             `json:"customHtml,omitempty"`
	TargetWindowOption *TargetWindowTargetWindowOptionEnum `json:"targetWindowOption,omitempty"`
}
