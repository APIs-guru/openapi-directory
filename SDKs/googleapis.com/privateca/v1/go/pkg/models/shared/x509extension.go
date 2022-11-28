package shared

// X509Extension
// An X509Extension specifies an X.509 extension, which may be used in different parts of X.509 objects like certificates, CSRs, and CRLs.
type X509Extension struct {
	Critical *bool     `json:"critical,omitempty"`
	ObjectID *ObjectID `json:"objectId,omitempty"`
	Value    *string   `json:"value,omitempty"`
}
