package shared

type SyndicateMarshallerWrapped struct {
	Callback *string               `json:"callback"`
	Meta     *Meta                 `json:"meta"`
	Results  []SyndicateMarshaller `json:"results"`
}
