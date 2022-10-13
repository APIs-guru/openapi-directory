package operations

type RegistrationsLinkedNodesListPathParams struct {
	RegistrationID string `pathParam:"style=simple,explode=false,name=registration_id"`
}

type RegistrationsLinkedNodesListRequest struct {
	PathParams RegistrationsLinkedNodesListPathParams
}

type RegistrationsLinkedNodesListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
