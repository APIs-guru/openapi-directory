package operations

import (
	"openapi/pkg/models/shared"
)

type EditContactPathParams struct {
	ContactID string `pathParam:"style=simple,explode=false,name=contact_id"`
	GroupID   string `pathParam:"style=simple,explode=false,name=group_id"`
	Version   string `pathParam:"style=simple,explode=false,name=version"`
}

type EditContactRequest struct {
	PathParams EditContactPathParams
	Request    shared.ContactEditRequest `request:"mediaType=application/json"`
}

type EditContactResponse struct {
	ContactResult *shared.ContactResult
	ContentType   string
	StatusCode    int64
}
