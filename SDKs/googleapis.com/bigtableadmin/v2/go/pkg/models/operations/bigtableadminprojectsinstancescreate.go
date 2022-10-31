package operations

import (
	"openapi/pkg/models/shared"
)

type BigtableadminProjectsInstancesCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type BigtableadminProjectsInstancesCreateQueryParams struct {
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

type BigtableadminProjectsInstancesCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesCreateSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesCreateSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesCreateSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesCreateSecurityOption6 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesCreateSecurity struct {
	Option1 *BigtableadminProjectsInstancesCreateSecurityOption1 `security:"option"`
	Option2 *BigtableadminProjectsInstancesCreateSecurityOption2 `security:"option"`
	Option3 *BigtableadminProjectsInstancesCreateSecurityOption3 `security:"option"`
	Option4 *BigtableadminProjectsInstancesCreateSecurityOption4 `security:"option"`
	Option5 *BigtableadminProjectsInstancesCreateSecurityOption5 `security:"option"`
	Option6 *BigtableadminProjectsInstancesCreateSecurityOption6 `security:"option"`
}

type BigtableadminProjectsInstancesCreateRequest struct {
	PathParams  BigtableadminProjectsInstancesCreatePathParams
	QueryParams BigtableadminProjectsInstancesCreateQueryParams
	Request     *shared.CreateInstanceRequest `request:"mediaType=application/json"`
	Security    BigtableadminProjectsInstancesCreateSecurity
}

type BigtableadminProjectsInstancesCreateResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
