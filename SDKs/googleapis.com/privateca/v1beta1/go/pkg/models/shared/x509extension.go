package shared

type X509Extension struct {
	Critical *bool     `json:"critical,omitempty"`
	ObjectID *ObjectID `json:"objectId,omitempty"`
	Value    *string   `json:"value,omitempty"`
}
