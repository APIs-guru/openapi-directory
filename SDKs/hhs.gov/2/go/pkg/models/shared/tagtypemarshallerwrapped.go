package shared

type TagTypeMarshallerWrapped struct {
	Callback *string             `json:"callback"`
	Meta     *Meta               `json:"meta"`
	Results  []TagTypeMarshaller `json:"results"`
}
