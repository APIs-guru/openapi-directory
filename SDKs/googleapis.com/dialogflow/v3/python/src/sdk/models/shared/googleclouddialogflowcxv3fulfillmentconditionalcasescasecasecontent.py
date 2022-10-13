from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3fulfillmentconditionalcases
from . import googleclouddialogflowcxv3responsemessage


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent:
    additional_cases: Optional[googleclouddialogflowcxv3fulfillmentconditionalcases.GoogleCloudDialogflowCxV3FulfillmentConditionalCases] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalCases' }})
    message: Optional[googleclouddialogflowcxv3responsemessage.GoogleCloudDialogflowCxV3ResponseMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    
