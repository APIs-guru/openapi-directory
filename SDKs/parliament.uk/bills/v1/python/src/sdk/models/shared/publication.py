from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import publicationdocument
from . import publicationlink
from . import publicationtype


@dataclass_json
@dataclass
class Publication:
    display_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    files: Optional[List[publicationdocument.PublicationDocument]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'files' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    links: Optional[List[publicationlink.PublicationLink]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    publication_type: Optional[publicationtype.PublicationType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicationType' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
