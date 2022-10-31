package operations

import (
	"openapi/pkg/models/shared"
)

type BooksMyconfigSyncVolumeLicensesFeaturesEnum string

const (
	BooksMyconfigSyncVolumeLicensesFeaturesEnumFeaturesUndefined BooksMyconfigSyncVolumeLicensesFeaturesEnum = "FEATURES_UNDEFINED"
	BooksMyconfigSyncVolumeLicensesFeaturesEnumRentals           BooksMyconfigSyncVolumeLicensesFeaturesEnum = "RENTALS"
)

type BooksMyconfigSyncVolumeLicensesQueryParams struct {
	DollarXgafv            *shared.XgafvEnum                             `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken            *string                                       `queryParam:"style=form,explode=true,name=access_token"`
	Alt                    *shared.AltEnum                               `queryParam:"style=form,explode=true,name=alt"`
	Callback               *string                                       `queryParam:"style=form,explode=true,name=callback"`
	Cpksver                string                                        `queryParam:"style=form,explode=true,name=cpksver"`
	Features               []BooksMyconfigSyncVolumeLicensesFeaturesEnum `queryParam:"style=form,explode=true,name=features"`
	Fields                 *string                                       `queryParam:"style=form,explode=true,name=fields"`
	IncludeNonComicsSeries *bool                                         `queryParam:"style=form,explode=true,name=includeNonComicsSeries"`
	Key                    *string                                       `queryParam:"style=form,explode=true,name=key"`
	Locale                 *string                                       `queryParam:"style=form,explode=true,name=locale"`
	Nonce                  string                                        `queryParam:"style=form,explode=true,name=nonce"`
	OauthToken             *string                                       `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint            *bool                                         `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser              *string                                       `queryParam:"style=form,explode=true,name=quotaUser"`
	ShowPreorders          *bool                                         `queryParam:"style=form,explode=true,name=showPreorders"`
	Source                 string                                        `queryParam:"style=form,explode=true,name=source"`
	UploadType             *string                                       `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol         *string                                       `queryParam:"style=form,explode=true,name=upload_protocol"`
	VolumeIds              []string                                      `queryParam:"style=form,explode=true,name=volumeIds"`
}

type BooksMyconfigSyncVolumeLicensesSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BooksMyconfigSyncVolumeLicensesRequest struct {
	QueryParams BooksMyconfigSyncVolumeLicensesQueryParams
	Security    BooksMyconfigSyncVolumeLicensesSecurity
}

type BooksMyconfigSyncVolumeLicensesResponse struct {
	ContentType string
	StatusCode  int64
	Volumes     *shared.Volumes
}
