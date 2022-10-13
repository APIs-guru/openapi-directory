package operations

import (
	"openapi/pkg/models/shared"
)

type BooksMylibraryBookshelvesAddVolumePathParams struct {
	Shelf string `pathParam:"style=simple,explode=false,name=shelf"`
}

type BooksMylibraryBookshelvesAddVolumeReasonEnum string

const (
	BooksMylibraryBookshelvesAddVolumeReasonEnumReasonUndefined BooksMylibraryBookshelvesAddVolumeReasonEnum = "REASON_UNDEFINED"
	BooksMylibraryBookshelvesAddVolumeReasonEnumIosPrex         BooksMylibraryBookshelvesAddVolumeReasonEnum = "IOS_PREX"
	BooksMylibraryBookshelvesAddVolumeReasonEnumIosSearch       BooksMylibraryBookshelvesAddVolumeReasonEnum = "IOS_SEARCH"
	BooksMylibraryBookshelvesAddVolumeReasonEnumOnboarding      BooksMylibraryBookshelvesAddVolumeReasonEnum = "ONBOARDING"
)

type BooksMylibraryBookshelvesAddVolumeQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                             `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                       `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                               `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                       `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                       `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                       `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                       `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                                         `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                       `queryParam:"style=form,explode=true,name=quotaUser"`
	Reason         *BooksMylibraryBookshelvesAddVolumeReasonEnum `queryParam:"style=form,explode=true,name=reason"`
	Source         *string                                       `queryParam:"style=form,explode=true,name=source"`
	UploadType     *string                                       `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                       `queryParam:"style=form,explode=true,name=upload_protocol"`
	VolumeID       string                                        `queryParam:"style=form,explode=true,name=volumeId"`
}

type BooksMylibraryBookshelvesAddVolumeSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BooksMylibraryBookshelvesAddVolumeRequest struct {
	PathParams  BooksMylibraryBookshelvesAddVolumePathParams
	QueryParams BooksMylibraryBookshelvesAddVolumeQueryParams
	Security    BooksMylibraryBookshelvesAddVolumeSecurity
}

type BooksMylibraryBookshelvesAddVolumeResponse struct {
	ContentType string
	Empty       map[string]interface{}
	StatusCode  int64
}
