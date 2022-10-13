package shared

type GoogleCloudRetailV2betaSearchRequestSearchModeEnum string

const (
	GoogleCloudRetailV2betaSearchRequestSearchModeEnumSearchModeUnspecified GoogleCloudRetailV2betaSearchRequestSearchModeEnum = "SEARCH_MODE_UNSPECIFIED"
	GoogleCloudRetailV2betaSearchRequestSearchModeEnumProductSearchOnly     GoogleCloudRetailV2betaSearchRequestSearchModeEnum = "PRODUCT_SEARCH_ONLY"
	GoogleCloudRetailV2betaSearchRequestSearchModeEnumFacetedSearchOnly     GoogleCloudRetailV2betaSearchRequestSearchModeEnum = "FACETED_SEARCH_ONLY"
)

type GoogleCloudRetailV2betaSearchRequest struct {
	BoostSpec           *GoogleCloudRetailV2betaSearchRequestBoostSpec           `json:"boostSpec"`
	Branch              *string                                                  `json:"branch"`
	CanonicalFilter     *string                                                  `json:"canonicalFilter"`
	DynamicFacetSpec    *GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec    `json:"dynamicFacetSpec"`
	FacetSpecs          []GoogleCloudRetailV2betaSearchRequestFacetSpec          `json:"facetSpecs"`
	Filter              *string                                                  `json:"filter"`
	Labels              map[string]string                                        `json:"labels"`
	Offset              *int32                                                   `json:"offset"`
	OrderBy             *string                                                  `json:"orderBy"`
	PageCategories      []string                                                 `json:"pageCategories"`
	PageSize            *int32                                                   `json:"pageSize"`
	PageToken           *string                                                  `json:"pageToken"`
	PersonalizationSpec *GoogleCloudRetailV2betaSearchRequestPersonalizationSpec `json:"personalizationSpec"`
	Query               *string                                                  `json:"query"`
	QueryExpansionSpec  *GoogleCloudRetailV2betaSearchRequestQueryExpansionSpec  `json:"queryExpansionSpec"`
	SearchMode          *GoogleCloudRetailV2betaSearchRequestSearchModeEnum      `json:"searchMode"`
	SpellCorrectionSpec *GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpec `json:"spellCorrectionSpec"`
	UserInfo            *GoogleCloudRetailV2betaUserInfo                         `json:"userInfo"`
	VariantRollupKeys   []string                                                 `json:"variantRollupKeys"`
	VisitorID           *string                                                  `json:"visitorId"`
}
