import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SchedulingConfig
/** 
 * Sets the scheduling options for this node.
**/
export class SchedulingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=preemptible" })
  preemptible?: boolean;

  @SpeakeasyMetadata({ data: "json, name=reserved" })
  reserved?: boolean;
}
