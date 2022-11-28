from dataclasses import dataclass, field



@dataclass
class SchemeOauth2Legacy:
    authorization: str = field(metadata={'security': { 'field_name': 'Authorization' }})
    

@dataclass
class SchemePrivateAppsLegacy:
    api_key: str = field(metadata={'security': { 'field_name': 'private-app-legacy' }})
    

@dataclass
class SchemeHapikey:
    api_key: str = field(metadata={'security': { 'field_name': 'hapikey' }})
    
