package shared

type GoogleDevtoolsContaineranalysisV1alpha1AliasContextKindEnum string

const (
	GoogleDevtoolsContaineranalysisV1alpha1AliasContextKindEnumKindUnspecified GoogleDevtoolsContaineranalysisV1alpha1AliasContextKindEnum = "KIND_UNSPECIFIED"
	GoogleDevtoolsContaineranalysisV1alpha1AliasContextKindEnumFixed           GoogleDevtoolsContaineranalysisV1alpha1AliasContextKindEnum = "FIXED"
	GoogleDevtoolsContaineranalysisV1alpha1AliasContextKindEnumMovable         GoogleDevtoolsContaineranalysisV1alpha1AliasContextKindEnum = "MOVABLE"
	GoogleDevtoolsContaineranalysisV1alpha1AliasContextKindEnumOther           GoogleDevtoolsContaineranalysisV1alpha1AliasContextKindEnum = "OTHER"
)

type GoogleDevtoolsContaineranalysisV1alpha1AliasContext struct {
	Kind *GoogleDevtoolsContaineranalysisV1alpha1AliasContextKindEnum `json:"kind"`
	Name *string                                                      `json:"name"`
}
