package operations

type DeletePromotionsIDJSONPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type DeletePromotionsIDJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type DeletePromotionsIDJSONRequest struct {
	PathParams  DeletePromotionsIDJSONPathParams
	QueryParams DeletePromotionsIDJSONQueryParams
}

type DeletePromotionsIDJSONResponse struct {
	ContentType                                    string
	DeletePromotionsIDJSON200ApplicationJSONString *string
	NotFound                                       *interface{}
	StatusCode                                     int64
}
