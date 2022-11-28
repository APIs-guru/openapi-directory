from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdatePsuAuthentication:
    r"""UpdatePsuAuthentication
    Content of the body of a Update PSU authentication request
    
    Password subfield is used.
    
    """
    
    psu_data: PsuData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('psuData') }})
    
