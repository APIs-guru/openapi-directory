from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import simpleaddresstype
from . import channel
from . import geocodingsummary


@dataclass_json
@dataclass
class Official:
    address: Optional[List[simpleaddresstype.SimpleAddressType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    channels: Optional[List[channel.Channel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channels' }})
    emails: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emails' }})
    geocoding_summaries: Optional[List[geocodingsummary.GeocodingSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geocodingSummaries' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    party: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'party' }})
    phones: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phones' }})
    photo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photoUrl' }})
    urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urls' }})
    
