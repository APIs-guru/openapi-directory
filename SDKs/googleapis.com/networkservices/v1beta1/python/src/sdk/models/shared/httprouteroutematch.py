from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import httprouteheadermatch
from . import httproutequeryparametermatch


@dataclass_json
@dataclass
class HTTPRouteRouteMatch:
    full_path_match: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullPathMatch' }})
    headers: Optional[List[httprouteheadermatch.HTTPRouteHeaderMatch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    ignore_case: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ignoreCase' }})
    prefix_match: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefixMatch' }})
    query_parameters: Optional[List[httproutequeryparametermatch.HTTPRouteQueryParameterMatch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryParameters' }})
    regex_match: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regexMatch' }})
    
