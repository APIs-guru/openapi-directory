from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Gzip:
    r"""Gzip
    Configuration for gzip of service responses
    """
    
    black_list: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blackList') }})
    buffer_size: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bufferSize') }})
    chunked_threshold: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('chunkedThreshold') }})
    compression_level: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('compressionLevel') }})
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    excluded_patterns: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludedPatterns') }})
    white_list: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('whiteList') }})
    
