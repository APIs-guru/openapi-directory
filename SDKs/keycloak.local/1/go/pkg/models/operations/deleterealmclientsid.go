package operations

type DeleteRealmClientsIDPathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type DeleteRealmClientsIDRequest struct {
	PathParams DeleteRealmClientsIDPathParams
}

type DeleteRealmClientsIDResponse struct {
	ContentType string
	StatusCode  int64
}
