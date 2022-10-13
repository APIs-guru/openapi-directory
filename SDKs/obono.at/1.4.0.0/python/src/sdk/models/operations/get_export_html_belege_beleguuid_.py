from dataclasses import dataclass, field



@dataclass
class GetExportHTMLBelegeBelegUUIDPathParams:
    beleg_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'belegUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetExportHTMLBelegeBelegUUIDRequest:
    path_params: GetExportHTMLBelegeBelegUUIDPathParams = field(default=None)
    

@dataclass
class GetExportHTMLBelegeBelegUUIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
