package shared

import (
	"time"
)

type MediaItem struct {
	Campaigns                []Campaign          `json:"campaigns"`
	CreatedBy                *string             `json:"createdBy"`
	CustomAttributionURL     *string             `json:"customAttributionUrl"`
	CustomPreviewURL         *string             `json:"customPreviewUrl"`
	CustomThumbnailURL       *string             `json:"customThumbnailUrl"`
	DateContentAuthored      *time.Time          `json:"dateContentAuthored"`
	DateContentPublished     *time.Time          `json:"dateContentPublished"`
	DateContentReviewed      *time.Time          `json:"dateContentReviewed"`
	DateContentUpdated       *time.Time          `json:"dateContentUpdated"`
	DateSyndicationCaptured  *time.Time          `json:"dateSyndicationCaptured"`
	DateSyndicationUpdated   *time.Time          `json:"dateSyndicationUpdated"`
	DateSyndicationVisible   *time.Time          `json:"dateSyndicationVisible"`
	Description              *string             `json:"description"`
	ExtendedAttributes       []ExtendedAttribute `json:"extendedAttributes"`
	ExternalGUID             *string             `json:"externalGuid"`
	ForeignSyndicationAPIURL *string             `json:"foreignSyndicationAPIUrl"`
	Hash                     *string             `json:"hash"`
	ID                       *int64              `json:"id"`
	Language                 *Language           `json:"language"`
	MediaType                *string             `json:"mediaType"`
	Name                     *string             `json:"name"`
	Source                   *Source             `json:"source"`
	SourceURL                *string             `json:"sourceUrl"`
	TargetURL                *string             `json:"targetUrl"`
}
