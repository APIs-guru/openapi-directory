from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CertificateRevocationListStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    SUPERSEDED = "SUPERSEDED"


@dataclass_json
@dataclass
class CertificateRevocationList:
    r"""CertificateRevocationList
    A CertificateRevocationList corresponds to a signed X.509 certificate Revocation List (CRL). A CRL contains the serial numbers of certificates that should no longer be trusted.
    """
    
    access_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessUrl') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pem_crl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pemCrl') }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    revoked_certificates: Optional[List[RevokedCertificate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revokedCertificates') }})
    sequence_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sequenceNumber') }})
    state: Optional[CertificateRevocationListStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
