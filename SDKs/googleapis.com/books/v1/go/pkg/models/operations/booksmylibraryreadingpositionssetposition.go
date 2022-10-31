package operations

import (
	"openapi/pkg/models/shared"
)

type BooksMylibraryReadingpositionsSetPositionPathParams struct {
	VolumeID string `pathParam:"style=simple,explode=false,name=volumeId"`
}

type BooksMylibraryReadingpositionsSetPositionActionEnum string

const (
	BooksMylibraryReadingpositionsSetPositionActionEnumActionUndefined BooksMylibraryReadingpositionsSetPositionActionEnum = "ACTION_UNDEFINED"
	BooksMylibraryReadingpositionsSetPositionActionEnumBookmark        BooksMylibraryReadingpositionsSetPositionActionEnum = "bookmark"
	BooksMylibraryReadingpositionsSetPositionActionEnumChapter         BooksMylibraryReadingpositionsSetPositionActionEnum = "chapter"
	BooksMylibraryReadingpositionsSetPositionActionEnumNextPage        BooksMylibraryReadingpositionsSetPositionActionEnum = "next-page"
	BooksMylibraryReadingpositionsSetPositionActionEnumPrevPage        BooksMylibraryReadingpositionsSetPositionActionEnum = "prev-page"
	BooksMylibraryReadingpositionsSetPositionActionEnumScroll          BooksMylibraryReadingpositionsSetPositionActionEnum = "scroll"
	BooksMylibraryReadingpositionsSetPositionActionEnumSearch          BooksMylibraryReadingpositionsSetPositionActionEnum = "search"
)

type BooksMylibraryReadingpositionsSetPositionQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                    `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                              `queryParam:"style=form,explode=true,name=access_token"`
	Action         *BooksMylibraryReadingpositionsSetPositionActionEnum `queryParam:"style=form,explode=true,name=action"`
	Alt            *shared.AltEnum                                      `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                              `queryParam:"style=form,explode=true,name=callback"`
	ContentVersion *string                                              `queryParam:"style=form,explode=true,name=contentVersion"`
	DeviceCookie   *string                                              `queryParam:"style=form,explode=true,name=deviceCookie"`
	Fields         *string                                              `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                              `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                              `queryParam:"style=form,explode=true,name=oauth_token"`
	Position       string                                               `queryParam:"style=form,explode=true,name=position"`
	PrettyPrint    *bool                                                `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                              `queryParam:"style=form,explode=true,name=quotaUser"`
	Source         *string                                              `queryParam:"style=form,explode=true,name=source"`
	Timestamp      string                                               `queryParam:"style=form,explode=true,name=timestamp"`
	UploadType     *string                                              `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                              `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type BooksMylibraryReadingpositionsSetPositionSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BooksMylibraryReadingpositionsSetPositionRequest struct {
	PathParams  BooksMylibraryReadingpositionsSetPositionPathParams
	QueryParams BooksMylibraryReadingpositionsSetPositionQueryParams
	Security    BooksMylibraryReadingpositionsSetPositionSecurity
}

type BooksMylibraryReadingpositionsSetPositionResponse struct {
	ContentType string
	Empty       map[string]interface{}
	StatusCode  int64
}
