package operations

import (
	"openapi/pkg/models/shared"
)

type CloudsearchIndexingDatasourcesItemsPushPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type CloudsearchIndexingDatasourcesItemsPushQueryParams struct {
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

type CloudsearchIndexingDatasourcesItemsPushSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchIndexingDatasourcesItemsPushSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudsearchIndexingDatasourcesItemsPushSecurity struct {
	Option1 *CloudsearchIndexingDatasourcesItemsPushSecurityOption1 `security:"option"`
	Option2 *CloudsearchIndexingDatasourcesItemsPushSecurityOption2 `security:"option"`
}

type CloudsearchIndexingDatasourcesItemsPushRequest struct {
	PathParams  CloudsearchIndexingDatasourcesItemsPushPathParams
	QueryParams CloudsearchIndexingDatasourcesItemsPushQueryParams
	Request     *shared.PushItemRequest `request:"mediaType=application/json"`
	Security    CloudsearchIndexingDatasourcesItemsPushSecurity
}

type CloudsearchIndexingDatasourcesItemsPushResponse struct {
	ContentType string
	Item        *shared.Item
	StatusCode  int64
}
