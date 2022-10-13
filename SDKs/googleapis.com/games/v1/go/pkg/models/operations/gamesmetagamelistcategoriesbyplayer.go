package operations

import (
	"openapi/pkg/models/shared"
)

type GamesMetagameListCategoriesByPlayerCollectionEnum string

const (
	GamesMetagameListCategoriesByPlayerCollectionEnumCollectionUnspecified GamesMetagameListCategoriesByPlayerCollectionEnum = "COLLECTION_UNSPECIFIED"
	GamesMetagameListCategoriesByPlayerCollectionEnumAll                   GamesMetagameListCategoriesByPlayerCollectionEnum = "ALL"
)

type GamesMetagameListCategoriesByPlayerPathParams struct {
	Collection GamesMetagameListCategoriesByPlayerCollectionEnum `pathParam:"style=simple,explode=false,name=collection"`
	PlayerID   string                                            `pathParam:"style=simple,explode=false,name=playerId"`
}

type GamesMetagameListCategoriesByPlayerQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	Language       *string           `queryParam:"style=form,explode=true,name=language"`
	MaxResults     *int64            `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type GamesMetagameListCategoriesByPlayerSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GamesMetagameListCategoriesByPlayerRequest struct {
	PathParams  GamesMetagameListCategoriesByPlayerPathParams
	QueryParams GamesMetagameListCategoriesByPlayerQueryParams
	Security    GamesMetagameListCategoriesByPlayerSecurity
}

type GamesMetagameListCategoriesByPlayerResponse struct {
	CategoryListResponse *shared.CategoryListResponse
	ContentType          string
	StatusCode           int64
}
