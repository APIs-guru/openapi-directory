from dataclasses import dataclass, field



@dataclass
class PostDiseaseByIDRequest:
    request: str = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostDiseaseByIDResponse:
    content_type: str = field()
    status_code: int = field()
    
