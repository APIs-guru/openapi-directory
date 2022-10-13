package shared

type GoogleCloudRetailV2alphaSearchRequestRelevanceThresholdEnum string

const (
	GoogleCloudRetailV2alphaSearchRequestRelevanceThresholdEnumRelevanceThresholdUnspecified GoogleCloudRetailV2alphaSearchRequestRelevanceThresholdEnum = "RELEVANCE_THRESHOLD_UNSPECIFIED"
	GoogleCloudRetailV2alphaSearchRequestRelevanceThresholdEnumHigh                          GoogleCloudRetailV2alphaSearchRequestRelevanceThresholdEnum = "HIGH"
	GoogleCloudRetailV2alphaSearchRequestRelevanceThresholdEnumMedium                        GoogleCloudRetailV2alphaSearchRequestRelevanceThresholdEnum = "MEDIUM"
	GoogleCloudRetailV2alphaSearchRequestRelevanceThresholdEnumLow                           GoogleCloudRetailV2alphaSearchRequestRelevanceThresholdEnum = "LOW"
	GoogleCloudRetailV2alphaSearchRequestRelevanceThresholdEnumLowest                        GoogleCloudRetailV2alphaSearchRequestRelevanceThresholdEnum = "LOWEST"
)

type GoogleCloudRetailV2alphaSearchRequestSearchModeEnum string

const (
	GoogleCloudRetailV2alphaSearchRequestSearchModeEnumSearchModeUnspecified GoogleCloudRetailV2alphaSearchRequestSearchModeEnum = "SEARCH_MODE_UNSPECIFIED"
	GoogleCloudRetailV2alphaSearchRequestSearchModeEnumProductSearchOnly     GoogleCloudRetailV2alphaSearchRequestSearchModeEnum = "PRODUCT_SEARCH_ONLY"
	GoogleCloudRetailV2alphaSearchRequestSearchModeEnumFacetedSearchOnly     GoogleCloudRetailV2alphaSearchRequestSearchModeEnum = "FACETED_SEARCH_ONLY"
)

type GoogleCloudRetailV2alphaSearchRequest struct {
	BoostSpec           *GoogleCloudRetailV2alphaSearchRequestBoostSpec              `json:"boostSpec"`
	Branch              *string                                                      `json:"branch"`
	CanonicalFilter     *string                                                      `json:"canonicalFilter"`
	DynamicFacetSpec    *GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec       `json:"dynamicFacetSpec"`
	FacetSpecs          []GoogleCloudRetailV2alphaSearchRequestFacetSpec             `json:"facetSpecs"`
	Filter              *string                                                      `json:"filter"`
	Labels              map[string]string                                            `json:"labels"`
	Offset              *int32                                                       `json:"offset"`
	OrderBy             *string                                                      `json:"orderBy"`
	PageCategories      []string                                                     `json:"pageCategories"`
	PageSize            *int32                                                       `json:"pageSize"`
	PageToken           *string                                                      `json:"pageToken"`
	PersonalizationSpec *GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec    `json:"personalizationSpec"`
	Query               *string                                                      `json:"query"`
	QueryExpansionSpec  *GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpec     `json:"queryExpansionSpec"`
	RelevanceThreshold  *GoogleCloudRetailV2alphaSearchRequestRelevanceThresholdEnum `json:"relevanceThreshold"`
	SearchMode          *GoogleCloudRetailV2alphaSearchRequestSearchModeEnum         `json:"searchMode"`
	SpellCorrectionSpec *GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpec    `json:"spellCorrectionSpec"`
	UserInfo            *GoogleCloudRetailV2alphaUserInfo                            `json:"userInfo"`
	VariantRollupKeys   []string                                                     `json:"variantRollupKeys"`
	VisitorID           *string                                                      `json:"visitorId"`
}
