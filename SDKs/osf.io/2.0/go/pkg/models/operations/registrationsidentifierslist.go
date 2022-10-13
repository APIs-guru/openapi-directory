package operations

type RegistrationsIdentifiersListPathParams struct {
	RegistrationID string `pathParam:"style=simple,explode=false,name=registration_id"`
}

type RegistrationsIdentifiersListRequest struct {
	PathParams RegistrationsIdentifiersListPathParams
}

type RegistrationsIdentifiersListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
