from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""PrismaConfig
    Settings specific to the Mediaocean Prisma tool.
    """
    
    prisma_cpe_code: Optional[PrismaCpeCode] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prismaCpeCode') }})
    prisma_type: Optional[PrismaConfigPrismaTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prismaType') }})
    supplier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supplier') }})
    
