package operations

import (
"openapi/pkg/models/shared")

type PeopleOtherContactsCopyOtherContactToMyContactsGroupPathParams struct {
    ResourceName string `pathParam:"style=simple,explode=false,name=resourceName"`
    
}

type PeopleOtherContactsCopyOtherContactToMyContactsGroupQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurity struct {
    Option1 *PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption1 `security:"option"`
    Option2 *PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption2 `security:"option"`
    
}

type PeopleOtherContactsCopyOtherContactToMyContactsGroupRequest struct {
    PathParams PeopleOtherContactsCopyOtherContactToMyContactsGroupPathParams 
    QueryParams PeopleOtherContactsCopyOtherContactToMyContactsGroupQueryParams 
    Request *shared.CopyOtherContactToMyContactsGroupRequest `request:"mediaType=application/json"`
    Security PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurity 
    
}

type PeopleOtherContactsCopyOtherContactToMyContactsGroupResponse struct {
    ContentType string 
    Person *shared.Person 
    StatusCode int64 
    
}

