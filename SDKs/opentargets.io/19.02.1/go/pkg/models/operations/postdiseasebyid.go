package operations

type PostDiseaseByIDRequest struct {
	Request string `request:"mediaType=application/json"`
}

type PostDiseaseByIDResponse struct {
	ContentType string
	StatusCode  int64
}
