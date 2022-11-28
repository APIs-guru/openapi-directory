from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class TestingTestEnvironmentCatalogGetEnvironmentTypeEnum(str, Enum):
    ENVIRONMENT_TYPE_UNSPECIFIED = "ENVIRONMENT_TYPE_UNSPECIFIED"
    ANDROID = "ANDROID"
    IOS = "IOS"
    NETWORK_CONFIGURATION = "NETWORK_CONFIGURATION"
    PROVIDED_SOFTWARE = "PROVIDED_SOFTWARE"
    DEVICE_IP_BLOCKS = "DEVICE_IP_BLOCKS"


@dataclass
class TestingTestEnvironmentCatalogGetPathParams:
    environment_type: TestingTestEnvironmentCatalogGetEnvironmentTypeEnum = field(metadata={'path_param': { 'field_name': 'environmentType', 'style': 'simple', 'explode': False }})
    

@dataclass
class TestingTestEnvironmentCatalogGetQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    project_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'projectId', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class TestingTestEnvironmentCatalogGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class TestingTestEnvironmentCatalogGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class TestingTestEnvironmentCatalogGetSecurity:
    option1: Optional[TestingTestEnvironmentCatalogGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[TestingTestEnvironmentCatalogGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class TestingTestEnvironmentCatalogGetRequest:
    path_params: TestingTestEnvironmentCatalogGetPathParams = field()
    query_params: TestingTestEnvironmentCatalogGetQueryParams = field()
    security: TestingTestEnvironmentCatalogGetSecurity = field()
    

@dataclass
class TestingTestEnvironmentCatalogGetResponse:
    content_type: str = field()
    status_code: int = field()
    test_environment_catalog: Optional[shared.TestEnvironmentCatalog] = field(default=None)
    
