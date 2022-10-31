package operations

import (
"openapi/pkg/models/shared")

type RealtimebiddingBuyersUserListsGetPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}


type RealtimebiddingBuyersUserListsGetViewEnum string

const (
    RealtimebiddingBuyersUserListsGetViewEnumCreativeViewUnspecified RealtimebiddingBuyersUserListsGetViewEnum = "CREATIVE_VIEW_UNSPECIFIED"
RealtimebiddingBuyersUserListsGetViewEnumServingDecisionOnly RealtimebiddingBuyersUserListsGetViewEnum = "SERVING_DECISION_ONLY"
RealtimebiddingBuyersUserListsGetViewEnumFull RealtimebiddingBuyersUserListsGetViewEnum = "FULL"
)


type RealtimebiddingBuyersUserListsGetQueryParams struct {
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
    View *RealtimebiddingBuyersUserListsGetViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type RealtimebiddingBuyersUserListsGetSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type RealtimebiddingBuyersUserListsGetRequest struct {
    PathParams RealtimebiddingBuyersUserListsGetPathParams 
    QueryParams RealtimebiddingBuyersUserListsGetQueryParams 
    Security RealtimebiddingBuyersUserListsGetSecurity 
    
}

type RealtimebiddingBuyersUserListsGetResponse struct {
    ContentType string 
    StatusCode int64 
    UserList *shared.UserList 
    
}

