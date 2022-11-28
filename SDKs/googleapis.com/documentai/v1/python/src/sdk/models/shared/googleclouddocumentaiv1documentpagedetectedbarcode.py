from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1DocumentPageDetectedBarcode:
    r"""GoogleCloudDocumentaiV1DocumentPageDetectedBarcode
    A detected barcode.
    """
    
    barcode: Optional[GoogleCloudDocumentaiV1Barcode] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('barcode') }})
    layout: Optional[GoogleCloudDocumentaiV1DocumentPageLayout] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layout') }})
    
