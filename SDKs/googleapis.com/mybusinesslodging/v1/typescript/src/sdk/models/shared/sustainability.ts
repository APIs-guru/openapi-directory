import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnergyEfficiency } from "./energyefficiency";
import { SustainabilityCertifications } from "./sustainabilitycertifications";
import { SustainableSourcing } from "./sustainablesourcing";
import { WasteReduction } from "./wastereduction";
import { WaterConservation } from "./waterconservation";


// Sustainability
/** 
 * Sustainability practices implemented at the hotel.
**/
export class Sustainability extends SpeakeasyBase {
  @Metadata({ data: "json, name=energyEfficiency" })
  energyEfficiency?: EnergyEfficiency;

  @Metadata({ data: "json, name=sustainabilityCertifications" })
  sustainabilityCertifications?: SustainabilityCertifications;

  @Metadata({ data: "json, name=sustainableSourcing" })
  sustainableSourcing?: SustainableSourcing;

  @Metadata({ data: "json, name=wasteReduction" })
  wasteReduction?: WasteReduction;

  @Metadata({ data: "json, name=waterConservation" })
  waterConservation?: WaterConservation;
}
