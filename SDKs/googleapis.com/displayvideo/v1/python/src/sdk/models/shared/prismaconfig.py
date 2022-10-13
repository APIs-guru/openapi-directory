from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import prismacpecode

class PrismaConfigPrismaTypeEnum(str, Enum):
    PRISMA_TYPE_UNSPECIFIED = "PRISMA_TYPE_UNSPECIFIED"
    PRISMA_TYPE_DISPLAY = "PRISMA_TYPE_DISPLAY"
    PRISMA_TYPE_SEARCH = "PRISMA_TYPE_SEARCH"
    PRISMA_TYPE_VIDEO = "PRISMA_TYPE_VIDEO"
    PRISMA_TYPE_AUDIO = "PRISMA_TYPE_AUDIO"
    PRISMA_TYPE_SOCIAL = "PRISMA_TYPE_SOCIAL"
    PRISMA_TYPE_FEE = "PRISMA_TYPE_FEE"


@dataclass_json
@dataclass
class PrismaConfig:
    prisma_cpe_code: Optional[prismacpecode.PrismaCpeCode] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prismaCpeCode' }})
    prisma_type: Optional[PrismaConfigPrismaTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prismaType' }})
    supplier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supplier' }})
    
