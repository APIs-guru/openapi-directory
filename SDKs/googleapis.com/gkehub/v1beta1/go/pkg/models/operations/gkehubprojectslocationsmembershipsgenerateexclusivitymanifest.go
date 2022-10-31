package operations

import (
	"openapi/pkg/models/shared"
)

type GkehubProjectsLocationsMembershipsGenerateExclusivityManifestPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GkehubProjectsLocationsMembershipsGenerateExclusivityManifestQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	CrManifest     *string           `queryParam:"style=form,explode=true,name=crManifest"`
	CrdManifest    *string           `queryParam:"style=form,explode=true,name=crdManifest"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type GkehubProjectsLocationsMembershipsGenerateExclusivityManifestSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GkehubProjectsLocationsMembershipsGenerateExclusivityManifestRequest struct {
	PathParams  GkehubProjectsLocationsMembershipsGenerateExclusivityManifestPathParams
	QueryParams GkehubProjectsLocationsMembershipsGenerateExclusivityManifestQueryParams
	Security    GkehubProjectsLocationsMembershipsGenerateExclusivityManifestSecurity
}

type GkehubProjectsLocationsMembershipsGenerateExclusivityManifestResponse struct {
	ContentType                         string
	GenerateExclusivityManifestResponse *shared.GenerateExclusivityManifestResponse
	StatusCode                          int64
}
