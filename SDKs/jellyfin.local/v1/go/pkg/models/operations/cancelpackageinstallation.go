package operations

import (
"openapi/pkg/models/shared")

type CancelPackageInstallationPathParams struct {
    PackageID string `pathParam:"style=simple,explode=false,name=packageId"`
    
}

type CancelPackageInstallationSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type CancelPackageInstallationRequest struct {
    PathParams CancelPackageInstallationPathParams 
    Security CancelPackageInstallationSecurity 
    
}

type CancelPackageInstallationResponse struct {
    ContentType string 
    StatusCode int64 
    
}

