from dataclasses import dataclass, field



@dataclass
class SchemeDeveloperHapikey:
    api_key: str = field(metadata={'security': { 'field_name': 'hapikey' }})
    
