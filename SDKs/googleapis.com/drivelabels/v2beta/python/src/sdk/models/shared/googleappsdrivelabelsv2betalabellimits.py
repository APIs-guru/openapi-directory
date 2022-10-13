from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2betafieldlimits


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaLabelLimits:
    field_limits: Optional[googleappsdrivelabelsv2betafieldlimits.GoogleAppsDriveLabelsV2betaFieldLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldLimits' }})
    max_deleted_fields: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxDeletedFields' }})
    max_description_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxDescriptionLength' }})
    max_draft_revisions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxDraftRevisions' }})
    max_fields: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxFields' }})
    max_title_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxTitleLength' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
