package operations

import (
"openapi/pkg/models/shared")

type GetBuildProjectRepositoryArchPackageHistoryPathParams struct {
    ArchitectureName string `pathParam:"style=simple,explode=false,name=architecture_name"`
    PackageName string `pathParam:"style=simple,explode=false,name=package_name"`
    ProjectName string `pathParam:"style=simple,explode=false,name=project_name"`
    RepositoryName string `pathParam:"style=simple,explode=false,name=repository_name"`
    
}

type GetBuildProjectRepositoryArchPackageHistorySecurity struct {
    BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
    
}

type GetBuildProjectRepositoryArchPackageHistoryRequest struct {
    PathParams GetBuildProjectRepositoryArchPackageHistoryPathParams 
    Security GetBuildProjectRepositoryArchPackageHistorySecurity 
    
}

type GetBuildProjectRepositoryArchPackageHistoryResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

