from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudchannelv1constraints
from . import googlecloudchannelv1marketinginfo
from . import googlecloudchannelv1parameterdefinition
from . import googlecloudchannelv1plan
from . import googlecloudchannelv1pricebyresource
from . import googlecloudchannelv1sku


@dataclass_json
@dataclass
class GoogleCloudChannelV1Offer:
    constraints: Optional[googlecloudchannelv1constraints.GoogleCloudChannelV1Constraints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'constraints' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    marketing_info: Optional[googlecloudchannelv1marketinginfo.GoogleCloudChannelV1MarketingInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marketingInfo' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parameter_definitions: Optional[List[googlecloudchannelv1parameterdefinition.GoogleCloudChannelV1ParameterDefinition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameterDefinitions' }})
    plan: Optional[googlecloudchannelv1plan.GoogleCloudChannelV1Plan] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plan' }})
    price_by_resources: Optional[List[googlecloudchannelv1pricebyresource.GoogleCloudChannelV1PriceByResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceByResources' }})
    sku: Optional[googlecloudchannelv1sku.GoogleCloudChannelV1Sku] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sku' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    
