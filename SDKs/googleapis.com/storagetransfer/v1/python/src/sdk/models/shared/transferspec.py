from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TransferSpec:
    r"""TransferSpec
    Configuration for running a transfer.
    """
    
    aws_s3_compatible_data_source: Optional[AwsS3CompatibleData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsS3CompatibleDataSource') }})
    aws_s3_data_source: Optional[AwsS3Data] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsS3DataSource') }})
    azure_blob_storage_data_source: Optional[AzureBlobStorageData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('azureBlobStorageDataSource') }})
    gcs_data_sink: Optional[GcsData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsDataSink') }})
    gcs_data_source: Optional[GcsData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsDataSource') }})
    gcs_intermediate_data_location: Optional[GcsData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsIntermediateDataLocation') }})
    http_data_source: Optional[HTTPData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpDataSource') }})
    object_conditions: Optional[ObjectConditions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectConditions') }})
    posix_data_sink: Optional[PosixFilesystem] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('posixDataSink') }})
    posix_data_source: Optional[PosixFilesystem] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('posixDataSource') }})
    sink_agent_pool_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sinkAgentPoolName') }})
    source_agent_pool_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceAgentPoolName') }})
    transfer_manifest: Optional[TransferManifest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferManifest') }})
    transfer_options: Optional[TransferOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferOptions') }})
    
