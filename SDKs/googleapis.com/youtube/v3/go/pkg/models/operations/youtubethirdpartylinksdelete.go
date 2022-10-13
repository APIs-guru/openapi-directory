package operations

import (
	"openapi/pkg/models/shared"
)

type YoutubeThirdPartyLinksDeleteTypeEnum string

const (
	YoutubeThirdPartyLinksDeleteTypeEnumLinkUnspecified    YoutubeThirdPartyLinksDeleteTypeEnum = "linkUnspecified"
	YoutubeThirdPartyLinksDeleteTypeEnumChannelToStoreLink YoutubeThirdPartyLinksDeleteTypeEnum = "channelToStoreLink"
)

type YoutubeThirdPartyLinksDeleteQueryParams struct {
	DollarXgafv       *shared.XgafvEnum                    `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken       *string                              `queryParam:"style=form,explode=true,name=access_token"`
	Alt               *shared.AltEnum                      `queryParam:"style=form,explode=true,name=alt"`
	Callback          *string                              `queryParam:"style=form,explode=true,name=callback"`
	ExternalChannelID *string                              `queryParam:"style=form,explode=true,name=externalChannelId"`
	Fields            *string                              `queryParam:"style=form,explode=true,name=fields"`
	Key               *string                              `queryParam:"style=form,explode=true,name=key"`
	LinkingToken      string                               `queryParam:"style=form,explode=true,name=linkingToken"`
	OauthToken        *string                              `queryParam:"style=form,explode=true,name=oauth_token"`
	Part              []string                             `queryParam:"style=form,explode=true,name=part"`
	PrettyPrint       *bool                                `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser         *string                              `queryParam:"style=form,explode=true,name=quotaUser"`
	Type              YoutubeThirdPartyLinksDeleteTypeEnum `queryParam:"style=form,explode=true,name=type"`
	UploadType        *string                              `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol    *string                              `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type YoutubeThirdPartyLinksDeleteRequest struct {
	QueryParams YoutubeThirdPartyLinksDeleteQueryParams
}

type YoutubeThirdPartyLinksDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
