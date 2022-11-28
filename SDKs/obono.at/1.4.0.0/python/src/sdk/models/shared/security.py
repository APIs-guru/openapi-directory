from dataclasses import dataclass, field



@dataclass
class SchemeJwt:
    api_key: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class Security:
    jwt: SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SchemeBasicAuth:
    password: str = field(metadata={'security': { 'field_name': 'password' }})
    username: str = field(metadata={'security': { 'field_name': 'username' }})
    
