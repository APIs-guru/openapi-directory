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
class CommitResponse:
    r"""CommitResponse
    The response for Datastore.Commit.
    """
    
    commit_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitTime') }})
    index_updates: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexUpdates') }})
    mutation_results: Optional[List[MutationResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mutationResults') }})
    
