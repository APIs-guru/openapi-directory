import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SchedulingConfig
/** 
 * Sets the scheduling options for this node.
**/
export class SchedulingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=preemptible" })
  preemptible?: boolean;

  @Metadata({ data: "json, name=reserved" })
  reserved?: boolean;
}
