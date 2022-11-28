from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2ReplaceCatalogAttributeRequestInput:
    r"""GoogleCloudRetailV2ReplaceCatalogAttributeRequestInput
    Request for CatalogService.ReplaceCatalogAttribute method.
    """
    
    catalog_attribute: Optional[GoogleCloudRetailV2CatalogAttributeInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogAttribute') }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    
