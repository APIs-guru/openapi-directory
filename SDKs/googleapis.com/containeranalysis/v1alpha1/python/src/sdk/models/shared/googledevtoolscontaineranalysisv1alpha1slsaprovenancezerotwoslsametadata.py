from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googledevtoolscontaineranalysisv1alpha1slsaprovenancezerotwoslsacompleteness


@dataclass_json
@dataclass
class GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMetadata:
    build_finished_on: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildFinishedOn' }})
    build_invocation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildInvocationId' }})
    build_started_on: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildStartedOn' }})
    completeness: Optional[googledevtoolscontaineranalysisv1alpha1slsaprovenancezerotwoslsacompleteness.GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaCompleteness] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completeness' }})
    reproducible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reproducible' }})
    
