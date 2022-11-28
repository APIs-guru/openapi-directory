from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcode:
    r"""GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcode
    A detected barcode.
    """
    
    barcode: Optional[GoogleCloudDocumentaiV1beta3Barcode] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('barcode') }})
    layout: Optional[GoogleCloudDocumentaiV1beta3DocumentPageLayout] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layout') }})
    
