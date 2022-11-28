from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CreateTokenRequestBodyActionEnum(str, Enum):
    LICENSEE_LOGIN = "licenseeLogin"

class CreateTokenRequestBodyAPIKeyRoleEnum(str, Enum):
    ROLE_APIKEY_LICENSEE = "ROLE_APIKEY_LICENSEE"
    ROLE_APIKEY_ANALYTICS = "ROLE_APIKEY_ANALYTICS"
    ROLE_APIKEY_OPERATION = "ROLE_APIKEY_OPERATION"
    ROLE_APIKEY_MAINTENANCE = "ROLE_APIKEY_MAINTENANCE"
    ROLE_APIKEY_ADMIN = "ROLE_APIKEY_ADMIN"

class CreateTokenRequestBodyTokenTypeEnum(str, Enum):
    DEFAULT = "DEFAULT"
    SHOP = "SHOP"
    APIKEY = "APIKEY"

class CreateTokenRequestBodyTypeEnum(str, Enum):
    ACTION = "ACTION"


@dataclass
class CreateTokenRequestBody:
    token_type: CreateTokenRequestBodyTokenTypeEnum = field(metadata={'form': { 'field_name': 'tokenType' }})
    action: Optional[CreateTokenRequestBodyActionEnum] = field(default=None, metadata={'form': { 'field_name': 'action' }})
    api_key_role: Optional[CreateTokenRequestBodyAPIKeyRoleEnum] = field(default=None, metadata={'form': { 'field_name': 'apiKeyRole' }})
    cancel_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'cancelURL' }})
    cancel_url_title: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'cancelURLTitle' }})
    license_template_number: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'licenseTemplateNumber' }})
    licensee_number: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'licenseeNumber' }})
    predefined_shopping_item: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'predefinedShoppingItem' }})
    private_key: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'privateKey' }})
    product_number: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'productNumber' }})
    success_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'successURL' }})
    success_url_title: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'successURLTitle' }})
    type: Optional[CreateTokenRequestBodyTypeEnum] = field(default=None, metadata={'form': { 'field_name': 'type' }})
    

@dataclass
class CreateTokenSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateTokenRequest:
    request: CreateTokenRequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateTokenSecurity = field()
    

@dataclass
class CreateTokenResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
