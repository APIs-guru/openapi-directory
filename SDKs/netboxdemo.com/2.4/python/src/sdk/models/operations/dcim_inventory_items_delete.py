from dataclasses import dataclass, field



@dataclass
class DcimInventoryItemsDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimInventoryItemsDeleteRequest:
    path_params: DcimInventoryItemsDeletePathParams = field(default=None)
    

@dataclass
class DcimInventoryItemsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
