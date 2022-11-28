from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LinkedInterconnectAttachmentsInput:
    r"""LinkedInterconnectAttachmentsInput
    A collection of VLAN attachment resources. These resources should be redundant attachments that all advertise the same prefixes to Google Cloud. Alternatively, in active/passive configurations, all attachments should be capable of advertising the same prefixes.
    """
    
    site_to_site_data_transfer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteToSiteDataTransfer') }})
    uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uris') }})
    

@dataclass_json
@dataclass
class LinkedInterconnectAttachments:
    r"""LinkedInterconnectAttachments
    A collection of VLAN attachment resources. These resources should be redundant attachments that all advertise the same prefixes to Google Cloud. Alternatively, in active/passive configurations, all attachments should be capable of advertising the same prefixes.
    """
    
    site_to_site_data_transfer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteToSiteDataTransfer') }})
    uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uris') }})
    vpc_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcNetwork') }})
    
