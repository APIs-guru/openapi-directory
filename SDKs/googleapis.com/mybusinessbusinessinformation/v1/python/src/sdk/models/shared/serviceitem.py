from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServiceItem:
    r"""ServiceItem
    A message that describes a single service item. It is used to describe the type of service that the merchant provides. For example, haircut can be a service.
    """
    
    free_form_service_item: Optional[FreeFormServiceItem] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeFormServiceItem') }})
    price: Optional[Money] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    structured_service_item: Optional[StructuredServiceItem] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('structuredServiceItem') }})
    
