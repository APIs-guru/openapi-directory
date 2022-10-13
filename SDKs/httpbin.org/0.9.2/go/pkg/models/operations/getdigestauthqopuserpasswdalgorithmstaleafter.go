package operations

type GetDigestAuthQopUserPasswdAlgorithmStaleAfterPathParams struct {
	Algorithm  string `pathParam:"style=simple,explode=false,name=algorithm"`
	Passwd     string `pathParam:"style=simple,explode=false,name=passwd"`
	Qop        string `pathParam:"style=simple,explode=false,name=qop"`
	StaleAfter string `pathParam:"style=simple,explode=false,name=stale_after"`
	User       string `pathParam:"style=simple,explode=false,name=user"`
}

type GetDigestAuthQopUserPasswdAlgorithmStaleAfterRequest struct {
	PathParams GetDigestAuthQopUserPasswdAlgorithmStaleAfterPathParams
}

type GetDigestAuthQopUserPasswdAlgorithmStaleAfterResponse struct {
	ContentType string
	StatusCode  int64
}
