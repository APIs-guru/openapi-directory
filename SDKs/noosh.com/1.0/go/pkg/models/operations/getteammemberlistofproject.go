package operations

type GetTeamMemberListOfProjectPathParams struct {
	ProjectID   string `pathParam:"style=simple,explode=false,name=project_id"`
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetTeamMemberListOfProjectRequest struct {
	PathParams GetTeamMemberListOfProjectPathParams
}

type GetTeamMemberListOfProjectResponse struct {
	Body             []byte
	ContentType      string
	HTTPStatusVo     *interface{}
	StatusCode       int64
	TeamMemberListVo *interface{}
}
