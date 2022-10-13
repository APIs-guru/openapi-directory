from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import campaign
from . import extendedattribute
from . import language
from . import source


@dataclass_json
@dataclass
class MediaItem:
    campaigns: Optional[List[campaign.Campaign]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaigns' }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    custom_attribution_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customAttributionUrl' }})
    custom_preview_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customPreviewUrl' }})
    custom_thumbnail_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customThumbnailUrl' }})
    date_content_authored: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateContentAuthored', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_content_published: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateContentPublished', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_content_reviewed: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateContentReviewed', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_content_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateContentUpdated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_syndication_captured: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateSyndicationCaptured', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_syndication_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateSyndicationUpdated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_syndication_visible: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateSyndicationVisible', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    extended_attributes: Optional[List[extendedattribute.ExtendedAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extendedAttributes' }})
    external_guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalGuid' }})
    foreign_syndication_api_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'foreignSyndicationAPIUrl' }})
    hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hash' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    language: Optional[language.Language] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    media_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mediaType' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    source: Optional[source.Source] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    source_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceUrl' }})
    target_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetUrl' }})
    
