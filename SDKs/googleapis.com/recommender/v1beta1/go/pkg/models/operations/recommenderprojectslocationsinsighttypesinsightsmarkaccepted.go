package operations

import (
"openapi/pkg/models/shared")

type RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedQueryParams struct {
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

type RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedRequest struct {
    PathParams RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedPathParams 
    QueryParams RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedQueryParams 
    Request *shared.GoogleCloudRecommenderV1beta1MarkInsightAcceptedRequest `request:"mediaType=application/json"`
    Security RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedSecurity 
    
}

type RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedResponse struct {
    ContentType string 
    GoogleCloudRecommenderV1beta1Insight *shared.GoogleCloudRecommenderV1beta1Insight 
    StatusCode int64 
    
}

