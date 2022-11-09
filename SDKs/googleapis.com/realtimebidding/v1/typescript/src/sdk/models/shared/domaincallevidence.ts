import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DomainCalls } from "./domaincalls";


// DomainCallEvidence
/** 
 * Number of HTTP calls made by a creative, broken down by domain.
**/
export class DomainCallEvidence extends SpeakeasyBase {
  @Metadata({ data: "json, name=topHttpCallDomains", elemType: shared.DomainCalls })
  topHttpCallDomains?: DomainCalls[];

  @Metadata({ data: "json, name=totalHttpCallCount" })
  totalHttpCallCount?: number;
}
