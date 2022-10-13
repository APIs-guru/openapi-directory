from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import configmanagementpolicycontrollermonitoring


@dataclass_json
@dataclass
class ConfigManagementPolicyController:
    audit_interval_seconds: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auditIntervalSeconds' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    exemptable_namespaces: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exemptableNamespaces' }})
    log_denies_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logDeniesEnabled' }})
    monitoring: Optional[configmanagementpolicycontrollermonitoring.ConfigManagementPolicyControllerMonitoring] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monitoring' }})
    mutation_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mutationEnabled' }})
    referential_rules_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referentialRulesEnabled' }})
    template_library_installed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateLibraryInstalled' }})
    
