from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3fulfillmentconditionalcasescase


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3FulfillmentConditionalCases:
    cases: Optional[List[googleclouddialogflowcxv3fulfillmentconditionalcasescase.GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cases' }})
    
