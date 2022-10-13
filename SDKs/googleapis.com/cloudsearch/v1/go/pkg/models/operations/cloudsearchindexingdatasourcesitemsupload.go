package operations

import (
	"openapi/pkg/models/shared"
)

type CloudsearchIndexingDatasourcesItemsUploadPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type CloudsearchIndexingDatasourcesItemsUploadQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CloudsearchIndexingDatasourcesItemsUploadSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchIndexingDatasourcesItemsUploadSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchIndexingDatasourcesItemsUploadSecurity struct {
	Option1 *CloudsearchIndexingDatasourcesItemsUploadSecurityOption1 `security:"option"`
	Option2 *CloudsearchIndexingDatasourcesItemsUploadSecurityOption2 `security:"option"`
}

type CloudsearchIndexingDatasourcesItemsUploadRequest struct {
	PathParams  CloudsearchIndexingDatasourcesItemsUploadPathParams
	QueryParams CloudsearchIndexingDatasourcesItemsUploadQueryParams
	Request     *shared.StartUploadItemRequest `request:"mediaType=application/json"`
	Security    CloudsearchIndexingDatasourcesItemsUploadSecurity
}

type CloudsearchIndexingDatasourcesItemsUploadResponse struct {
	ContentType   string
	StatusCode    int64
	UploadItemRef *shared.UploadItemRef
}
