from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AdditionalInformationStructured:
    r"""AdditionalInformationStructured
    Is used if and only if the bookingStatus entry equals \"information\". 
    Every active standing order related to the dedicated payment account result into one entry.
    
    """
    
    standing_order_details: StandingOrderDetails = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('standingOrderDetails') }})
    
