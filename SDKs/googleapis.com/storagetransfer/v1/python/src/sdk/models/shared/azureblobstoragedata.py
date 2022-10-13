from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import azurecredentials


@dataclass_json
@dataclass
class AzureBlobStorageData:
    azure_credentials: Optional[azurecredentials.AzureCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'azureCredentials' }})
    container: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'container' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    storage_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageAccount' }})
    
