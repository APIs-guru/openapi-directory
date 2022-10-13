from dataclasses import dataclass, field



@dataclass
class TopupRequest:
    trx: str = field(default=None, metadata={'form': { 'field_name': 'trx' }})
    
