package operations

import (
	"openapi/pkg/models/shared"
)

type GkehubProjectsLocationsMembershipsValidateExclusivityPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type GkehubProjectsLocationsMembershipsValidateExclusivityQueryParams struct {
	DollarXgafv        *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken        *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback           *string           `queryParam:"style=form,explode=true,name=callback"`
	CrManifest         *string           `queryParam:"style=form,explode=true,name=crManifest"`
	Fields             *string           `queryParam:"style=form,explode=true,name=fields"`
	IntendedMembership *string           `queryParam:"style=form,explode=true,name=intendedMembership"`
	Key                *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken         *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint        *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser          *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType         *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol     *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type GkehubProjectsLocationsMembershipsValidateExclusivitySecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GkehubProjectsLocationsMembershipsValidateExclusivityRequest struct {
	PathParams  GkehubProjectsLocationsMembershipsValidateExclusivityPathParams
	QueryParams GkehubProjectsLocationsMembershipsValidateExclusivityQueryParams
	Security    GkehubProjectsLocationsMembershipsValidateExclusivitySecurity
}

type GkehubProjectsLocationsMembershipsValidateExclusivityResponse struct {
	ContentType                 string
	StatusCode                  int64
	ValidateExclusivityResponse *shared.ValidateExclusivityResponse
}
