import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BillingDestination
/** 
 * Configuration of a specific billing destination (Currently only support bill against consumer project).
**/
export class BillingDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=metrics" })
  metrics?: string[];

  @Metadata({ data: "json, name=monitoredResource" })
  monitoredResource?: string;
}
