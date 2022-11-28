from dataclasses import dataclass, field



@dataclass
class SchemeCookieAuth:
    api_key: str = field(metadata={'security': { 'field_name': 'portal' }})
    

@dataclass
class Security:
    cookie_auth: SchemeCookieAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
