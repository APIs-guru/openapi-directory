from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudchannelv1percentageadjustment


@dataclass_json
@dataclass
class GoogleCloudChannelV1RepricingAdjustment:
    percentage_adjustment: Optional[googlecloudchannelv1percentageadjustment.GoogleCloudChannelV1PercentageAdjustment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentageAdjustment' }})
    
