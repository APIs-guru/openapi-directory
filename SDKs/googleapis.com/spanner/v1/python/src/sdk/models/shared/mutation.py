from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Mutation:
    r"""Mutation
    A modification to one or more Cloud Spanner rows. Mutations can be applied to a Cloud Spanner database by sending them in a Commit call.
    """
    
    delete: Optional[Delete] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    insert: Optional[Write] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insert') }})
    insert_or_update: Optional[Write] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertOrUpdate') }})
    replace: Optional[Write] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replace') }})
    update: Optional[Write] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update') }})
    
