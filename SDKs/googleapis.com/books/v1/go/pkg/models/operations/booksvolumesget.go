package operations

import (
	"openapi/pkg/models/shared"
)

type BooksVolumesGetPathParams struct {
	VolumeID string `pathParam:"style=simple,explode=false,name=volumeId"`
}

type BooksVolumesGetProjectionEnum string

const (
	BooksVolumesGetProjectionEnumProjectionUndefined BooksVolumesGetProjectionEnum = "PROJECTION_UNDEFINED"
	BooksVolumesGetProjectionEnumFull                BooksVolumesGetProjectionEnum = "FULL"
	BooksVolumesGetProjectionEnumLite                BooksVolumesGetProjectionEnum = "LITE"
)

type BooksVolumesGetQueryParams struct {
	DollarXgafv               *shared.XgafvEnum              `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken               *string                        `queryParam:"style=form,explode=true,name=access_token"`
	Alt                       *shared.AltEnum                `queryParam:"style=form,explode=true,name=alt"`
	Callback                  *string                        `queryParam:"style=form,explode=true,name=callback"`
	Country                   *string                        `queryParam:"style=form,explode=true,name=country"`
	Fields                    *string                        `queryParam:"style=form,explode=true,name=fields"`
	IncludeNonComicsSeries    *bool                          `queryParam:"style=form,explode=true,name=includeNonComicsSeries"`
	Key                       *string                        `queryParam:"style=form,explode=true,name=key"`
	OauthToken                *string                        `queryParam:"style=form,explode=true,name=oauth_token"`
	Partner                   *string                        `queryParam:"style=form,explode=true,name=partner"`
	PrettyPrint               *bool                          `queryParam:"style=form,explode=true,name=prettyPrint"`
	Projection                *BooksVolumesGetProjectionEnum `queryParam:"style=form,explode=true,name=projection"`
	QuotaUser                 *string                        `queryParam:"style=form,explode=true,name=quotaUser"`
	Source                    *string                        `queryParam:"style=form,explode=true,name=source"`
	UploadType                *string                        `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol            *string                        `queryParam:"style=form,explode=true,name=upload_protocol"`
	UserLibraryConsistentRead *bool                          `queryParam:"style=form,explode=true,name=user_library_consistent_read"`
}

type BooksVolumesGetSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BooksVolumesGetRequest struct {
	PathParams  BooksVolumesGetPathParams
	QueryParams BooksVolumesGetQueryParams
	Security    BooksVolumesGetSecurity
}

type BooksVolumesGetResponse struct {
	ContentType string
	StatusCode  int64
	Volume      *shared.Volume
}
