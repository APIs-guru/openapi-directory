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
class UpdateDocumentStyleRequest:
    r"""UpdateDocumentStyleRequest
    Updates the DocumentStyle.
    """
    
    document_style: Optional[DocumentStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentStyle') }})
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    
