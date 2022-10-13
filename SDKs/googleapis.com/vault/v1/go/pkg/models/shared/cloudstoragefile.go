package shared

type CloudStorageFile struct {
	BucketName *string `json:"bucketName"`
	Md5Hash    *string `json:"md5Hash"`
	ObjectName *string `json:"objectName"`
	Size       *string `json:"size"`
}
