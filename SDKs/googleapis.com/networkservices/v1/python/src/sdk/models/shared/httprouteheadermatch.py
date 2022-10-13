from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import httprouteheadermatchintegerrange


@dataclass_json
@dataclass
class HTTPRouteHeaderMatch:
    exact_match: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exactMatch' }})
    header: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'header' }})
    invert_match: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invertMatch' }})
    prefix_match: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefixMatch' }})
    present_match: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'presentMatch' }})
    range_match: Optional[httprouteheadermatchintegerrange.HTTPRouteHeaderMatchIntegerRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rangeMatch' }})
    regex_match: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regexMatch' }})
    suffix_match: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suffixMatch' }})
    
