package shared

type NamespaceServingVisibilityEnum string

const (
	NamespaceServingVisibilityEnumVisibilityUnspecified NamespaceServingVisibilityEnum = "VISIBILITY_UNSPECIFIED"
	NamespaceServingVisibilityEnumUnlisted              NamespaceServingVisibilityEnum = "UNLISTED"
	NamespaceServingVisibilityEnumPublic                NamespaceServingVisibilityEnum = "PUBLIC"
)

type Namespace struct {
	NamespaceName     *string                         `json:"namespaceName"`
	ServingVisibility *NamespaceServingVisibilityEnum `json:"servingVisibility"`
}
