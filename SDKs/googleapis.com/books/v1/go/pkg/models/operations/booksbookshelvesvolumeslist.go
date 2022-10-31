package operations

import (
	"openapi/pkg/models/shared"
)

type BooksBookshelvesVolumesListPathParams struct {
	Shelf  string `pathParam:"style=simple,explode=false,name=shelf"`
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type BooksBookshelvesVolumesListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	MaxResults     *int64            `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	ShowPreorders  *bool             `queryParam:"style=form,explode=true,name=showPreorders"`
	Source         *string           `queryParam:"style=form,explode=true,name=source"`
	StartIndex     *int64            `queryParam:"style=form,explode=true,name=startIndex"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type BooksBookshelvesVolumesListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BooksBookshelvesVolumesListRequest struct {
	PathParams  BooksBookshelvesVolumesListPathParams
	QueryParams BooksBookshelvesVolumesListQueryParams
	Security    BooksBookshelvesVolumesListSecurity
}

type BooksBookshelvesVolumesListResponse struct {
	ContentType string
	StatusCode  int64
	Volumes     *shared.Volumes
}
