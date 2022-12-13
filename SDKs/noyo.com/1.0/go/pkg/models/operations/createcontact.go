package operations

import (
	"openapi/pkg/models/shared"
)

type CreateContactPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=group_id"`
}

type CreateContactRequest struct {
	PathParams CreateContactPathParams
	Request    shared.ContactCreateRequest `request:"mediaType=application/json"`
}

type CreateContactResponse struct {
	ContactResult *shared.ContactResult
	ContentType   string
	StatusCode    int64
}
