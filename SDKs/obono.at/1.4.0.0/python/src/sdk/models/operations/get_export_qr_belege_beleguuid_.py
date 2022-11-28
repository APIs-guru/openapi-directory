from dataclasses import dataclass, field



@dataclass
class GetExportQrBelegeBelegUUIDPathParams:
    beleg_uuid: str = field(metadata={'path_param': { 'field_name': 'belegUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetExportQrBelegeBelegUUIDRequest:
    path_params: GetExportQrBelegeBelegUUIDPathParams = field()
    

@dataclass
class GetExportQrBelegeBelegUUIDResponse:
    content_type: str = field()
    status_code: int = field()
    
