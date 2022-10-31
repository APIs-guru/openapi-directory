package operations



type DeleteTeamMemberOfProjectPathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=project_id"`
    TeammemberID string `pathParam:"style=simple,explode=false,name=teammember_id"`
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type DeleteTeamMemberOfProjectRequest struct {
    PathParams DeleteTeamMemberOfProjectPathParams 
    
}

type DeleteTeamMemberOfProjectResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    StatusCode int64 
    TeamMemberBaseInfVo *interface{} 
    
}

