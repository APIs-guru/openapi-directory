package shared

type OptionGoToActionEnum string

const (
	OptionGoToActionEnumGoToActionUnspecified OptionGoToActionEnum = "GO_TO_ACTION_UNSPECIFIED"
	OptionGoToActionEnumNextSection           OptionGoToActionEnum = "NEXT_SECTION"
	OptionGoToActionEnumRestartForm           OptionGoToActionEnum = "RESTART_FORM"
	OptionGoToActionEnumSubmitForm            OptionGoToActionEnum = "SUBMIT_FORM"
)

// OptionInput
// An option for a Choice question.
type OptionInput struct {
	GoToAction    *OptionGoToActionEnum `json:"goToAction,omitempty"`
	GoToSectionID *string               `json:"goToSectionId,omitempty"`
	Image         *ImageInput           `json:"image,omitempty"`
	IsOther       *bool                 `json:"isOther,omitempty"`
	Value         *string               `json:"value,omitempty"`
}

// Option
// An option for a Choice question.
type Option struct {
	GoToAction    *OptionGoToActionEnum `json:"goToAction,omitempty"`
	GoToSectionID *string               `json:"goToSectionId,omitempty"`
	Image         *Image                `json:"image,omitempty"`
	IsOther       *bool                 `json:"isOther,omitempty"`
	Value         *string               `json:"value,omitempty"`
}
