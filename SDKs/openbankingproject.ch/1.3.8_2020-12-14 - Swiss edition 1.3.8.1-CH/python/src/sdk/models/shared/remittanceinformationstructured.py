from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class RemittanceInformationStructuredScoRorQrRorIpiEnum(str, Enum):
    SCOR = "SCOR"
    QRR = "QRR"
    IPI = "IPI"


@dataclass_json
@dataclass
class RemittanceInformationStructured:
    sco_ror_qr_ror_ipi: Optional[RemittanceInformationStructuredScoRorQrRorIpiEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SCORorQRRorIPI' }})
    additional_remittance_information: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalRemittanceInformation' }})
    reference: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference' }})
    reference_issuer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referenceIssuer' }})
    reference_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referenceType' }})
    
