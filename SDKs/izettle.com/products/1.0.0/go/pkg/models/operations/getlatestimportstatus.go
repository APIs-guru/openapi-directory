package operations

import (
"openapi/pkg/models/shared")

type GetLatestImportStatusPathParams struct {
    OrganizationUUID string `pathParam:"style=simple,explode=false,name=organizationUuid"`
    
}

type GetLatestImportStatusSecurityOption1 struct {
    ZettleAPIKey shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetLatestImportStatusSecurityOption2 struct {
    ZettleOauth shared.SchemeZettleOauth `security:"scheme,type=oauth2"`
    
}

type GetLatestImportStatusSecurity struct {
    Option1 *GetLatestImportStatusSecurityOption1 `security:"option"`
    Option2 *GetLatestImportStatusSecurityOption2 `security:"option"`
    
}

type GetLatestImportStatusRequest struct {
    PathParams GetLatestImportStatusPathParams 
    Security GetLatestImportStatusSecurity 
    
}

type GetLatestImportStatusResponse struct {
    ContentType string 
    ImportResponse *shared.ImportResponse 
    StatusCode int64 
    
}

