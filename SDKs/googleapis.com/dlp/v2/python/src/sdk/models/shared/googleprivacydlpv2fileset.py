from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2cloudstorageregexfileset


@dataclass_json
@dataclass
class GooglePrivacyDlpV2FileSet:
    regex_file_set: Optional[googleprivacydlpv2cloudstorageregexfileset.GooglePrivacyDlpV2CloudStorageRegexFileSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regexFileSet' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
