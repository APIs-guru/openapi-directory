import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainCalls } from "./domaincalls";



// DomainCallEvidence
/** 
 * Number of HTTP calls made by a creative, broken down by domain.
**/
export class DomainCallEvidence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=topHttpCallDomains", elemType: DomainCalls })
  topHttpCallDomains?: DomainCalls[];

  @SpeakeasyMetadata({ data: "json, name=totalHttpCallCount" })
  totalHttpCallCount?: number;
}
