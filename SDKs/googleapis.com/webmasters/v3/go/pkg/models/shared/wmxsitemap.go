package shared

import (
	"time"
)

// WmxSitemap
// Contains detailed information about a specific URL submitted as a sitemap.
type WmxSitemap struct {
	Contents        []WmxSitemapContent `json:"contents,omitempty"`
	Errors          *string             `json:"errors,omitempty"`
	IsPending       *bool               `json:"isPending,omitempty"`
	IsSitemapsIndex *bool               `json:"isSitemapsIndex,omitempty"`
	LastDownloaded  *time.Time          `json:"lastDownloaded,omitempty"`
	LastSubmitted   *time.Time          `json:"lastSubmitted,omitempty"`
	Path            *string             `json:"path,omitempty"`
	Type            *string             `json:"type,omitempty"`
	Warnings        *string             `json:"warnings,omitempty"`
}
