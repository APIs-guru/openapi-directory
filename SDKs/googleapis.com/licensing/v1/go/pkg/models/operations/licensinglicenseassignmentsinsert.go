package operations

import (
"openapi/pkg/models/shared")

type LicensingLicenseAssignmentsInsertPathParams struct {
    ProductID string `pathParam:"style=simple,explode=false,name=productId"`
    SkuID string `pathParam:"style=simple,explode=false,name=skuId"`
    
}

type LicensingLicenseAssignmentsInsertQueryParams struct {
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

type LicensingLicenseAssignmentsInsertSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LicensingLicenseAssignmentsInsertRequest struct {
    PathParams LicensingLicenseAssignmentsInsertPathParams 
    QueryParams LicensingLicenseAssignmentsInsertQueryParams 
    Request *shared.LicenseAssignmentInsert `request:"mediaType=application/json"`
    Security LicensingLicenseAssignmentsInsertSecurity 
    
}

type LicensingLicenseAssignmentsInsertResponse struct {
    ContentType string 
    LicenseAssignment *shared.LicenseAssignment 
    StatusCode int64 
    
}

