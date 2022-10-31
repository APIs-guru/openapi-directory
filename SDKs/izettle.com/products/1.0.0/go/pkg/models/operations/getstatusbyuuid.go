package operations

import (
"openapi/pkg/models/shared")

type GetStatusByUUIDPathParams struct {
    ImportUUID string `pathParam:"style=simple,explode=false,name=importUuid"`
    OrganizationUUID string `pathParam:"style=simple,explode=false,name=organizationUuid"`
    
}

type GetStatusByUUIDSecurityOption1 struct {
    ZettleAPIKey shared.SchemeZettleAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetStatusByUUIDSecurityOption2 struct {
    ZettleOauth shared.SchemeZettleOauth `security:"scheme,type=oauth2"`
    
}

type GetStatusByUUIDSecurity struct {
    Option1 *GetStatusByUUIDSecurityOption1 `security:"option"`
    Option2 *GetStatusByUUIDSecurityOption2 `security:"option"`
    
}

type GetStatusByUUIDRequest struct {
    PathParams GetStatusByUUIDPathParams 
    Security GetStatusByUUIDSecurity 
    
}

type GetStatusByUUIDResponse struct {
    ContentType string 
    ImportResponse *shared.ImportResponse 
    StatusCode int64 
    
}

