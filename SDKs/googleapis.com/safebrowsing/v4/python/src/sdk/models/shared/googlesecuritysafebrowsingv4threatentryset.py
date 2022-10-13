from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlesecuritysafebrowsingv4rawhashes
from . import googlesecuritysafebrowsingv4rawindices
from . import googlesecuritysafebrowsingv4ricedeltaencoding
from . import googlesecuritysafebrowsingv4ricedeltaencoding

class GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnum(str, Enum):
    COMPRESSION_TYPE_UNSPECIFIED = "COMPRESSION_TYPE_UNSPECIFIED"
    RAW = "RAW"
    RICE = "RICE"


@dataclass_json
@dataclass
class GoogleSecuritySafebrowsingV4ThreatEntrySet:
    compression_type: Optional[GoogleSecuritySafebrowsingV4ThreatEntrySetCompressionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compressionType' }})
    raw_hashes: Optional[googlesecuritysafebrowsingv4rawhashes.GoogleSecuritySafebrowsingV4RawHashes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rawHashes' }})
    raw_indices: Optional[googlesecuritysafebrowsingv4rawindices.GoogleSecuritySafebrowsingV4RawIndices] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rawIndices' }})
    rice_hashes: Optional[googlesecuritysafebrowsingv4ricedeltaencoding.GoogleSecuritySafebrowsingV4RiceDeltaEncoding] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'riceHashes' }})
    rice_indices: Optional[googlesecuritysafebrowsingv4ricedeltaencoding.GoogleSecuritySafebrowsingV4RiceDeltaEncoding] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'riceIndices' }})
    
