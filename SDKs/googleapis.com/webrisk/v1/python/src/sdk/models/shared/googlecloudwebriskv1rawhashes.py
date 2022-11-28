from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudWebriskV1RawHashes:
    r"""GoogleCloudWebriskV1RawHashes
    The uncompressed threat entries in hash format. Hashes can be anywhere from 4 to 32 bytes in size. A large majority are 4 bytes, but some hashes are lengthened if they collide with the hash of a popular URI. Used for sending ThreatEntryAdditons to clients that do not support compression, or when sending non-4-byte hashes to clients that do support compression.
    """
    
    prefix_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefixSize') }})
    raw_hashes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rawHashes') }})
    
