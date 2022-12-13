package operations

import (
	"openapi/pkg/models/shared"
)

type CreateMemberElectionPathParams struct {
	PlanID string `pathParam:"style=simple,explode=false,name=plan_id"`
}

type CreateMemberElectionRequest struct {
	PathParams CreateMemberElectionPathParams
	Request    shared.MemberElectionCreateRequest `request:"mediaType=application/json"`
}

type CreateMemberElectionResponse struct {
	ContentType          string
	MemberElectionResult *shared.MemberElectionResult
	StatusCode           int64
}
