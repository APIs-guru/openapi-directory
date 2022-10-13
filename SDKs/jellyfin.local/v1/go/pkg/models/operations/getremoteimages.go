package operations

import (
	"openapi/pkg/models/shared"
)

type GetRemoteImagesPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type GetRemoteImagesQueryParams struct {
	IncludeAllLanguages *bool                 `queryParam:"style=form,explode=true,name=includeAllLanguages"`
	Limit               *int32                `queryParam:"style=form,explode=true,name=limit"`
	ProviderName        *string               `queryParam:"style=form,explode=true,name=providerName"`
	StartIndex          *int32                `queryParam:"style=form,explode=true,name=startIndex"`
	Type                *shared.ImageTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type GetRemoteImagesSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetRemoteImagesRequest struct {
	PathParams  GetRemoteImagesPathParams
	QueryParams GetRemoteImagesQueryParams
	Security    GetRemoteImagesSecurity
}

type GetRemoteImagesResponse struct {
	ContentType       string
	ProblemDetails    map[string]interface{}
	RemoteImageResult *shared.RemoteImageResult
	StatusCode        int64
}
