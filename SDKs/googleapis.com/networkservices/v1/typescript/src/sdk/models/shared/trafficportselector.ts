import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrafficPortSelector
/** 
 * Specification of a port-based selector.
**/
export class TrafficPortSelector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ports" })
  ports?: string[];
}
