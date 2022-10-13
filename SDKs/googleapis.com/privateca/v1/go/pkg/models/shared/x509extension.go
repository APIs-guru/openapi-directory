package shared

type X509Extension struct {
	Critical *bool     `json:"critical"`
	ObjectID *ObjectID `json:"objectId"`
	Value    *string   `json:"value"`
}
