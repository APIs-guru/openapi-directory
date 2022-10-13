from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1fulfillmentconditionalcasescasecasecontent


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase:
    case_content: Optional[List[googleclouddialogflowcxv3beta1fulfillmentconditionalcasescasecasecontent.GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caseContent' }})
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    
