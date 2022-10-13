package operations

type PostPatientsIDArchivePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostPatientsIDArchiveRequest struct {
	PathParams PostPatientsIDArchivePathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type PostPatientsIDArchiveResponse struct {
	Body                                       []byte
	ContentType                                string
	PostPatientsIDArchive200ApplicationJSONAny *interface{}
	StatusCode                                 int64
}
