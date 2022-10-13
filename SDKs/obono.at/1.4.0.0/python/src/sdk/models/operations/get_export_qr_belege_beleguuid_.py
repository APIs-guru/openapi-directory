from dataclasses import dataclass, field



@dataclass
class GetExportQrBelegeBelegUUIDPathParams:
    beleg_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'belegUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetExportQrBelegeBelegUUIDRequest:
    path_params: GetExportQrBelegeBelegUUIDPathParams = field(default=None)
    

@dataclass
class GetExportQrBelegeBelegUUIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
