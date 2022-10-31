package operations

import (
	"openapi/pkg/models/shared"
)

type SearchconsoleURLInspectionIndexInspectQueryParams struct {
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

type SearchconsoleURLInspectionIndexInspectSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SearchconsoleURLInspectionIndexInspectSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type SearchconsoleURLInspectionIndexInspectSecurity struct {
	Option1 *SearchconsoleURLInspectionIndexInspectSecurityOption1 `security:"option"`
	Option2 *SearchconsoleURLInspectionIndexInspectSecurityOption2 `security:"option"`
}

type SearchconsoleURLInspectionIndexInspectRequest struct {
	QueryParams SearchconsoleURLInspectionIndexInspectQueryParams
	Request     *shared.InspectURLIndexRequest `request:"mediaType=application/json"`
	Security    SearchconsoleURLInspectionIndexInspectSecurity
}

type SearchconsoleURLInspectionIndexInspectResponse struct {
	ContentType             string
	InspectURLIndexResponse *shared.InspectURLIndexResponse
	StatusCode              int64
}
