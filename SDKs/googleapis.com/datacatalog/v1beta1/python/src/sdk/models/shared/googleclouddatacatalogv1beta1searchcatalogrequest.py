from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1beta1searchcatalogrequestscope


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1SearchCatalogRequest:
    order_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderBy' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageSize' }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageToken' }})
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    scope: Optional[googleclouddatacatalogv1beta1searchcatalogrequestscope.GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    
