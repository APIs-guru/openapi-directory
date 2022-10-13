package shared

type GdataObjectID struct {
	BucketName *string `json:"bucketName"`
	Generation *string `json:"generation"`
	ObjectName *string `json:"objectName"`
}
