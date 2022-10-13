from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import allowedconfiglist
from . import issuancemodes
from . import subject
from . import allowedsubjectaltnames
from . import reusableconfigwrapper


@dataclass_json
@dataclass
class CertificateAuthorityPolicy:
    allowed_common_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedCommonNames' }})
    allowed_config_list: Optional[allowedconfiglist.AllowedConfigList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedConfigList' }})
    allowed_issuance_modes: Optional[issuancemodes.IssuanceModes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedIssuanceModes' }})
    allowed_locations_and_organizations: Optional[List[subject.Subject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedLocationsAndOrganizations' }})
    allowed_sans: Optional[allowedsubjectaltnames.AllowedSubjectAltNames] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedSans' }})
    maximum_lifetime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumLifetime' }})
    overwrite_config_values: Optional[reusableconfigwrapper.ReusableConfigWrapper] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overwriteConfigValues' }})
    
