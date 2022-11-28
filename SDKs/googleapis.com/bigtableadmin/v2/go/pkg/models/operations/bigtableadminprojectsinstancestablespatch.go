package operations

import (
	"openapi/pkg/models/shared"
)

type BigtableadminProjectsInstancesTablesPatchPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type BigtableadminProjectsInstancesTablesPatchQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UpdateMask     *string           `queryParam:"style=form,explode=true,name=updateMask"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type BigtableadminProjectsInstancesTablesPatchSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesTablesPatchSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesTablesPatchSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesTablesPatchSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesTablesPatchSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesTablesPatchSecurityOption6 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesTablesPatchSecurity struct {
	Option1 *BigtableadminProjectsInstancesTablesPatchSecurityOption1 `security:"option"`
	Option2 *BigtableadminProjectsInstancesTablesPatchSecurityOption2 `security:"option"`
	Option3 *BigtableadminProjectsInstancesTablesPatchSecurityOption3 `security:"option"`
	Option4 *BigtableadminProjectsInstancesTablesPatchSecurityOption4 `security:"option"`
	Option5 *BigtableadminProjectsInstancesTablesPatchSecurityOption5 `security:"option"`
	Option6 *BigtableadminProjectsInstancesTablesPatchSecurityOption6 `security:"option"`
}

type BigtableadminProjectsInstancesTablesPatchRequest struct {
	PathParams  BigtableadminProjectsInstancesTablesPatchPathParams
	QueryParams BigtableadminProjectsInstancesTablesPatchQueryParams
	Request     *shared.TableInput `request:"mediaType=application/json"`
	Security    BigtableadminProjectsInstancesTablesPatchSecurity
}

type BigtableadminProjectsInstancesTablesPatchResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
