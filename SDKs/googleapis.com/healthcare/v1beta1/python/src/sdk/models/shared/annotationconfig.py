from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AnnotationConfig:
    r"""AnnotationConfig
    Specifies how to store annotations during de-identification operation.
    """
    
    annotation_store_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationStoreName') }})
    store_quote: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storeQuote') }})
    
