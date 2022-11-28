from dataclasses import dataclass, field



@dataclass
class DcimInventoryItemsDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimInventoryItemsDeleteRequest:
    path_params: DcimInventoryItemsDeletePathParams = field()
    

@dataclass
class DcimInventoryItemsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
