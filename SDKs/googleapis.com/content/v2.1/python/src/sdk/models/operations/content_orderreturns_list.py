from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ContentOrderreturnsListPathParams:
    merchant_id: str = field(metadata={'path_param': { 'field_name': 'merchantId', 'style': 'simple', 'explode': False }})
    
class ContentOrderreturnsListOrderByEnum(str, Enum):
    RETURN_CREATION_TIME_DESC = "RETURN_CREATION_TIME_DESC"
    RETURN_CREATION_TIME_ASC = "RETURN_CREATION_TIME_ASC"

class ContentOrderreturnsListShipmentStatesEnum(str, Enum):
    NEW = "NEW"
    SHIPPED = "SHIPPED"
    COMPLETED = "COMPLETED"
    UNDELIVERABLE = "UNDELIVERABLE"
    PENDING = "PENDING"

class ContentOrderreturnsListShipmentStatusEnum(str, Enum):
    NEW = "NEW"
    IN_PROGRESS = "IN_PROGRESS"
    PROCESSED = "PROCESSED"

class ContentOrderreturnsListShipmentTypesEnum(str, Enum):
    BY_MAIL = "BY_MAIL"
    RETURNLESS = "RETURNLESS"
    CONTACT_CUSTOMER_SUPPORT = "CONTACT_CUSTOMER_SUPPORT"


@dataclass
class ContentOrderreturnsListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    acknowledged: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'acknowledged', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    created_end_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'createdEndDate', 'style': 'form', 'explode': True }})
    created_start_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'createdStartDate', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    google_order_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'googleOrderIds', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    order_by: Optional[ContentOrderreturnsListOrderByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    shipment_states: Optional[List[ContentOrderreturnsListShipmentStatesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'shipmentStates', 'style': 'form', 'explode': True }})
    shipment_status: Optional[List[ContentOrderreturnsListShipmentStatusEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'shipmentStatus', 'style': 'form', 'explode': True }})
    shipment_tracking_numbers: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'shipmentTrackingNumbers', 'style': 'form', 'explode': True }})
    shipment_types: Optional[List[ContentOrderreturnsListShipmentTypesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'shipmentTypes', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class ContentOrderreturnsListSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ContentOrderreturnsListRequest:
    path_params: ContentOrderreturnsListPathParams = field()
    query_params: ContentOrderreturnsListQueryParams = field()
    security: ContentOrderreturnsListSecurity = field()
    

@dataclass
class ContentOrderreturnsListResponse:
    content_type: str = field()
    status_code: int = field()
    orderreturns_list_response: Optional[shared.OrderreturnsListResponse] = field(default=None)
    
