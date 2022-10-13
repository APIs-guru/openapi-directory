from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1csvinstruction
from . import googleclouddatalabelingv1beta1pdfinstruction

class GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum(str, Enum):
    DATA_TYPE_UNSPECIFIED = "DATA_TYPE_UNSPECIFIED"
    IMAGE = "IMAGE"
    VIDEO = "VIDEO"
    TEXT = "TEXT"
    GENERAL_DATA = "GENERAL_DATA"


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1Instruction:
    blocking_resources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockingResources' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    csv_instruction: Optional[googleclouddatalabelingv1beta1csvinstruction.GoogleCloudDatalabelingV1beta1CsvInstruction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'csvInstruction' }})
    data_type: Optional[GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataType' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pdf_instruction: Optional[googleclouddatalabelingv1beta1pdfinstruction.GoogleCloudDatalabelingV1beta1PdfInstruction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pdfInstruction' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
