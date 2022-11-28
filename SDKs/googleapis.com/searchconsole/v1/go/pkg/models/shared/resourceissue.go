package shared

// ResourceIssue
// Information about a resource with issue.
type ResourceIssue struct {
	BlockedResource *BlockedResource `json:"blockedResource,omitempty"`
}
