from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import hreftype
from . import scastatusauthorisationconfirmation_enum


@dataclass_json
@dataclass
class AuthorisationConfirmationResponse:
    links: dict[str, hreftype.HrefType] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    psu_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'psuMessage' }})
    sca_status: scastatusauthorisationconfirmation_enum.ScaStatusAuthorisationConfirmationEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaStatus' }})
    
