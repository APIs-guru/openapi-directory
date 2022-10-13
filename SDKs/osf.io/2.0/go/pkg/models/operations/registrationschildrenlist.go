package operations

type RegistrationsChildrenListPathParams struct {
	RegistrationID string `pathParam:"style=simple,explode=false,name=registration_id"`
}

type RegistrationsChildrenListRequest struct {
	PathParams RegistrationsChildrenListPathParams
}

type RegistrationsChildrenListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
