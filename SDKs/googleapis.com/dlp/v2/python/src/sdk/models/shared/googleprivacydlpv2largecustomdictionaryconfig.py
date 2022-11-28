from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2LargeCustomDictionaryConfig:
    r"""GooglePrivacyDlpV2LargeCustomDictionaryConfig
    Configuration for a custom dictionary created from a data source of any size up to the maximum size defined in the [limits](https://cloud.google.com/dlp/limits) page. The artifacts of dictionary creation are stored in the specified Cloud Storage location. Consider using `CustomInfoType.Dictionary` for smaller dictionaries that satisfy the size requirements.
    """
    
    big_query_field: Optional[GooglePrivacyDlpV2BigQueryField] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigQueryField') }})
    cloud_storage_file_set: Optional[GooglePrivacyDlpV2CloudStorageFileSet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudStorageFileSet') }})
    output_path: Optional[GooglePrivacyDlpV2CloudStoragePath] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputPath') }})
    
