from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ChallengeDataOtpFormatEnum(str, Enum):
    CHARACTERS = "characters"
    INTEGER = "integer"


@dataclass_json
@dataclass
class ChallengeData:
    r"""ChallengeData
    It is contained in addition to the data element 'chosenScaMethod' if challenge data is needed for SCA.
    In rare cases this attribute is also used in the context of the 'startAuthorisationWithPsuAuthentication' link.
    
    """
    
    additional_information: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalInformation') }})
    data: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    image_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageLink') }})
    otp_format: Optional[ChallengeDataOtpFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otpFormat') }})
    otp_max_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otpMaxLength') }})
    
