from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3fulfillmentconditionalcasescasecasecontent


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase:
    case_content: Optional[List[googleclouddialogflowcxv3fulfillmentconditionalcasescasecasecontent.GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caseContent' }})
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    
