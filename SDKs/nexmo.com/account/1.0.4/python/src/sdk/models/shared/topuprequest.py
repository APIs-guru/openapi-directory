from dataclasses import dataclass, field



@dataclass
class TopupRequest:
    trx: str = field(metadata={'form': { 'field_name': 'trx' }})
    
