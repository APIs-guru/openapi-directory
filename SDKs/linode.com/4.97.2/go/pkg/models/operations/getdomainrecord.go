package operations

import (
"openapi/pkg/models/shared")

type GetDomainRecordPathParams struct {
    DomainID int64 `pathParam:"style=simple,explode=false,name=domainId"`
    RecordID int64 `pathParam:"style=simple,explode=false,name=recordId"`
    
}

type GetDomainRecordSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetDomainRecordSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetDomainRecordSecurity struct {
    Option1 *GetDomainRecordSecurityOption1 `security:"option"`
    Option2 *GetDomainRecordSecurityOption2 `security:"option"`
    
}

type GetDomainRecordRequest struct {
    PathParams GetDomainRecordPathParams 
    Security GetDomainRecordSecurity 
    
}

type GetDomainRecordDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type GetDomainRecordResponse struct {
    ContentType string 
    DomainRecord *shared.DomainRecord 
    StatusCode int64 
    GetDomainRecordDefaultApplicationJSONObject *GetDomainRecordDefaultApplicationJSON 
    
}

