from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1fulfillmentconditionalcasescase


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases:
    cases: Optional[List[googleclouddialogflowcxv3beta1fulfillmentconditionalcasescase.GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cases' }})
    
