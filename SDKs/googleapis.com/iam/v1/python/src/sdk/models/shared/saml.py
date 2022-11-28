from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Saml:
    r"""Saml
    Represents an SAML 2.0 identity provider.
    """
    
    idp_metadata_xml: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idpMetadataXml') }})
    
