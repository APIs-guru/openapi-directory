from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SchemeGithubAccessCode:
    authorization: str = field(default=None, metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SchemeInternalAPIKey:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'ckan_api_key' }})
    

@dataclass
class SecurityOption1:
    github_access_code: SchemeGithubAccessCode = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SecurityOption2:
    internal_api_key: SchemeInternalAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class Security:
    option1: Optional[SecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[SecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    
