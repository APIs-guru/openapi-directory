from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudcontactcenterinsightsv1sentimentdata

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
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    salience: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'salience' }})
    sentiment: Optional[googlecloudcontactcenterinsightsv1sentimentdata.GoogleCloudContactcenterinsightsV1SentimentData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentiment' }})
    type: Optional[GoogleCloudContactcenterinsightsV1EntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
