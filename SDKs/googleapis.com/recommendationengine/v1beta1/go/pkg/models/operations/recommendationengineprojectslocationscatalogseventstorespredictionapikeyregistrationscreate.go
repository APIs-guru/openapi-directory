package operations

import (
"openapi/pkg/models/shared")

type RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsCreateQueryParams struct {
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

type RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsCreateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsCreateRequest struct {
    PathParams RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsCreatePathParams 
    QueryParams RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsCreateQueryParams 
    Request *shared.GoogleCloudRecommendationengineV1beta1CreatePredictionAPIKeyRegistrationRequest `request:"mediaType=application/json"`
    Security RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsCreateSecurity 
    
}

type RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsCreateResponse struct {
    ContentType string 
    GoogleCloudRecommendationengineV1beta1PredictionAPIKeyRegistration *shared.GoogleCloudRecommendationengineV1beta1PredictionAPIKeyRegistration 
    StatusCode int64 
    
}

