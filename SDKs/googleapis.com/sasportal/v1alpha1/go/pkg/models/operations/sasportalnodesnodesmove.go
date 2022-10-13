package operations

import (
	"openapi/pkg/models/shared"
)

type SasportalNodesNodesMovePathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type SasportalNodesNodesMoveQueryParams struct {
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

type SasportalNodesNodesMoveSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SasportalNodesNodesMoveSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SasportalNodesNodesMoveSecurity struct {
	Option1 *SasportalNodesNodesMoveSecurityOption1 `security:"option"`
	Option2 *SasportalNodesNodesMoveSecurityOption2 `security:"option"`
}

type SasportalNodesNodesMoveRequest struct {
	PathParams  SasportalNodesNodesMovePathParams
	QueryParams SasportalNodesNodesMoveQueryParams
	Request     *shared.SasPortalMoveNodeRequest `request:"mediaType=application/json"`
	Security    SasportalNodesNodesMoveSecurity
}

type SasportalNodesNodesMoveResponse struct {
	ContentType        string
	SasPortalOperation *shared.SasPortalOperation
	StatusCode         int64
}
