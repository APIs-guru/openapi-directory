import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Stage } from "./stage";



// SerialPipeline
/** 
 * SerialPipeline defines a sequential set of stages for a `DeliveryPipeline`.
**/
export class SerialPipeline extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=stages", elemType: Stage })
  stages?: Stage[];
}
