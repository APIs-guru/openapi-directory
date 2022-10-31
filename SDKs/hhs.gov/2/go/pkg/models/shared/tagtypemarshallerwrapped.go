package shared



type TagTypeMarshallerWrapped struct {
    Callback *string `json:"callback,omitempty"`
    Meta *Meta `json:"meta,omitempty"`
    Results []TagTypeMarshaller `json:"results,omitempty"`
    
}

