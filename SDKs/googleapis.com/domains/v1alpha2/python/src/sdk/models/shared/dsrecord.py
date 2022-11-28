from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DsRecordAlgorithmEnum(str, Enum):
    ALGORITHM_UNSPECIFIED = "ALGORITHM_UNSPECIFIED"
    RSAMD5 = "RSAMD5"
    DH = "DH"
    DSA = "DSA"
    ECC = "ECC"
    RSASHA1 = "RSASHA1"
    DSANSEC3_SHA1 = "DSANSEC3SHA1"
    RSASHA1_NSEC3_SHA1 = "RSASHA1NSEC3SHA1"
    RSASHA256 = "RSASHA256"
    RSASHA512 = "RSASHA512"
    ECCGOST = "ECCGOST"
    ECDSAP256_SHA256 = "ECDSAP256SHA256"
    ECDSAP384_SHA384 = "ECDSAP384SHA384"
    ED25519 = "ED25519"
    ED448 = "ED448"
    INDIRECT = "INDIRECT"
    PRIVATEDNS = "PRIVATEDNS"
    PRIVATEOID = "PRIVATEOID"

class DsRecordDigestTypeEnum(str, Enum):
    DIGEST_TYPE_UNSPECIFIED = "DIGEST_TYPE_UNSPECIFIED"
    SHA1 = "SHA1"
    SHA256 = "SHA256"
    GOST3411 = "GOST3411"
    SHA384 = "SHA384"


@dataclass_json
@dataclass
class DsRecord:
    r"""DsRecord
    Defines a Delegation Signer (DS) record, which is needed to enable DNSSEC for a domain. It contains a digest (hash) of a DNSKEY record that must be present in the domain's DNS zone.
    """
    
    algorithm: Optional[DsRecordAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithm') }})
    digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('digest') }})
    digest_type: Optional[DsRecordDigestTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('digestType') }})
    key_tag: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyTag') }})
    
