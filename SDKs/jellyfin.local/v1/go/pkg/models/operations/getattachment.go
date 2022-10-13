package operations

type GetAttachmentPathParams struct {
	Index         int32  `pathParam:"style=simple,explode=false,name=index"`
	MediaSourceID string `pathParam:"style=simple,explode=false,name=mediaSourceId"`
	VideoID       string `pathParam:"style=simple,explode=false,name=videoId"`
}

type GetAttachmentRequest struct {
	PathParams GetAttachmentPathParams
}

type GetAttachmentResponse struct {
	ContentType                                        string
	GetAttachment200ApplicationOctetStreamBinaryString []byte
	ProblemDetails                                     map[string]interface{}
	StatusCode                                         int64
}
