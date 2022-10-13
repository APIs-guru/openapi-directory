from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import obactiveorhistoriccurrencyandamount
from . import obchargebearertype1code_enum
from . import obcashaccountdebtor4
from . import obpostaladdress6
from . import obscasupportdata1
from . import links
from . import meta
from . import obrisk1

class ObWriteDomesticScheduledConsentResponse5DataAuthorisationAuthorisationTypeEnum(str, Enum):
    ANY = "Any"
    SINGLE = "Single"


@dataclass_json
@dataclass
class ObWriteDomesticScheduledConsentResponse5DataAuthorisation:
    authorisation_type: ObWriteDomesticScheduledConsentResponse5DataAuthorisationAuthorisationTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthorisationType' }})
    completion_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompletionDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticScheduledConsentResponse5DataCharges:
    amount: obactiveorhistoriccurrencyandamount.ObActiveOrHistoricCurrencyAndAmount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    charge_bearer: obchargebearertype1code_enum.ObChargeBearerType1CodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChargeBearer' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    

@dataclass_json
@dataclass
class ObWriteDomesticScheduledConsentResponse5DataInitiationCreditorAccount:
    identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    scheme_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeName' }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryIdentification' }})
    

@dataclass_json
@dataclass
class ObWriteDomesticScheduledConsentResponse5DataInitiationDebtorAccount:
    identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    scheme_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemeName' }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecondaryIdentification' }})
    

@dataclass_json
@dataclass
class ObWriteDomesticScheduledConsentResponse5DataInitiationInstructedAmount:
    amount: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    

@dataclass_json
@dataclass
class ObWriteDomesticScheduledConsentResponse5DataInitiationRemittanceInformation:
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reference' }})
    unstructured: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Unstructured' }})
    

@dataclass_json
@dataclass
class ObWriteDomesticScheduledConsentResponse5DataInitiation:
    creditor_account: ObWriteDomesticScheduledConsentResponse5DataInitiationCreditorAccount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditorAccount' }})
    creditor_postal_address: Optional[obpostaladdress6.ObPostalAddress6] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditorPostalAddress' }})
    debtor_account: Optional[ObWriteDomesticScheduledConsentResponse5DataInitiationDebtorAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DebtorAccount' }})
    end_to_end_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndToEndIdentification' }})
    instructed_amount: ObWriteDomesticScheduledConsentResponse5DataInitiationInstructedAmount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstructedAmount' }})
    instruction_identification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstructionIdentification' }})
    local_instrument: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalInstrument' }})
    remittance_information: Optional[ObWriteDomesticScheduledConsentResponse5DataInitiationRemittanceInformation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemittanceInformation' }})
    requested_execution_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestedExecutionDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    supplementary_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupplementaryData' }})
    
class ObWriteDomesticScheduledConsentResponse5DataPermissionEnum(str, Enum):
    CREATE = "Create"

class ObWriteDomesticScheduledConsentResponse5DataReadRefundAccountEnum(str, Enum):
    NO = "No"
    YES = "Yes"

class ObWriteDomesticScheduledConsentResponse5DataStatusEnum(str, Enum):
    AUTHORISED = "Authorised"
    AWAITING_AUTHORISATION = "AwaitingAuthorisation"
    CONSUMED = "Consumed"
    REJECTED = "Rejected"


@dataclass_json
@dataclass
class ObWriteDomesticScheduledConsentResponse5Data:
    authorisation: Optional[ObWriteDomesticScheduledConsentResponse5DataAuthorisation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Authorisation' }})
    charges: Optional[List[ObWriteDomesticScheduledConsentResponse5DataCharges]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Charges' }})
    consent_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsentId' }})
    creation_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    cut_off_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CutOffDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    debtor: Optional[obcashaccountdebtor4.ObCashAccountDebtor4] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Debtor' }})
    expected_execution_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpectedExecutionDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    expected_settlement_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpectedSettlementDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    initiation: ObWriteDomesticScheduledConsentResponse5DataInitiation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Initiation' }})
    permission: ObWriteDomesticScheduledConsentResponse5DataPermissionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Permission' }})
    read_refund_account: Optional[ObWriteDomesticScheduledConsentResponse5DataReadRefundAccountEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReadRefundAccount' }})
    sca_support_data: Optional[obscasupportdata1.ObscaSupportData1] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SCASupportData' }})
    status: ObWriteDomesticScheduledConsentResponse5DataStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_update_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusUpdateDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class ObWriteDomesticScheduledConsentResponse5:
    data: ObWriteDomesticScheduledConsentResponse5Data = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    links: Optional[links.Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Links' }})
    meta: Optional[meta.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Meta' }})
    risk: obrisk1.ObRisk1 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Risk' }})
    
