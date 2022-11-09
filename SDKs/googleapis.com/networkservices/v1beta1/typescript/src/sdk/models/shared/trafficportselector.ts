import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TrafficPortSelector
/** 
 * Specification of a port-based selector.
**/
export class TrafficPortSelector extends SpeakeasyBase {
  @Metadata({ data: "json, name=ports" })
  ports?: string[];
}
