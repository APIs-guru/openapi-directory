package shared

type ChoiceQuestionTypeEnum string

const (
	ChoiceQuestionTypeEnumChoiceTypeUnspecified ChoiceQuestionTypeEnum = "CHOICE_TYPE_UNSPECIFIED"
	ChoiceQuestionTypeEnumRadio                 ChoiceQuestionTypeEnum = "RADIO"
	ChoiceQuestionTypeEnumCheckbox              ChoiceQuestionTypeEnum = "CHECKBOX"
	ChoiceQuestionTypeEnumDropDown              ChoiceQuestionTypeEnum = "DROP_DOWN"
)

type ChoiceQuestion struct {
	Options []Option                `json:"options"`
	Shuffle *bool                   `json:"shuffle"`
	Type    *ChoiceQuestionTypeEnum `json:"type"`
}
