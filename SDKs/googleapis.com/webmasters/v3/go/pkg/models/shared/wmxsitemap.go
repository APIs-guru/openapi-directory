package shared

import (
	"time"
)

type WmxSitemap struct {
	Contents        []WmxSitemapContent `json:"contents"`
	Errors          *string             `json:"errors"`
	IsPending       *bool               `json:"isPending"`
	IsSitemapsIndex *bool               `json:"isSitemapsIndex"`
	LastDownloaded  *time.Time          `json:"lastDownloaded"`
	LastSubmitted   *time.Time          `json:"lastSubmitted"`
	Path            *string             `json:"path"`
	Type            *string             `json:"type"`
	Warnings        *string             `json:"warnings"`
}
