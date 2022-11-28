import { SpeakeasyBase } from "../../../internal/utils";
import { EnhancedCleaning } from "./enhancedcleaning";
import { IncreasedFoodSafety } from "./increasedfoodsafety";
import { MinimizedContact } from "./minimizedcontact";
import { PersonalProtection } from "./personalprotection";
import { PhysicalDistancing } from "./physicaldistancing";
/**
 * Health and safety measures implemented by the hotel during COVID-19.
**/
export declare class HealthAndSafety extends SpeakeasyBase {
    enhancedCleaning?: EnhancedCleaning;
    increasedFoodSafety?: IncreasedFoodSafety;
    minimizedContact?: MinimizedContact;
    personalProtection?: PersonalProtection;
    physicalDistancing?: PhysicalDistancing;
}
