from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleAdsHomeservicesLocalservicesV1AggregatorInfo:
    r"""GoogleAdsHomeservicesLocalservicesV1AggregatorInfo
    Conatiner for aggregator specific information if lead is for an aggregator GLS account.
    """
    
    aggregator_provider_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregatorProviderId') }})
    
