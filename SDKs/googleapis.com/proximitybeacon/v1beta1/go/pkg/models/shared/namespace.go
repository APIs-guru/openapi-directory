package shared

type NamespaceServingVisibilityEnum string

const (
	NamespaceServingVisibilityEnumVisibilityUnspecified NamespaceServingVisibilityEnum = "VISIBILITY_UNSPECIFIED"
	NamespaceServingVisibilityEnumUnlisted              NamespaceServingVisibilityEnum = "UNLISTED"
	NamespaceServingVisibilityEnumPublic                NamespaceServingVisibilityEnum = "PUBLIC"
)

// Namespace
// An attachment namespace defines read and write access for all the attachments created under it. Each namespace is globally unique, and owned by one project which is the only project that can create attachments under it.
type Namespace struct {
	NamespaceName     *string                         `json:"namespaceName,omitempty"`
	ServingVisibility *NamespaceServingVisibilityEnum `json:"servingVisibility,omitempty"`
}
