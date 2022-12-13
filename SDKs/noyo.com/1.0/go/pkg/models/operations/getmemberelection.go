package operations

import (
	"openapi/pkg/models/shared"
)

type GetMemberElectionPathParams struct {
	MemberElectionID string `pathParam:"style=simple,explode=false,name=member_election_id"`
}

type GetMemberElectionRequest struct {
	PathParams GetMemberElectionPathParams
}

type GetMemberElectionResponse struct {
	ContentType          string
	MemberElectionResult *shared.MemberElectionResult
	StatusCode           int64
}
