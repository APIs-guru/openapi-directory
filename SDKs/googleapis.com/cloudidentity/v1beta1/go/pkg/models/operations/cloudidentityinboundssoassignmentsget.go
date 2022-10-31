package operations

import (
	"openapi/pkg/models/shared"
)

type CloudidentityInboundSsoAssignmentsGetPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type CloudidentityInboundSsoAssignmentsGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	ReadMask       *string           `queryParam:"style=form,explode=true,name=readMask"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CloudidentityInboundSsoAssignmentsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudidentityInboundSsoAssignmentsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudidentityInboundSsoAssignmentsGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudidentityInboundSsoAssignmentsGetSecurity struct {
	Option1 *CloudidentityInboundSsoAssignmentsGetSecurityOption1 `security:"option"`
	Option2 *CloudidentityInboundSsoAssignmentsGetSecurityOption2 `security:"option"`
	Option3 *CloudidentityInboundSsoAssignmentsGetSecurityOption3 `security:"option"`
}

type CloudidentityInboundSsoAssignmentsGetRequest struct {
	PathParams  CloudidentityInboundSsoAssignmentsGetPathParams
	QueryParams CloudidentityInboundSsoAssignmentsGetQueryParams
	Security    CloudidentityInboundSsoAssignmentsGetSecurity
}

type CloudidentityInboundSsoAssignmentsGetResponse struct {
	ContentType          string
	InboundSsoAssignment *shared.InboundSsoAssignment
	StatusCode           int64
}
