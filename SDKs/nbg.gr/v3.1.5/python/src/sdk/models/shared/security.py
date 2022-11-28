from dataclasses import dataclass, field



@dataclass
class SchemeAuthorizationCodeToken:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SchemeClientCredentialsToken:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SchemeClientID:
    api_key: str = field(metadata={'security': { 'field_name': 'Client-Id' }})
    
