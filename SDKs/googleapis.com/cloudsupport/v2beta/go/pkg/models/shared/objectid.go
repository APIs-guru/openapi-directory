package shared

// ObjectID
// # gdata.* are outside protos with mising documentation
type ObjectID struct {
	BucketName *string `json:"bucketName,omitempty"`
	Generation *string `json:"generation,omitempty"`
	ObjectName *string `json:"objectName,omitempty"`
}
