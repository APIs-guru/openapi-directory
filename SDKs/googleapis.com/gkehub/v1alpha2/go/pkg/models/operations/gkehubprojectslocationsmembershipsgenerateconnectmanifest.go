package operations

import (
	"openapi/pkg/models/shared"
)

type GkehubProjectsLocationsMembershipsGenerateConnectManifestPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GkehubProjectsLocationsMembershipsGenerateConnectManifestQueryParams struct {
	DollarXgafv            *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken            *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                    *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback               *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields                 *string           `queryParam:"style=form,explode=true,name=fields"`
	ImagePullSecretContent *string           `queryParam:"style=form,explode=true,name=imagePullSecretContent"`
	IsUpgrade              *bool             `queryParam:"style=form,explode=true,name=isUpgrade"`
	Key                    *string           `queryParam:"style=form,explode=true,name=key"`
	Namespace              *string           `queryParam:"style=form,explode=true,name=namespace"`
	OauthToken             *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint            *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	Proxy                  *string           `queryParam:"style=form,explode=true,name=proxy"`
	QuotaUser              *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	Registry               *string           `queryParam:"style=form,explode=true,name=registry"`
	UploadType             *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol         *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
	Version                *string           `queryParam:"style=form,explode=true,name=version"`
}

type GkehubProjectsLocationsMembershipsGenerateConnectManifestSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GkehubProjectsLocationsMembershipsGenerateConnectManifestRequest struct {
	PathParams  GkehubProjectsLocationsMembershipsGenerateConnectManifestPathParams
	QueryParams GkehubProjectsLocationsMembershipsGenerateConnectManifestQueryParams
	Security    GkehubProjectsLocationsMembershipsGenerateConnectManifestSecurity
}

type GkehubProjectsLocationsMembershipsGenerateConnectManifestResponse struct {
	ContentType                     string
	GenerateConnectManifestResponse *shared.GenerateConnectManifestResponse
	StatusCode                      int64
}
