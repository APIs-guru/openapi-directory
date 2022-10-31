package operations

import (
"openapi/pkg/models/shared")

type DrivelabelsLabelsGetPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}


type DrivelabelsLabelsGetViewEnum string

const (
    DrivelabelsLabelsGetViewEnumLabelViewBasic DrivelabelsLabelsGetViewEnum = "LABEL_VIEW_BASIC"
DrivelabelsLabelsGetViewEnumLabelViewFull DrivelabelsLabelsGetViewEnum = "LABEL_VIEW_FULL"
)


type DrivelabelsLabelsGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    LanguageCode *string `queryParam:"style=form,explode=true,name=languageCode"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    UseAdminAccess *bool `queryParam:"style=form,explode=true,name=useAdminAccess"`
    View *DrivelabelsLabelsGetViewEnum `queryParam:"style=form,explode=true,name=view"`
    
}

type DrivelabelsLabelsGetRequest struct {
    PathParams DrivelabelsLabelsGetPathParams 
    QueryParams DrivelabelsLabelsGetQueryParams 
    
}

type DrivelabelsLabelsGetResponse struct {
    ContentType string 
    GoogleAppsDriveLabelsV2Label *shared.GoogleAppsDriveLabelsV2Label 
    StatusCode int64 
    
}

