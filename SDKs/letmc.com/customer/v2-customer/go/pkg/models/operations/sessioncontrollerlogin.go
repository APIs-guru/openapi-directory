package operations

type SessionControllerLoginPathParams struct {
	ShortName string `pathParam:"style=simple,explode=false,name=shortName"`
}

type SessionControllerLoginQueryParams struct {
	Password string `queryParam:"style=form,explode=true,name=password"`
	Username string `queryParam:"style=form,explode=true,name=username"`
}

type SessionControllerLoginRequest struct {
	PathParams  SessionControllerLoginPathParams
	QueryParams SessionControllerLoginQueryParams
}

type SessionControllerLoginResponse struct {
	Body                                           []byte
	ContentType                                    string
	SessionControllerLogin200ApplicationJSONString *string
	SessionControllerLogin200TextJSONString        *string
	StatusCode                                     int64
}
