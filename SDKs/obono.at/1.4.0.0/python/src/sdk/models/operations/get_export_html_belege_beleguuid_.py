from dataclasses import dataclass, field



@dataclass
class GetExportHTMLBelegeBelegUUIDPathParams:
    beleg_uuid: str = field(metadata={'path_param': { 'field_name': 'belegUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetExportHTMLBelegeBelegUUIDRequest:
    path_params: GetExportHTMLBelegeBelegUUIDPathParams = field()
    

@dataclass
class GetExportHTMLBelegeBelegUUIDResponse:
    content_type: str = field()
    status_code: int = field()
    
