from dataclasses import dataclass, field



@dataclass
class SchemeAccessToken:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class Security:
    access_token: SchemeAccessToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    
