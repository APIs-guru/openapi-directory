import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LivingAreaAccessibility } from "./livingareaaccessibility";
import { LivingAreaEating } from "./livingareaeating";
import { LivingAreaFeatures } from "./livingareafeatures";
import { LivingAreaLayout } from "./livingarealayout";
import { LivingAreaSleeping } from "./livingareasleeping";



// LivingArea
/** 
 * An individual room, such as kitchen, bathroom, bedroom, within a bookable guest unit.
**/
export class LivingArea extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessibility" })
  accessibility?: LivingAreaAccessibility;

  @SpeakeasyMetadata({ data: "json, name=eating" })
  eating?: LivingAreaEating;

  @SpeakeasyMetadata({ data: "json, name=features" })
  features?: LivingAreaFeatures;

  @SpeakeasyMetadata({ data: "json, name=layout" })
  layout?: LivingAreaLayout;

  @SpeakeasyMetadata({ data: "json, name=sleeping" })
  sleeping?: LivingAreaSleeping;
}
