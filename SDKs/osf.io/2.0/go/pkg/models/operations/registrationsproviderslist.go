package operations

type RegistrationsProvidersListPathParams struct {
	RegistrationID string `pathParam:"style=simple,explode=false,name=registration_id"`
}

type RegistrationsProvidersListRequest struct {
	PathParams RegistrationsProvidersListPathParams
}

type RegistrationsProvidersListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
