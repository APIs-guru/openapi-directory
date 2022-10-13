from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import screenshotcluster


@dataclass_json
@dataclass
class ListScreenshotClustersResponse:
    clusters: Optional[List[screenshotcluster.ScreenshotCluster]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusters' }})
    
