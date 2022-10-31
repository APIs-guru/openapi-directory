package operations

import (
	"openapi/pkg/models/shared"
)

type GamesSnapshotsGetPathParams struct {
	SnapshotID string `pathParam:"style=simple,explode=false,name=snapshotId"`
}

type GamesSnapshotsGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	Language       *string           `queryParam:"style=form,explode=true,name=language"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type GamesSnapshotsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GamesSnapshotsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GamesSnapshotsGetSecurity struct {
	Option1 *GamesSnapshotsGetSecurityOption1 `security:"option"`
	Option2 *GamesSnapshotsGetSecurityOption2 `security:"option"`
}

type GamesSnapshotsGetRequest struct {
	PathParams  GamesSnapshotsGetPathParams
	QueryParams GamesSnapshotsGetQueryParams
	Security    GamesSnapshotsGetSecurity
}

type GamesSnapshotsGetResponse struct {
	ContentType string
	Snapshot    *shared.Snapshot
	StatusCode  int64
}
