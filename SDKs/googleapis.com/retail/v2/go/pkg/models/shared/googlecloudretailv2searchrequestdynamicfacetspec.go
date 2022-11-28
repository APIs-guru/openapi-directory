package shared

type GoogleCloudRetailV2SearchRequestDynamicFacetSpecModeEnum string

const (
	GoogleCloudRetailV2SearchRequestDynamicFacetSpecModeEnumModeUnspecified GoogleCloudRetailV2SearchRequestDynamicFacetSpecModeEnum = "MODE_UNSPECIFIED"
	GoogleCloudRetailV2SearchRequestDynamicFacetSpecModeEnumDisabled        GoogleCloudRetailV2SearchRequestDynamicFacetSpecModeEnum = "DISABLED"
	GoogleCloudRetailV2SearchRequestDynamicFacetSpecModeEnumEnabled         GoogleCloudRetailV2SearchRequestDynamicFacetSpecModeEnum = "ENABLED"
)

// GoogleCloudRetailV2SearchRequestDynamicFacetSpec
// The specifications of dynamically generated facets.
type GoogleCloudRetailV2SearchRequestDynamicFacetSpec struct {
	Mode *GoogleCloudRetailV2SearchRequestDynamicFacetSpecModeEnum `json:"mode,omitempty"`
}
