from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetSearchApplicationQueryStatsResponse:
    r"""GetSearchApplicationQueryStatsResponse
    Response format for getting query stats for a search application between given dates.
    """
    
    stats: Optional[List[SearchApplicationQueryStats]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stats') }})
    total_query_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalQueryCount') }})
    
