package operations

type RegistrationsForksCreatePathParams struct {
	RegistrationID string `pathParam:"style=simple,explode=false,name=registration_id"`
}

type RegistrationsForksCreateRequest struct {
	PathParams RegistrationsForksCreatePathParams
}

type RegistrationsForksCreateResponse struct {
	ContentType string
	StatusCode  int64
}
