from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2ContentLocation:
    r"""GooglePrivacyDlpV2ContentLocation
    Precise location of the finding within a document, record, image, or metadata container.
    """
    
    container_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerName') }})
    container_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerTimestamp') }})
    container_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerVersion') }})
    document_location: Optional[GooglePrivacyDlpV2DocumentLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentLocation') }})
    image_location: Optional[GooglePrivacyDlpV2ImageLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageLocation') }})
    metadata_location: Optional[GooglePrivacyDlpV2MetadataLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataLocation') }})
    record_location: Optional[GooglePrivacyDlpV2RecordLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordLocation') }})
    
