from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SubscriptionResponseEventTypeEnum(str, Enum):
    CONTACT_PROPERTY_CHANGE = "contact.propertyChange"
    COMPANY_PROPERTY_CHANGE = "company.propertyChange"
    DEAL_PROPERTY_CHANGE = "deal.propertyChange"
    TICKET_PROPERTY_CHANGE = "ticket.propertyChange"
    PRODUCT_PROPERTY_CHANGE = "product.propertyChange"
    LINE_ITEM_PROPERTY_CHANGE = "line_item.propertyChange"
    CONTACT_CREATION = "contact.creation"
    CONTACT_DELETION = "contact.deletion"
    CONTACT_PRIVACY_DELETION = "contact.privacyDeletion"
    COMPANY_CREATION = "company.creation"
    COMPANY_DELETION = "company.deletion"
    DEAL_CREATION = "deal.creation"
    DEAL_DELETION = "deal.deletion"
    TICKET_CREATION = "ticket.creation"
    TICKET_DELETION = "ticket.deletion"
    PRODUCT_CREATION = "product.creation"
    PRODUCT_DELETION = "product.deletion"
    LINE_ITEM_CREATION = "line_item.creation"
    LINE_ITEM_DELETION = "line_item.deletion"
    CONVERSATION_CREATION = "conversation.creation"
    CONVERSATION_DELETION = "conversation.deletion"
    CONVERSATION_NEW_MESSAGE = "conversation.newMessage"
    CONVERSATION_PRIVACY_DELETION = "conversation.privacyDeletion"
    CONVERSATION_PROPERTY_CHANGE = "conversation.propertyChange"


@dataclass_json
@dataclass
class SubscriptionResponse:
    active: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_type: SubscriptionResponseEventTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventType' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    property_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'propertyName' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
