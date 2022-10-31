package operations



type GetTeamTemplateListPathParams struct {
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type GetTeamTemplateListRequest struct {
    PathParams GetTeamTemplateListPathParams 
    
}

type GetTeamTemplateListResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    StatusCode int64 
    TeamTemplateListVo *interface{} 
    
}

