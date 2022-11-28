package shared

// ObjectID
// An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
type ObjectID struct {
	ObjectIDPath []int32 `json:"objectIdPath,omitempty"`
}
