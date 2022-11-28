import { SpeakeasyBase } from "../../../internal/utils";
import { LivingAreaAccessibility } from "./livingareaaccessibility";
import { LivingAreaEating } from "./livingareaeating";
import { LivingAreaFeatures } from "./livingareafeatures";
import { LivingAreaLayout } from "./livingarealayout";
import { LivingAreaSleeping } from "./livingareasleeping";
/**
 * An individual room, such as kitchen, bathroom, bedroom, within a bookable guest unit.
**/
export declare class LivingArea extends SpeakeasyBase {
    accessibility?: LivingAreaAccessibility;
    eating?: LivingAreaEating;
    features?: LivingAreaFeatures;
    layout?: LivingAreaLayout;
    sleeping?: LivingAreaSleeping;
}
