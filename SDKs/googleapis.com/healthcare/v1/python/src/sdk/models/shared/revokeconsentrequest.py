from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RevokeConsentRequest:
    r"""RevokeConsentRequest
    Revokes the latest revision of the specified Consent by committing a new revision with `state` updated to `REVOKED`. If the latest revision of the given Consent is in the `REVOKED` state, no new revision is committed.
    """
    
    consent_artifact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentArtifact') }})
    
