from dataclasses import dataclass, field



@dataclass
class GetExportPdfBelegeBelegUUIDPathParams:
    beleg_uuid: str = field(metadata={'path_param': { 'field_name': 'belegUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetExportPdfBelegeBelegUUIDRequest:
    path_params: GetExportPdfBelegeBelegUUIDPathParams = field()
    

@dataclass
class GetExportPdfBelegeBelegUUIDResponse:
    content_type: str = field()
    status_code: int = field()
    
