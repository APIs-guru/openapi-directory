from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AdvertiserLandingPagesListResponse:
    r"""AdvertiserLandingPagesListResponse
    Landing Page List Response
    """
    
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    landing_pages: Optional[List[LandingPage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('landingPages') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
