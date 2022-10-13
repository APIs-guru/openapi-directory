from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import algorithm
from . import configuration
from . import costmatrix
from . import objective
from . import jobrelation
from . import grouprelation
from . import service
from . import shipment
from . import vehicletype
from . import vehicle


@dataclass_json
@dataclass
class Request:
    algorithm: Optional[algorithm.Algorithm] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algorithm' }})
    configuration: Optional[configuration.Configuration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configuration' }})
    cost_matrices: Optional[List[costmatrix.CostMatrix]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cost_matrices' }})
    objectives: Optional[List[objective.Objective]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectives' }})
    relations: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relations' }})
    services: Optional[List[service.Service]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'services' }})
    shipments: Optional[List[shipment.Shipment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipments' }})
    vehicle_types: Optional[List[vehicletype.VehicleType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vehicle_types' }})
    vehicles: Optional[List[vehicle.Vehicle]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vehicles' }})
    
