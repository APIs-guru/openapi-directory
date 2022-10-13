package operations

type DeleteSSHKeysIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteSSHKeysIDRequest struct {
	PathParams DeleteSSHKeysIDPathParams
}

type DeleteSSHKeysIDResponse struct {
	ContentType string
	StatusCode  int64
}
