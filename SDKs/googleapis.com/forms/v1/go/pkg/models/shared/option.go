package shared

type OptionGoToActionEnum string

const (
	OptionGoToActionEnumGoToActionUnspecified OptionGoToActionEnum = "GO_TO_ACTION_UNSPECIFIED"
	OptionGoToActionEnumNextSection           OptionGoToActionEnum = "NEXT_SECTION"
	OptionGoToActionEnumRestartForm           OptionGoToActionEnum = "RESTART_FORM"
	OptionGoToActionEnumSubmitForm            OptionGoToActionEnum = "SUBMIT_FORM"
)

type Option struct {
	GoToAction    *OptionGoToActionEnum `json:"goToAction"`
	GoToSectionID *string               `json:"goToSectionId"`
	Image         *Image                `json:"image"`
	IsOther       *bool                 `json:"isOther"`
	Value         *string               `json:"value"`
}
