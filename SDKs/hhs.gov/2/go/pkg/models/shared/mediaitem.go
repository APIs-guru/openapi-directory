package shared

import (
	"time"
)

type MediaItem struct {
	Campaigns                []Campaign          `json:"campaigns,omitempty"`
	CreatedBy                *string             `json:"createdBy,omitempty"`
	CustomAttributionURL     *string             `json:"customAttributionUrl,omitempty"`
	CustomPreviewURL         *string             `json:"customPreviewUrl,omitempty"`
	CustomThumbnailURL       *string             `json:"customThumbnailUrl,omitempty"`
	DateContentAuthored      *time.Time          `json:"dateContentAuthored,omitempty"`
	DateContentPublished     *time.Time          `json:"dateContentPublished,omitempty"`
	DateContentReviewed      *time.Time          `json:"dateContentReviewed,omitempty"`
	DateContentUpdated       *time.Time          `json:"dateContentUpdated,omitempty"`
	DateSyndicationCaptured  *time.Time          `json:"dateSyndicationCaptured,omitempty"`
	DateSyndicationUpdated   *time.Time          `json:"dateSyndicationUpdated,omitempty"`
	DateSyndicationVisible   *time.Time          `json:"dateSyndicationVisible,omitempty"`
	Description              *string             `json:"description,omitempty"`
	ExtendedAttributes       []ExtendedAttribute `json:"extendedAttributes,omitempty"`
	ExternalGUID             *string             `json:"externalGuid,omitempty"`
	ForeignSyndicationAPIURL *string             `json:"foreignSyndicationAPIUrl,omitempty"`
	Hash                     *string             `json:"hash,omitempty"`
	ID                       *int64              `json:"id,omitempty"`
	Language                 *Language           `json:"language,omitempty"`
	MediaType                *string             `json:"mediaType,omitempty"`
	Name                     *string             `json:"name,omitempty"`
	Source                   *Source             `json:"source,omitempty"`
	SourceURL                *string             `json:"sourceUrl,omitempty"`
	TargetURL                *string             `json:"targetUrl,omitempty"`
}
