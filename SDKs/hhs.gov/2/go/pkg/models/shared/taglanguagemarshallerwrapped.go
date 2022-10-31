package shared



type TagLanguageMarshallerWrapped struct {
    Callback *string `json:"callback,omitempty"`
    Meta *Meta `json:"meta,omitempty"`
    Results []TagLanguageMarshaller `json:"results,omitempty"`
    
}

