package operations

import (
"openapi/pkg/models/shared")

type SafebrowsingEncodedFullHashesGetPathParams struct {
    EncodedRequest string `pathParam:"style=simple,explode=false,name=encodedRequest"`
    
}

type SafebrowsingEncodedFullHashesGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    ClientID *string `queryParam:"style=form,explode=true,name=clientId"`
    ClientVersion *string `queryParam:"style=form,explode=true,name=clientVersion"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type SafebrowsingEncodedFullHashesGetRequest struct {
    PathParams SafebrowsingEncodedFullHashesGetPathParams 
    QueryParams SafebrowsingEncodedFullHashesGetQueryParams 
    
}

type SafebrowsingEncodedFullHashesGetResponse struct {
    ContentType string 
    GoogleSecuritySafebrowsingV4FindFullHashesResponse *shared.GoogleSecuritySafebrowsingV4FindFullHashesResponse 
    StatusCode int64 
    
}

