package shared

// CloudStorageFile
// The export file in Cloud Storage
type CloudStorageFile struct {
	BucketName *string `json:"bucketName,omitempty"`
	Md5Hash    *string `json:"md5Hash,omitempty"`
	ObjectName *string `json:"objectName,omitempty"`
	Size       *string `json:"size,omitempty"`
}
