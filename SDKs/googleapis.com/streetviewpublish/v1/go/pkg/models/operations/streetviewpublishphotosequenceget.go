package operations

import (
	"openapi/pkg/models/shared"
)

type StreetviewpublishPhotoSequenceGetPathParams struct {
	SequenceID string `pathParam:"style=simple,explode=false,name=sequenceId"`
}

type StreetviewpublishPhotoSequenceGetViewEnum string

const (
	StreetviewpublishPhotoSequenceGetViewEnumBasic              StreetviewpublishPhotoSequenceGetViewEnum = "BASIC"
	StreetviewpublishPhotoSequenceGetViewEnumIncludeDownloadURL StreetviewpublishPhotoSequenceGetViewEnum = "INCLUDE_DOWNLOAD_URL"
)

type StreetviewpublishPhotoSequenceGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                          `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                    `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                            `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                    `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                    `queryParam:"style=form,explode=true,name=fields"`
	Filter         *string                                    `queryParam:"style=form,explode=true,name=filter"`
	Key            *string                                    `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                    `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                                      `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                    `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                    `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                    `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *StreetviewpublishPhotoSequenceGetViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type StreetviewpublishPhotoSequenceGetSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StreetviewpublishPhotoSequenceGetRequest struct {
	PathParams  StreetviewpublishPhotoSequenceGetPathParams
	QueryParams StreetviewpublishPhotoSequenceGetQueryParams
	Security    StreetviewpublishPhotoSequenceGetSecurity
}

type StreetviewpublishPhotoSequenceGetResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
