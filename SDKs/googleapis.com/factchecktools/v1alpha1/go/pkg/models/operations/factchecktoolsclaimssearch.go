package operations

import (
	"openapi/pkg/models/shared"
)

type FactchecktoolsClaimsSearchQueryParams struct {
	DollarXgafv               *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken               *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                       *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback                  *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields                    *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                       *string           `queryParam:"style=form,explode=true,name=key"`
	LanguageCode              *string           `queryParam:"style=form,explode=true,name=languageCode"`
	MaxAgeDays                *int64            `queryParam:"style=form,explode=true,name=maxAgeDays"`
	OauthToken                *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	Offset                    *int64            `queryParam:"style=form,explode=true,name=offset"`
	PageSize                  *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken                 *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint               *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	Query                     *string           `queryParam:"style=form,explode=true,name=query"`
	QuotaUser                 *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	ReviewPublisherSiteFilter *string           `queryParam:"style=form,explode=true,name=reviewPublisherSiteFilter"`
	UploadType                *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol            *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type FactchecktoolsClaimsSearchRequest struct {
	QueryParams FactchecktoolsClaimsSearchQueryParams
}

type FactchecktoolsClaimsSearchResponse struct {
	ContentType                                                            string
	GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse *shared.GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse
	StatusCode                                                             int64
}
