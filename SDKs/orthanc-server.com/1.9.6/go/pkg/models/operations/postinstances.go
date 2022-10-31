package operations

type PostInstancesRequests struct {
	ApplicationDicom []byte `request:"mediaType=application/dicom"`
	ApplicationZip   []byte `request:"mediaType=application/zip"`
}

type PostInstancesRequest struct {
	Request *PostInstancesRequests
}

type PostInstancesResponse struct {
	ContentType                        string
	PostInstances200ApplicationJSONAny *interface{}
	StatusCode                         int64
}
