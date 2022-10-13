package operations

import (
	"openapi/pkg/models/shared"
)

type DfareportingPlacementsGeneratetagsPathParams struct {
	ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
}

type DfareportingPlacementsGeneratetagsTagFormatsEnum string

const (
	DfareportingPlacementsGeneratetagsTagFormatsEnumPlacementTagStandard                           DfareportingPlacementsGeneratetagsTagFormatsEnum = "PLACEMENT_TAG_STANDARD"
	DfareportingPlacementsGeneratetagsTagFormatsEnumPlacementTagIframeJavascript                   DfareportingPlacementsGeneratetagsTagFormatsEnum = "PLACEMENT_TAG_IFRAME_JAVASCRIPT"
	DfareportingPlacementsGeneratetagsTagFormatsEnumPlacementTagIframeIlayer                       DfareportingPlacementsGeneratetagsTagFormatsEnum = "PLACEMENT_TAG_IFRAME_ILAYER"
	DfareportingPlacementsGeneratetagsTagFormatsEnumPlacementTagInternalRedirect                   DfareportingPlacementsGeneratetagsTagFormatsEnum = "PLACEMENT_TAG_INTERNAL_REDIRECT"
	DfareportingPlacementsGeneratetagsTagFormatsEnumPlacementTagJavascript                         DfareportingPlacementsGeneratetagsTagFormatsEnum = "PLACEMENT_TAG_JAVASCRIPT"
	DfareportingPlacementsGeneratetagsTagFormatsEnumPlacementTagInterstitialIframeJavascript       DfareportingPlacementsGeneratetagsTagFormatsEnum = "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT"
	DfareportingPlacementsGeneratetagsTagFormatsEnumPlacementTagInterstitialInternalRedirect       DfareportingPlacementsGeneratetagsTagFormatsEnum = "PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT"
	DfareportingPlacementsGeneratetagsTagFormatsEnumPlacementTagInterstitialJavascript             DfareportingPlacementsGeneratetagsTagFormatsEnum = "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT"
	DfareportingPlacementsGeneratetagsTagFormatsEnumPlacementTagClickCommands                      DfareportingPlacementsGeneratetagsTagFormatsEnum = "PLACEMENT_TAG_CLICK_COMMANDS"
	DfareportingPlacementsGeneratetagsTagFormatsEnumPlacementTagInstreamVideoPrefetch              DfareportingPlacementsGeneratetagsTagFormatsEnum = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH"
	DfareportingPlacementsGeneratetagsTagFormatsEnumPlacementTagTracking                           DfareportingPlacementsGeneratetagsTagFormatsEnum = "PLACEMENT_TAG_TRACKING"
	DfareportingPlacementsGeneratetagsTagFormatsEnumPlacementTagTrackingIframe                     DfareportingPlacementsGeneratetagsTagFormatsEnum = "PLACEMENT_TAG_TRACKING_IFRAME"
	DfareportingPlacementsGeneratetagsTagFormatsEnumPlacementTagTrackingJavascript                 DfareportingPlacementsGeneratetagsTagFormatsEnum = "PLACEMENT_TAG_TRACKING_JAVASCRIPT"
	DfareportingPlacementsGeneratetagsTagFormatsEnumPlacementTagInstreamVideoPrefetchVast3         DfareportingPlacementsGeneratetagsTagFormatsEnum = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3"
	DfareportingPlacementsGeneratetagsTagFormatsEnumPlacementTagIframeJavascriptLegacy             DfareportingPlacementsGeneratetagsTagFormatsEnum = "PLACEMENT_TAG_IFRAME_JAVASCRIPT_LEGACY"
	DfareportingPlacementsGeneratetagsTagFormatsEnumPlacementTagJavascriptLegacy                   DfareportingPlacementsGeneratetagsTagFormatsEnum = "PLACEMENT_TAG_JAVASCRIPT_LEGACY"
	DfareportingPlacementsGeneratetagsTagFormatsEnumPlacementTagInterstitialIframeJavascriptLegacy DfareportingPlacementsGeneratetagsTagFormatsEnum = "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT_LEGACY"
	DfareportingPlacementsGeneratetagsTagFormatsEnumPlacementTagInterstitialJavascriptLegacy       DfareportingPlacementsGeneratetagsTagFormatsEnum = "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT_LEGACY"
	DfareportingPlacementsGeneratetagsTagFormatsEnumPlacementTagInstreamVideoPrefetchVast4         DfareportingPlacementsGeneratetagsTagFormatsEnum = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4"
	DfareportingPlacementsGeneratetagsTagFormatsEnumPlacementTagTrackingThirdPartyMeasurement      DfareportingPlacementsGeneratetagsTagFormatsEnum = "PLACEMENT_TAG_TRACKING_THIRD_PARTY_MEASUREMENT"
)

type DfareportingPlacementsGeneratetagsQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                  `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                            `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                    `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                            `queryParam:"style=form,explode=true,name=callback"`
	CampaignID     *string                                            `queryParam:"style=form,explode=true,name=campaignId"`
	Fields         *string                                            `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                            `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                            `queryParam:"style=form,explode=true,name=oauth_token"`
	PlacementIds   []string                                           `queryParam:"style=form,explode=true,name=placementIds"`
	PrettyPrint    *bool                                              `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                            `queryParam:"style=form,explode=true,name=quotaUser"`
	TagFormats     []DfareportingPlacementsGeneratetagsTagFormatsEnum `queryParam:"style=form,explode=true,name=tagFormats"`
	UploadType     *string                                            `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                            `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DfareportingPlacementsGeneratetagsSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DfareportingPlacementsGeneratetagsRequest struct {
	PathParams  DfareportingPlacementsGeneratetagsPathParams
	QueryParams DfareportingPlacementsGeneratetagsQueryParams
	Security    DfareportingPlacementsGeneratetagsSecurity
}

type DfareportingPlacementsGeneratetagsResponse struct {
	ContentType                    string
	PlacementsGenerateTagsResponse *shared.PlacementsGenerateTagsResponse
	StatusCode                     int64
}
