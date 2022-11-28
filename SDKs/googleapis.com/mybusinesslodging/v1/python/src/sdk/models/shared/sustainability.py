from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Sustainability:
    r"""Sustainability
    Sustainability practices implemented at the hotel.
    """
    
    energy_efficiency: Optional[EnergyEfficiency] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('energyEfficiency') }})
    sustainability_certifications: Optional[SustainabilityCertifications] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sustainabilityCertifications') }})
    sustainable_sourcing: Optional[SustainableSourcing] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sustainableSourcing') }})
    waste_reduction: Optional[WasteReduction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wasteReduction') }})
    water_conservation: Optional[WaterConservation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waterConservation') }})
    

@dataclass_json
@dataclass
class SustainabilityInput:
    r"""SustainabilityInput
    Sustainability practices implemented at the hotel.
    """
    
    energy_efficiency: Optional[EnergyEfficiencyInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('energyEfficiency') }})
    sustainability_certifications: Optional[SustainabilityCertifications] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sustainabilityCertifications') }})
    sustainable_sourcing: Optional[SustainableSourcing] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sustainableSourcing') }})
    waste_reduction: Optional[WasteReduction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wasteReduction') }})
    water_conservation: Optional[WaterConservation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waterConservation') }})
    
