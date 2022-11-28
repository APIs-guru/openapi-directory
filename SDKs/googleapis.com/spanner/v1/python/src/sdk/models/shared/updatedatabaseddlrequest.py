from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateDatabaseDdlRequest:
    r"""UpdateDatabaseDdlRequest
    Enqueues the given DDL statements to be applied, in order but not necessarily all at once, to the database schema at some point (or points) in the future. The server checks that the statements are executable (syntactically valid, name tables that exist, etc.) before enqueueing them, but they may still fail upon later execution (e.g., if a statement from another batch of statements is applied first and it conflicts in some way, or if there is some data-related problem like a `NULL` value in a column to which `NOT NULL` would be added). If a statement fails, all subsequent statements in the batch are automatically cancelled. Each batch of statements is assigned a name which can be used with the Operations API to monitor progress. See the operation_id field for more details.
    """
    
    operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationId') }})
    statements: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statements') }})
    
