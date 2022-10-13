from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2bigqueryfield
from . import googleprivacydlpv2cloudstoragefileset
from . import googleprivacydlpv2cloudstoragepath


@dataclass_json
@dataclass
class GooglePrivacyDlpV2LargeCustomDictionaryConfig:
    big_query_field: Optional[googleprivacydlpv2bigqueryfield.GooglePrivacyDlpV2BigQueryField] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigQueryField' }})
    cloud_storage_file_set: Optional[googleprivacydlpv2cloudstoragefileset.GooglePrivacyDlpV2CloudStorageFileSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudStorageFileSet' }})
    output_path: Optional[googleprivacydlpv2cloudstoragepath.GooglePrivacyDlpV2CloudStoragePath] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputPath' }})
    
