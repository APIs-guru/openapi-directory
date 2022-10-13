from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudchannelv1transferablesku


@dataclass_json
@dataclass
class GoogleCloudChannelV1ListTransferableSkusResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    transferable_skus: Optional[List[googlecloudchannelv1transferablesku.GoogleCloudChannelV1TransferableSku]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transferableSkus' }})
    
