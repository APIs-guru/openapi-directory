from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleSecuritySafebrowsingV4RiceDeltaEncoding:
    r"""GoogleSecuritySafebrowsingV4RiceDeltaEncoding
    The Rice-Golomb encoded data. Used for sending compressed 4-byte hashes or compressed removal indices.
    """
    
    encoded_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encodedData') }})
    first_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstValue') }})
    num_entries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numEntries') }})
    rice_parameter: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('riceParameter') }})
    
