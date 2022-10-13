package operations

import (
	"openapi/pkg/models/shared"
)

type PagespeedonlinePagespeedapiRunpagespeedStrategyEnum string

const (
	PagespeedonlinePagespeedapiRunpagespeedStrategyEnumDesktop PagespeedonlinePagespeedapiRunpagespeedStrategyEnum = "desktop"
	PagespeedonlinePagespeedapiRunpagespeedStrategyEnumMobile  PagespeedonlinePagespeedapiRunpagespeedStrategyEnum = "mobile"
)

type PagespeedonlinePagespeedapiRunpagespeedQueryParams struct {
	Alt                       *shared.AltEnum                                      `queryParam:"style=form,explode=true,name=alt"`
	Fields                    *string                                              `queryParam:"style=form,explode=true,name=fields"`
	FilterThirdPartyResources *bool                                                `queryParam:"style=form,explode=true,name=filter_third_party_resources"`
	Key                       *string                                              `queryParam:"style=form,explode=true,name=key"`
	Locale                    *string                                              `queryParam:"style=form,explode=true,name=locale"`
	OauthToken                *string                                              `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint               *bool                                                `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                 *string                                              `queryParam:"style=form,explode=true,name=quotaUser"`
	Rule                      []string                                             `queryParam:"style=form,explode=true,name=rule"`
	Screenshot                *bool                                                `queryParam:"style=form,explode=true,name=screenshot"`
	Snapshots                 *bool                                                `queryParam:"style=form,explode=true,name=snapshots"`
	Strategy                  *PagespeedonlinePagespeedapiRunpagespeedStrategyEnum `queryParam:"style=form,explode=true,name=strategy"`
	URL                       string                                               `queryParam:"style=form,explode=true,name=url"`
	UserIP                    *string                                              `queryParam:"style=form,explode=true,name=userIp"`
	UtmCampaign               *string                                              `queryParam:"style=form,explode=true,name=utm_campaign"`
	UtmSource                 *string                                              `queryParam:"style=form,explode=true,name=utm_source"`
}

type PagespeedonlinePagespeedapiRunpagespeedRequest struct {
	QueryParams PagespeedonlinePagespeedapiRunpagespeedQueryParams
}

type PagespeedonlinePagespeedapiRunpagespeedResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
