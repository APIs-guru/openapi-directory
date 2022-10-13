from dataclasses import dataclass, field



@dataclass
class SchemeAuthorizationCodeToken:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SchemeClientCredentialsToken:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SchemeClientID:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'Client-Id' }})
    
