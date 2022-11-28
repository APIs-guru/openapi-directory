package shared

// LintPolicyResponse
// The response of a lint operation. An empty response indicates the operation was able to fully execute and no lint issue was found.
type LintPolicyResponse struct {
	LintResults []LintResult `json:"lintResults,omitempty"`
}
