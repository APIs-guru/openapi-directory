from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from . import extensionactiondefinition


@dataclass_json
@dataclass
class ActionRevision:
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    definition: extensionactiondefinition.ExtensionActionDefinition = field(default=None, metadata={'dataclasses_json': { 'field_name': 'definition' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    revision_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionId' }})
    
