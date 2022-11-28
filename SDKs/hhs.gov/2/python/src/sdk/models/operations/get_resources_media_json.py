from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetResourcesMediaJSONQueryParams:
    collection_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'collectionId', 'style': 'form', 'explode': False }})
    content_authored_before_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'contentAuthoredBeforeDate', 'style': 'form', 'explode': False }})
    content_authored_in_range: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'contentAuthoredInRange', 'style': 'form', 'explode': False }})
    content_authored_since_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'contentAuthoredSinceDate', 'style': 'form', 'explode': False }})
    content_published_before_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'contentPublishedBeforeDate', 'style': 'form', 'explode': False }})
    content_published_in_range: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'contentPublishedInRange', 'style': 'form', 'explode': False }})
    content_published_since_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'contentPublishedSinceDate', 'style': 'form', 'explode': False }})
    content_reviewed_before_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'contentReviewedBeforeDate', 'style': 'form', 'explode': False }})
    content_reviewed_in_range: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'contentReviewedInRange', 'style': 'form', 'explode': False }})
    content_reviewed_since_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'contentReviewedSinceDate', 'style': 'form', 'explode': False }})
    content_updated_before_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'contentUpdatedBeforeDate', 'style': 'form', 'explode': False }})
    content_updated_in_range: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'contentUpdatedInRange', 'style': 'form', 'explode': False }})
    content_updated_since_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'contentUpdatedSinceDate', 'style': 'form', 'explode': False }})
    created_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'createdBy', 'style': 'form', 'explode': False }})
    custom_thumbnail_url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customThumbnailUrl', 'style': 'form', 'explode': False }})
    custom_thumbnail_url_contains: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customThumbnailUrlContains', 'style': 'form', 'explode': False }})
    date_content_authored: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'dateContentAuthored', 'style': 'form', 'explode': False }})
    date_content_published: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'dateContentPublished', 'style': 'form', 'explode': False }})
    date_content_reviewed: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'dateContentReviewed', 'style': 'form', 'explode': False }})
    date_content_updated: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'dateContentUpdated', 'style': 'form', 'explode': False }})
    date_syndication_captured: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'dateSyndicationCaptured', 'style': 'form', 'explode': False }})
    date_syndication_updated: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'dateSyndicationUpdated', 'style': 'form', 'explode': False }})
    description_contains: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'descriptionContains', 'style': 'form', 'explode': False }})
    hash: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'hash', 'style': 'form', 'explode': False }})
    hash_contains: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'hashContains', 'style': 'form', 'explode': False }})
    language_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'languageId', 'style': 'form', 'explode': False }})
    language_iso_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'languageIsoCode', 'style': 'form', 'explode': False }})
    language_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'languageName', 'style': 'form', 'explode': False }})
    max: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': False }})
    media_types: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mediaTypes', 'style': 'form', 'explode': False }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': False }})
    name_contains: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nameContains', 'style': 'form', 'explode': False }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': False }})
    order: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': False }})
    restrict_to_set: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'restrictToSet', 'style': 'form', 'explode': False }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': False }})
    source_acronym: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sourceAcronym', 'style': 'form', 'explode': False }})
    source_acronym_contains: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sourceAcronymContains', 'style': 'form', 'explode': False }})
    source_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'sourceId', 'style': 'form', 'explode': False }})
    source_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sourceName', 'style': 'form', 'explode': False }})
    source_name_contains: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sourceNameContains', 'style': 'form', 'explode': False }})
    source_url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sourceUrl', 'style': 'form', 'explode': False }})
    source_url_contains: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sourceUrlContains', 'style': 'form', 'explode': False }})
    syndication_captured_before_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'syndicationCapturedBeforeDate', 'style': 'form', 'explode': False }})
    syndication_captured_in_range: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'syndicationCapturedInRange', 'style': 'form', 'explode': False }})
    syndication_captured_since_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'syndicationCapturedSinceDate', 'style': 'form', 'explode': False }})
    syndication_updated_before_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'syndicationUpdatedBeforeDate', 'style': 'form', 'explode': False }})
    syndication_updated_in_range: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'syndicationUpdatedInRange', 'style': 'form', 'explode': False }})
    syndication_updated_since_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'syndicationUpdatedSinceDate', 'style': 'form', 'explode': False }})
    syndication_visible_before_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'syndicationVisibleBeforeDate', 'style': 'form', 'explode': False }})
    syndication_visible_in_range: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'syndicationVisibleInRange', 'style': 'form', 'explode': False }})
    syndication_visible_since_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'syndicationVisibleSinceDate', 'style': 'form', 'explode': False }})
    tag_ids: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tagIds', 'style': 'form', 'explode': False }})
    

@dataclass
class GetResourcesMediaJSONRequest:
    query_params: GetResourcesMediaJSONQueryParams = field()
    

@dataclass
class GetResourcesMediaJSONResponse:
    content_type: str = field()
    status_code: int = field()
    media_item_wrappeds: Optional[List[shared.MediaItemWrapped]] = field(default=None)
    
