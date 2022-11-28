from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CertificateProviderInstance:
    r"""CertificateProviderInstance
    Specification of a TLS certificate provider instance. Workloads may have one or more CertificateProvider instances (plugins) and one of them is enabled and configured by specifying this message. Workloads use the values from this message to locate and load the CertificateProvider instance configuration.
    """
    
    plugin_instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pluginInstance') }})
    
