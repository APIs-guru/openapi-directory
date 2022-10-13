from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class SoftwareConfigOptionalComponentsEnum(str, Enum):
    COMPONENT_UNSPECIFIED = "COMPONENT_UNSPECIFIED"
    ANACONDA = "ANACONDA"
    DOCKER = "DOCKER"
    DRUID = "DRUID"
    FLINK = "FLINK"
    HBASE = "HBASE"
    HIVE_WEBHCAT = "HIVE_WEBHCAT"
    JUPYTER = "JUPYTER"
    PRESTO = "PRESTO"
    RANGER = "RANGER"
    SOLR = "SOLR"
    ZEPPELIN = "ZEPPELIN"
    ZOOKEEPER = "ZOOKEEPER"


@dataclass_json
@dataclass
class SoftwareConfig:
    image_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageVersion' }})
    optional_components: Optional[List[SoftwareConfigOptionalComponentsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'optionalComponents' }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    
