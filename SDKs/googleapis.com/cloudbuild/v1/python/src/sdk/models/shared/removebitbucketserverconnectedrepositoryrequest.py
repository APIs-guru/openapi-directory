from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import bitbucketserverrepositoryid


@dataclass_json
@dataclass
class RemoveBitbucketServerConnectedRepositoryRequest:
    connected_repository: Optional[bitbucketserverrepositoryid.BitbucketServerRepositoryID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectedRepository' }})
    
