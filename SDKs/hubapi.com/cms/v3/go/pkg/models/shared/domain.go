package shared

import (
	"time"
)

type Domain struct {
	CorrectCname              *string    `json:"correctCname,omitempty"`
	Created                   *time.Time `json:"created,omitempty"`
	Domain                    string     `json:"domain"`
	ID                        string     `json:"id"`
	IsResolving               bool       `json:"isResolving"`
	IsSslEnabled              *bool      `json:"isSslEnabled,omitempty"`
	IsSslOnly                 *bool      `json:"isSslOnly,omitempty"`
	IsUsedForBlogPost         bool       `json:"isUsedForBlogPost"`
	IsUsedForEmail            bool       `json:"isUsedForEmail"`
	IsUsedForKnowledge        bool       `json:"isUsedForKnowledge"`
	IsUsedForLandingPage      bool       `json:"isUsedForLandingPage"`
	IsUsedForSitePage         bool       `json:"isUsedForSitePage"`
	ManuallyMarkedAsResolving *bool      `json:"manuallyMarkedAsResolving,omitempty"`
	PrimaryBlogPost           *bool      `json:"primaryBlogPost,omitempty"`
	PrimaryEmail              *bool      `json:"primaryEmail,omitempty"`
	PrimaryKnowledge          *bool      `json:"primaryKnowledge,omitempty"`
	PrimaryLandingPage        *bool      `json:"primaryLandingPage,omitempty"`
	PrimarySitePage           *bool      `json:"primarySitePage,omitempty"`
	SecondaryToDomain         *string    `json:"secondaryToDomain,omitempty"`
	Updated                   *time.Time `json:"updated,omitempty"`
}
