package operations

import (
	"openapi/pkg/models/shared"
)

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListViewEnum string

const (
	CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListViewEnumCryptoKeyVersionViewUnspecified CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListViewEnum = "CRYPTO_KEY_VERSION_VIEW_UNSPECIFIED"
	CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListViewEnumFull                            CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListViewEnum = "FULL"
)

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                                         `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                                                   `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                                           `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                                                   `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                                                   `queryParam:"style=form,explode=true,name=fields"`
	Filter         *string                                                                   `queryParam:"style=form,explode=true,name=filter"`
	Key            *string                                                                   `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                                                   `queryParam:"style=form,explode=true,name=oauth_token"`
	OrderBy        *string                                                                   `queryParam:"style=form,explode=true,name=orderBy"`
	PageSize       *int64                                                                    `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string                                                                   `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                                                                     `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                                                   `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                                                   `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                                                   `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListSecurity struct {
	Option1 *CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListSecurityOption1 `security:"option"`
	Option2 *CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListSecurityOption2 `security:"option"`
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListRequest struct {
	PathParams  CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListPathParams
	QueryParams CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListQueryParams
	Security    CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListSecurity
}

type CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListResponse struct {
	ContentType                   string
	ListCryptoKeyVersionsResponse *shared.ListCryptoKeyVersionsResponse
	StatusCode                    int64
}
