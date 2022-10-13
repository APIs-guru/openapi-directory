from dataclasses import dataclass, field



@dataclass
class GetExportPdfBelegeBelegUUIDPathParams:
    beleg_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'belegUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetExportPdfBelegeBelegUUIDRequest:
    path_params: GetExportPdfBelegeBelegUUIDPathParams = field(default=None)
    

@dataclass
class GetExportPdfBelegeBelegUUIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
