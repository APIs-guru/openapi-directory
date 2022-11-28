from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudContactcenterinsightsV1EntityTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    PERSON = "PERSON"
    LOCATION = "LOCATION"
    ORGANIZATION = "ORGANIZATION"
    EVENT = "EVENT"
    WORK_OF_ART = "WORK_OF_ART"
    CONSUMER_GOOD = "CONSUMER_GOOD"
    OTHER = "OTHER"
    PHONE_NUMBER = "PHONE_NUMBER"
    ADDRESS = "ADDRESS"
    DATE = "DATE"
    NUMBER = "NUMBER"
    PRICE = "PRICE"


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1Entity:
    r"""GoogleCloudContactcenterinsightsV1Entity
    The data for an entity annotation. Represents a phrase in the conversation that is a known entity, such as a person, an organization, or location.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    salience: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salience') }})
    sentiment: Optional[GoogleCloudContactcenterinsightsV1SentimentData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentiment') }})
    type: Optional[GoogleCloudContactcenterinsightsV1EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
