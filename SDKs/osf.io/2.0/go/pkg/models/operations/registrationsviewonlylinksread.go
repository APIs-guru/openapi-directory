package operations

type RegistrationsViewOnlyLinksReadPathParams struct {
	LinkID         string `pathParam:"style=simple,explode=false,name=link_id"`
	RegistrationID string `pathParam:"style=simple,explode=false,name=registration_id"`
}

type RegistrationsViewOnlyLinksReadRequest struct {
	PathParams RegistrationsViewOnlyLinksReadPathParams
}

type RegistrationsViewOnlyLinksReadResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
