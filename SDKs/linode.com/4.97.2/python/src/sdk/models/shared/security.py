from dataclasses import dataclass, field



@dataclass
class SchemePersonalAccessToken:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SchemeOauth:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    
