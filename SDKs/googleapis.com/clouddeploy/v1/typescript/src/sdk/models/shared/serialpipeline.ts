import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Stage } from "./stage";


// SerialPipeline
/** 
 * SerialPipeline defines a sequential set of stages for a `DeliveryPipeline`.
**/
export class SerialPipeline extends SpeakeasyBase {
  @Metadata({ data: "json, name=stages", elemType: shared.Stage })
  stages?: Stage[];
}
