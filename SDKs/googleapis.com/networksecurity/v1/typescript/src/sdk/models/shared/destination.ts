import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HttpHeaderMatch } from "./httpheadermatch";



// Destination
/** 
 * Specification of traffic destination attributes.
**/
export class Destination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hosts" })
  hosts?: string[];

  @SpeakeasyMetadata({ data: "json, name=httpHeaderMatch" })
  httpHeaderMatch?: HttpHeaderMatch;

  @SpeakeasyMetadata({ data: "json, name=methods" })
  methods?: string[];

  @SpeakeasyMetadata({ data: "json, name=ports" })
  ports?: number[];
}
