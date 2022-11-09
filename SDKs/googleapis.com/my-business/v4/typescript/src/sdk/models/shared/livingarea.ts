import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=accessibility" })
  accessibility?: LivingAreaAccessibility;

  @Metadata({ data: "json, name=eating" })
  eating?: LivingAreaEating;

  @Metadata({ data: "json, name=features" })
  features?: LivingAreaFeatures;

  @Metadata({ data: "json, name=layout" })
  layout?: LivingAreaLayout;

  @Metadata({ data: "json, name=sleeping" })
  sleeping?: LivingAreaSleeping;
}
