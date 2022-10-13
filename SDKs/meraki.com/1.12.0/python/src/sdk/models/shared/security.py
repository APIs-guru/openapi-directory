from dataclasses import dataclass, field



@dataclass
class SchemeMerakiAPIKey:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'X-Cisco-Meraki-API-Key' }})
    

@dataclass
class Security:
    meraki_api_key: SchemeMerakiAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
