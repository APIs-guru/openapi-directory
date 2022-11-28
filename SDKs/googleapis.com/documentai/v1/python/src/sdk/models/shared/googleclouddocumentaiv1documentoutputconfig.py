from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1DocumentOutputConfig:
    r"""GoogleCloudDocumentaiV1DocumentOutputConfig
    Config that controls the output of documents. All documents will be written as a JSON file.
    """
    
    gcs_output_config: Optional[GoogleCloudDocumentaiV1DocumentOutputConfigGcsOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsOutputConfig') }})
    
