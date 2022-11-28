from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SchemeGithubAccessCode:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SchemeInternalAPIKey:
    api_key: str = field(metadata={'security': { 'field_name': 'ckan_api_key' }})
    

@dataclass
class Security:
    github_access_code: Optional[SchemeGithubAccessCode] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    internal_api_key: Optional[SchemeInternalAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
