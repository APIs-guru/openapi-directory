from dataclasses import dataclass, field



@dataclass
class DcimSitesDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimSitesDeleteRequest:
    path_params: DcimSitesDeletePathParams = field()
    

@dataclass
class DcimSitesDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
