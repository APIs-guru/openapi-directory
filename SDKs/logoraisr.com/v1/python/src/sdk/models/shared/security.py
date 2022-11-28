from dataclasses import dataclass, field



@dataclass
class SchemeToken:
    api_key: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class Security:
    token: SchemeToken = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
