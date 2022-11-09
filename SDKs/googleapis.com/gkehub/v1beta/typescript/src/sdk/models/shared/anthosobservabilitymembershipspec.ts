import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AnthosObservabilityMembershipSpec
/** 
 * **Anthosobservability**: Per-Membership Feature spec.
**/
export class AnthosObservabilityMembershipSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=doNotOptimizeMetrics" })
  doNotOptimizeMetrics?: boolean;

  @Metadata({ data: "json, name=enableStackdriverOnApplications" })
  enableStackdriverOnApplications?: boolean;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
