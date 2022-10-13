from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import billabstract
from . import billaction
from . import billdocumentorversion
from . import organization
from . import compactjurisdiction
from . import billidentifier
from . import billtitle
from . import link
from . import billsponsorship
from . import billdocumentorversion
from . import voteevent


@dataclass_json
@dataclass
class Bill:
    abstracts: Optional[List[billabstract.BillAbstract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abstracts' }})
    actions: Optional[List[billaction.BillAction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    classification: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classification' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    documents: Optional[List[billdocumentorversion.BillDocumentOrVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documents' }})
    extras: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extras' }})
    first_action_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_action_date' }})
    from_organization: organization.Organization = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from_organization' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifier' }})
    jurisdiction: compactjurisdiction.CompactJurisdiction = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jurisdiction' }})
    latest_action_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latest_action_date' }})
    latest_action_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latest_action_description' }})
    latest_passage_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latest_passage_date' }})
    openstates_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openstates_url' }})
    other_identifiers: Optional[List[billidentifier.BillIdentifier]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'other_identifiers' }})
    other_titles: Optional[List[billtitle.BillTitle]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'other_titles' }})
    session: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'session' }})
    sources: Optional[List[link.Link]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sources' }})
    sponsorships: Optional[List[billsponsorship.BillSponsorship]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sponsorships' }})
    subject: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subject' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    versions: Optional[List[billdocumentorversion.BillDocumentOrVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versions' }})
    votes: Optional[List[voteevent.VoteEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'votes' }})
    
