package shared

type GoogleAppsCardV1TextInputTypeEnum string

const (
	GoogleAppsCardV1TextInputTypeEnumSingleLine   GoogleAppsCardV1TextInputTypeEnum = "SINGLE_LINE"
	GoogleAppsCardV1TextInputTypeEnumMultipleLine GoogleAppsCardV1TextInputTypeEnum = "MULTIPLE_LINE"
)

type GoogleAppsCardV1TextInput struct {
	AutoCompleteAction *GoogleAppsCardV1Action            `json:"autoCompleteAction"`
	HintText           *string                            `json:"hintText"`
	InitialSuggestions *GoogleAppsCardV1Suggestions       `json:"initialSuggestions"`
	Label              *string                            `json:"label"`
	Name               *string                            `json:"name"`
	OnChangeAction     *GoogleAppsCardV1Action            `json:"onChangeAction"`
	Type               *GoogleAppsCardV1TextInputTypeEnum `json:"type"`
	Value              *string                            `json:"value"`
}
