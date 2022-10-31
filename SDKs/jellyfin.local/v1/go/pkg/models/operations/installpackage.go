package operations

import (
"openapi/pkg/models/shared")

type InstallPackagePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type InstallPackageQueryParams struct {
    AssemblyGUID *string `queryParam:"style=form,explode=true,name=assemblyGuid"`
    RepositoryURL *string `queryParam:"style=form,explode=true,name=repositoryUrl"`
    Version *string `queryParam:"style=form,explode=true,name=version"`
    
}

type InstallPackageSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type InstallPackageRequest struct {
    PathParams InstallPackagePathParams 
    QueryParams InstallPackageQueryParams 
    Security InstallPackageSecurity 
    
}

type InstallPackageResponse struct {
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

