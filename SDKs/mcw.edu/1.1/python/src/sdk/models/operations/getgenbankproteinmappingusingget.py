from dataclasses import dataclass, field



@dataclass
class GetGenBankProteinMappingUsingGetPathParams:
    rgd_id: int = field(default=None, metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGenBankProteinMappingUsingGetRequest:
    path_params: GetGenBankProteinMappingUsingGetPathParams = field(default=None)
    

@dataclass
class GetGenBankProteinMappingUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
