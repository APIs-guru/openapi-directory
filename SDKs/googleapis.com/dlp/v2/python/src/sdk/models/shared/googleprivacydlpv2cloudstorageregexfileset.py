from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GooglePrivacyDlpV2CloudStorageRegexFileSet:
    bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketName' }})
    exclude_regex: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludeRegex' }})
    include_regex: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeRegex' }})
    
