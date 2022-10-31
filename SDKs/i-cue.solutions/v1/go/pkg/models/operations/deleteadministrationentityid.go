package operations

type DeleteAdministrationEntityIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteAdministrationEntityIDHeaders struct {
	Token *string `header:"style=simple,explode=false,name=Token"`
}

type DeleteAdministrationEntityIDRequest struct {
	PathParams DeleteAdministrationEntityIDPathParams
	Headers    DeleteAdministrationEntityIDHeaders
}

type DeleteAdministrationEntityIDResponse struct {
	ContentType string
	StatusCode  int64
}
