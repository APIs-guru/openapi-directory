package shared

type GoogleCloudRetailV2SearchRequestSearchModeEnum string

const (
	GoogleCloudRetailV2SearchRequestSearchModeEnumSearchModeUnspecified GoogleCloudRetailV2SearchRequestSearchModeEnum = "SEARCH_MODE_UNSPECIFIED"
	GoogleCloudRetailV2SearchRequestSearchModeEnumProductSearchOnly     GoogleCloudRetailV2SearchRequestSearchModeEnum = "PRODUCT_SEARCH_ONLY"
	GoogleCloudRetailV2SearchRequestSearchModeEnumFacetedSearchOnly     GoogleCloudRetailV2SearchRequestSearchModeEnum = "FACETED_SEARCH_ONLY"
)

type GoogleCloudRetailV2SearchRequest struct {
	BoostSpec           *GoogleCloudRetailV2SearchRequestBoostSpec           `json:"boostSpec"`
	Branch              *string                                              `json:"branch"`
	CanonicalFilter     *string                                              `json:"canonicalFilter"`
	DynamicFacetSpec    *GoogleCloudRetailV2SearchRequestDynamicFacetSpec    `json:"dynamicFacetSpec"`
	FacetSpecs          []GoogleCloudRetailV2SearchRequestFacetSpec          `json:"facetSpecs"`
	Filter              *string                                              `json:"filter"`
	Labels              map[string]string                                    `json:"labels"`
	Offset              *int32                                               `json:"offset"`
	OrderBy             *string                                              `json:"orderBy"`
	PageCategories      []string                                             `json:"pageCategories"`
	PageSize            *int32                                               `json:"pageSize"`
	PageToken           *string                                              `json:"pageToken"`
	PersonalizationSpec *GoogleCloudRetailV2SearchRequestPersonalizationSpec `json:"personalizationSpec"`
	Query               *string                                              `json:"query"`
	QueryExpansionSpec  *GoogleCloudRetailV2SearchRequestQueryExpansionSpec  `json:"queryExpansionSpec"`
	SearchMode          *GoogleCloudRetailV2SearchRequestSearchModeEnum      `json:"searchMode"`
	SpellCorrectionSpec *GoogleCloudRetailV2SearchRequestSpellCorrectionSpec `json:"spellCorrectionSpec"`
	UserInfo            *GoogleCloudRetailV2UserInfo                         `json:"userInfo"`
	VariantRollupKeys   []string                                             `json:"variantRollupKeys"`
	VisitorID           *string                                              `json:"visitorId"`
}
