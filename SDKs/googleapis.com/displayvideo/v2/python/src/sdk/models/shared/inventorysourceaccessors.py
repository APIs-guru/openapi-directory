from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import inventorysourceaccessorsadvertiseraccessors
from . import inventorysourceaccessorspartneraccessor


@dataclass_json
@dataclass
class InventorySourceAccessors:
    advertisers: Optional[inventorysourceaccessorsadvertiseraccessors.InventorySourceAccessorsAdvertiserAccessors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertisers' }})
    partner: Optional[inventorysourceaccessorspartneraccessor.InventorySourceAccessorsPartnerAccessor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partner' }})
    
