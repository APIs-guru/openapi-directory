from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Saml:
    idp_metadata_xml: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idpMetadataXml' }})
    
