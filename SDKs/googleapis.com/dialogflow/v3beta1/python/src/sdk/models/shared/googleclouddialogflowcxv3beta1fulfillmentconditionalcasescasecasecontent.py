from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1fulfillmentconditionalcases
from . import googleclouddialogflowcxv3beta1responsemessage


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent:
    additional_cases: Optional[googleclouddialogflowcxv3beta1fulfillmentconditionalcases.GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalCases' }})
    message: Optional[googleclouddialogflowcxv3beta1responsemessage.GoogleCloudDialogflowCxV3beta1ResponseMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    
