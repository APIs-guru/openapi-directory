from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1betaSafetyNetConfig:
    r"""GoogleFirebaseAppcheckV1betaSafetyNetConfig
    An app's SafetyNet configuration object. This configuration controls certain properties of the `AppCheckToken` returned by ExchangeSafetyNetToken, such as its ttl. Note that your registered SHA-256 certificate fingerprints are used to validate tokens issued by SafetyNet; please register them via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v1beta1/projects.androidApps.sha/create).
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    token_ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenTtl') }})
    
