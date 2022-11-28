from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnum(str, Enum):
    COMPRESSION_TYPE_UNSPECIFIED = "COMPRESSION_TYPE_UNSPECIFIED"
    RAW = "RAW"
    RICE = "RICE"


@dataclass_json
@dataclass
class GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints:
    r"""GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints
    The constraints for this update.
    """
    
    device_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceLocation') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    max_database_entries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDatabaseEntries') }})
    max_update_entries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxUpdateEntries') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    supported_compressions: Optional[List[GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraintsSupportedCompressionsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedCompressions') }})
    
