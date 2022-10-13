from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1entitytypebatch


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest:
    entity_type_batch_inline: Optional[googleclouddialogflowv2beta1entitytypebatch.GoogleCloudDialogflowV2beta1EntityTypeBatch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityTypeBatchInline' }})
    entity_type_batch_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityTypeBatchUri' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    
