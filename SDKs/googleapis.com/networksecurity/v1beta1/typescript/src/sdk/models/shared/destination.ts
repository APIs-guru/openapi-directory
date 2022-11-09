import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HttpHeaderMatch } from "./httpheadermatch";


// Destination
/** 
 * Specification of traffic destination attributes.
**/
export class Destination extends SpeakeasyBase {
  @Metadata({ data: "json, name=hosts" })
  hosts?: string[];

  @Metadata({ data: "json, name=httpHeaderMatch" })
  httpHeaderMatch?: HttpHeaderMatch;

  @Metadata({ data: "json, name=methods" })
  methods?: string[];

  @Metadata({ data: "json, name=ports" })
  ports?: number[];
}
