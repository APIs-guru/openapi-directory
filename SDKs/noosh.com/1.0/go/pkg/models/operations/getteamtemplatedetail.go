package operations

type GetTeamTemplateDetailPathParams struct {
	TeamTemplateID string `pathParam:"style=simple,explode=false,name=team_template_id"`
	WorkgroupID    string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetTeamTemplateDetailRequest struct {
	PathParams GetTeamTemplateDetailPathParams
}

type GetTeamTemplateDetailResponse struct {
	Body                 []byte
	ContentType          string
	HTTPStatusVo         *interface{}
	StatusCode           int64
	TeamTemplateExpandVo *interface{}
}
