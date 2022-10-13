package operations

import (
	"openapi/pkg/models/shared"
)

type BooksMylibraryBookshelvesVolumesListPathParams struct {
	Shelf string `pathParam:"style=simple,explode=false,name=shelf"`
}

type BooksMylibraryBookshelvesVolumesListProjectionEnum string

const (
	BooksMylibraryBookshelvesVolumesListProjectionEnumProjectionUndefined BooksMylibraryBookshelvesVolumesListProjectionEnum = "PROJECTION_UNDEFINED"
	BooksMylibraryBookshelvesVolumesListProjectionEnumFull                BooksMylibraryBookshelvesVolumesListProjectionEnum = "FULL"
	BooksMylibraryBookshelvesVolumesListProjectionEnumLite                BooksMylibraryBookshelvesVolumesListProjectionEnum = "LITE"
)

type BooksMylibraryBookshelvesVolumesListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                   `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                             `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                     `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                             `queryParam:"style=form,explode=true,name=callback"`
	Country        *string                                             `queryParam:"style=form,explode=true,name=country"`
	Fields         *string                                             `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                             `queryParam:"style=form,explode=true,name=key"`
	MaxResults     *int64                                              `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken     *string                                             `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                                               `queryParam:"style=form,explode=true,name=prettyPrint"`
	Projection     *BooksMylibraryBookshelvesVolumesListProjectionEnum `queryParam:"style=form,explode=true,name=projection"`
	Q              *string                                             `queryParam:"style=form,explode=true,name=q"`
	QuotaUser      *string                                             `queryParam:"style=form,explode=true,name=quotaUser"`
	ShowPreorders  *bool                                               `queryParam:"style=form,explode=true,name=showPreorders"`
	Source         *string                                             `queryParam:"style=form,explode=true,name=source"`
	StartIndex     *int64                                              `queryParam:"style=form,explode=true,name=startIndex"`
	UploadType     *string                                             `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                             `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type BooksMylibraryBookshelvesVolumesListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BooksMylibraryBookshelvesVolumesListRequest struct {
	PathParams  BooksMylibraryBookshelvesVolumesListPathParams
	QueryParams BooksMylibraryBookshelvesVolumesListQueryParams
	Security    BooksMylibraryBookshelvesVolumesListSecurity
}

type BooksMylibraryBookshelvesVolumesListResponse struct {
	ContentType string
	StatusCode  int64
	Volumes     *shared.Volumes
}
