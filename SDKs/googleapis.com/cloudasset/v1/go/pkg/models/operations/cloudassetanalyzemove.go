package operations

import (
"openapi/pkg/models/shared")

type CloudassetAnalyzeMovePathParams struct {
    Resource string `pathParam:"style=simple,explode=false,name=resource"`
    
}


type CloudassetAnalyzeMoveViewEnum string

const (
    CloudassetAnalyzeMoveViewEnumAnalysisViewUnspecified CloudassetAnalyzeMoveViewEnum = "ANALYSIS_VIEW_UNSPECIFIED"
CloudassetAnalyzeMoveViewEnumFull CloudassetAnalyzeMoveViewEnum = "FULL"
CloudassetAnalyzeMoveViewEnumBasic CloudassetAnalyzeMoveViewEnum = "BASIC"
)


type CloudassetAnalyzeMoveQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    DestinationParent *string `queryParam:"style=form,explode=true,name=destinationParent"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    View *CloudassetAnalyzeMoveViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type CloudassetAnalyzeMoveSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudassetAnalyzeMoveRequest struct {
    PathParams CloudassetAnalyzeMovePathParams 
    QueryParams CloudassetAnalyzeMoveQueryParams 
    Security CloudassetAnalyzeMoveSecurity 
    
}

type CloudassetAnalyzeMoveResponse struct {
    AnalyzeMoveResponse *shared.AnalyzeMoveResponse 
    ContentType string 
    StatusCode int64 
    
}

