from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PrismaCpeCode:
    prisma_client_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prismaClientCode' }})
    prisma_estimate_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prismaEstimateCode' }})
    prisma_product_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prismaProductCode' }})
    
