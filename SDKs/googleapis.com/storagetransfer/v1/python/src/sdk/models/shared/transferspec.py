from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awss3compatibledata
from . import awss3data
from . import azureblobstoragedata
from . import gcsdata
from . import gcsdata
from . import gcsdata
from . import httpdata
from . import objectconditions
from . import posixfilesystem
from . import posixfilesystem
from . import transfermanifest
from . import transferoptions


@dataclass_json
@dataclass
class TransferSpec:
    aws_s3_compatible_data_source: Optional[awss3compatibledata.AwsS3CompatibleData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsS3CompatibleDataSource' }})
    aws_s3_data_source: Optional[awss3data.AwsS3Data] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsS3DataSource' }})
    azure_blob_storage_data_source: Optional[azureblobstoragedata.AzureBlobStorageData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'azureBlobStorageDataSource' }})
    gcs_data_sink: Optional[gcsdata.GcsData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsDataSink' }})
    gcs_data_source: Optional[gcsdata.GcsData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsDataSource' }})
    gcs_intermediate_data_location: Optional[gcsdata.GcsData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsIntermediateDataLocation' }})
    http_data_source: Optional[httpdata.HTTPData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpDataSource' }})
    object_conditions: Optional[objectconditions.ObjectConditions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectConditions' }})
    posix_data_sink: Optional[posixfilesystem.PosixFilesystem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'posixDataSink' }})
    posix_data_source: Optional[posixfilesystem.PosixFilesystem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'posixDataSource' }})
    sink_agent_pool_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sinkAgentPoolName' }})
    source_agent_pool_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceAgentPoolName' }})
    transfer_manifest: Optional[transfermanifest.TransferManifest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transferManifest' }})
    transfer_options: Optional[transferoptions.TransferOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transferOptions' }})
    
