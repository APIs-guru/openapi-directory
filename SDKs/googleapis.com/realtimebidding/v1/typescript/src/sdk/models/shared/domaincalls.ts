import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DomainCalls
/** 
 * The number of HTTP calls made to the given domain.
**/
export class DomainCalls extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=httpCallCount" })
  httpCallCount?: number;
}
