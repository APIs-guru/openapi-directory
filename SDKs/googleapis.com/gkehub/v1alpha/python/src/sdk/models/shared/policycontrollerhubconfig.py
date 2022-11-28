from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PolicyControllerHubConfigInstallSpecEnum(str, Enum):
    INSTALL_SPEC_UNSPECIFIED = "INSTALL_SPEC_UNSPECIFIED"
    INSTALL_SPEC_NOT_INSTALLED = "INSTALL_SPEC_NOT_INSTALLED"
    INSTALL_SPEC_ENABLED = "INSTALL_SPEC_ENABLED"
    INSTALL_SPEC_SUSPENDED = "INSTALL_SPEC_SUSPENDED"


@dataclass_json
@dataclass
class PolicyControllerHubConfig:
    r"""PolicyControllerHubConfig
    Configuration for Policy Controller
    """
    
    audit_interval_seconds: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auditIntervalSeconds') }})
    exemptable_namespaces: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exemptableNamespaces') }})
    install_spec: Optional[PolicyControllerHubConfigInstallSpecEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installSpec') }})
    log_denies_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logDeniesEnabled') }})
    monitoring: Optional[PolicyControllerMonitoringConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitoring') }})
    mutation_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mutationEnabled') }})
    referential_rules_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referentialRulesEnabled') }})
    template_library_config: Optional[PolicyControllerTemplateLibraryConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateLibraryConfig') }})
    
