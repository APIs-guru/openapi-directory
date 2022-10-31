package operations

import (
"openapi/pkg/models/shared")

type KgsearchEntitiesSearchQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Ids []string `queryParam:"style=form,explode=true,name=ids"`
    Indent *bool `queryParam:"style=form,explode=true,name=indent"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Languages []string `queryParam:"style=form,explode=true,name=languages"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    Prefix *bool `queryParam:"style=form,explode=true,name=prefix"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Types []string `queryParam:"style=form,explode=true,name=types"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type KgsearchEntitiesSearchRequest struct {
    QueryParams KgsearchEntitiesSearchQueryParams 
    
}

type KgsearchEntitiesSearchResponse struct {
    ContentType string 
    SearchResponse *shared.SearchResponse 
    StatusCode int64 
    
}

