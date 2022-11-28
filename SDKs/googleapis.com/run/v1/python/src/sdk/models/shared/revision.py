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
class Revision:
    r"""Revision
    Revision is an immutable snapshot of code and configuration. A revision references a container image. Revisions are created by updates to a Configuration. See also: https://github.com/knative/specs/blob/main/specs/serving/overview.md#revision
    """
    
    api_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiVersion') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    metadata: Optional[ObjectMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    spec: Optional[RevisionSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    status: Optional[RevisionStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
