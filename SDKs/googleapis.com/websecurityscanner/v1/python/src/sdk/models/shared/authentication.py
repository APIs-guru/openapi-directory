from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import customaccount
from . import googleaccount
from . import iapcredential


@dataclass_json
@dataclass
class Authentication:
    custom_account: Optional[customaccount.CustomAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customAccount' }})
    google_account: Optional[googleaccount.GoogleAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'googleAccount' }})
    iap_credential: Optional[iapcredential.IapCredential] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iapCredential' }})
    
