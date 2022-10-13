package shared

type TagMarshallerWrapped struct {
	Callback *string         `json:"callback"`
	Meta     *Meta           `json:"meta"`
	Results  []TagMarshaller `json:"results"`
}
