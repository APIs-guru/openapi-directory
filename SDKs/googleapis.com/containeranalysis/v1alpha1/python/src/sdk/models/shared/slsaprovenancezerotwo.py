from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import googledevtoolscontaineranalysisv1alpha1slsaprovenancezerotwoslsabuilder
from . import googledevtoolscontaineranalysisv1alpha1slsaprovenancezerotwoslsainvocation
from . import googledevtoolscontaineranalysisv1alpha1slsaprovenancezerotwoslsamaterial
from . import googledevtoolscontaineranalysisv1alpha1slsaprovenancezerotwoslsametadata


@dataclass_json
@dataclass
class SlsaProvenanceZeroTwo:
    build_config: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildConfig' }})
    build_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildType' }})
    builder: Optional[googledevtoolscontaineranalysisv1alpha1slsaprovenancezerotwoslsabuilder.GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaBuilder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'builder' }})
    invocation: Optional[googledevtoolscontaineranalysisv1alpha1slsaprovenancezerotwoslsainvocation.GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaInvocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invocation' }})
    materials: Optional[List[googledevtoolscontaineranalysisv1alpha1slsaprovenancezerotwoslsamaterial.GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMaterial]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'materials' }})
    metadata: Optional[googledevtoolscontaineranalysisv1alpha1slsaprovenancezerotwoslsametadata.GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    
