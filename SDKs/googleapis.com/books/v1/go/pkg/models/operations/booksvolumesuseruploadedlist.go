package operations

import (
	"openapi/pkg/models/shared"
)

type BooksVolumesUseruploadedListProcessingStateEnum string

const (
	BooksVolumesUseruploadedListProcessingStateEnumProcessingStateUndefined BooksVolumesUseruploadedListProcessingStateEnum = "PROCESSING_STATE_UNDEFINED"
	BooksVolumesUseruploadedListProcessingStateEnumCompletedFailed          BooksVolumesUseruploadedListProcessingStateEnum = "COMPLETED_FAILED"
	BooksVolumesUseruploadedListProcessingStateEnumCompletedSuccess         BooksVolumesUseruploadedListProcessingStateEnum = "COMPLETED_SUCCESS"
	BooksVolumesUseruploadedListProcessingStateEnumRunning                  BooksVolumesUseruploadedListProcessingStateEnum = "RUNNING"
)

type BooksVolumesUseruploadedListQueryParams struct {
	DollarXgafv     *shared.XgafvEnum                                 `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken     *string                                           `queryParam:"style=form,explode=true,name=access_token"`
	Alt             *shared.AltEnum                                   `queryParam:"style=form,explode=true,name=alt"`
	Callback        *string                                           `queryParam:"style=form,explode=true,name=callback"`
	Fields          *string                                           `queryParam:"style=form,explode=true,name=fields"`
	Key             *string                                           `queryParam:"style=form,explode=true,name=key"`
	Locale          *string                                           `queryParam:"style=form,explode=true,name=locale"`
	MaxResults      *int64                                            `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken      *string                                           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint     *bool                                             `queryParam:"style=form,explode=true,name=prettyPrint"`
	ProcessingState []BooksVolumesUseruploadedListProcessingStateEnum `queryParam:"style=form,explode=true,name=processingState"`
	QuotaUser       *string                                           `queryParam:"style=form,explode=true,name=quotaUser"`
	Source          *string                                           `queryParam:"style=form,explode=true,name=source"`
	StartIndex      *int64                                            `queryParam:"style=form,explode=true,name=startIndex"`
	UploadType      *string                                           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol  *string                                           `queryParam:"style=form,explode=true,name=upload_protocol"`
	VolumeID        []string                                          `queryParam:"style=form,explode=true,name=volumeId"`
}

type BooksVolumesUseruploadedListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BooksVolumesUseruploadedListRequest struct {
	QueryParams BooksVolumesUseruploadedListQueryParams
	Security    BooksVolumesUseruploadedListSecurity
}

type BooksVolumesUseruploadedListResponse struct {
	ContentType string
	StatusCode  int64
	Volumes     *shared.Volumes
}
