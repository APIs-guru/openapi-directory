import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BillingDestination
/** 
 * Configuration of a specific billing destination (Currently only support bill against consumer project).
**/
export class BillingDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics?: string[];

  @SpeakeasyMetadata({ data: "json, name=monitoredResource" })
  monitoredResource?: string;
}
