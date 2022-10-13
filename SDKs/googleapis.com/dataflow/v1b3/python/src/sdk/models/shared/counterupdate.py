from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import distributionupdate
from . import floatingpointlist
from . import floatingpointmean
from . import splitint64
from . import integergauge
from . import integerlist
from . import integermean
from . import nameandkind
from . import stringlist
from . import counterstructurednameandmetadata


@dataclass_json
@dataclass
class CounterUpdate:
    boolean: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boolean' }})
    cumulative: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cumulative' }})
    distribution: Optional[distributionupdate.DistributionUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distribution' }})
    floating_point: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floatingPoint' }})
    floating_point_list: Optional[floatingpointlist.FloatingPointList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floatingPointList' }})
    floating_point_mean: Optional[floatingpointmean.FloatingPointMean] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floatingPointMean' }})
    integer: Optional[splitint64.SplitInt64] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integer' }})
    integer_gauge: Optional[integergauge.IntegerGauge] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integerGauge' }})
    integer_list: Optional[integerlist.IntegerList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integerList' }})
    integer_mean: Optional[integermean.IntegerMean] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integerMean' }})
    internal: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'internal' }})
    name_and_kind: Optional[nameandkind.NameAndKind] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nameAndKind' }})
    short_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shortId' }})
    string_list: Optional[stringlist.StringList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringList' }})
    structured_name_and_metadata: Optional[counterstructurednameandmetadata.CounterStructuredNameAndMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'structuredNameAndMetadata' }})
    
