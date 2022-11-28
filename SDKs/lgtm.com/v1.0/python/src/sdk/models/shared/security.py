from dataclasses import dataclass, field



@dataclass
class SchemeAccessToken:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    
