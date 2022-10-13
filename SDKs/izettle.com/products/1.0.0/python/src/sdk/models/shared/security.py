from dataclasses import dataclass, field



@dataclass
class SchemeZettleAPIKey:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SchemeZettleOauth:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    
