from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class ChallengeDataOtpFormatEnum(str, Enum):
    CHARACTERS = "characters"
    INTEGER = "integer"


@dataclass_json
@dataclass
class ChallengeData:
    additional_information: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalInformation' }})
    data: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    image_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageLink' }})
    otp_format: Optional[ChallengeDataOtpFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otpFormat' }})
    otp_max_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otpMaxLength' }})
    
