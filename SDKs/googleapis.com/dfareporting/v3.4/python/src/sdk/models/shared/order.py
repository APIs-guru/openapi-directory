from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ordercontact
from . import lastmodifiedinfo


@dataclass_json
@dataclass
class Order:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserId' }})
    approver_user_profile_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approverUserProfileIds' }})
    buyer_invoice_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyerInvoiceId' }})
    buyer_organization_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyerOrganizationName' }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    contacts: Optional[List[ordercontact.OrderContact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contacts' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    last_modified_info: Optional[lastmodifiedinfo.LastModifiedInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedInfo' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    planning_term_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'planningTermId' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    seller_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sellerOrderId' }})
    seller_organization_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sellerOrganizationName' }})
    site_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'siteId' }})
    site_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'siteNames' }})
    subaccount_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subaccountId' }})
    terms_and_conditions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'termsAndConditions' }})
    
