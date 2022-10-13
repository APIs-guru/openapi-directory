package operations

type DeleteRealmClientsIDNodesNodePathParams struct {
	ID    string `pathParam:"style=simple,explode=false,name=id"`
	Node  string `pathParam:"style=simple,explode=false,name=node"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type DeleteRealmClientsIDNodesNodeRequest struct {
	PathParams DeleteRealmClientsIDNodesNodePathParams
}

type DeleteRealmClientsIDNodesNodeResponse struct {
	ContentType string
	StatusCode  int64
}
