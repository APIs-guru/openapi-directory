from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleAdsHomeservicesLocalservicesV1MessageLead:
    r"""GoogleAdsHomeservicesLocalservicesV1MessageLead
    Container for message lead specific information.
    """
    
    consumer_phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerPhoneNumber') }})
    customer_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerName') }})
    job_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobType') }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCode') }})
    
