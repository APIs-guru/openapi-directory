package shared

type OptionGoToActionEnum string

const (
	OptionGoToActionEnumGoToActionUnspecified OptionGoToActionEnum = "GO_TO_ACTION_UNSPECIFIED"
	OptionGoToActionEnumNextSection           OptionGoToActionEnum = "NEXT_SECTION"
	OptionGoToActionEnumRestartForm           OptionGoToActionEnum = "RESTART_FORM"
	OptionGoToActionEnumSubmitForm            OptionGoToActionEnum = "SUBMIT_FORM"
)

type Option struct {
	GoToAction    *OptionGoToActionEnum `json:"goToAction,omitempty"`
	GoToSectionID *string               `json:"goToSectionId,omitempty"`
	Image         *Image                `json:"image,omitempty"`
	IsOther       *bool                 `json:"isOther,omitempty"`
	Value         *string               `json:"value,omitempty"`
}
