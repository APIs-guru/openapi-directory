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
	BoostSpec           *GoogleCloudRetailV2alphaSearchRequestBoostSpec              `json:"boostSpec,omitempty"`
	Branch              *string                                                      `json:"branch,omitempty"`
	CanonicalFilter     *string                                                      `json:"canonicalFilter,omitempty"`
	DynamicFacetSpec    *GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec       `json:"dynamicFacetSpec,omitempty"`
	FacetSpecs          []GoogleCloudRetailV2alphaSearchRequestFacetSpec             `json:"facetSpecs,omitempty"`
	Filter              *string                                                      `json:"filter,omitempty"`
	Labels              map[string]string                                            `json:"labels,omitempty"`
	Offset              *int32                                                       `json:"offset,omitempty"`
	OrderBy             *string                                                      `json:"orderBy,omitempty"`
	PageCategories      []string                                                     `json:"pageCategories,omitempty"`
	PageSize            *int32                                                       `json:"pageSize,omitempty"`
	PageToken           *string                                                      `json:"pageToken,omitempty"`
	PersonalizationSpec *GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec    `json:"personalizationSpec,omitempty"`
	Query               *string                                                      `json:"query,omitempty"`
	QueryExpansionSpec  *GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpec     `json:"queryExpansionSpec,omitempty"`
	RelevanceThreshold  *GoogleCloudRetailV2alphaSearchRequestRelevanceThresholdEnum `json:"relevanceThreshold,omitempty"`
	SearchMode          *GoogleCloudRetailV2alphaSearchRequestSearchModeEnum         `json:"searchMode,omitempty"`
	SpellCorrectionSpec *GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpec    `json:"spellCorrectionSpec,omitempty"`
	UserInfo            *GoogleCloudRetailV2alphaUserInfo                            `json:"userInfo,omitempty"`
	VariantRollupKeys   []string                                                     `json:"variantRollupKeys,omitempty"`
	VisitorID           *string                                                      `json:"visitorId,omitempty"`
}
