import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DomainCalls
/** 
 * The number of HTTP calls made to the given domain.
**/
export class DomainCalls extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=httpCallCount" })
  httpCallCount?: number;
}
