from dataclasses import dataclass, field



@dataclass
class SchemeOauth2:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class Security:
    oauth2: SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    
