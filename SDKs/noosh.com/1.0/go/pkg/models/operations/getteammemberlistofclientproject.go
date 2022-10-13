package operations

type GetTeamMemberListOfClientProjectPathParams struct {
	ProjectID   string `pathParam:"style=simple,explode=false,name=project_id"`
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetTeamMemberListOfClientProjectRequest struct {
	PathParams GetTeamMemberListOfClientProjectPathParams
}

type GetTeamMemberListOfClientProjectResponse struct {
	Body             []byte
	ContentType      string
	HTTPStatusVo     *interface{}
	StatusCode       int64
	TeamMemberListVo *interface{}
}
