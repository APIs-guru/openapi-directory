package operations

type GetEnsemblTranscriptMappingUsingGetPathParams struct {
	RgdID int32 `pathParam:"style=simple,explode=false,name=rgdId"`
}

type GetEnsemblTranscriptMappingUsingGetRequest struct {
	PathParams GetEnsemblTranscriptMappingUsingGetPathParams
}

type GetEnsemblTranscriptMappingUsingGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
