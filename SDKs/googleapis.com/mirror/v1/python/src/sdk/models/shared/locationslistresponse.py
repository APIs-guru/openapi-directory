from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class LocationsListResponse:
    r"""LocationsListResponse
    A list of Locations. This is the response from the server to GET requests on the locations collection.
    """
    
    items: Optional[List[Location]] = field(default=None)
    kind: Optional[str] = field(default=None)
    
