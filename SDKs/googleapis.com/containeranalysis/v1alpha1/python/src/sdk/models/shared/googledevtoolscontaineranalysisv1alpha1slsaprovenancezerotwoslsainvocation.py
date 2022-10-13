from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import googledevtoolscontaineranalysisv1alpha1slsaprovenancezerotwoslsaconfigsource


@dataclass_json
@dataclass
class GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaInvocation:
    config_source: Optional[googledevtoolscontaineranalysisv1alpha1slsaprovenancezerotwoslsaconfigsource.GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaConfigSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configSource' }})
    environment: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    
