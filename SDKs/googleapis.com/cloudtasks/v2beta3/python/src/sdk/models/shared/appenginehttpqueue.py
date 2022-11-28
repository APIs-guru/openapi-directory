from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AppEngineHTTPQueue:
    r"""AppEngineHTTPQueue
    App Engine HTTP queue. The task will be delivered to the App Engine application hostname specified by its AppEngineHttpQueue and AppEngineHttpRequest. The documentation for AppEngineHttpRequest explains how the task's host URL is constructed. Using AppEngineHttpQueue requires [`appengine.applications.get`](https://cloud.google.com/appengine/docs/admin-api/access-control) Google IAM permission for the project and the following scope: `https://www.googleapis.com/auth/cloud-platform`
    """
    
    app_engine_routing_override: Optional[AppEngineRouting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appEngineRoutingOverride') }})
    
