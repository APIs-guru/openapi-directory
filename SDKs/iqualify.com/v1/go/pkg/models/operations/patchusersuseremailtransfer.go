package operations

import (
	"openapi/pkg/models/shared"
)

type PatchUsersUserEmailTransferPathParams struct {
	UserEmail string `pathParam:"style=simple,explode=false,name=userEmail"`
}

type PatchUsersUserEmailTransferRequest struct {
	PathParams PatchUsersUserEmailTransferPathParams
	Request    shared.TransferRequest `request:"mediaType=application/json"`
}

type PatchUsersUserEmailTransferResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
