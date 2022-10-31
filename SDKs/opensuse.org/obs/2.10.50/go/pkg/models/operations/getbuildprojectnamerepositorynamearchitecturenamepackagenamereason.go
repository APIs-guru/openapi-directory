package operations

import (
"openapi/pkg/models/shared")

type GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonPathParams struct {
    ArchitectureName string `pathParam:"style=simple,explode=false,name=architecture_name"`
    PackageName string `pathParam:"style=simple,explode=false,name=package_name"`
    ProjectName string `pathParam:"style=simple,explode=false,name=project_name"`
    RepositoryName string `pathParam:"style=simple,explode=false,name=repository_name"`
    
}

type GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonSecurity struct {
    BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
    
}

type GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonRequest struct {
    PathParams GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonPathParams 
    Security GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonSecurity 
    
}

type GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

