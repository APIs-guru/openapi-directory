from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDataplexV1LakeStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    CREATING = "CREATING"
    DELETING = "DELETING"
    ACTION_REQUIRED = "ACTION_REQUIRED"


@dataclass_json
@dataclass
class GoogleCloudDataplexV1LakeInput:
    r"""GoogleCloudDataplexV1LakeInput
    A lake is a centralized repository for managing enterprise data across the organization distributed across many cloud projects, and stored in a variety of storage services such as Google Cloud Storage and BigQuery. The resources attached to a lake are referred to as managed resources. Data within these managed resources can be structured or unstructured. A lake provides data admins with tools to organize, secure and manage their data at scale, and provides data scientists and data engineers an integrated experience to easily search, discover, analyze and transform data and associated metadata.
    """
    
    asset_status: Optional[GoogleCloudDataplexV1AssetStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetStatus') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    metastore: Optional[GoogleCloudDataplexV1LakeMetastore] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metastore') }})
    metastore_status: Optional[GoogleCloudDataplexV1LakeMetastoreStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metastoreStatus') }})
    

@dataclass_json
@dataclass
class GoogleCloudDataplexV1Lake:
    r"""GoogleCloudDataplexV1Lake
    A lake is a centralized repository for managing enterprise data across the organization distributed across many cloud projects, and stored in a variety of storage services such as Google Cloud Storage and BigQuery. The resources attached to a lake are referred to as managed resources. Data within these managed resources can be structured or unstructured. A lake provides data admins with tools to organize, secure and manage their data at scale, and provides data scientists and data engineers an integrated experience to easily search, discover, analyze and transform data and associated metadata.
    """
    
    asset_status: Optional[GoogleCloudDataplexV1AssetStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetStatus') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    metastore: Optional[GoogleCloudDataplexV1LakeMetastore] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metastore') }})
    metastore_status: Optional[GoogleCloudDataplexV1LakeMetastoreStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metastoreStatus') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    state: Optional[GoogleCloudDataplexV1LakeStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
