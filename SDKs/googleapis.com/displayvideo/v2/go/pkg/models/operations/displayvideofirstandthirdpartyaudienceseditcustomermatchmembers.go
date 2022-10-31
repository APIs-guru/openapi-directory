package operations

import (
"openapi/pkg/models/shared")

type DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersPathParams struct {
    FirstAndThirdPartyAudienceID string `pathParam:"style=simple,explode=false,name=firstAndThirdPartyAudienceId"`
    
}

type DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersQueryParams struct {
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

type DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersRequest struct {
    PathParams DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersPathParams 
    QueryParams DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersQueryParams 
    Request *shared.EditCustomerMatchMembersRequest `request:"mediaType=application/json"`
    Security DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersSecurity 
    
}

type DisplayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembersResponse struct {
    ContentType string 
    EditCustomerMatchMembersResponse *shared.EditCustomerMatchMembersResponse 
    StatusCode int64 
    
}

