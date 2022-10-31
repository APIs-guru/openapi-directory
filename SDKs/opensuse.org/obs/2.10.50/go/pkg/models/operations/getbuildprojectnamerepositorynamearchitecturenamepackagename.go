package operations

import (
"openapi/pkg/models/shared")

type GetBuildProjectNameRepositoryNameArchitectureNamePackageNamePathParams struct {
    ArchitectureName string `pathParam:"style=simple,explode=false,name=architecture_name"`
    PackageName string `pathParam:"style=simple,explode=false,name=package_name"`
    ProjectName string `pathParam:"style=simple,explode=false,name=project_name"`
    RepositoryName string `pathParam:"style=simple,explode=false,name=repository_name"`
    
}

type GetBuildProjectNameRepositoryNameArchitectureNamePackageNameSecurity struct {
    BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
    
}

type GetBuildProjectNameRepositoryNameArchitectureNamePackageNameRequest struct {
    PathParams GetBuildProjectNameRepositoryNameArchitectureNamePackageNamePathParams 
    Security GetBuildProjectNameRepositoryNameArchitectureNamePackageNameSecurity 
    
}

type GetBuildProjectNameRepositoryNameArchitectureNamePackageNameResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

