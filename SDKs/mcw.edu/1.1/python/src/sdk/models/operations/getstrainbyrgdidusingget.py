from dataclasses import dataclass, field



@dataclass
class GetStrainByRgdIDUsingGetPathParams:
    rgd_id: int = field(default=None, metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStrainByRgdIDUsingGetRequest:
    path_params: GetStrainByRgdIDUsingGetPathParams = field(default=None)
    

@dataclass
class GetStrainByRgdIDUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
