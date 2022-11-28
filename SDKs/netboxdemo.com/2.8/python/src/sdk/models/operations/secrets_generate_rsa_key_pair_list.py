from dataclasses import dataclass, field



@dataclass
class SecretsGenerateRsaKeyPairListResponse:
    content_type: str = field()
    status_code: int = field()
    
