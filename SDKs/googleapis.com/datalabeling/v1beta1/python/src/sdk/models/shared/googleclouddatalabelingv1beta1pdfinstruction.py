from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1PdfInstruction:
    r"""GoogleCloudDatalabelingV1beta1PdfInstruction
    Instruction from a PDF file.
    """
    
    gcs_file_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsFileUri') }})
    
