package operations

import (
	"openapi/pkg/models/shared"
)

type EditMemberElectionPathParams struct {
	MemberElectionID string `pathParam:"style=simple,explode=false,name=member_election_id"`
	Version          string `pathParam:"style=simple,explode=false,name=version"`
}

type EditMemberElectionRequest struct {
	PathParams EditMemberElectionPathParams
	Request    shared.MemberElectionEditRequest `request:"mediaType=application/json"`
}

type EditMemberElectionResponse struct {
	ContentType          string
	MemberElectionResult *shared.MemberElectionResult
	StatusCode           int64
}
