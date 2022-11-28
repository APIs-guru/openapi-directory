package shared

type PullRequestFilterCommentControlEnum string

const (
	PullRequestFilterCommentControlEnumCommentsDisabled                           PullRequestFilterCommentControlEnum = "COMMENTS_DISABLED"
	PullRequestFilterCommentControlEnumCommentsEnabled                            PullRequestFilterCommentControlEnum = "COMMENTS_ENABLED"
	PullRequestFilterCommentControlEnumCommentsEnabledForExternalContributorsOnly PullRequestFilterCommentControlEnum = "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"
)

// PullRequestFilter
// PullRequestFilter contains filter properties for matching GitHub Pull Requests.
type PullRequestFilter struct {
	Branch         *string                              `json:"branch,omitempty"`
	CommentControl *PullRequestFilterCommentControlEnum `json:"commentControl,omitempty"`
	InvertRegex    *bool                                `json:"invertRegex,omitempty"`
}
