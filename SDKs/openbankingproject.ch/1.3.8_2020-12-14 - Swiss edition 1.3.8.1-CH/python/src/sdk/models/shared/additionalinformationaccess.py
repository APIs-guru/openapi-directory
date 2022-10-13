from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accountreference16_ch
from . import accountreference16_ch


@dataclass_json
@dataclass
class AdditionalInformationAccess:
    owner_name: Optional[List[accountreference16_ch.AccountReference16Ch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerName' }})
    trusted_beneficiaries: Optional[List[accountreference16_ch.AccountReference16Ch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trustedBeneficiaries' }})
    
