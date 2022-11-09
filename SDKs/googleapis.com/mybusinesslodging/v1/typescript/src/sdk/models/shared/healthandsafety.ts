import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnhancedCleaning } from "./enhancedcleaning";
import { IncreasedFoodSafety } from "./increasedfoodsafety";
import { MinimizedContact } from "./minimizedcontact";
import { PersonalProtection } from "./personalprotection";
import { PhysicalDistancing } from "./physicaldistancing";


// HealthAndSafety
/** 
 * Health and safety measures implemented by the hotel during COVID-19.
**/
export class HealthAndSafety extends SpeakeasyBase {
  @Metadata({ data: "json, name=enhancedCleaning" })
  enhancedCleaning?: EnhancedCleaning;

  @Metadata({ data: "json, name=increasedFoodSafety" })
  increasedFoodSafety?: IncreasedFoodSafety;

  @Metadata({ data: "json, name=minimizedContact" })
  minimizedContact?: MinimizedContact;

  @Metadata({ data: "json, name=personalProtection" })
  personalProtection?: PersonalProtection;

  @Metadata({ data: "json, name=physicalDistancing" })
  physicalDistancing?: PhysicalDistancing;
}
