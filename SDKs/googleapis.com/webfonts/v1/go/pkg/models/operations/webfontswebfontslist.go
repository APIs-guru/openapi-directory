package operations

import (
	"openapi/pkg/models/shared"
)

type WebfontsWebfontsListSortEnum string

const (
	WebfontsWebfontsListSortEnumSortUndefined WebfontsWebfontsListSortEnum = "SORT_UNDEFINED"
	WebfontsWebfontsListSortEnumAlpha         WebfontsWebfontsListSortEnum = "ALPHA"
	WebfontsWebfontsListSortEnumDate          WebfontsWebfontsListSortEnum = "DATE"
	WebfontsWebfontsListSortEnumPopularity    WebfontsWebfontsListSortEnum = "POPULARITY"
	WebfontsWebfontsListSortEnumStyle         WebfontsWebfontsListSortEnum = "STYLE"
	WebfontsWebfontsListSortEnumTrending      WebfontsWebfontsListSortEnum = "TRENDING"
)

type WebfontsWebfontsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum             `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                       `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum               `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                       `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                       `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                       `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                       `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                         `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                       `queryParam:"style=form,explode=true,name=quotaUser"`
	Sort           *WebfontsWebfontsListSortEnum `queryParam:"style=form,explode=true,name=sort"`
	UploadType     *string                       `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                       `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type WebfontsWebfontsListRequest struct {
	QueryParams WebfontsWebfontsListQueryParams
}

type WebfontsWebfontsListResponse struct {
	ContentType string
	StatusCode  int64
	WebfontList *shared.WebfontList
}
