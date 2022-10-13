package operations

import (
	"openapi/pkg/models/shared"
)

type RetrieveSentryRiskDataQueryParams struct {
	IsActive *bool  `queryParam:"style=form,explode=true,name=is_active"`
	Page     *int32 `queryParam:"style=form,explode=true,name=page"`
	Size     *int32 `queryParam:"style=form,explode=true,name=size"`
}

type RetrieveSentryRiskDataRequest struct {
	QueryParams RetrieveSentryRiskDataQueryParams
}

type RetrieveSentryRiskDataResponse struct {
	ContentType           string
	SentryObjectPagingDto *shared.SentryObjectPagingDto
	StatusCode            int64
}
