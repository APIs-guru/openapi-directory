from dataclasses import dataclass, field



@dataclass
class DeleteSetupV1LocationsIDGoogleServiceAccountPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSetupV1LocationsIDGoogleServiceAccountRequest:
    path_params: DeleteSetupV1LocationsIDGoogleServiceAccountPathParams = field()
    

@dataclass
class DeleteSetupV1LocationsIDGoogleServiceAccountResponse:
    content_type: str = field()
    status_code: int = field()
    
