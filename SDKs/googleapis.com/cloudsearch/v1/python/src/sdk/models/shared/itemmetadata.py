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
class ItemMetadata:
    r"""ItemMetadata
    Available metadata fields for the item.
    """
    
    container_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerName') }})
    content_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentLanguage') }})
    context_attributes: Optional[List[ContextAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contextAttributes') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hash') }})
    interactions: Optional[List[Interaction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interactions') }})
    keywords: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keywords') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    object_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectType') }})
    search_quality_metadata: Optional[SearchQualityMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchQualityMetadata') }})
    source_repository_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceRepositoryUrl') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
