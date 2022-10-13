from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta3processortype


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3FetchProcessorTypesResponse:
    processor_types: Optional[List[googleclouddocumentaiv1beta3processortype.GoogleCloudDocumentaiV1beta3ProcessorType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processorTypes' }})
    
