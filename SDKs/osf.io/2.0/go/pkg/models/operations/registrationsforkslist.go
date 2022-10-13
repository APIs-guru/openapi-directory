package operations

type RegistrationsForksListPathParams struct {
	RegistrationID string `pathParam:"style=simple,explode=false,name=registration_id"`
}

type RegistrationsForksListRequest struct {
	PathParams RegistrationsForksListPathParams
}

type RegistrationsForksListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
