from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1HumanAgentHandoffConfigSalesforceLiveAgentConfig:
    button_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buttonId' }})
    deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentId' }})
    endpoint_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpointDomain' }})
    organization_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizationId' }})
    
