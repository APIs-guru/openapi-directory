from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PublishingOptions:
    publish_ca_cert: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishCaCert' }})
    publish_crl: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishCrl' }})
    
