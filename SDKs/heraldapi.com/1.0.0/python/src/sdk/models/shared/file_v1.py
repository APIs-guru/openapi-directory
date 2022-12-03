from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FileV1FormatEnum(str, Enum):
    PDF = "pdf"
    CSV = "csv"
    JPG = "jpg"
    PNG = "png"

class FileV1StatusEnum(str, Enum):
    AVAILABLE = "available"
    DELETED = "deleted"

class FileV1TypeEnum(str, Enum):
    QUOTE_SUMMARY = "quote_summary"
    POLICY_SPECIMEN = "policy_specimen"
    CYBER_RISK_ASSEMENT = "cyber_risk_assement"
    APPLICATION_SUMMARY = "application_summary"


@dataclass_json
@dataclass
class FileV1:
    r"""FileV1
    Details for a specific file.
    """
    
    created_at: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_name') }})
    format: Optional[FileV1FormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    status: Optional[FileV1StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    type: Optional[FileV1TypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
