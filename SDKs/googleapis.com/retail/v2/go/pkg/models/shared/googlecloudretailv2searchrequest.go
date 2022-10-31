package shared




type GoogleCloudRetailV2SearchRequestSearchModeEnum string

const (
    GoogleCloudRetailV2SearchRequestSearchModeEnumSearchModeUnspecified GoogleCloudRetailV2SearchRequestSearchModeEnum = "SEARCH_MODE_UNSPECIFIED"
GoogleCloudRetailV2SearchRequestSearchModeEnumProductSearchOnly GoogleCloudRetailV2SearchRequestSearchModeEnum = "PRODUCT_SEARCH_ONLY"
GoogleCloudRetailV2SearchRequestSearchModeEnumFacetedSearchOnly GoogleCloudRetailV2SearchRequestSearchModeEnum = "FACETED_SEARCH_ONLY"
)


type GoogleCloudRetailV2SearchRequest struct {
    BoostSpec *GoogleCloudRetailV2SearchRequestBoostSpec `json:"boostSpec,omitempty"`
    Branch *string `json:"branch,omitempty"`
    CanonicalFilter *string `json:"canonicalFilter,omitempty"`
    DynamicFacetSpec *GoogleCloudRetailV2SearchRequestDynamicFacetSpec `json:"dynamicFacetSpec,omitempty"`
    FacetSpecs []GoogleCloudRetailV2SearchRequestFacetSpec `json:"facetSpecs,omitempty"`
    Filter *string `json:"filter,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Offset *int32 `json:"offset,omitempty"`
    OrderBy *string `json:"orderBy,omitempty"`
    PageCategories []string `json:"pageCategories,omitempty"`
    PageSize *int32 `json:"pageSize,omitempty"`
    PageToken *string `json:"pageToken,omitempty"`
    PersonalizationSpec *GoogleCloudRetailV2SearchRequestPersonalizationSpec `json:"personalizationSpec,omitempty"`
    Query *string `json:"query,omitempty"`
    QueryExpansionSpec *GoogleCloudRetailV2SearchRequestQueryExpansionSpec `json:"queryExpansionSpec,omitempty"`
    SearchMode *GoogleCloudRetailV2SearchRequestSearchModeEnum `json:"searchMode,omitempty"`
    SpellCorrectionSpec *GoogleCloudRetailV2SearchRequestSpellCorrectionSpec `json:"spellCorrectionSpec,omitempty"`
    UserInfo *GoogleCloudRetailV2UserInfo `json:"userInfo,omitempty"`
    VariantRollupKeys []string `json:"variantRollupKeys,omitempty"`
    VisitorID *string `json:"visitorId,omitempty"`
    
}

