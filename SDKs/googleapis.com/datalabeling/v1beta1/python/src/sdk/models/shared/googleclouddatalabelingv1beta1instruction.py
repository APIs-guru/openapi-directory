from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum(str, Enum):
    DATA_TYPE_UNSPECIFIED = "DATA_TYPE_UNSPECIFIED"
    IMAGE = "IMAGE"
    VIDEO = "VIDEO"
    TEXT = "TEXT"
    GENERAL_DATA = "GENERAL_DATA"


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1Instruction:
    r"""GoogleCloudDatalabelingV1beta1Instruction
    Instruction of how to perform the labeling task for human operators. Currently only PDF instruction is supported.
    """
    
    blocking_resources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockingResources') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    csv_instruction: Optional[GoogleCloudDatalabelingV1beta1CsvInstruction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('csvInstruction') }})
    data_type: Optional[GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataType') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pdf_instruction: Optional[GoogleCloudDatalabelingV1beta1PdfInstruction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pdfInstruction') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
