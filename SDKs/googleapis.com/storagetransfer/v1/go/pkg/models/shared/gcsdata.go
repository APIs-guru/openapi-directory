package shared

// GcsData
// In a GcsData resource, an object's name is the Cloud Storage object's name and its "last modification time" refers to the object's `updated` property of Cloud Storage objects, which changes when the content or the metadata of the object is updated.
type GcsData struct {
	BucketName *string `json:"bucketName,omitempty"`
	Path       *string `json:"path,omitempty"`
}
