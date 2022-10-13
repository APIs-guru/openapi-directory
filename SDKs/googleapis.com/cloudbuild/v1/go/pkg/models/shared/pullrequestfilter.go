package shared

type PullRequestFilterCommentControlEnum string

const (
	PullRequestFilterCommentControlEnumCommentsDisabled                           PullRequestFilterCommentControlEnum = "COMMENTS_DISABLED"
	PullRequestFilterCommentControlEnumCommentsEnabled                            PullRequestFilterCommentControlEnum = "COMMENTS_ENABLED"
	PullRequestFilterCommentControlEnumCommentsEnabledForExternalContributorsOnly PullRequestFilterCommentControlEnum = "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"
)

type PullRequestFilter struct {
	Branch         *string                              `json:"branch"`
	CommentControl *PullRequestFilterCommentControlEnum `json:"commentControl"`
	InvertRegex    *bool                                `json:"invertRegex"`
}
