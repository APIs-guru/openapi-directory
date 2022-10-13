package operations

import (
	"openapi/pkg/models/shared"
)

type SasportalNodesNodesGetPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type SasportalNodesNodesGetQueryParams struct {
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

type SasportalNodesNodesGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SasportalNodesNodesGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SasportalNodesNodesGetSecurity struct {
	Option1 *SasportalNodesNodesGetSecurityOption1 `security:"option"`
	Option2 *SasportalNodesNodesGetSecurityOption2 `security:"option"`
}

type SasportalNodesNodesGetRequest struct {
	PathParams  SasportalNodesNodesGetPathParams
	QueryParams SasportalNodesNodesGetQueryParams
	Security    SasportalNodesNodesGetSecurity
}

type SasportalNodesNodesGetResponse struct {
	ContentType   string
	SasPortalNode *shared.SasPortalNode
	StatusCode    int64
}
