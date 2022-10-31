package operations

type DeleteAdministrationUserEntityIDIDPathParams struct {
	EntityID int32 `pathParam:"style=simple,explode=false,name=entityId"`
	ID       int32 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteAdministrationUserEntityIDIDHeaders struct {
	Token *string `header:"style=simple,explode=false,name=Token"`
}

type DeleteAdministrationUserEntityIDIDRequest struct {
	PathParams DeleteAdministrationUserEntityIDIDPathParams
	Headers    DeleteAdministrationUserEntityIDIDHeaders
}

type DeleteAdministrationUserEntityIDIDResponse struct {
	ContentType string
	StatusCode  int64
}
