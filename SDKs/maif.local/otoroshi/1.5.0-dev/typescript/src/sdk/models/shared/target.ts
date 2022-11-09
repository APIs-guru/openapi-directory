import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Target
/** 
 * A Target is where an HTTP call will be forwarded in the end from a service domain
**/
export class Target extends SpeakeasyBase {
  @Metadata({ data: "json, name=host" })
  host: string;

  @Metadata({ data: "json, name=scheme" })
  scheme: string;
}
