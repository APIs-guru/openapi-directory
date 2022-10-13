from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import grafeasv1beta1intotosignature
from . import link


@dataclass_json
@dataclass
class GrafeasV1beta1IntotoDetails:
    signatures: Optional[List[grafeasv1beta1intotosignature.GrafeasV1beta1IntotoSignature]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signatures' }})
    signed: Optional[link.Link] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signed' }})
    
