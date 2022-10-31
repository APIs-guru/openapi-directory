package operations

import (
	"openapi/pkg/models/shared"
)

type YoutubeCommentsSetModerationStatusModerationStatusEnum string

const (
	YoutubeCommentsSetModerationStatusModerationStatusEnumPublished     YoutubeCommentsSetModerationStatusModerationStatusEnum = "published"
	YoutubeCommentsSetModerationStatusModerationStatusEnumHeldForReview YoutubeCommentsSetModerationStatusModerationStatusEnum = "heldForReview"
	YoutubeCommentsSetModerationStatusModerationStatusEnumLikelySpam    YoutubeCommentsSetModerationStatusModerationStatusEnum = "likelySpam"
	YoutubeCommentsSetModerationStatusModerationStatusEnumRejected      YoutubeCommentsSetModerationStatusModerationStatusEnum = "rejected"
)

type YoutubeCommentsSetModerationStatusQueryParams struct {
	DollarXgafv      *shared.XgafvEnum                                      `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken      *string                                                `queryParam:"style=form,explode=true,name=access_token"`
	Alt              *shared.AltEnum                                        `queryParam:"style=form,explode=true,name=alt"`
	BanAuthor        *bool                                                  `queryParam:"style=form,explode=true,name=banAuthor"`
	Callback         *string                                                `queryParam:"style=form,explode=true,name=callback"`
	Fields           *string                                                `queryParam:"style=form,explode=true,name=fields"`
	ID               []string                                               `queryParam:"style=form,explode=true,name=id"`
	Key              *string                                                `queryParam:"style=form,explode=true,name=key"`
	ModerationStatus YoutubeCommentsSetModerationStatusModerationStatusEnum `queryParam:"style=form,explode=true,name=moderationStatus"`
	OauthToken       *string                                                `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint      *bool                                                  `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser        *string                                                `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType       *string                                                `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol   *string                                                `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type YoutubeCommentsSetModerationStatusSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeCommentsSetModerationStatusRequest struct {
	QueryParams YoutubeCommentsSetModerationStatusQueryParams
	Security    YoutubeCommentsSetModerationStatusSecurity
}

type YoutubeCommentsSetModerationStatusResponse struct {
	ContentType string
	StatusCode  int64
}
