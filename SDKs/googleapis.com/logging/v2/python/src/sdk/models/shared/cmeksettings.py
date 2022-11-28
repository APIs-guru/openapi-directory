from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CmekSettingsInput:
    r"""CmekSettingsInput
    Describes the customer-managed encryption key (CMEK) settings associated with a project, folder, organization, billing account, or flexible resource.Note: CMEK for the Log Router can currently only be configured for Google Cloud organizations. Once configured, it applies to all projects and folders in the Google Cloud organization.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.
    """
    
    kms_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyName') }})
    kms_key_version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyVersionName') }})
    

@dataclass_json
@dataclass
class CmekSettings:
    r"""CmekSettings
    Describes the customer-managed encryption key (CMEK) settings associated with a project, folder, organization, billing account, or flexible resource.Note: CMEK for the Log Router can currently only be configured for Google Cloud organizations. Once configured, it applies to all projects and folders in the Google Cloud organization.See Enabling CMEK for Log Router (https://cloud.google.com/logging/docs/routing/managed-encryption) for more information.
    """
    
    kms_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyName') }})
    kms_key_version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyVersionName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    service_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountId') }})
    
