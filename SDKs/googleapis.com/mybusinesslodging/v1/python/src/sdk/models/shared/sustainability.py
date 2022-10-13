from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import energyefficiency
from . import sustainabilitycertifications
from . import sustainablesourcing
from . import wastereduction
from . import waterconservation


@dataclass_json
@dataclass
class Sustainability:
    energy_efficiency: Optional[energyefficiency.EnergyEfficiency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'energyEfficiency' }})
    sustainability_certifications: Optional[sustainabilitycertifications.SustainabilityCertifications] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sustainabilityCertifications' }})
    sustainable_sourcing: Optional[sustainablesourcing.SustainableSourcing] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sustainableSourcing' }})
    waste_reduction: Optional[wastereduction.WasteReduction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wasteReduction' }})
    water_conservation: Optional[waterconservation.WaterConservation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'waterConservation' }})
    
