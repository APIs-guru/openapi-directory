from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1processortype


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1FetchProcessorTypesResponse:
    processor_types: Optional[List[googleclouddocumentaiv1processortype.GoogleCloudDocumentaiV1ProcessorType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processorTypes' }})
    
