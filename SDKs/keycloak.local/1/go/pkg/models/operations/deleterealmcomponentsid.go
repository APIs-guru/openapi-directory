package operations

type DeleteRealmComponentsIDPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type DeleteRealmComponentsIDRequest struct {
	PathParams DeleteRealmComponentsIDPathParams
}

type DeleteRealmComponentsIDResponse struct {
	ContentType string
	StatusCode  int64
}
