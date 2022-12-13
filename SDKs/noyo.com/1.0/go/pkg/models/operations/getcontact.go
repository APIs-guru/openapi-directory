package operations

import (
	"openapi/pkg/models/shared"
)

type GetContactPathParams struct {
	ContactID string `pathParam:"style=simple,explode=false,name=contact_id"`
	GroupID   string `pathParam:"style=simple,explode=false,name=group_id"`
}

type GetContactRequest struct {
	PathParams GetContactPathParams
}

type GetContactResponse struct {
	ContactResult *shared.ContactResult
	ContentType   string
	StatusCode    int64
}
