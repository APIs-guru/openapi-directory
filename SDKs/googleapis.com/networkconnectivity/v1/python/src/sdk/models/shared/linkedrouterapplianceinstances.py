from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LinkedRouterApplianceInstances:
    r"""LinkedRouterApplianceInstances
    A collection of router appliance instances. If you configure multiple router appliance instances to receive data from the same set of sites outside of Google Cloud, we recommend that you associate those instances with the same spoke.
    """
    
    instances: Optional[List[RouterApplianceInstance]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instances') }})
    site_to_site_data_transfer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteToSiteDataTransfer') }})
    vpc_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcNetwork') }})
    

@dataclass_json
@dataclass
class LinkedRouterApplianceInstancesInput:
    r"""LinkedRouterApplianceInstancesInput
    A collection of router appliance instances. If you configure multiple router appliance instances to receive data from the same set of sites outside of Google Cloud, we recommend that you associate those instances with the same spoke.
    """
    
    instances: Optional[List[RouterApplianceInstance]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instances') }})
    site_to_site_data_transfer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteToSiteDataTransfer') }})
    
