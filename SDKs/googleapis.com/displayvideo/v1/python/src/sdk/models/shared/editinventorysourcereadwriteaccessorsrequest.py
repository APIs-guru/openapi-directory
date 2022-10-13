from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import editinventorysourcereadwriteaccessorsrequestadvertisersupdate


@dataclass_json
@dataclass
class EditInventorySourceReadWriteAccessorsRequest:
    advertisers_update: Optional[editinventorysourcereadwriteaccessorsrequestadvertisersupdate.EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertisersUpdate' }})
    assign_partner: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignPartner' }})
    partner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partnerId' }})
    
