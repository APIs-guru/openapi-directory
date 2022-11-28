from dataclasses import dataclass, field



@dataclass
class SchemeAuthorization:
    api_key: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class Security:
    authorization: SchemeAuthorization = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
