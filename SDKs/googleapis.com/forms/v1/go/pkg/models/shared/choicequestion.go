package shared

type ChoiceQuestionTypeEnum string

const (
	ChoiceQuestionTypeEnumChoiceTypeUnspecified ChoiceQuestionTypeEnum = "CHOICE_TYPE_UNSPECIFIED"
	ChoiceQuestionTypeEnumRadio                 ChoiceQuestionTypeEnum = "RADIO"
	ChoiceQuestionTypeEnumCheckbox              ChoiceQuestionTypeEnum = "CHECKBOX"
	ChoiceQuestionTypeEnumDropDown              ChoiceQuestionTypeEnum = "DROP_DOWN"
)

// ChoiceQuestionInput
// A radio/checkbox/dropdown question.
type ChoiceQuestionInput struct {
	Options []OptionInput           `json:"options,omitempty"`
	Shuffle *bool                   `json:"shuffle,omitempty"`
	Type    *ChoiceQuestionTypeEnum `json:"type,omitempty"`
}

// ChoiceQuestion
// A radio/checkbox/dropdown question.
type ChoiceQuestion struct {
	Options []Option                `json:"options,omitempty"`
	Shuffle *bool                   `json:"shuffle,omitempty"`
	Type    *ChoiceQuestionTypeEnum `json:"type,omitempty"`
}
