import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=enhancedCleaning" })
  enhancedCleaning?: EnhancedCleaning;

  @SpeakeasyMetadata({ data: "json, name=increasedFoodSafety" })
  increasedFoodSafety?: IncreasedFoodSafety;

  @SpeakeasyMetadata({ data: "json, name=minimizedContact" })
  minimizedContact?: MinimizedContact;

  @SpeakeasyMetadata({ data: "json, name=personalProtection" })
  personalProtection?: PersonalProtection;

  @SpeakeasyMetadata({ data: "json, name=physicalDistancing" })
  physicalDistancing?: PhysicalDistancing;
}
