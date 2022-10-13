from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2requestedoptions
from . import googleprivacydlpv2result


@dataclass_json
@dataclass
class GooglePrivacyDlpV2InspectDataSourceDetails:
    requested_options: Optional[googleprivacydlpv2requestedoptions.GooglePrivacyDlpV2RequestedOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedOptions' }})
    result: Optional[googleprivacydlpv2result.GooglePrivacyDlpV2Result] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    
