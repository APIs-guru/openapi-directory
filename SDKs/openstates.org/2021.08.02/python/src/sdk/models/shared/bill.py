from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Bill:
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    from_organization: Organization = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from_organization') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    identifier: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    jurisdiction: CompactJurisdiction = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jurisdiction') }})
    openstates_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('openstates_url') }})
    session: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('session') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    updated_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    abstracts: Optional[List[BillAbstract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abstracts') }})
    actions: Optional[List[BillAction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    classification: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classification') }})
    documents: Optional[List[BillDocumentOrVersion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documents') }})
    extras: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extras') }})
    first_action_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_action_date') }})
    latest_action_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latest_action_date') }})
    latest_action_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latest_action_description') }})
    latest_passage_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latest_passage_date') }})
    other_identifiers: Optional[List[BillIdentifier]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('other_identifiers') }})
    other_titles: Optional[List[BillTitle]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('other_titles') }})
    sources: Optional[List[Link]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    sponsorships: Optional[List[BillSponsorship]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sponsorships') }})
    subject: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subject') }})
    versions: Optional[List[BillDocumentOrVersion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versions') }})
    votes: Optional[List[VoteEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('votes') }})
    
