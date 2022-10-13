package operations

type PostRealmTestSMTPConnectionPathParams struct {
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type PostRealmTestSMTPConnectionRequest struct {
	PathParams PostRealmTestSMTPConnectionPathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PostRealmTestSMTPConnectionResponse struct {
	ContentType string
	StatusCode  int64
}
