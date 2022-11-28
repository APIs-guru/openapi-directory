from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ChannelSnippet:
    r"""ChannelSnippet
    Basic details about a channel, including title, description and thumbnails.
    """
    
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    custom_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customUrl') }})
    default_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultLanguage') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    localized: Optional[ChannelLocalization] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localized') }})
    published_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    thumbnails: Optional[ThumbnailDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnails') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
