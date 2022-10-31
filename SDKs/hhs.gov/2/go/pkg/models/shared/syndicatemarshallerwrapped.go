package shared



type SyndicateMarshallerWrapped struct {
    Callback *string `json:"callback,omitempty"`
    Meta *Meta `json:"meta,omitempty"`
    Results []SyndicateMarshaller `json:"results,omitempty"`
    
}

