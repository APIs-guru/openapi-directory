from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Gzip:
    black_list: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blackList' }})
    buffer_size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bufferSize' }})
    chunked_threshold: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chunkedThreshold' }})
    compression_level: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compressionLevel' }})
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    excluded_patterns: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludedPatterns' }})
    white_list: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'whiteList' }})
    
