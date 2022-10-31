package operations

import (
"openapi/pkg/models/shared")

type RetailProjectsLocationsCatalogsUserEventsCollectPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type RetailProjectsLocationsCatalogsUserEventsCollectQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Ets *string `queryParam:"style=form,explode=true,name=ets"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    URI *string `queryParam:"style=form,explode=true,name=uri"`
    UserEvent *string `queryParam:"style=form,explode=true,name=userEvent"`
    
}

type RetailProjectsLocationsCatalogsUserEventsCollectSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type RetailProjectsLocationsCatalogsUserEventsCollectRequest struct {
    PathParams RetailProjectsLocationsCatalogsUserEventsCollectPathParams 
    QueryParams RetailProjectsLocationsCatalogsUserEventsCollectQueryParams 
    Security RetailProjectsLocationsCatalogsUserEventsCollectSecurity 
    
}

type RetailProjectsLocationsCatalogsUserEventsCollectResponse struct {
    ContentType string 
    GoogleAPIHTTPBody *shared.GoogleAPIHTTPBody 
    StatusCode int64 
    
}

