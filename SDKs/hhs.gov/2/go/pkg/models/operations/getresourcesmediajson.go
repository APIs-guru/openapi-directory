package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetResourcesMediaJSONQueryParams struct {
	CollectionID                  *int32     `queryParam:"style=form,explode=false,name=collectionId"`
	ContentAuthoredBeforeDate     *time.Time `queryParam:"style=form,explode=false,name=contentAuthoredBeforeDate"`
	ContentAuthoredInRange        *string    `queryParam:"style=form,explode=false,name=contentAuthoredInRange"`
	ContentAuthoredSinceDate      *time.Time `queryParam:"style=form,explode=false,name=contentAuthoredSinceDate"`
	ContentPublishedBeforeDate    *time.Time `queryParam:"style=form,explode=false,name=contentPublishedBeforeDate"`
	ContentPublishedInRange       *string    `queryParam:"style=form,explode=false,name=contentPublishedInRange"`
	ContentPublishedSinceDate     *time.Time `queryParam:"style=form,explode=false,name=contentPublishedSinceDate"`
	ContentReviewedBeforeDate     *time.Time `queryParam:"style=form,explode=false,name=contentReviewedBeforeDate"`
	ContentReviewedInRange        *string    `queryParam:"style=form,explode=false,name=contentReviewedInRange"`
	ContentReviewedSinceDate      *time.Time `queryParam:"style=form,explode=false,name=contentReviewedSinceDate"`
	ContentUpdatedBeforeDate      *time.Time `queryParam:"style=form,explode=false,name=contentUpdatedBeforeDate"`
	ContentUpdatedInRange         *string    `queryParam:"style=form,explode=false,name=contentUpdatedInRange"`
	ContentUpdatedSinceDate       *time.Time `queryParam:"style=form,explode=false,name=contentUpdatedSinceDate"`
	CreatedBy                     *string    `queryParam:"style=form,explode=false,name=createdBy"`
	CustomThumbnailURL            *string    `queryParam:"style=form,explode=false,name=customThumbnailUrl"`
	CustomThumbnailURLContains    *string    `queryParam:"style=form,explode=false,name=customThumbnailUrlContains"`
	DateContentAuthored           *time.Time `queryParam:"style=form,explode=false,name=dateContentAuthored"`
	DateContentPublished          *time.Time `queryParam:"style=form,explode=false,name=dateContentPublished"`
	DateContentReviewed           *time.Time `queryParam:"style=form,explode=false,name=dateContentReviewed"`
	DateContentUpdated            *time.Time `queryParam:"style=form,explode=false,name=dateContentUpdated"`
	DateSyndicationCaptured       *time.Time `queryParam:"style=form,explode=false,name=dateSyndicationCaptured"`
	DateSyndicationUpdated        *time.Time `queryParam:"style=form,explode=false,name=dateSyndicationUpdated"`
	DescriptionContains           *string    `queryParam:"style=form,explode=false,name=descriptionContains"`
	Hash                          *string    `queryParam:"style=form,explode=false,name=hash"`
	HashContains                  *string    `queryParam:"style=form,explode=false,name=hashContains"`
	LanguageID                    *int64     `queryParam:"style=form,explode=false,name=languageId"`
	LanguageIsoCode               *string    `queryParam:"style=form,explode=false,name=languageIsoCode"`
	LanguageName                  *string    `queryParam:"style=form,explode=false,name=languageName"`
	Max                           *int32     `queryParam:"style=form,explode=false,name=max"`
	MediaTypes                    *string    `queryParam:"style=form,explode=false,name=mediaTypes"`
	Name                          *string    `queryParam:"style=form,explode=false,name=name"`
	NameContains                  *string    `queryParam:"style=form,explode=false,name=nameContains"`
	Offset                        *int32     `queryParam:"style=form,explode=false,name=offset"`
	Order                         *string    `queryParam:"style=form,explode=false,name=order"`
	RestrictToSet                 *string    `queryParam:"style=form,explode=false,name=restrictToSet"`
	Sort                          *string    `queryParam:"style=form,explode=false,name=sort"`
	SourceAcronym                 *string    `queryParam:"style=form,explode=false,name=sourceAcronym"`
	SourceAcronymContains         *string    `queryParam:"style=form,explode=false,name=sourceAcronymContains"`
	SourceID                      *int64     `queryParam:"style=form,explode=false,name=sourceId"`
	SourceName                    *string    `queryParam:"style=form,explode=false,name=sourceName"`
	SourceNameContains            *string    `queryParam:"style=form,explode=false,name=sourceNameContains"`
	SourceURL                     *string    `queryParam:"style=form,explode=false,name=sourceUrl"`
	SourceURLContains             *string    `queryParam:"style=form,explode=false,name=sourceUrlContains"`
	SyndicationCapturedBeforeDate *time.Time `queryParam:"style=form,explode=false,name=syndicationCapturedBeforeDate"`
	SyndicationCapturedInRange    *string    `queryParam:"style=form,explode=false,name=syndicationCapturedInRange"`
	SyndicationCapturedSinceDate  *time.Time `queryParam:"style=form,explode=false,name=syndicationCapturedSinceDate"`
	SyndicationUpdatedBeforeDate  *time.Time `queryParam:"style=form,explode=false,name=syndicationUpdatedBeforeDate"`
	SyndicationUpdatedInRange     *string    `queryParam:"style=form,explode=false,name=syndicationUpdatedInRange"`
	SyndicationUpdatedSinceDate   *time.Time `queryParam:"style=form,explode=false,name=syndicationUpdatedSinceDate"`
	SyndicationVisibleBeforeDate  *time.Time `queryParam:"style=form,explode=false,name=syndicationVisibleBeforeDate"`
	SyndicationVisibleInRange     *time.Time `queryParam:"style=form,explode=false,name=syndicationVisibleInRange"`
	SyndicationVisibleSinceDate   *time.Time `queryParam:"style=form,explode=false,name=syndicationVisibleSinceDate"`
	TagIds                        *string    `queryParam:"style=form,explode=false,name=tagIds"`
}

type GetResourcesMediaJSONRequest struct {
	QueryParams GetResourcesMediaJSONQueryParams
}

type GetResourcesMediaJSONResponse struct {
	ContentType       string
	MediaItemWrappeds []shared.MediaItemWrapped
	StatusCode        int64
}
