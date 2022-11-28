import { SpeakeasyBase } from "../../../internal/utils";
import { EnergyEfficiency } from "./energyefficiency";
import { SustainabilityCertifications } from "./sustainabilitycertifications";
import { SustainableSourcing } from "./sustainablesourcing";
import { WasteReduction } from "./wastereduction";
import { WaterConservation } from "./waterconservation";
import { EnergyEfficiencyInput } from "./energyefficiency";
/**
 * Sustainability practices implemented at the hotel.
**/
export declare class Sustainability extends SpeakeasyBase {
    energyEfficiency?: EnergyEfficiency;
    sustainabilityCertifications?: SustainabilityCertifications;
    sustainableSourcing?: SustainableSourcing;
    wasteReduction?: WasteReduction;
    waterConservation?: WaterConservation;
}
/**
 * Sustainability practices implemented at the hotel.
**/
export declare class SustainabilityInput extends SpeakeasyBase {
    energyEfficiency?: EnergyEfficiencyInput;
    sustainabilityCertifications?: SustainabilityCertifications;
    sustainableSourcing?: SustainableSourcing;
    wasteReduction?: WasteReduction;
    waterConservation?: WaterConservation;
}
