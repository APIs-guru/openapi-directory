package operations

import (
	"openapi/pkg/models/shared"
)

type PolyAssetsListMaxComplexityEnum string

const (
	PolyAssetsListMaxComplexityEnumComplexityUnspecified PolyAssetsListMaxComplexityEnum = "COMPLEXITY_UNSPECIFIED"
	PolyAssetsListMaxComplexityEnumComplex               PolyAssetsListMaxComplexityEnum = "COMPLEX"
	PolyAssetsListMaxComplexityEnumMedium                PolyAssetsListMaxComplexityEnum = "MEDIUM"
	PolyAssetsListMaxComplexityEnumSimple                PolyAssetsListMaxComplexityEnum = "SIMPLE"
)

type PolyAssetsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                          `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                  `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                          `queryParam:"style=form,explode=true,name=callback"`
	Category       *string                          `queryParam:"style=form,explode=true,name=category"`
	Curated        *bool                            `queryParam:"style=form,explode=true,name=curated"`
	Fields         *string                          `queryParam:"style=form,explode=true,name=fields"`
	Format         *string                          `queryParam:"style=form,explode=true,name=format"`
	Key            *string                          `queryParam:"style=form,explode=true,name=key"`
	Keywords       *string                          `queryParam:"style=form,explode=true,name=keywords"`
	MaxComplexity  *PolyAssetsListMaxComplexityEnum `queryParam:"style=form,explode=true,name=maxComplexity"`
	OauthToken     *string                          `queryParam:"style=form,explode=true,name=oauth_token"`
	OrderBy        *string                          `queryParam:"style=form,explode=true,name=orderBy"`
	PageSize       *int64                           `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string                          `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                            `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                          `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                          `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                          `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type PolyAssetsListRequest struct {
	QueryParams PolyAssetsListQueryParams
}

type PolyAssetsListResponse struct {
	ContentType        string
	ListAssetsResponse *shared.ListAssetsResponse
	StatusCode         int64
}
