from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDataplexV1StorageFormatCsvOptions:
    r"""GoogleCloudDataplexV1StorageFormatCsvOptions
    Describes CSV and similar semi-structured data formats.
    """
    
    delimiter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delimiter') }})
    encoding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encoding') }})
    header_rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headerRows') }})
    quote: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quote') }})
    
