import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Target
/** 
 * A Target is where an HTTP call will be forwarded in the end from a service domain
**/
export class Target extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=host" })
  host: string;

  @SpeakeasyMetadata({ data: "json, name=scheme" })
  scheme: string;
}
