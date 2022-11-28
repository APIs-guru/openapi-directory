from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MediaItem:
    campaigns: Optional[List[Campaign]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaigns') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    custom_attribution_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customAttributionUrl') }})
    custom_preview_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customPreviewUrl') }})
    custom_thumbnail_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customThumbnailUrl') }})
    date_content_authored: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateContentAuthored'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_content_published: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateContentPublished'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_content_reviewed: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateContentReviewed'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_content_updated: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateContentUpdated'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_syndication_captured: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateSyndicationCaptured'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_syndication_updated: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateSyndicationUpdated'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_syndication_visible: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateSyndicationVisible'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    extended_attributes: Optional[List[ExtendedAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extendedAttributes') }})
    external_guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalGuid') }})
    foreign_syndication_api_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('foreignSyndicationAPIUrl') }})
    hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hash') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    language: Optional[Language] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    media_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaType') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source: Optional[Source] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    source_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceUrl') }})
    target_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetUrl') }})
    
