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
class Revision:
    r"""Revision
    The metadata for a revision to a file.
    """
    
    export_links: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportLinks') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    keep_forever: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keepForever') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    last_modifying_user: Optional[User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifyingUser') }})
    md5_checksum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('md5Checksum') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    original_filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalFilename') }})
    publish_auto: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishAuto') }})
    published: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('published') }})
    published_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishedLink') }})
    published_outside_domain: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishedOutsideDomain') }})
    size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    
