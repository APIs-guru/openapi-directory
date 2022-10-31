package operations

import (
"openapi/pkg/models/shared")

type EssentialcontactsProjectsContactsComputePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}


type EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum string

const (
    EssentialcontactsProjectsContactsComputeNotificationCategoriesEnumNotificationCategoryUnspecified EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum = "NOTIFICATION_CATEGORY_UNSPECIFIED"
EssentialcontactsProjectsContactsComputeNotificationCategoriesEnumAll EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum = "ALL"
EssentialcontactsProjectsContactsComputeNotificationCategoriesEnumSuspension EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum = "SUSPENSION"
EssentialcontactsProjectsContactsComputeNotificationCategoriesEnumSecurity EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum = "SECURITY"
EssentialcontactsProjectsContactsComputeNotificationCategoriesEnumTechnical EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum = "TECHNICAL"
EssentialcontactsProjectsContactsComputeNotificationCategoriesEnumBilling EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum = "BILLING"
EssentialcontactsProjectsContactsComputeNotificationCategoriesEnumLegal EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum = "LEGAL"
EssentialcontactsProjectsContactsComputeNotificationCategoriesEnumProductUpdates EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum = "PRODUCT_UPDATES"
EssentialcontactsProjectsContactsComputeNotificationCategoriesEnumTechnicalIncidents EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum = "TECHNICAL_INCIDENTS"
)


type EssentialcontactsProjectsContactsComputeQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    NotificationCategories []EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum `queryParam:"style=form,explode=true,name=notificationCategories"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type EssentialcontactsProjectsContactsComputeSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type EssentialcontactsProjectsContactsComputeRequest struct {
    PathParams EssentialcontactsProjectsContactsComputePathParams 
    QueryParams EssentialcontactsProjectsContactsComputeQueryParams 
    Security EssentialcontactsProjectsContactsComputeSecurity 
    
}

type EssentialcontactsProjectsContactsComputeResponse struct {
    ContentType string 
    GoogleCloudEssentialcontactsV1ComputeContactsResponse *shared.GoogleCloudEssentialcontactsV1ComputeContactsResponse 
    StatusCode int64 
    
}

