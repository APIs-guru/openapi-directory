package operations

type GetLiveStreamFilePathParams struct {
	Container string `pathParam:"style=simple,explode=false,name=container"`
	StreamID  string `pathParam:"style=simple,explode=false,name=streamId"`
}

type GetLiveStreamFileRequest struct {
	PathParams GetLiveStreamFilePathParams
}

type GetLiveStreamFileResponse struct {
	ContentType                                   string
	GetLiveStreamFile200VideoWildcardBinaryString []byte
	ProblemDetails                                map[string]interface{}
	StatusCode                                    int64
}
