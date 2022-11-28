from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AccountShippingImprovements:
    r"""AccountShippingImprovements
    Not available for MCAs [accounts](https://support.google.com/merchants/answer/188487). By turning on [automatic shipping improvements](https://support.google.com/merchants/answer/10027038), you are allowing Google to improve the accuracy of your delivery times shown to shoppers using Google. More accurate delivery times, especially when faster, typically lead to better conversion rates. Google will improve your estimated delivery times based on various factors: * Delivery address of an order * Current handling time and shipping time settings * Estimated weekdays or business days * Parcel tracking data
    """
    
    allow_shipping_improvements: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowShippingImprovements') }})
    
