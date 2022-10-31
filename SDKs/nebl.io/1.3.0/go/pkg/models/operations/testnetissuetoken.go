package operations

import (
	"openapi/pkg/models/shared"
)

type TestnetIssueTokenRequest struct {
	Request shared.IssueTokenRequest `request:"mediaType=application/json"`
}

type TestnetIssueTokenResponse struct {
	ContentType        string
	Error              *shared.Error
	StatusCode         int64
	IssueTokenResponse *shared.IssueTokenResponse
}
