import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnergyEfficiency } from "./energyefficiency";
import { SustainabilityCertifications } from "./sustainabilitycertifications";
import { SustainableSourcing } from "./sustainablesourcing";
import { WasteReduction } from "./wastereduction";
import { WaterConservation } from "./waterconservation";
import { EnergyEfficiencyInput } from "./energyefficiency";



// Sustainability
/** 
 * Sustainability practices implemented at the hotel.
**/
export class Sustainability extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=energyEfficiency" })
  energyEfficiency?: EnergyEfficiency;

  @SpeakeasyMetadata({ data: "json, name=sustainabilityCertifications" })
  sustainabilityCertifications?: SustainabilityCertifications;

  @SpeakeasyMetadata({ data: "json, name=sustainableSourcing" })
  sustainableSourcing?: SustainableSourcing;

  @SpeakeasyMetadata({ data: "json, name=wasteReduction" })
  wasteReduction?: WasteReduction;

  @SpeakeasyMetadata({ data: "json, name=waterConservation" })
  waterConservation?: WaterConservation;
}


// SustainabilityInput
/** 
 * Sustainability practices implemented at the hotel.
**/
export class SustainabilityInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=energyEfficiency" })
  energyEfficiency?: EnergyEfficiencyInput;

  @SpeakeasyMetadata({ data: "json, name=sustainabilityCertifications" })
  sustainabilityCertifications?: SustainabilityCertifications;

  @SpeakeasyMetadata({ data: "json, name=sustainableSourcing" })
  sustainableSourcing?: SustainableSourcing;

  @SpeakeasyMetadata({ data: "json, name=wasteReduction" })
  wasteReduction?: WasteReduction;

  @SpeakeasyMetadata({ data: "json, name=waterConservation" })
  waterConservation?: WaterConservation;
}
