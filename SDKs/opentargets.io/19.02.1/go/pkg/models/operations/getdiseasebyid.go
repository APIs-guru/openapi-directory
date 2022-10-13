package operations

type GetDiseaseByIDPathParams struct {
	Disease string `pathParam:"style=simple,explode=false,name=disease"`
}

type GetDiseaseByIDRequest struct {
	PathParams GetDiseaseByIDPathParams
}

type GetDiseaseByIDResponse struct {
	ContentType string
	StatusCode  int64
}
