package operations

type RegistrationsInstitutionsListPathParams struct {
	RegistrationID string `pathParam:"style=simple,explode=false,name=registration_id"`
}

type RegistrationsInstitutionsListRequest struct {
	PathParams RegistrationsInstitutionsListPathParams
}

type RegistrationsInstitutionsListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
