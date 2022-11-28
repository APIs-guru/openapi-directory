from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ChannelToStoreLinkDetails:
    r"""ChannelToStoreLinkDetails
    Information specific to a store on a merchandising platform linked to a YouTube channel.
    """
    
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantId') }})
    store_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storeName') }})
    store_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storeUrl') }})
    
