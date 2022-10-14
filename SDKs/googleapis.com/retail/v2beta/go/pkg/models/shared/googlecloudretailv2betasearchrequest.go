package shared

type GoogleCloudRetailV2betaSearchRequestSearchModeEnum string

const (
	GoogleCloudRetailV2betaSearchRequestSearchModeEnumSearchModeUnspecified GoogleCloudRetailV2betaSearchRequestSearchModeEnum = "SEARCH_MODE_UNSPECIFIED"
	GoogleCloudRetailV2betaSearchRequestSearchModeEnumProductSearchOnly     GoogleCloudRetailV2betaSearchRequestSearchModeEnum = "PRODUCT_SEARCH_ONLY"
	GoogleCloudRetailV2betaSearchRequestSearchModeEnumFacetedSearchOnly     GoogleCloudRetailV2betaSearchRequestSearchModeEnum = "FACETED_SEARCH_ONLY"
)

type GoogleCloudRetailV2betaSearchRequest struct {
	BoostSpec           *GoogleCloudRetailV2betaSearchRequestBoostSpec           `json:"boostSpec,omitempty"`
	Branch              *string                                                  `json:"branch,omitempty"`
	CanonicalFilter     *string                                                  `json:"canonicalFilter,omitempty"`
	DynamicFacetSpec    *GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec    `json:"dynamicFacetSpec,omitempty"`
	FacetSpecs          []GoogleCloudRetailV2betaSearchRequestFacetSpec          `json:"facetSpecs,omitempty"`
	Filter              *string                                                  `json:"filter,omitempty"`
	Labels              map[string]string                                        `json:"labels,omitempty"`
	Offset              *int32                                                   `json:"offset,omitempty"`
	OrderBy             *string                                                  `json:"orderBy,omitempty"`
	PageCategories      []string                                                 `json:"pageCategories,omitempty"`
	PageSize            *int32                                                   `json:"pageSize,omitempty"`
	PageToken           *string                                                  `json:"pageToken,omitempty"`
	PersonalizationSpec *GoogleCloudRetailV2betaSearchRequestPersonalizationSpec `json:"personalizationSpec,omitempty"`
	Query               *string                                                  `json:"query,omitempty"`
	QueryExpansionSpec  *GoogleCloudRetailV2betaSearchRequestQueryExpansionSpec  `json:"queryExpansionSpec,omitempty"`
	SearchMode          *GoogleCloudRetailV2betaSearchRequestSearchModeEnum      `json:"searchMode,omitempty"`
	SpellCorrectionSpec *GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpec `json:"spellCorrectionSpec,omitempty"`
	UserInfo            *GoogleCloudRetailV2betaUserInfo                         `json:"userInfo,omitempty"`
	VariantRollupKeys   []string                                                 `json:"variantRollupKeys,omitempty"`
	VisitorID           *string                                                  `json:"visitorId,omitempty"`
}
