from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import links
from . import meta

class ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum(str, Enum):
    ACCEPTED = "Accepted"
    ACCEPTED_CANCELLATION_REQUEST = "AcceptedCancellationRequest"
    ACCEPTED_CREDIT_SETTLEMENT_COMPLETED = "AcceptedCreditSettlementCompleted"
    ACCEPTED_CUSTOMER_PROFILE = "AcceptedCustomerProfile"
    ACCEPTED_FUNDS_CHECKED = "AcceptedFundsChecked"
    ACCEPTED_SETTLEMENT_COMPLETED = "AcceptedSettlementCompleted"
    ACCEPTED_SETTLEMENT_IN_PROCESS = "AcceptedSettlementInProcess"
    ACCEPTED_TECHNICAL_VALIDATION = "AcceptedTechnicalValidation"
    ACCEPTED_WITH_CHANGE = "AcceptedWithChange"
    ACCEPTED_WITHOUT_POSTING = "AcceptedWithoutPosting"
    CANCELLED = "Cancelled"
    NO_CANCELLATION_PROCESS = "NoCancellationProcess"
    PARTIALLY_ACCEPTED_CANCELLATION_REQUEST = "PartiallyAcceptedCancellationRequest"
    PARTIALLY_ACCEPTED_TECHNICAL_CORRECT = "PartiallyAcceptedTechnicalCorrect"
    PAYMENT_CANCELLED = "PaymentCancelled"
    PENDING = "Pending"
    PENDING_CANCELLATION_REQUEST = "PendingCancellationRequest"
    RECEIVED = "Received"
    REJECTED = "Rejected"
    REJECTED_CANCELLATION_REQUEST = "RejectedCancellationRequest"

class ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum(str, Enum):
    CANCELLED = "Cancelled"
    PENDING_FAILING_SETTLEMENT = "PendingFailingSettlement"
    PENDING_SETTLEMENT = "PendingSettlement"
    PROPRIETARY = "Proprietary"
    PROPRIETARY_REJECTION = "ProprietaryRejection"
    SUSPENDED = "Suspended"
    UNMATCHED = "Unmatched"


@dataclass_json
@dataclass
class ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetail:
    local_instrument: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalInstrument' }})
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_reason: Optional[ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetailStatusReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusReason' }})
    status_reason_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusReasonDescription' }})
    

@dataclass_json
@dataclass
class ObWritePaymentDetailsResponse1DataPaymentStatus:
    payment_transaction_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaymentTransactionId' }})
    status: ObWritePaymentDetailsResponse1DataPaymentStatusStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_detail: Optional[ObWritePaymentDetailsResponse1DataPaymentStatusStatusDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusDetail' }})
    status_update_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusUpdateDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class ObWritePaymentDetailsResponse1Data:
    payment_status: Optional[List[ObWritePaymentDetailsResponse1DataPaymentStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaymentStatus' }})
    

@dataclass_json
@dataclass
class ObWritePaymentDetailsResponse1:
    data: ObWritePaymentDetailsResponse1Data = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    links: Optional[links.Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Links' }})
    meta: Optional[meta.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Meta' }})
    
