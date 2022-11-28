from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnum(str, Enum):
    COMPRESSION_TYPE_UNSPECIFIED = "COMPRESSION_TYPE_UNSPECIFIED"
    RAW = "RAW"
    RICE = "RICE"


@dataclass_json
@dataclass
class GoogleSecuritySafebrowsingV4ThreatEntrySet:
    r"""GoogleSecuritySafebrowsingV4ThreatEntrySet
    A set of threats that should be added or removed from a client's local database.
    """
    
    compression_type: Optional[GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compressionType') }})
    raw_hashes: Optional[GoogleSecuritySafebrowsingV4RawHashes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rawHashes') }})
    raw_indices: Optional[GoogleSecuritySafebrowsingV4RawIndices] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rawIndices') }})
    rice_hashes: Optional[GoogleSecuritySafebrowsingV4RiceDeltaEncoding] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('riceHashes') }})
    rice_indices: Optional[GoogleSecuritySafebrowsingV4RiceDeltaEncoding] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('riceIndices') }})
    
