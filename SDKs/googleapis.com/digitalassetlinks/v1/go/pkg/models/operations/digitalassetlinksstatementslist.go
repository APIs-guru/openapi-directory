package operations

import (
"openapi/pkg/models/shared")

type DigitalassetlinksStatementsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Relation *string `queryParam:"style=form,explode=true,name=relation"`
    SourceAndroidAppCertificateSha256Fingerprint *string `queryParam:"style=form,explode=true,name=source.androidApp.certificate.sha256Fingerprint"`
    SourceAndroidAppPackageName *string `queryParam:"style=form,explode=true,name=source.androidApp.packageName"`
    SourceWebSite *string `queryParam:"style=form,explode=true,name=source.web.site"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DigitalassetlinksStatementsListRequest struct {
    QueryParams DigitalassetlinksStatementsListQueryParams 
    
}

type DigitalassetlinksStatementsListResponse struct {
    ContentType string 
    ListResponse *shared.ListResponse 
    StatusCode int64 
    
}

