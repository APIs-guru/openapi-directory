package shared

type GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecModeEnum string

const (
	GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecModeEnumModeUnspecified GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecModeEnum = "MODE_UNSPECIFIED"
	GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecModeEnumDisabled        GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecModeEnum = "DISABLED"
	GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecModeEnumEnabled         GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecModeEnum = "ENABLED"
)

// GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec
// The specifications of dynamically generated facets.
type GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec struct {
	Mode *GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecModeEnum `json:"mode,omitempty"`
}
