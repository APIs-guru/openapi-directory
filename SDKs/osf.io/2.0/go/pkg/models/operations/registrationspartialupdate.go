package operations

type RegistrationsPartialUpdatePathParams struct {
	RegistrationID string `pathParam:"style=simple,explode=false,name=registration_id"`
}

type RegistrationsPartialUpdateRequest struct {
	PathParams RegistrationsPartialUpdatePathParams
}

type RegistrationsPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
