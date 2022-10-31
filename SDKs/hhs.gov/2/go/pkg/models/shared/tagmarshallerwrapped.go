package shared

type TagMarshallerWrapped struct {
	Callback *string         `json:"callback,omitempty"`
	Meta     *Meta           `json:"meta,omitempty"`
	Results  []TagMarshaller `json:"results,omitempty"`
}
