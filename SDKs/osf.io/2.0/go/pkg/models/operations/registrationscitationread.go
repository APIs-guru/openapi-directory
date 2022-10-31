package operations

type RegistrationsCitationReadPathParams struct {
	CitationID     string `pathParam:"style=simple,explode=false,name=citation_id"`
	RegistrationID string `pathParam:"style=simple,explode=false,name=registration_id"`
}

type RegistrationsCitationReadRequest struct {
	PathParams RegistrationsCitationReadPathParams
}

type RegistrationsCitationReadResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
