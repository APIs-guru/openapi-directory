package operations

import (
	"openapi/pkg/models/shared"
)

type GetResourcesCampaignsIDSyndicateFormatPathParams struct {
	Format string `pathParam:"style=simple,explode=false,name=format"`
	ID     int64  `pathParam:"style=simple,explode=false,name=id"`
}

type GetResourcesCampaignsIDSyndicateFormatQueryParams struct {
	DisplayMethod *string `queryParam:"style=form,explode=false,name=displayMethod"`
}

type GetResourcesCampaignsIDSyndicateFormatRequest struct {
	PathParams  GetResourcesCampaignsIDSyndicateFormatPathParams
	QueryParams GetResourcesCampaignsIDSyndicateFormatQueryParams
}

type GetResourcesCampaignsIDSyndicateFormatResponse struct {
	ContentType                string
	StatusCode                 int64
	SyndicateMarshallerWrapped *shared.SyndicateMarshallerWrapped
}
