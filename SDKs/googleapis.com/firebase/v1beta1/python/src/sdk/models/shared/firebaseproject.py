from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class FirebaseProjectStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    DELETED = "DELETED"


@dataclass_json
@dataclass
class FirebaseProject:
    r"""FirebaseProject
    A `FirebaseProject` is the top-level Firebase entity. It is the container for Firebase Apps, Firebase Hosting sites, storage systems (Firebase Realtime Database, Cloud Firestore, Cloud Storage buckets), and other Firebase and Google Cloud Platform (GCP) resources. You create a `FirebaseProject` by calling AddFirebase and specifying an *existing* [GCP `Project`](https://cloud.google.com/resource-manager/reference/rest/v1/projects). This adds Firebase resources to the existing GCP `Project`. Since a FirebaseProject is actually also a GCP `Project`, a `FirebaseProject` has the same underlying GCP identifiers (`projectNumber` and `projectId`). This allows for easy interop with Google APIs.
    """
    
    annotations: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    project_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectNumber') }})
    resources: Optional[DefaultResources] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    state: Optional[FirebaseProjectStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
