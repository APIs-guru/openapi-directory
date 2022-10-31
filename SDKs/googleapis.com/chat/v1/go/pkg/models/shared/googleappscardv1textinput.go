package shared




type GoogleAppsCardV1TextInputTypeEnum string

const (
    GoogleAppsCardV1TextInputTypeEnumSingleLine GoogleAppsCardV1TextInputTypeEnum = "SINGLE_LINE"
GoogleAppsCardV1TextInputTypeEnumMultipleLine GoogleAppsCardV1TextInputTypeEnum = "MULTIPLE_LINE"
)


type GoogleAppsCardV1TextInput struct {
    AutoCompleteAction *GoogleAppsCardV1Action `json:"autoCompleteAction,omitempty"`
    HintText *string `json:"hintText,omitempty"`
    InitialSuggestions *GoogleAppsCardV1Suggestions `json:"initialSuggestions,omitempty"`
    Label *string `json:"label,omitempty"`
    Name *string `json:"name,omitempty"`
    OnChangeAction *GoogleAppsCardV1Action `json:"onChangeAction,omitempty"`
    Type *GoogleAppsCardV1TextInputTypeEnum `json:"type,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

